import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Colors from "./colors/Colors";
import AddColor from "./component/AddColor";
import SingleColor from "./colors/SingleColor";

function App() {
  const [colors, setColors] = useState(["Red", "Blue", "Green"]);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={() => <Colors colors={colors} />} />
        <Route
          exact
          path='/colors'
          component={() => <Colors colors={colors} />}
        />
        <Route
          exact
          path='/colors/:color'
          component={() => <SingleColor colors={colors} />}
        />

        <Route
          exact
          path='/color/new'
          component={() => <AddColor handleColor={setColors} />}
        />
        <Route path='*' component={() => <Colors colors={colors} />} />
      </Switch>
    </Router>
  );
}

export default App;
