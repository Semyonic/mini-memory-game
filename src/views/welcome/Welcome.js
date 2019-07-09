import React from "react";
import { Link } from "react-router-dom";

export default class WelcomeView extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {}

  render() {
    return (
      <Link to="/play">
        <h1 style={{ textAlign: "center", paddingTop: '150px' }}>Play</h1>
      </Link>
    );
  }
}
