export default function App(props) {
    <>
        <div id="clockContainer">
            <div id="title">
                <h1>25 + 5 Clock</h1>
            </div>
            <div id="lengthsContainer">
                <div id="breakLengthContainer">
                    <div id="breakLengthTitle">
                        <h2>Break Length</h2>
                    </div>
                    <div id="breakLengthControls">
                        <div id="breakDownButton"></div>
                        <div id="breakLength">5</div>
                        <div id="breakUpButton"></div>
                    </div>
                </div>
                <div id="sessionLengthContainer">
                    <div id="sessionLengthTitle">
                        <h2>Session Length</h2>
                    </div>
                    <div id="sessionLengthControls">
                        <div id="sessionDownButton"></div>
                        <div id="sessionLength">25</div>
                        <div id="sessionUpButton"></div>
                    </div>
                </div>
            </div>
            <div id="timerContainer">
                <div id="timerTitle">Session</div>
                <div id="timer">
                    <h1>25:00</h1>
                </div>
            </div>
            <div id="timerControls">
                <div id="playButton"></div>
                <div id="pauseButton"></div>
                <div id="resetButton"></div>
            </div>
        </div>
    </>;
}
