import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-3xl ">There is no such page</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/tickets">Go back Tickets List</Link>
    </div>
  );
}
