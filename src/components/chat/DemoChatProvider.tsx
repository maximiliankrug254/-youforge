"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  DEMO_MESSAGE_LIMIT,
  demoLimitMessage,
  demoWelcomeMessage,
  getDemoResponse,
} from "@/lib/demo-chat";

export type ChatMessage = {
  id: string;
  role: "user" | "bot";
  text: string;
};

type DemoChatContextValue = {
  messages: ChatMessage[];
  userMessageCount: number;
  isLimitReached: boolean;
  hasStarted: boolean;
  isWidgetOpen: boolean;
  isTyping: boolean;
  startDemo: () => void;
  sendMessage: (text: string) => void;
  openWidget: () => void;
  closeWidget: () => void;
  toggleWidget: () => void;
};

const DemoChatContext = createContext<DemoChatContextValue | null>(null);

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function DemoChatProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [hasStarted, setHasStarted] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [userMessageCount, setUserMessageCount] = useState(0);

  const isLimitReached = userMessageCount >= DEMO_MESSAGE_LIMIT;

  const startDemo = useCallback(() => {
    if (hasStarted) return;
    setHasStarted(true);
    setMessages([{ id: createId(), role: "bot", text: demoWelcomeMessage }]);
  }, [hasStarted]);

  const sendMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isTyping) return;

      if (!hasStarted) {
        setHasStarted(true);
        setMessages([{ id: createId(), role: "bot", text: demoWelcomeMessage }]);
      }

      if (userMessageCount >= DEMO_MESSAGE_LIMIT) return;

      const userMsg: ChatMessage = {
        id: createId(),
        role: "user",
        text: trimmed,
      };

      setMessages((prev) => [...prev, userMsg]);
      setUserMessageCount((c) => c + 1);
      setIsTyping(true);

      const willHitLimit = userMessageCount + 1 >= DEMO_MESSAGE_LIMIT;
      const response = willHitLimit ? demoLimitMessage : getDemoResponse(trimmed);

      window.setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { id: createId(), role: "bot", text: response },
        ]);
        setIsTyping(false);
      }, 600 + Math.random() * 400);
    },
    [hasStarted, isTyping, userMessageCount]
  );

  const value = useMemo(
    () => ({
      messages,
      userMessageCount,
      isLimitReached,
      hasStarted,
      isWidgetOpen,
      isTyping,
      startDemo,
      sendMessage,
      openWidget: () => setIsWidgetOpen(true),
      closeWidget: () => setIsWidgetOpen(false),
      toggleWidget: () => setIsWidgetOpen((o) => !o),
    }),
    [
      messages,
      userMessageCount,
      isLimitReached,
      hasStarted,
      isWidgetOpen,
      isTyping,
      startDemo,
      sendMessage,
    ]
  );

  return (
    <DemoChatContext.Provider value={value}>{children}</DemoChatContext.Provider>
  );
}

export function useDemoChat() {
  const ctx = useContext(DemoChatContext);
  if (!ctx) {
    throw new Error("useDemoChat must be used within DemoChatProvider");
  }
  return ctx;
}
