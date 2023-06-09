// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./testimonials.css";

const data = [
  {
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Sherbin",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos saepe non quibusdam natus perspiciatis asperiores iure!lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, alias.",
  },
  {
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Renish",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos saepe non quibusdam natus perspiciatis asperiores iure!lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, alias.",
  },
  {
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Jenly",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos saepe non quibusdam natus perspiciatis asperiores iure!lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, alias.",
  },
  {
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Brijesh",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos saepe non quibusdam natus perspiciatis asperiores iure!lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, alias.",
  },
];

const Testimonials = () => {
  return (
    <section id="section">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container mySwiper"
        pagination={true}
        spaceBetween={40}
        modules={[Pagination]}
      >
        {data.map((ele, id) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={ele.avatar} alt={ele.name} />
              </div>
              <h5 className="client__name">{ele.name}</h5>
              <small className="client__review">{ele.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonials;

// {/* ---------------- */}
// <article className="testimonial">
//   <div className="client__avatar">
//     <img
//       src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
//       alt="client-1"
//     />
//   </div>
//   <h5 className="client__name">Brijesh</h5>
//   <small className="client__review">
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
//     saepe non quibusdam natus perspiciatis asperiores iure!lorem10 Lorem
//     ipsum dolor sit amet consectetur adipisicing elit. Eum, alias.
//   </small>
// </article>
