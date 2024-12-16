import React, { useState, useRef, useEffect } from "react";

const otpLength = 4;
const Main = () => {
  const [otp, setOtp] = useState(Array(otpLength).fill(""));
  const inputRef = useRef([]);

  const handleChange = (index, value) => {
    if (value === "") return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (index < otp.length - 1) inputRef.current[index + 1].focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.code === "Backspace") {
      let newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      if (index > 0) {
        inputRef.current[index - 1].focus();
      }
    }
  };

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

  return (
    <div className="mt-24 w-[50vw] mx-auto">
      {otp.map((o, i) => (
        <input
          value={o}
          className="border-4 mr-4 w-20 p-4"
          maxLength={1}
          type="text"
          key={i}
          ref={(input) => (inputRef.current[i] = input)}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, i)}
        />
      ))}
      <button className="p-4 bg-green-400"> SUBMIT</button>
    </div>
  );
};

export default Main;
