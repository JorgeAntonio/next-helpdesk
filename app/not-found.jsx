import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="text-center">
      <h1 className="text-3xl">Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Go back dashboard</Link>
    </main>
  );
}
