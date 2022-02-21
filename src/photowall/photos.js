import React from "react";
import PropTypes from "prop-types";

function Photos(props) {
  const post = props.posts;
  const removePhoto = props.removePhoto;
  // console.log(removePhoto);
  return (
    <figure className="figure">
      <img className="photo" src={post.imageLink} alt={post.description} />
      <figcaption>
        <p>{post.description}</p>
      </figcaption>
      <div className="button-container">
        <button
          onClick={() => {
            removePhoto(post);
          }}
        >
          Remove
        </button>
      </div>
    </figure>
  );
}

Photos.propTypes = {
  post: PropTypes.array,
  removePhoto: PropTypes.func.isRequired,
};
export default Photos;
