import { useState } from "react";

function form(props) {
  const [errand, setErrand] = useState("");
  const [organization, setOrganization] = useState("");
  const [notes, setNotes] = useState("");
  const [payments, setPayments] = useState("Visa");
  const [opening, setOpening] = useState(1);
  const [closing, setClosing] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fields = {
      errand,
      organization, 
      notes, 
      payments,
      opening, 
      closing,
    }
    await axios.post()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Make a new errand!</h4>
      <label htmlFor="errand">Errand</label>
      <input
        name="errand"
        type="text"
        value={errand}
        onChange={(e) => setErrand(e.target.value)}
      />
      <label htmlFor="organization">Organization</label>
      <input
        name="organization"
        type="text"
        onChange={(e) => setOrganization(e.target.value)}
        value={organization}
      />
      <label htmlFor="notes">Notes</label>
      <input
        name="notes"
        type="text"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <label htmlFor="payments">Payment</label>
      {/* <input type="text" /> */}
      <select
        name="payments"
        multiple={true}
        value={payments}
        onChange={(e) => setPayments(e.target.value)}
      >
        <option value="Visa">Visa</option>
        <option value="Amex">Amex</option>
        <option value="Cash">Cash</option>
        <option value="Mobile">Mobile</option>
      </select>
      <label htmlFor="opening">Opening Hours</label>
      <input
        name="opening"
        type="number"
        value={opening}
        onChange={(e) => setOpening(e.target.value)}
      />
      <label htmlFor="closing">Closing Hours</label>
      <input
        name="closing"
        type="number"
        value={closing}
        onChange={(e) => setClosing(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default form;
