import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {GameType} from "../../const.js";
import Mistakes from "../mistakes/mistakes.jsx";


const GameScreen = (props) => {
  const {
    type,
    children,
    mistakes,
  } = props;

  return (
    <section className={`game game--${type}`}>
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <Mistakes
          count={mistakes}
        />
      </header>

      {children}
    </section>
  );
};


GameScreen.propTypes = {
  type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  mistakes: PropTypes.number.isRequired,
};


const mapStateToProps = (state) => ({
  mistakes: state.mistakes,
});

export {GameScreen};
export default connect(mapStateToProps)(GameScreen);
