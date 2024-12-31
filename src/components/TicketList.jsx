import TicketItem from "./TicketItem";
import PropTypes from "prop-types";

export default function TicketList({ tickets, dispatch }) {
  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} dispatch={dispatch} ticket={ticket} />
      ))}
    </div>
  );
}
TicketList.propTypes = {
  tickets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      priority: PropTypes.oneOf([1, 2, 3]).isRequired,
    })
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};
