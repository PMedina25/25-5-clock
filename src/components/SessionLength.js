import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementSessionLength, decrementSessionLength } from '../store/actions/clockActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const SessionLength = () => {
    const dispatch = useDispatch();

    const sessionLength = useSelector(state => state.sessionLength);

    return (
        <div id="length-section">
            <span id="session-label">Session Length</span>
            <div className="length-container">
                <div id="session-increment" className="arrow-container" onClick={() => dispatch(incrementSessionLength())}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </div>
                <span id="session-length" style={{margin: '10px'}}>{sessionLength}</span>
                <div id="session-decrement" className="arrow-container" onClick={() => dispatch(decrementSessionLength())}>
                    <FontAwesomeIcon icon={faArrowDown} />
                </div>
            </div>
        </div>
    );
};

export default SessionLength;
