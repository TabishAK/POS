import React from "react";
import ReactCollapse from "react-collapse";
import "./collapse_haha.css";
// import NestedTab from "../nestedTab/nestedTab";
import FontAwesome from "react-fontawesome";

const { Collapse } = ReactCollapse;

class ForceInitialAnimation extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { isOpened: false, name: "check", color: "#17a2b8" };
  }

  handleCollapse = () => {
    let status = this.state.isOpened;
    if (status === true) {
      this.setState({ isOpened: false, name: "check", color: "#17a2b8" });
    } else {
      this.setState({ isOpened: true, name: "times", color: "red" });
    }
  };

  render() {
    const { isOpened } = this.state;

    return (
      <div>
        <div className="config">
          <label className="label">
            <h5>Recent Transaction</h5>
            <FontAwesome
              style={{
                color: this.state.color,
                cursor: "pointer",
                fontSize: "20px",
                position: "relative",
                left: "55%",
                border: "1px solid gainsboro",
                padding: "4px",
              }}
              name={this.state.name}
              onClick={this.handleCollapse}
            ></FontAwesome>
          </label>
        </div>
        <Collapse
          isOpened={isOpened}
          initialStyle={{ height: 0, overflow: "hidden" }}
        >
          <div className="blob">{/* <NestedTab /> */}</div>
        </Collapse>
      </div>
    );
  }
}

export default ForceInitialAnimation;
