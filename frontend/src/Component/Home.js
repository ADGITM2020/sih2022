import React, { Fragment } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import "./Home.css";
import InfoCard from "./InfoCard";

function Home() {

  const items = [
    {
      name: "Gateway to your passion!",
      url: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/edu/art/5bfc6068a8178.jpeg",
    },
    {
      name: "Get Updated Anytime Anywhere!",
      url: "https://www.clipartmax.com/png/full/299-2996925_help-your-employees-to-keep-up-with-company-life-and-graphic-design.png",
    },
    {
      name: "Build Community",
      url: "https://clariti.b-cdn.net/wp-content/uploads/2021/02/Online_collaboration-min-1.jpg",
    },
    {
      name: "Keep Track Of Your Progress",
      url: "https://www.clipartmax.com/png/full/142-1428012_project-management-accounting.png",
    },
  ];
  return (
    <Fragment>
      <div className="carousel">
        <Carousel
          autoPlay
          swipe
          cycleNavigation
          animation="slide"
          duration={500}
          className="carouselContainer"
        >
          {items.map((item) => (
            <Paper className="carouselItems">
              <img className="carouselImage" src={item.url} alt="" />
              <h2 className="tagLine">{item.name}</h2>
            </Paper>
          ))}
        </Carousel>
      </div>
     
      <div className="quickTour">
        <h1>Quick Tour</h1>
      </div>
      <InfoCard />
    </Fragment>
  );
}

export default Home;
