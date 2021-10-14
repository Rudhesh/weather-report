import { Route } from "react-router-dom";
import Weather from "./Weather";
import ClimateChange from "./ClimateChange";
import Navigation from "./component/Navigation";
import { Switch } from "react-router-dom";
import News from "./News";
import More from "./component/More.js";
import Apexchart from "./component/Apexchart.js";
import GdpChart from "./component/GdpChart.js";

function App() {
  return (
    <div>
      <Navigation />

      <Switch>
        <Route exact path="/">
          <Weather />
        </Route>
        {/* <Route exact path="/climate">
    <ClimateChange/> 
    </Route> */}
        <Route exact path="/News">
          <News />
        </Route>
        <Route exact path="/more">
          <More />
        </Route>
        <Route exact path="/chart">
          <div
            style={{
              display: "block",
              background: "lightgray",
              padding: "80px 20px",
              margin: "0 auto",
            }}
          >
            <Apexchart />
            <GdpChart />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
