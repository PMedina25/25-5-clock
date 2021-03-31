import {
    INCREMENT_BREAK_LENGTH,
    DECREMENT_BREAK_LENGTH,
    INCREMENT_SESSION_LENGTH,
    DECREMENT_SESSION_LENGTH,
    START_TIME,
    STOP_TIME,
    RESET_TIME
} from '../types';

/* Increment by one the break length */
export const incrementBreakLength = () => ({ type: INCREMENT_BREAK_LENGTH });

/* Decrement by one the break length */
export const decrementBreakLength = () => ({ type: DECREMENT_BREAK_LENGTH });

/* Increment by one the session length */
export const incrementSessionLength = () => ({ type: INCREMENT_SESSION_LENGTH });

/* Decrement by one the session length */
export const decrementSessionLength = () => ({ type: DECREMENT_SESSION_LENGTH });