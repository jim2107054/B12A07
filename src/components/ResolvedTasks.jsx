import React from "react";

const ResolvedTasks = ({ resolvedTickets, onRemoveTicket }) => {
  return (
    <div className="bg-white rounded-xl px-3 py-1 shadow-md border border-gray-100">
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Resolved Task</h2>
      </div>

      {resolvedTickets.length > 0 && (
        <div className="space-y-4  max-h-96 overflow-y-auto">
          {resolvedTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="p-4 border border-green-200 rounded-lg bg-green-50 transition-all duration-200"
            >
              <h4 className="text-sm font-semibold text-gray-900 mb-3 leading-tight">
                {ticket.title}
              </h4>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-green-600 text-sm">✓</div>
                  <p className="text-green-500">Completed</p>
                </div>
                <button
                  onClick={() => onRemoveTicket(ticket.id)}
                  className="text-gray-600 text-sm hover:underline"
                >
                  Click to remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResolvedTasks;
