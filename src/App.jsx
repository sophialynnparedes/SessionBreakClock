import { useState, useEffect } from "react";
import "../src/Styles.css";
export default function App(props) {
    let breakLengthLabel;
    let sessionLengthLabel;
    let timerLabel;
    let timeCounter;
    var breakLength = 5;
    var sessionLength = 25;
    var mode = "Session";
    var timeLeft = sessionLength * 60;
    var paused = true;
    var timer = null;

    useEffect(() => {
        breakLengthLabel = document.getElementById("break-length");
        breakLengthLabel.innerHTML = 5;
        sessionLengthLabel = document.getElementById("session-length");
        sessionLengthLabel.innerHTML = 25;
        timeCounter = document.getElementById("time-left");
        timeCounter.innerHTML = "25:00";
    }, []);

    function updateTimeCounter(timeLeft) {
        var minutes = Math.floor(timeLeft / 60);
        var seconds = timeLeft % 60;
        if (minutes >= 10 && seconds >= 10) {
            timeCounter.innerHTML = `${minutes}:${seconds}`;
        } else if (minutes >= 10 && seconds < 10) {
            timeCounter.innerHTML = `${minutes}:0${seconds}`;
        } else if (minutes < 10 && seconds >= 10) {
            timeCounter.innerHTML = `0${minutes}:${seconds}`;
        } else {
            timeCounter.innerHTML = `0${minutes}:0${seconds}`;
        }
    }

    function playPause() {
        if (paused) {
            console.log("starting clock");
            timer = setInterval(function () {
                if (!paused && timeLeft > 0) {
                    timeLeft--;
                    if (timeLeft == 0) {
                        document.getElementById("beep").play();
                    }
                    updateTimeCounter(timeLeft);
                    console.log(timeLeft);
                } else if (paused) {
                    clearInterval(timer);
                } else if (timeLeft <= 0 && mode == "Session") {
                    mode = "Break";
                    timerLabel = document.getElementById("timer-label");
                    timerLabel.innerHTML = mode;
                    timeLeft = breakLength * 60;
                    updateTimeCounter(timeLeft);
                } else if (timeLeft <= 0 && mode == "Break") {
                    mode = "Session";
                    timerLabel = document.getElementById("timer-label");
                    timerLabel.innerHTML = mode;
                    timeLeft = sessionLength * 60;
                    updateTimeCounter(timeLeft);
                }
            }, 1000);
            paused = false;
        } else {
            console.log("pausing clock");
            paused = true;
        }
    }

    function reset() {
        document.getElementById("beep").pause();
        document.getElementById("beep").currentTime = 0;
        mode = "Session";
        paused = true;
        breakLength = 5;
        sessionLength = 25;
        timeLeft = 1500;
        breakLengthLabel = document.getElementById("break-length");
        breakLengthLabel.innerHTML = 5;
        sessionLengthLabel = document.getElementById("session-length");
        sessionLengthLabel.innerHTML = 25;
        timerLabel = document.getElementById("timer-label");
        timerLabel.innerHTML = mode;
        updateTimeCounter(timeLeft);
    }

    return (
        <>
            <div id="clockContainer">
                <h1>25 + 5 Clock</h1>
                <div id="lengthControls">
                    <div>
                        <h2 id="break-label">Break Length</h2>
                        <div id="breakLengthControls">
                            <button
                                id="break-decrement"
                                onClick={() => {
                                    if (paused && breakLength >= 2) {
                                        breakLength--;
                                        breakLengthLabel =
                                            document.getElementById(
                                                "break-length"
                                            );
                                        breakLengthLabel.innerHTML =
                                            breakLength;
                                    }
                                }}>
                                dow arrow
                            </button>
                            <h2 id="break-length"></h2>
                            <button
                                id="break-increment"
                                onClick={() => {
                                    if (paused && breakLength <= 59) {
                                        breakLength++;
                                        breakLengthLabel =
                                            document.getElementById(
                                                "break-length"
                                            );
                                        breakLengthLabel.innerHTML =
                                            breakLength;
                                    }
                                }}>
                                up arrow
                            </button>
                        </div>
                    </div>
                    <div>
                        <h2 id="session-label">Session Length</h2>
                        <div id="sessionLengthControls">
                            <button
                                id="session-decrement"
                                onClick={() => {
                                    if (paused && sessionLength >= 2) {
                                        sessionLength--;
                                        timeLeft = sessionLength * 60;
                                        updateTimeCounter(timeLeft);
                                        sessionLengthLabel =
                                            document.getElementById(
                                                "session-length"
                                            );
                                        sessionLengthLabel.innerHTML =
                                            sessionLength;
                                    }
                                }}>
                                down arrow
                            </button>
                            <h2 id="session-length"></h2>
                            <button
                                id="session-increment"
                                onClick={() => {
                                    if (paused && sessionLength <= 59) {
                                        sessionLength++;
                                        timeLeft = sessionLength * 60;
                                        updateTimeCounter(timeLeft);
                                        sessionLengthLabel =
                                            document.getElementById(
                                                "session-length"
                                            );
                                        sessionLengthLabel.innerHTML =
                                            sessionLength;
                                    }
                                }}>
                                up arrow
                            </button>
                        </div>
                    </div>
                </div>
                <div id="timerContainer">
                    <h2 id="timer-label">{mode}</h2>
                    <h1 id="time-left"></h1>
                </div>
                <div id="timerControls">
                    <button
                        id="start_stop"
                        onClick={() => {
                            playPause();
                        }}>
                        Start/Stop
                    </button>
                    <button
                        id="reset"
                        onClick={() => {
                            reset();
                        }}>
                        Reset
                    </button>
                </div>
            </div>
            <audio
                id="beep"
                autoPlay={false}
                src="public\beeps-60685.mp3"></audio>
        </>
    );
}
