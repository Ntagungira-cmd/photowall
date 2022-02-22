import React, { Component } from "react";


class AddPhoto extends Component {
  constructor() {
    super();
    this.handlesubmit = this.handlesubmit.bind(this);
    this.redirect=this.redirect.bind(this);
  }


  handlesubmit(event) {
    event.preventDefault();
    const imageLink = event.target.elements.link.value;
    const description = event.target.elements.description.value;

    const postadded = {
      id: Number(new Date()),
      description: description,
      imageLink: imageLink,
    };
    if (imageLink && description) {
      this.props.prop.addPhoto(postadded);
    }
  }

  render() {
    console.log(this.props);
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
