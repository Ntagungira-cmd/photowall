import React, { Component } from "react";
import Title from "./title";
import Photowall from "./photowall";
import AddPhoto from "./AddPhoto";
import { Route, Routes } from "react-router-dom";
class Main extends Component {
  constructor() {
    super()
  }
  //   this.removePhoto = this.removePhoto.bind(this);
  //   //this.navigate=this.navigate.bind(this)
  // }
  // // This is called  when the remove button is clicked
  // removePhoto(postRemoved) {
  //   console.log(postRemoved.description);
  //   this.setState((state) => ({
  //     posts: state.posts.filter((post) => post !== postRemoved),
  //   }));
  // }

  // addPhoto(postadded) {
  //   this.setState((state) => ({
  //     posts: state.posts.concat([postadded]),
  //   }));
  
  render() {
    console.log(this.props)
    return (
      <Routes>
        {/*We use the render prop render multiple compoonents  */}
        <Route
          path="/"
          element={
            <div>
              <Title title={"PhotoWall"} />
              {/* onRemove is passed as a prop to the photowallcomponent. */}
              <Photowall
                posts={this.props}
              />
            </div>
          }
        />
        {/*We can use component={AddPhoto} if we only that one instance and no props */}
        <Route
          path="/addPhoto"
          element={
            <AddPhoto
              // onAddphoto={(addedPost) => {
              //   this.addPhoto(addedPost);
              // }}
            />
          }
        />
      </Routes>
    );
  }
}
export default Main;
