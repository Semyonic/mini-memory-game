import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { checkMatchedPair, flipUpCard, initGame } from "../../state/actions/game.actions";
import CardView from "../card/Card";
import "./Game.css";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
  }
  componentWillMount() {
    setInterval(this.props.onCheckForMatchedPair, 1000);
  }

  getCardViews() {
    let cardViews = [];
    let onClick = this.props.onCardClicked;
    this.props.cards.map(({ id, image, imageUp, matched }) => {
      return (cardViews = [
        ...cardViews,
        <CardView
          key={id}
          id={id}
          image={image}
          imageUp={imageUp}
          matched={matched}
          onClick={onClick}
        />
      ]);
    });
    return cardViews;
  }

  goHome() {
    try {
      this.props.history.push("/");
    } catch (err) {
      throw err;
    }
  }

  render() {
    let cardViews = this.getCardViews();
    let gameStatus = (
      <div className="status" style={{ textAlign: "center"}}>
        <h4>Turn: {this.props.turnNo}</h4>
        <h4>Pairs found: {this.props.pairsFound}</h4>
      </div>
    );

    if (this.props.finished) {
      return <Redirect to="/results" resultData={this.props.turnNo} />;
    }

    return (
      <div>
        <div>{gameStatus}</div>
        <div className="container">{cardViews}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ cards, turnNo, finished, pairsFound }) => {
  return {
    cards,
    turnNo,
    finished,
    pairsFound
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCardClicked: id => {
      dispatch(flipUpCard(id));
    },
    onCheckForMatchedPair: () => {
      dispatch(checkMatchedPair());
    },
    onPlayAgain: () => {
      this.props.history.push("/");
      dispatch(initGame());
    }
  };
};

const GameView = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default withRouter(GameView);
