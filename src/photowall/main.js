import React, { Component } from "react";
import Title from "./title";
import Photowall from "./photowall";
import AddPhoto from "./AddPhoto";
import { Route, Routes } from "react-router-dom";
class Main extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    console.log(this.props);
    return (
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Title title={"PhotoWall"} />
              <Photowall posts={this.props} />
            </div>
          }
        />
        <Route path="/addPhoto" element={<AddPhoto prop={this.props} />} />
      </Routes>
    );
  }
}
export default Main;
