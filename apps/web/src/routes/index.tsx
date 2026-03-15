import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@home/ui/components/button";
import { toast } from "@home/ui/components/toaster";

export const Route = createFileRoute("/")({ component: IndexPage });

function IndexPage() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-y-2">
      <h1 className="text-2xl font-bold">Home</h1>
      <Button onClick={() => toast.success("Yippee!")}>Nhấn</Button>
    </div>
  );
}
