import React, { useEffect } from "react";

const Result = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { Result, theme, changeTheme } = props;

  useEffect(() => {
    const backgroundColor = theme === "dark" ? "#759FD1" : "#C4D4E8";
    const modeButton = document.getElementById("mode");

    if (modeButton) {
      modeButton.innerText = theme === "light" ? "Dark Mode" : "Light Mode";
    }

    document.body.style.backgroundColor = backgroundColor;
  }, [theme]);

  const percentage = (Result / 5) * 100 + "%";

  const reload = () => {
    document.location.reload();
  };

  return (
    <div className="ResultBox">
      <h2>Final Results</h2>
      <h3>
        {Result} correct out of 5 - ({percentage})
      </h3>
      <button onClick={reload}>Restart game</button>
    </div>
  );
};

export default Result;
