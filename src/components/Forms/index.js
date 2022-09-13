import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Student Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;

// import React from "react";
// import { useState } from "react";

// export default function AddStudent({ handleAddStudent }) {
//   const [formState, setFormState] = useState({
//     name: "",
//   });
//   const handleFormChange = (event) => {
//     let { name, value } = event.target;
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };
// }
