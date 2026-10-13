import React, { useState } from "react";
import "./Ex5.js";
import "./Ex5.css";
function Ex5() {
  const [ticket, setTicket] = useState({
    event: "Seat booking",
    row: "A",
    seatNumber: "",
    isVIP: false
  });
  const { event, row, seatNumber, isVIP } = ticket;
  const handleSeatChange = (e) => {
    setTicket({
      ...ticket,
      seatNumber: e.target.value
    });
  };
  const handleVIPToggle = () => {
    setTicket({
      ...ticket,
      isVIP: !ticket.isVIP
    });
  };
  return (
    <div className="container">
        <center>
        <div className="WW">
      <h2>Event Ticket Booking</h2>
      <div className="form-section">
        <input type="text" placeholder="Enter Seat Number" value={seatNumber} onChange={handleSeatChange}/>
        <div>
          <input
            type="checkbox"
            checked={isVIP}
            onChange={handleVIPToggle}
          />
          <label> Make it a VIP Ticket</label>
        </div>
      </div>
      <div className={isVIP ? "golden-border" : "regular-border"}>
        <h3>{event}</h3>
        <p>
          Row: {row} | Seat: {seatNumber || "Not Selected"}
        </p>
        {isVIP && <p>ᴠɪᴘ 𓆩♛𓆪: VIP Access Granted!</p>}
      </div>
</div>
</center>
    </div>
  );
}

export default Ex5