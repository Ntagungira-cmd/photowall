import React from 'react';
import PropTypes from 'prop-types'
//functional  components
function Photos(props){
    const post = props.posts; 
    return <figure className="figure">
    <img className="photo" src={post.imageLink} alt={post.description}/>
    <figcaption><p>{post.description}</p></figcaption>
    <div className="button-container">
        {/* We give the button an onclick eventlistener and in the listener we pass 
        a function that returns The onRemovePhoto method with post as an argument*/}
        <button  onClick={() =>{
            props.onRemovePhoto(post)
        }}>Remove</button>
    </div>
       </figure>  
}

Photos.propTypes={
post:PropTypes.array.isRequired,
onRemovePhoto:PropTypes.func.isRequired
}

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