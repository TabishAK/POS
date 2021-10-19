import React from "react";

export default function DisableElevation(props) {
  return (
    <Button
      variant="contained"
      disableElevation
      style={{
        marginLeft: props.btnInfo.ml,
        marginTop: "35px",
        marginRight: "15px",
        borderRadius: "15px",
        backgroundColor: props.btnInfo.color,
        color: "white",
        width: "120px",
        outline: "none",
      }}
    >
      {props.btnInfo.name}
    </Button>
  );
}
