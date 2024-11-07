import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const initialFormState = {
  fullName: "",
  nickName: "",
  shirtSize: "",
  animals: [],
};

const animals = ["cat", "dog", "bird", "fish"];

function App() {
  const [formValues, setFormValues] = useState(initialFormState);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (formValues.fullName.length > 3 && formValues.nickName.length > 3 && formValues.shirtSize.length === 1) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formValues])

  const handleTextChange = (e) => {
    const { value, id } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleCheckboxChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setFormValues({ ...formValues, animals: [...formValues.animals, value] });
    } else {
      setFormValues({
        ...formValues,
        animals: formValues.animals.filter((a) => a !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          value={formValues.fullName}
          id="fullName"
          onChange={handleTextChange}
        />
      </div>
      <div>
        <input
          value={formValues.nickName}
          id="nickName"
          onChange={handleTextChange}
        />
      </div>
      <div>
        <select
          value={formValues.shirtSize}
          id="shirtSize"
          onChange={handleTextChange}
        >
          <option value=""></option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </select>
      </div>
      {animals.map((animal) => (
        <div key={animal}>
          <input
            onChange={handleCheckboxChange}
            checked={formValues.animals.includes(animal)}
            type="checkbox"
            value={animal}
          />{" "}
          {animal}
        </div>
      ))}
      <button disabled={isDisabled}>Submit</button>
    </form>
  );
}

export default App;
