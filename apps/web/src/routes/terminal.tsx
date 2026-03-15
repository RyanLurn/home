import { createFileRoute } from "@tanstack/react-router";
import { Textarea } from "@home/ui/components/textarea";
import { useState } from "react";

import { TerminalMessage } from "@/components/terminal/message";

export const Route = createFileRoute("/terminal")({
  component: TerminalPage,
});

interface Message {
  timestamp: Date;
  content: string;
  tag: string;
}

function TerminalPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");

  function send() {
    if (!userInput.trim()) {
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        timestamp: new Date(),
        content: userInput,
        tag: "USER",
      },
    ]);
    setUserInput("");
  }

  return (
    <div className="flex h-dvh w-dvw flex-col gap-y-8 overflow-x-hidden p-6 text-4xl">
      {messages.map((message, index) => (
        <TerminalMessage
          timestamp={message.timestamp}
          content={message.content}
          tag={message.tag}
          key={index}
        />
      ))}
      <Textarea
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            send();
          }
        }}
        onChange={(e) => setUserInput(e.target.value)}
        className="text-4xl md:text-4xl"
        value={userInput}
      />
    </div>
  );
}
