export type ParticleTarget = { x: number; y: number };

export function drawTrackedText(
  ctx: CanvasRenderingContext2D,
  text: string,
  boxWidth: number,
  boxHeight: number,
  fontSize: number,
  letterSpacingRatio: number
) {
  ctx.font = `800 ${fontSize}px Geist, Inter, system-ui, sans-serif`;
  ctx.textBaseline = "middle";

  const spacing = fontSize * letterSpacingRatio;
  const widths = [...text].map((char) => ctx.measureText(char).width);
  const totalWidth =
    widths.reduce((sum, width) => sum + width, 0) + spacing * (text.length - 1);

  let x = (boxWidth - totalWidth) / 2;
  const y = boxHeight / 2;

  for (const char of text) {
    ctx.fillText(char, x, y);
    x += ctx.measureText(char).width + spacing;
  }
}

export function sampleTextParticleTargets(
  text: string,
  options: {
    width: number;
    height: number;
    fontSize: number;
    step?: number;
    maxPoints?: number;
    letterSpacingRatio?: number;
  }
): ParticleTarget[] {
  const canvas = document.createElement("canvas");
  canvas.width = options.width;
  canvas.height = options.height;
  const ctx = canvas.getContext("2d");

  if (!ctx) return [];

  ctx.fillStyle = "#000";
  drawTrackedText(
    ctx,
    text,
    options.width,
    options.height,
    options.fontSize,
    options.letterSpacingRatio ?? 0.22
  );

  const { data } = ctx.getImageData(0, 0, options.width, options.height);
  const step = options.step ?? 3;
  const points: ParticleTarget[] = [];

  for (let y = 0; y < options.height; y += step) {
    for (let x = 0; x < options.width; x += step) {
      const alpha = data[(y * options.width + x) * 4 + 3];
      if (alpha > 100) {
        points.push({ x, y });
      }
    }
  }

  const max = options.maxPoints ?? 140;
  if (points.length <= max) return points;

  const stride = Math.ceil(points.length / max);
  return points.filter((_, index) => index % stride === 0);
}

export type IntroParticle = {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delay: number;
};

function randomEdgeSpawn(viewport: { width: number; height: number }) {
  const edge = Math.floor(Math.random() * 4);
  const overshoot = 80 + Math.random() * 100;

  switch (edge) {
    case 0:
      return { x: Math.random() * viewport.width, y: -overshoot };
    case 1:
      return { x: viewport.width + overshoot, y: Math.random() * viewport.height };
    case 2:
      return { x: Math.random() * viewport.width, y: viewport.height + overshoot };
    default:
      return { x: -overshoot, y: Math.random() * viewport.height };
  }
}

export function getIntroMetrics(viewportWidth: number) {
  if (viewportWidth < 640) {
    return { boxWidth: 340, boxHeight: 96, fontSize: 52 };
  }
  if (viewportWidth < 1024) {
    return { boxWidth: 560, boxHeight: 130, fontSize: 76 };
  }
  return { boxWidth: 720, boxHeight: 160, fontSize: 96 };
}

export type IntroLayout = {
  text: string;
  originX: number;
  originY: number;
  boxWidth: number;
  boxHeight: number;
  fontSize: number;
};

export function buildIntroScene(
  text: string,
  viewport: { width: number; height: number }
): { particles: IntroParticle[]; layout: IntroLayout } {
  const { boxWidth, boxHeight, fontSize } = getIntroMetrics(viewport.width);

  const targets = sampleTextParticleTargets(text, {
    width: boxWidth,
    height: boxHeight,
    fontSize,
    step: 2,
    maxPoints: 200,
    letterSpacingRatio: 0.24,
  });

  const centerX = viewport.width / 2;
  const centerY = viewport.height / 2;
  const originX = centerX - boxWidth / 2;
  const originY = centerY - boxHeight / 2;

  const textCenterX = boxWidth / 2;
  const textCenterY = boxHeight / 2;
  let maxDist = 0;

  for (const target of targets) {
    const dist = Math.hypot(target.x - textCenterX, target.y - textCenterY);
    maxDist = Math.max(maxDist, dist);
  }

  const particles = targets.map((target) => {
    const dist = Math.hypot(target.x - textCenterX, target.y - textCenterY);
    const radialDelay = maxDist > 0 ? (dist / maxDist) * 0.45 : 0;
    const spawn = randomEdgeSpawn(viewport);

    return {
      startX: spawn.x,
      startY: spawn.y,
      endX: originX + target.x,
      endY: originY + target.y,
      delay: radialDelay,
    };
  });

  return {
    particles,
    layout: { text, originX, originY, boxWidth, boxHeight, fontSize },
  };
}

/** @deprecated Use buildIntroScene */
export function buildIntroParticles(
  text: string,
  viewport: { width: number; height: number }
): IntroParticle[] {
  return buildIntroScene(text, viewport).particles;
}

export const INTRO_DURATION_MS = 4000;
export const INTRO_FLY_MS = 2500;
export const INTRO_IMPACT_MS = 2550;

export function easeOutQuart(t: number): number {
  return 1 - (1 - t) ** 4;
}

export function particleProgress(elapsedMs: number, delay: number): number {
  const local = Math.max(0, elapsedMs - delay * INTRO_FLY_MS);
  return easeOutQuart(Math.min(1, local / INTRO_FLY_MS));
}
