import React from 'react';
import { connect } from 'react-redux';

let Waiting = ({ dispatch, show }) => (
  <p
    style={{ display: show ? 'block' : 'none' }}
  >Waiting for others to join.</p>
);

const mapStateToProps = (state) => ({
  show: (!state.timerOn && state.joinedRace && !state.raceStarted && !state.raceAlreadyStarted),
})

Waiting = connect(mapStateToProps)(Waiting);

export default Waiting;