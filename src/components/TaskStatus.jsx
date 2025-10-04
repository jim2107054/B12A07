import React from "react";

const TaskStatus = ({ inProgressTickets, onCompleteTicket }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Task Status</h2>
      </div>

      {inProgressTickets.length === 0 ? (
        <div className="py-2 flex flex-col items-center justify-center gap-2">
          <p className="text-gray-500 text-sm">No tasks in progress</p>
          <p className="text-gray-500 text-xs">
            Click on a ticket to start working
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {inProgressTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="p-4 border border-gray-200 rounded-lg bg-slate-50 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
            >
              <h4 className="text-sm font-semibold text-gray-900 mb-3 leading-tight">
                {ticket.title}
              </h4>
              <button
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:from-green-600 hover:to-green-700 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                onClick={() => onCompleteTicket(ticket.id)}
              >
                Complete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskStatus;
