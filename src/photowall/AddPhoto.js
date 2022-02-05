import React, { Component } from "react";

class AddPhoto extends Component {
  constructor() {
    super();
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handlesubmit(event) {
    event.preventDefault();
    const imageLink = event.target.elements.link.value;
    const description = event.target.elements.description.value;
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: imageLink
    };
    if (imageLink && description) {
      this.props.onAddphoto(post);
    }
  }
 
  render() {
    return (
      <div>
        <h1>Photowall</h1>
        <div className="form">
          <form onSubmit={this.handlesubmit}>
            <input
              className="input"
              type="text"
              placeholder="Link"
              name="link"
            />
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
}
export default AddPhoto;
