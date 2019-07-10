import React from "react";
import { withRouter } from 'react-router-dom';

class ResultView extends React.Component {
  constructor(props) {
    super(props);
    this.restart = this.restart.bind(this);
    this.result = this.props.history.location.state.result;
  }

  restart() {
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="status" style={{ textAlign: "center", paddingTop: 150 }}>
        <h1>Congrats !</h1>
        <h3>Finished with {this.result} turns</h3>
        <div>
          <button className='btn btn-warning' onClick={this.restart}>Restart</button>
        </div>
      </div>
    );
  }
}

export default withRouter(ResultView);
