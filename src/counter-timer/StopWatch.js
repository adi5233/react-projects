import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [isStart, setIsStart] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleStart = () => {
    if (hours < 0 || minutes < 0 || seconds <= 0) {
      alert("please enter time");
      return;
    } else {
      setIsStart(true);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "hours") {
      setHours(value);
    } else if (id === "minutes") {
      setMinutes(value);
    } else {
      setSeconds(value);
    }
  };

  const handleReset = () => {
    setIsStart(false);
    clearInterval(timer);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const handleResume = () => {
    setIsPaused(false);
    runTimer(hours, minutes, seconds);
  };

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(timer);
  };

  const runTimer = (hours, minutes, seconds) => {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    } else if (minutes > 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    } else if (hours > 0) {
      setHours(hours - 1);
      setMinutes(59);
      setSeconds(59);
    }

    if (hours === 0 && minutes === 0 && seconds === 0) {
      handleReset();
    }
  };

  useEffect(() => {
    let timer;
    if (isStart) {
      timer = setInterval(() => {
        runTimer(hours, minutes, seconds);
      }, 1000);
      setTimer(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isStart, minutes, hours, seconds]);

  return (
    <div className="mx-auto w-[50vw] bg-slate-400 p-32">
      {!isStart && (
        <div className="w-[20vw] mx-auto">
          <div className="flex justify-between">
            <input
              id="hours"
              type="number"
              className="p-4 outline-none w-20"
              placeholder="HH"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="number"
              id="minutes"
              className="p-4 outline-none w-20"
              placeholder="MM"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="number"
              id="seconds"
              className="p-4 outline-none w-20"
              placeholder="SS"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="text-center my-8">
            <button
              className="bg-blue-300 p-4 text-white"
              onClick={handleStart}
            >
              START
            </button>
          </div>
        </div>
      )}

      {isStart && (
        <div className="w-[20vw] mx-auto">
          <div className=" flex justify-between text-white text-5xl">
            <div className="">{hours < 10 ? `0${hours}` : hours}</div>
            <span>:</span>
            <div className=" ">{minutes < 10 ? `0${minutes}` : minutes}</div>
            <span>:</span>
            <div className="">{seconds < 10 ? `0${seconds}` : seconds}</div>
          </div>
          <div className="flex justify-center mt-10">
            <div>
              {!isPaused ? (
                <button
                  className="bg-blue-300 p-4 text-white mx-2"
                  onClick={handlePause}
                >
                  PAUSE
                </button>
              ) : (
                <button
                  className="bg-blue-300 p-4 text-white mx-2"
                  onClick={handleResume}
                >
                  RESUME
                </button>
              )}
            </div>
            <div>
              <button
                className="bg-blue-300 p-4 text-white mx-2"
                onClick={handleReset}
              >
                RESET
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StopWatch;
