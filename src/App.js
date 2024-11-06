import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const initialFormState = {
  fullName: '',
  nickName: '',
  shirtSize: '',
  inAgreement: false,
  isChecked: false
}

function App() {
  const [formValues, setFormValues] = useState(initialFormState);

  const handleChange = (e) => {
    const {value, checked, id, type} = e.target;
    if (type === 'checkbox') {
      setFormValues({...formValues, [id]: checked})
    } else {
      setFormValues({...formValues, [id]: value});
    }
  }

  return (
    <form>
      <input value={formValues.fullName} id="fullName" onChange={handleChange} />
      <input value={formValues.nickName} id="nickName" onChange={handleChange} />
      <select value={formValues.shirtSize} id="shirtSize" onChange={handleChange}>
        <option value=""></option>
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>
      </select>
      <input checked={formValues.inAgreement} id="inAgreement" type="checkbox" onChange={handleChange} /> I Agree
      <input checked={formValues.isChecked} id="isChecked" type="checkbox" onChange={handleChange} /> I Agree
    </form>
  );
}

export default App;
