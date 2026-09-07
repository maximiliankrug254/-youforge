"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { TUKAN_IMG } from "@/components/demo/tukan/tukan-config";
import { TUKAN_EASE } from "@/components/demo/tukan/tukan-motion";

export function TukanBird() {
  const reduce = useReducedMotion();

  return (
    <div
      className="tukan-look-bird pointer-events-none absolute -right-[28%] top-[-4%] z-[4] h-[58%] w-[150%] sm:-right-[10%] sm:top-[-10%] sm:h-[120%] sm:w-[min(78vw,980px)] lg:-right-[6%] lg:w-[68%]"
      aria-hidden
    >
      <motion.div
        className="h-full w-full"
        initial={reduce ? false : { x: "38%", y: "-12%", rotate: 12, opacity: 0, scale: 0.78 }}
        animate={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.55, ease: TUKAN_EASE }}
      >
        <div className={reduce ? "h-full w-full" : "tukan-bird-float h-full w-full"}>
          <div className="tukan-bird-mask relative h-full w-full">
            <Image
              src={TUKAN_IMG.toucanFly}
              alt=""
              fill
              priority
              quality={92}
              sizes="(min-width: 1024px) 68vw, 100vw"
              className="object-contain object-center drop-shadow-[0_40px_70px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
