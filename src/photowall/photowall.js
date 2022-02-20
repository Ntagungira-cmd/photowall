import React from "react";
import Photos from "./photos";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaPlus,FaRegMehRollingEyes } from "react-icons/fa";

function Photowall(props) {
  const posts = props.posts.posts;
  const removePhoto = props.posts.removePhoto;
  //console.log(props)
  return (
    <div>
      <Link className="addIcon" to="/addPhoto">
        <FaPlus />
      </Link>
      {/* <button className="addIcon" onClick={props.onNavigate}></button> */}
      <div className="photo-grid">
        {posts.length > 0 ? (
          posts
            .sort(function (a, b) {
              return b.id - a.id;
            })
            .map((post, index) => (
              <Photos key={index} posts={post} removePhoto={removePhoto} />
            ))
        ) : (
          <h2>Sorry!!! No Photos available.<FaRegMehRollingEyes/></h2>
        )}
      </div>
    </div>
  );
}
Photowall.propTypes = {
  posts: PropTypes.object.isRequired,
  removePhoto: PropTypes.func,
};
export default Photowall;
