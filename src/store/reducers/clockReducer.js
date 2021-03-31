import {
    INCREMENT_BREAK_LENGTH,
    DECREMENT_BREAK_LENGTH,
    INCREMENT_SESSION_LENGTH,
    DECREMENT_SESSION_LENGTH,
    START_TIME,
    STOP_TIME,
    RESET_TIME
} from '../types';

/**
 * Redux inital state
 */
const initialState = {
    breakLength: 5,
    sessionLength: 25,
    timerLeft: 0,
    isPaused: true
};

/**
 * 25 + 5 Clock reducer
 */
export const clockReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_BREAK_LENGTH:
            return {
                breakLength: state.breakLength + 1,
                sessionLength: state.sessionLength,
                timerLeft: state.timerLeft,
                isPaused: state.isPaused
            };
        case DECREMENT_BREAK_LENGTH:
            return {
                breakLength: state.breakLength - 1,
                sessionLength: state.sessionLength,
                timerLeft: state.timerLeft,
                isPaused: state.isPaused
            };
        case INCREMENT_SESSION_LENGTH:
            return {
                breakLength: state.breakLength,
                sessionLength: state.sessionLength + 1,
                timerLeft: state.timerLeft,
                isPaused: state.isPaused
            };
        case DECREMENT_SESSION_LENGTH:
            return {
                breakLength: state.breakLength,
                sessionLength: state.sessionLength - 1,
                timerLeft: state.timerLeft,
                isPaused: state.isPaused
            };
        default:
            return state;
    }
};