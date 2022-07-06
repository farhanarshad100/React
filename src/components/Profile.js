// import { Component } from "react";
// function Profile(props){
//    const{name, lastname} = props;
//     return(
//         <h1>
//             Name: {props.name}{props.lastname}
//         </h1>
//     )
// }

// export default Profile;

import { Component } from "react";
function Profile (props){
    const{name, lastname} = props;
    return(
        <h1>
            Name: {name}{lastname}
        </h1>
    )
}
export default Profile; 