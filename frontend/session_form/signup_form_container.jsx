import { connect } from "react-redux";
import React from "react";
import { signup } from "../actions/session_actions";
import { openModal, closeModal } from "../actions/modal_actions";

import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Create Account"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: () => dispatch(openModal("login")),
    processForm: user => dispatch(signup(user)),
    otherForm: (
      <button
        onClick={() => dispatch(openModal("login"))}
        className="blue-hyperlink-help"
      >
        Sign In
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
