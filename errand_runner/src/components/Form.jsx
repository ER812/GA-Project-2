import { useState } from "react";

function form(props) {
  const [errand, setErrand] = useState('');
  const [organization, setOrganization] = useState('');
  const [notes, setNotes] = useState('');
  const [payments, setPayments] = useState();
  const [opening, setOpening] = useState(1);
  const [closing, setClosing] = useState(1);

  return (
    <form>
      <h4>Make a new errand!</h4>
      <label htmlFor="">Errand</label>
      <input name="errand" type="text" value={errand} onChange={ (e) => setErrand(e.target.value)}/>
      <label htmlFor="">Organization</label>
      <input name="organization" type="text" />
      <label htmlFor="">Notes</label>
      <input name="notes" type="text" />
      <label htmlFor="">Payment</label>
      <input type="text" />
      <label htmlFor="">Opening Hours</label>
      <input name="hours" type="number" />
      <label htmlFor="">Closing Hours</label>
      <input name="hours" type="number" />
<button type="submit">Submit</button>

    </form>
  )
}

export default form; 