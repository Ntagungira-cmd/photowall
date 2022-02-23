import React from "react";
import { useNavigate } from "react-router-dom";

function AddPhoto(props) {
  let navigate = useNavigate();

  const handlesubmit = (event) => {
    event.preventDefault();
    const imageLink = event.target.elements.link.value;
    const description = event.target.elements.description.value;

    const postadded = {
      id: Number(new Date()),
      description: description,
      imageLink: imageLink,
    };
    if (imageLink && description) {
      props.prop.addPhoto(postadded);
      return navigate("/");
    }
  };
  //console.log(props);
  return (
    <div>
      <h1>Photowall</h1>
      <div className="form">
        <form onSubmit={handlesubmit}>
          <input className="input" type="text" placeholder="Link" name="link" />
          <input
            className="input"
            type="text"
            placeholder="Description"
            name="description"
          />
          <button className="formbutton"> Post </button>
        </form>
      </div>
    </div>
  );
}

export default AddPhoto;
