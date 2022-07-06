import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/img/what-we-provide.png";
const Test = (props) =>{
return(
  <>
 <section id="header" className="py-5">
   <div className="container-fluid">
<div className="row">
  <div className="col-10 mx-auto">
 <div className="row d-flex align-items-center">
   <div className="col-md-6">
  <h1>{props.name}</h1>
  <p>We will build a small game during this tutorial. You might be tempted to skip it because you’re not building games — but give it a chance. The techniques you’ll learn in the tutorial are fundamental to building any React app, and mastering it will give you a deep understanding of React</p>
  <NavLink to={props.visit} className="btn btn-primary">{props.btname}</NavLink>
   </div>
   <div className="col-md-6 d-flex">
 <img src={props.imgsrc} className="img-fluid" alt=""/>
   </div>
 </div>
  </div>
</div>
   </div>
 </section>
  </>
)
}
export default Test;