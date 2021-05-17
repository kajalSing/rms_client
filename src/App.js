import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import RootRouter from './Router/rootRouter';
import "./global.css";
class App extends React.Component {
  render() {
    return (
      <>
   <RootRouter />
      </>

    )
  }
}

export default App;
