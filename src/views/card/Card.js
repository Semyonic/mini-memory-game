import React from "react";
import { withRouter } from 'react-router-dom';
import Flippy, { BackSide, FrontSide } from "react-flippy";
import "../game/Game.css";

const cardStyle = {
  width: 150,
  height: 150
};
const flipperStyle = {
  display: "inline-block",
  paddingLeft: 10,
  paddingRight: 10,
  paddingBottom: 10,
  paddingTop: 10
};

class CardView extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (!this.props.matched && !this.props.imageUp) {
      this.props.onClick(this.props.id);
    }
  }

  render() {
    const frontImage = require(`../../images/${this.props.image}.jpg`);
    return (
      <Flippy
        flipOnClick={true}
        flipDirection="horizontal"
        ref={r => (this.flippy = r)}
        isFlipped={this.props.imageUp}
        style={flipperStyle}
      >
        <FrontSide onClick={this.onClick} id="grad" style={cardStyle} />
        <BackSide
          style={{
            backgroundImage: `url(${frontImage})`,
            backgroundSize: "cover",
            width: 150,
            height: 150
          }}
        />
      </Flippy>
    );
  }
}

export default withRouter(CardView);
