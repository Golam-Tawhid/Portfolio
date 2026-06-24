import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <h1 className="font-heading text-6xl font-bold gradient-text">404</h1>
      <p className="mt-4 text-xl text-muted-foreground">Page not found</p>
      <Button asChild className="mt-8">
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  );
}
