import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketCard from "./components/TicketCard";
import TaskStatus from "./components/TaskStatus";
import ResolvedTasks from "./components/ResolvedTasks";
import Footer from "./components/Footer";
import { ticketsData } from "./data/tickets";

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  const handleTicketSelect = (selectedTicket) => {
    // Check if ticket is already in progress
    const isAlreadyInProgress = inProgressTickets.find(
      (ticket) => ticket.id === selectedTicket.id
    );

    if (isAlreadyInProgress) {
      toast.info("This ticket is already in progress!");
      return;
    }

    // Add to in-progress
    setInProgressTickets((prev) => [...prev, selectedTicket]);
    toast.success("In Progress!");
  };

  const handleCompleteTicket = (ticketId) => {
    // Find the ticket
    const ticketToComplete = inProgressTickets.find(
      (ticket) => ticket.id === ticketId
    );

    if (!ticketToComplete) return;

    // Remove from in-progress
    setInProgressTickets((prev) =>
      prev.filter((ticket) => ticket.id !== ticketId)
    );

    // Add to resolved
    setResolvedTickets((prev) => [
      ...prev,
      { ...ticketToComplete, status: "Resolved" },
    ]);

    // Remove from main tickets list
    setTickets((prev) => prev.filter((ticket) => ticket.id !== ticketId));

    toast.success("Completed!");
  };

  const handleRemoveResolvedTicket = (ticketId) => {
    setResolvedTickets((prev) =>
      prev.filter((ticket) => ticket.id !== ticketId)
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <Banner
        inProgressCount={inProgressTickets.length}
        resolvedCount={resolvedTickets.length}
      />

      <main className="flex-1 py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Customer Tickets
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-5">
              {tickets.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  onTicketSelect={handleTicketSelect}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <TaskStatus
              inProgressTickets={inProgressTickets}
              onCompleteTicket={handleCompleteTicket}
            />
            {resolvedTickets.length > 0 && (
              <ResolvedTasks
                onRemoveTicket={handleRemoveResolvedTicket}
                resolvedTickets={resolvedTickets}
              />
            )}
          </div>
        </div>
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
