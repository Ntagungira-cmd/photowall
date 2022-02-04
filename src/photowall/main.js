import React, { Component } from "react";
import Title from "./title";
import Photowall from "./photowall";
import AddPhoto from "./AddPhoto";
import { Route, Routes } from "react-router-dom";
class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: 0,
          description: "beautiful landscape",
          imageLink:
            "https://images.unsplash.com/photo-1609952048180-7b35ea6b083b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        },
        {
          id: 1,
          description: "Nature",
          imageLink:
            "https://images.unsplash.com/photo-1610508916731-8f64630f35a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        },
        {
          id: 2,
          description: "On a vacation!",
          imageLink:
            "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg",
        },
      ],
      //screen:'photos' // photos to display photos page or addphotos to display addphotos page
    };
    this.removePhoto = this.removePhoto.bind(this);
    //this.navigate=this.navigate.bind(this)
  }
  // This is called  when the remove button is clicked
  removePhoto(postRemoved) {
    console.log(postRemoved.description);
    this.setState((state) => ({
      posts: state.posts.filter((post) => post !== postRemoved),
    }));
  }

  addPhoto(postadded) {
    this.setState((state) => ({
      posts: state.posts.concat([postadded]),
    }));
  }

  render() {
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
                posts={this.state.posts}
                onRemove={this.removePhoto}
                onNavigate={this.navigate}
              />
            </div>
          }
        />
        {/*We can use component={AddPhoto} if we only that one instance and no props */}
        <Route
          path="/addPhoto"
          element={
            <AddPhoto
              onAddphoto={(addedPost) => {
                this.addPhoto(addedPost);
              }}
            />
          }
        />
      </Routes>
    );
  }
}
export default Main;
