import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addUser } from "../../actions/users";

export class Form extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
  };

  static propTypes = {
    addUser: PropTypes.func.isRequired,
  };

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  onSubmit = (e) => {
    e.preventDefault();
    const { first_name, last_name, email } = this.state;
    const user = { first_name, last_name, email };
    console.log(user);
    this.props.addUser(user);
  };

  render() {
    const { first_name, last_name, email } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            type="first_name"
            className="form-control"
            id="first_name"
            aria-describedby="firstNameHelp"
            name="first_name"
            onChange={this.onChange}
            defaultValue=""
          ></input>
          <small id="firstNameHelpHelp" className="form-text text-muted">
            What's your first name!
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="last_name"
            className="form-control"
            id="last_name"
            aria-describedby="lastNameHelp"
            name="last_name"
            onChange={this.onChange}
            defaultValue=""
          ></input>
          <small id="lastNameHelpHelp" className="form-text text-muted">
            What's your last name!
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={this.onChange}
            defaultValue=""
          ></input>
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default connect(null, { addUser })(Form);
