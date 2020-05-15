import React from "react";
import StyledNightmode from "./styles/StyledNIghtmode";

const Nighmode = ({ nightMode, nightModeCallback }) => {
  return (
    <StyledNightmode>
      <span>Nightmode: </span>
      <label className="switch">
        <input
          type="checkbox"
          checked={nightMode}
          onChange={nightModeCallback}
        />
        <span className="slider round" />
      </label>
    </StyledNightmode>
  );
};

export default Nighmode;
