import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faSync } from '@fortawesome/free-solid-svg-icons';

const Controls = () => {
    return (
        <div id="controls">
            <div id="start_stop" className="control-icon-container">
                <FontAwesomeIcon icon={faPlay} />
                <FontAwesomeIcon icon={faPause} />
            </div>
            <div id="reset" className="control-icon-container">
                <FontAwesomeIcon icon={faSync} />
            </div>
        </div>
    );
};

export default Controls;
