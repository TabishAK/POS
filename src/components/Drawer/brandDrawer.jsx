import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import "../../CSS/rightDiv.css";
import FontAwesome from "react-fontawesome";

const useStyles = makeStyles({
  list: {
    width: 380,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    ></div>
  );

  return (
    <div>
      <React.Fragment>
        <Button
          onClick={toggleDrawer("right", true)}
          variant="contained"
          disableElevation
          style={{
            // marginLeft: props.btnInfo.ml,
            marginTop: "35px",
            marginRight: "15px",
            height: "32px",
            borderRadius: "15px",
            backgroundColor: "#dc3545",
            color: "white",
            width: "120px",
            outline: "none",
          }}
        >
          <FontAwesome
            style={{ cursor: "pointer" }}
            name="paint-brush"
            className="mr-1 "
          />
          Brand
        </Button>
        <Drawer
          containerStyle={{ height: "calc(100% - 64px)", top: 64 }}
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
          <h3 className="ml-4 mt-3" style={{ color: "#dc3545" }}>
            <FontAwesome
              style={{ cursor: "pointer" }}
              name="paint-brush"
              className="mr-1 "
            />
            Brand
          </h3>
          <div className="container-fluid">
            <div className="row margin-right">
              {props.brandData.map((data) => (
                <div
                  className="category-card col-sm-4"
                  onClick={() => props.handleData(data)}
                >
                  <img src={data.image} alt="our-product" />
                  <p>{data.name}</p>
                </div>
              ))}
            </div>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
