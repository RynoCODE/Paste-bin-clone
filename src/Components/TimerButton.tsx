"use client";
import React, { useState, useEffect } from "react";

export default function TimerButton() {
  const [timeLeft, setTimeLeft] = useState<number>(600);
  const [isActive, setIsActive] = useState<boolean>(false);

  const startTimer = (): void => {
    if (!isActive) {
      setIsActive(true);
    }
  };


  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
      setIsActive(false);
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  return (
    <div>
      <button
        className="px-5 py-2 bg-green-500 rounded border-none hover:bg-green-700"
        onClick={startTimer}
        disabled={isActive}
      >
        {isActive ? formatTime(timeLeft) : "10:00"}
      </button>
    </div>
  );
}
