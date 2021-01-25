import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import { useHistory } from "react-router-dom";


function Form(props) {
  const [errand, setErrand] = useState("");
  const [organization, setOrganization] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentsAccepted, setPaymentsAccepted] = useState([]);
  const [openingHours, setOpeningHours] = useState(1);
  const [closingHours, setClosingHours] = useState(1);

  let history = useHistory()

  const paymentOptions = ['Visa', 'Amex', 'Mobile', 'Cash'];

  // HandleChange for our paymentsAccepted based on paymentOptions above
  const handleChange = (po, e) => {
    const { checked } = e.target;
    if (checked) {
      setPaymentsAccepted([...paymentsAccepted, po]);
    } else {
      setPaymentsAccepted(paymentsAccepted.filter((p) => p !== po));
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fields = {
      errand,
      organization, 
      notes, 
      paymentsAccepted,
      openingHours, 
      closingHours,
    }
    const resp = await axios.post(baseURL, { fields }, config)
    props.setToggle((prev) => !prev)
    history.push("/")
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
      {/* Mapping through paymentOptions below to make individual checkboxes for each option */}
      {paymentOptions.map((po) => (
        <>
          <label htmlFor={po}>{po}</label> 
          <input name={po} type="checkbox" checked={paymentsAccepted.includes(po)} onChange={(e) => handleChange(po, e)} />
        </>
      ))}
      <label htmlFor="openingHours">Opening Hours</label>
      <input
        name="openingHours"
        type="number"
        value={openingHours}
        onChange={(e) => setOpeningHours(e.target.valueAsNumber)}
      />
      <label htmlFor="closingHours">Closing Hours</label>
      <input
        name="closingHours"
        type="number"
        value={closingHours}
        onChange={(e) => setClosingHours(e.target.valueAsNumber)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;