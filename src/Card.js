import React from "react";
import { NavLink } from "react-router-dom";
import yellow from "../src/img/yellow.jpg";
const Card = (props) =>{
  return(
    <>
        <div className="col-md-4">
        <div className="card text-center h-100">
  <img src={props.imgsrc} className="card-img-top" alt="demo" style={{height: "290px"}} />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.detail}</p>
    <NavLink to="/" className="btn btn-primary">{props.watch}</NavLink>
  </div>
</div>
</div>
    </>
  )

}
export default Card;