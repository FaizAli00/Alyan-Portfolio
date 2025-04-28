import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const feedbacks = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "CEO, BrightTech",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    feedback: "Working with this team was a fantastic experience. Their dedication and attention to detail helped our project succeed beyond expectations!",
  },
  {
    id: 2,
    name: "Michael Smith",
    position: "CTO, SoftSolutions",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    feedback: "They deliver quality work on time. Communication was smooth, and they brought innovative ideas to the table.",
  },
  {
    id: 3,
    name: "Sophia Williams",
    position: "Marketing Director, CreatiWave",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    feedback: "Absolutely loved the designs and development! Professional and easy to work with.",
  },
  {
    id: 4,
    name: "Daniel Martinez",
    position: "Founder, Startify",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    feedback: "They understood our brand vision perfectly and built a website that's both beautiful and functional. Highly recommended!",
  },
  {
    id: 5,
    name: "Ava Brown",
    position: "Product Manager, InnovateHub",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    feedback: "A game-changer for our online presence. Their team is skilled, responsive, and creative!",
  },
];

const FeedBacks = () => {
  const settings = {
    dots: false,
    arrows: false, // Removes prev/next buttons
    infinite: true,
    speed: 6000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
 
  return (
    <div className="py-12 bg-[rgb(9,9,37)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6"> {/* Reduced side padding */}
        <h2 className="text-3xl font-bold text-center mb-6 text-[rgba(214,218,240,1)]">What Our Clients Say</h2>
        <p className="pb-8 text-center text-[rgba(215,217,255,1)]">With a strong foundation in frontend development and a keen eye for design, <br /> I specialize in creating interactive and responsive web.</p>
        <Slider {...settings}>
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="px-8"> {/* Reduced card padding */}
              <div className="flex flex-col items-center text-center bg-[rgb(12,12,38)] p-5 rounded-lg shadow-md w-full h-72 transition-transform transform hover:scale-105 mx-1"> {/* Reduced card padding and added mx-1 */}
                <img
                  src={feedback.image}
                  alt={feedback.name}
                  className="w-16 h-16 rounded-full mb-3 object-cover" // Reduced image size
                />
                <h3 className="text-lg font-semibold text-[rgba(214,218,240,1)]">{feedback.name}</h3>
                <p className="text-gray-500 text-sm mb-2 text-[rgba(215,217,255,1)]">{feedback.position}</p>
                <p className="text-gray-600 text-sm line-clamp-4 px-2 text-[rgba(215,217,255,1)]">
                  {feedback.feedback}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeedBacks;