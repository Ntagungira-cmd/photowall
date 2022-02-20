import { connect } from "react-redux";
import { addPhoto, removePhoto } from "./actions";
import Main from "../photowall/main";

const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPhoto: (postadded) => dispatch(addPhoto(postadded)),
    removePhoto: (post) => dispatch(removePhoto(post)),
  };
};
export const Container = connect(mapStateToProps, mapDispatchToProps)(Main);
