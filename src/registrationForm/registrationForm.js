import React, { Component } from "react";
import ValidationError from './ValidationError'

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: {
          value: '',
          touched: false
        },
        password: {
          value: '',
          touched: false
        },
        repeatPassword: {
          value: '',
          touched: false
        }
      };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, password, repeatPassword } = this.state;
    console.log("Name: ", name);
    console.log("Password: ", password);
    console.log("Repeat Pass", repeatPassword)
  }

  updateName(name) {
    this.setState({ name: { value: name, touched: true } });
  }

  updatePassword(password) {
    this.setState({ password: { value: password, touched: true } });
  }

  updateRepeatPassword(repeatPassword) {
    this.setState({ repeatPassword: { value: repeatPassword, touched: true } });
  }

  validateName(fieldValue) {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return 'Name is required';
    } else if (name.length < 3) {
      return 'Name must be at least 3 characters long';
    }
  }

  validatePassword() {
    const password = this.state.password.value.trim();
    if (password.length === 0) {
      return 'Password is required';
    } else if (password.length < 6 || password.length > 72) {
      return 'Password must be between 6 and 72 characters long';
    } else if (!password.match(/[0-9]/)) {
      return 'Password must contain at least one number';
    }
  }

  validateRepeatPassword() {
    const repeatPassword = this.state.repeatPassword.value.trim();
    const password = this.state.password.value.trim();

    if (repeatPassword !== password) {
      return 'Passwords do not match';
    }
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)} className="registration">
        <h2>Register</h2>
        <div className="registration__hint">* required field</div>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            onChange={e => this.updateName(e.target.value)}
            type="text"
            className="registration__control"
            name="name"
            id="name"
            defaultValue="Frank"
          />
          {this.state.name.touched && (
            <ValidationError message={this.validateName()} />
          )}
          
        </div>
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            onChange={e => this.updatePassword(e.target.value)}
            type="password"
            className="registration__control"
            name="password"
            id="password"
          />
          <ValidationError message={this.validatePassword()}/>
          <div className="registration__hint">
            6 to 72 characters, must include a number
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="repeatPassword">Repeat Password *</label>
          <input
            onChange={e => this.updateRepeatPassword(e.target.value)}
            type="password"
            className="registration__control"
            name="repeatPassword"
            id="repeatPassword"
          />
          <ValidationError message={this.validateRepeatPassword()}/>
        </div>

        <div className="registration__button__group">
          <button type="reset" className="registration__button">
            Cancel
          </button>
          <button 
            type="submit" 
            className="registration__button"
            disabled={
                this.validateName() ||
                this.validatePassword() ||
                this.validateRepeatPassword()
              }
            >
            Save
          </button>
        </div>
      </form>
    );
  }
}

export default RegistrationForm;
