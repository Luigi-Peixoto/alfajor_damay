import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeedbackCard = ({ name, feedback }) => {
  return (
    <div className="bg-white min-h-52 p-6 rounded-lg shadow-lg mx-3 ">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{name}</h3>
      <p className="text-gray-600 leading-relaxed">{feedback}</p>
    </div>
  );
};

const Feedbacks = ({ feedbacks }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section
      id="feedbacks"
      className="w-full bg-logoYellow py-12 font-nunito border-b-2 border-darkBrownUnderlineHeader"
    >
      <div className="container mx-auto">
        <h1 className="text-5xl font-lobster font-bold text-black mb-12 text-center">
          Feedbacks
        </h1>
        <Slider {...settings}>
          {feedbacks.map((feedback, index) => (
            <FeedbackCard
              key={index}
              name={feedback.name}
              feedback={feedback.comment}
              icon={feedback.icon}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Feedbacks;
