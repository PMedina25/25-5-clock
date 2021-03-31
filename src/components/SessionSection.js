import React from 'react'

const Session = ({ sessionMinutes, sessionSeconds }) => {
    return (
        <div id='session-section'>
            <span id='timer-label'>Session</span>
            <div id='time-left'>
                {sessionMinutes}:{sessionSeconds}
            </div>
        </div>
    )
}

export default Session;
