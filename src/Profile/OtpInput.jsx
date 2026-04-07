const OtpInput = ({ otp, setOtp }) => {
  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const otpArray = otp.split("");
    otpArray[index] = value;
    setOtp(otpArray.join(""));
  };

  return (
    <div className="flex justify-between gap-2">
      {[...Array(6)].map((_, i) => (
        <input
          key={i}
          maxLength={1}
          value={otp[i] || ""}
          onChange={(e) => handleChange(e.target.value, i)}
          className="w-12 h-12 text-center text-lg bg-black border border-gray-700 rounded-lg outline-none focus:border-cyan-400"
        />
      ))}
    </div>
  );
};

export default OtpInput;
