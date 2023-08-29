import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3><img src="https://media.istockphoto.com/id/1411610158/photo/multi-colored-programming-language-source-code-design-example-front-view-composition-on-a.webp?b=1&s=170667a&w=0&k=20&c=OCABkp7sB5R2eXpipNUIEqjYqSr2wOplAO9j7aTLhAc=" width={1310} height={400} /></h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}