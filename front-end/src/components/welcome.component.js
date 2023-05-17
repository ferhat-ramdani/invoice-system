import React, { Component } from "react";
import { withRouter } from "../common/with-router";

class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h1>
            Welcome !
        </h1>
        <p>
            Invoice-System is an API designed with cutting-edge technologies to empower its users in managing their invoices seamlessly.
        </p>
      </div>
    );
  }
}

export default withRouter(Welcome);
