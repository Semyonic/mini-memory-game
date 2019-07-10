import React from 'react';
import { withRouter } from 'react-router-dom';

class WelcomeView extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.history.push('/play');
  }

  render() {
    return (
      <button onClick={this.onClick} style={{ marginTop: '40%', marginLeft: '30%', width: 150, height: 50 }}>
        Play
      </button>
    );
  }
}

export default withRouter(WelcomeView);
