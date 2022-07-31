import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
  const { one, two, three, four, five, six } = props;
  return (
    <>
      <div className="container bg-dark">
        <div className="row justify-content-md-center">
          <div className="rounded border-left col-md-auto bg-secondary text-white mx-2 my-2"><h1 className="mt-1"><i className="fas fa-clock"></i></h1></div>
          <div className="rounded border-left  col-md-auto bg-secondary text-white mx-2 my-2"> <h1 className="mt-1">{one}</h1> </div>
          <div className="rounded border-left col-md-auto bg-secondary text-white mx-2 my-2"> <h1 className="mt-1">{two} </h1></div>
          <div className="rounded border-left col-md-auto bg-secondary text-white mx-2 my-2"> <h1 className="mt-1">{three}</h1></div>
          <div className="rounded border-left col-md-auto bg-secondary text-white mx-2 my-2"> <h1 className="mt-1">{four}</h1> </div>
          <div className="rounded border-left col-md-auto bg-secondary text-white mx-2 my-2"> <h1 className="mt-1">{five}</h1> </div>
          <div className="rounded border-left col-md-auto bg-secondary text-white mx-2 my-2"> <h1 className="mt-1">{six} </h1></div>
        </div>
      </div>
    </>
  );
};

export default Home;
