import React, { Component } from "react";
import SystemDataService from "../services/system.services";
import { Link } from "react-router-dom";
import { withRouter } from "../common/with-router";

class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    
  }



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

export default withRouter(Welcome);