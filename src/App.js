import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LeftDiv from "./components/leftDIv";
import RightDiv from "./components/rightDiv";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-md-7.5 mt-2 ml-3"
          style={{
            backgroundColor: "white",
            paddingBottom: "30px",
            borderRadius: "25px",
          }}
        >
          <LeftDiv />
        </div>
        <div className="col-md-4.5">
          <RightDiv />
        </div>
      </div>
    </div>
  );
}

export default App;
