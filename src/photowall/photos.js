import React from "react";
import PropTypes from "prop-types";

function Photos(props) {
  const post = props.posts;
  const removePhoto=props.removePhoto;
  //console.log(props);
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
  post: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

//class components
// class Photos extends Component{
//     render(){
//         const post = this.props.post;
// return <figure className="figure">
//     <img className="photo" src={post.imageLink} alt={post.description}/>
//     <figcaption><p>{post.description}</p></figcaption>
//     <div className="button-container">
//         <button className="remove-button">Remove</button>
//     </div>
//        </figure>
//     }
// }
export default Photos;
