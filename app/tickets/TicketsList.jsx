import Link from "next/link";

async function getTickets() {
  // imitate delay of 2 second
  await new Promise((res) => setTimeout(res, 2000));

  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      //   revalidate: 30, refreshes every 30 seconds (not recommended)
      revalidate: 0, // refreshes every time the page is loaded
    },
  });
  return res.json();
}

export default async function TicketsList() {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card">
          <Link href={`/tickets/${ticket.id}`}>
            <h2>{ticket.title}</h2>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && <p className="text-center">No tickets found</p>}
    </>
  );
}
