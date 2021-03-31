import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementBreakLength, decrementBreakLength } from '../store/actions/clockActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const BreakLength = () => {
    const dispatch = useDispatch();

    const breakLength = useSelector(state => state.breakLength);

    return (
        <div id="length-section">
            <span id="break-label">Break Length</span>
            <div className="length-container">
                <div id="break-increment" className="arrow-container" onClick={() => dispatch(incrementBreakLength())}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </div>
                <span id="break-length" style={{margin: '10px'}}>{breakLength}</span>
                <div id="break-decrement" className="arrow-container" onClick={() => dispatch(decrementBreakLength())}>
                    <FontAwesomeIcon icon={faArrowDown} />
                </div>
            </div>
        </div>
    );
};

export default BreakLength;
