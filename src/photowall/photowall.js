import React from "react";
import Photos from "./photos";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {FaPlus} from "react-icons/fa"

// functional components
function Photowall(props) {
  return (
    <div>
      <Link className="addIcon" to="/addPhoto"><FaPlus/></Link>
      {/* <button className="addIcon" onClick={props.onNavigate}></button> */}
      <div className="photo-grid">
        {/* Map over the elements in the posts array and create an instance of  Photos for each element */}

        {/* In the photos instance we create for each element in the post array we pass
        it the onRemove method as a prop (onRemovePhoto)  */}
        {props.posts
          .sort(function (a, b) {
            return b.id - a.id;
          })
          .map((post, index) => (
            <Photos key={index} posts={post} onRemovePhoto={props.onRemove} />
          ))}
      </div>
    </div>
  );
}
Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};
export default Photowall;

