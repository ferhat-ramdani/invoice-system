import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";

export default class Welcome extends Component {
  render() {
    return (
      <div className="container">
        <h1>
            Welcome !
        </h1>
        <p>
            This API allows you to brows invoices.
        </p>
      </div>
    );
  }
}