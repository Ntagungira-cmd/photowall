import React from 'react';
//functional component
function Title(props){
    return  <h1>{props.title}</h1>
}

//class component
// class Title extends Component{
//     render(){
//         return (
//         <h1>{this.props.title}</h1>
//         )
//     }
// }
export default Title