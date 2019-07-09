import React from "react";
import { initGame } from "../../state/actions/game.actions";

export default class ResultView extends React.Component {
  constructor(props) {
    super(props);
    this.restart = this.restart.bind(this);
  }

  restart() {
    this.props.history.push("/");
    this.dispatch(initGame());
  }
  render() {
    return (
      <div className="status" style={{ textAlign: "center", paddingTop: 150 }}>
        <h1>Congrats !</h1>
        <h3>Finished with {this.props.turnNo - 1} turns</h3>
        <div>
          <button className='btn btn-warning' onClick={this.props.restart}>Restart</button>
        </div>
      </div>
    );
  }
}
