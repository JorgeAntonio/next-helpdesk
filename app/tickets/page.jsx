import { Suspense } from "react";
import Loading from "../loading";
import TicketsList from "./TicketsList";

export default function Tickets() {
  return (
    <main>
      <h1>Tickets</h1>
      <p>Here is a list of tickets</p>
      <Suspense fallback={<Loading />}>
        <TicketsList />
      </Suspense>
    </main>
  );
}
