import React from "react";
import Button from "./Button";
import noRecordsFound from "../../assets/no-records-found.png";

const root = {
  textAlign: "center",
  color: "#6C757D",
  position: "relative",
  minHeight: "75vh"
};

const center = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "100%",
  transform: "translate(-50%, -50%)"
};

const NoRecordsFound = props => {
  const { icon, message, buttonLabel, buttonLink, buttonIcon } = props;
  return (
    <div style={root}>
      <div style={center}>
        {icon ? (
          <img
            className="m-auto"
            src={noRecordsFound}
            width="200px"
            height="200px"
            alt=""
          />
        ) : (
          ""
        )}
        <p>{message}</p>

        {buttonLink ? (
          <a href={buttonLink}>
            <Button label={buttonLabel} icon={buttonIcon} />
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NoRecordsFound;
