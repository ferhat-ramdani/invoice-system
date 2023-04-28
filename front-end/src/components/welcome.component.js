import React, { Component } from "react";
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
            Bienvenu !
        </h1>
        <p>
            Invoice System est une API conçu avec les technologies de pointe afin de permettre a ses utilisateurs de gérer les
            factures Okayo.
        </p>
      </div>
    );
  }
}

export default withRouter(Welcome);