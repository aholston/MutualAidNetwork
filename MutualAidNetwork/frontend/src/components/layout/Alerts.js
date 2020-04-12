import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.first_name) {
        alert.error(`First Name: ${error.msg.first_name.join()}`);
      }
      if (error.msg.last_name) {
        alert.error(`Last Name: ${error.msg.last_name.join()}`);
      }
      if (error.msg.email) {
        alert.error(`Email: ${error.msg.email.join()}`);
      }
    }
  }

  render() {
    return <Fragment></Fragment>;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
