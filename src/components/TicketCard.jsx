import React from "react";
import calIcon from "../assets/cal.png";

const TicketCard = ({ ticket, onTicketSelect }) => {
  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "text-red-600";
      case "medium":
        return "text-yellow-600";
      case "low":
        return "text-green-600";
    }
  };

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case "open":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-yellow-100 text-yellow-800";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div
      className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 cursor-pointer transition-all duration-200 hover:shadow-md w-full"
      onClick={() => onTicketSelect(ticket)}
    >
      {/* Header with title and status */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900 leading-tight flex-1 pr-4">
          {ticket.title}
        </h3>
        <span
          className={`px-3 py-1 flex gap-2 rounded-full text-xs font-medium whitespace-nowrap ${getStatusBadge(
            ticket.status
          )}`}
        >
          <div
            className={`h-4 w-4 rounded-full ${
              ticket.status.toLowerCase() === "open"
                ? "bg-green-800"
                : "bg-yellow-600"
            }`}
          ></div>
          {ticket.status === "in-progress"
            ? "In- Progress"
            : ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {ticket.description.length > 150
          ? `${ticket.description.substring(0, 150)}...`
          : ticket.description}
      </p>

      {/* Footer with ticket info */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <div className="flex items-center gap-4">
          <span className="font-medium">
            #{ticket.id.toString().padStart(4, "0")}
          </span>
          <span
            className={`text-xs flex font-medium ${getPriorityColor(
              ticket.priority
            )}`}
          >
            {`${ticket.priority.toUpperCase()} PRIORITY`}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs">{ticket.customer}</span>
          <div className="flex items-center gap-1">
            <img src={calIcon} alt="Calendar" />
            <span>{formatDate(ticket.createdAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
