import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
const Service = () =>{
  return(
    <>
    <section className="py-5">
      <div className="text-center py-4">
      <h1 className="netflixheading">NETFLIX LIST2</h1>
      </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="row gy-4 justify-content-center">
            {Sdata.map((val, ind) =>{
              return <Card key={ind} imgsrc={val.imgscr} title={val.title} detail={val.detail} watch={val.watch} />
            })}
        </div>
        </div>
      </div>
    </div>
    </section>
    </>
  )

}
export default Service;