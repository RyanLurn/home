import type { ComponentProps } from "react";

interface TerminalMessageProps extends ComponentProps<"div"> {
  timestamp: Date;
  content: string;
  tag: string;
}

export function TerminalMessage({
  timestamp,
  content,
  tag,
  ...props
}: TerminalMessageProps) {
  return (
    <div {...props}>
      [{timestamp.toLocaleTimeString()}] [{tag}] {content}
    </div>
  );
}
