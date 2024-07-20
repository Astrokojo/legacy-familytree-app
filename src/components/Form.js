import React from 'react';

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      name: '',
      gender: '',
      birthYear: '',
      deathYear: '',
      enableSubmit: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      const { name, gender, birthYear, deathYear } = this.state;
      if (this.state.name !== '') {
        console.log('State values:', this.state);
        console.log('Enable submit:', this.state.enableSubmit);
        this.setState({ enableSubmit: true });
      }
    });
  };


  render() {
    return (
      <div className='form-wrapper'>
        <form onSubmit={this.handleSubmit}>
          <h1>Input Details</h1>
          <div className='input-box'>
            <input 
              type="text"
              placeholder='Enter name'
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className='input-box'>
            <input 
              placeholder='Enter gender'
              type="text"
              id="gender"
              name="gender"
              value={this.state.gender}
              onChange={this.handleChange}
            />
          </div>
          <div className='input-box'>
            <input 
              placeholder='Enter birth year'
              type="number"
              id="birthYear"
              name="birthYear"
              value={this.state.birthYear}
              onChange={this.handleChange}
            />
          </div>
          <div className='input-box'>
            <input 
              placeholder='Enter death year'
              type="number"
              id="deathYear"
              name="deathYear"
              value={this.state.deathYear}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" disabled={!this.state.enableSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FormComponent;
