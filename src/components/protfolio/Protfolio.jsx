import "./protfolio.css";
const data = [
  {
    id: 1,
    image:
      "https://cdn.dribbble.com/userupload/6986748/file/original-0fa500a679cc7b5d40c109d3614b9b6b.png?compress=1&resize=640x480&vertical=center",
    title: "Omnifood an AI Food Delivery",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image:
      "https://cdn.dribbble.com/userupload/6986748/file/original-0fa500a679cc7b5d40c109d3614b9b6b.png?compress=1&resize=640x480&vertical=center",
    title: "Mapty : map your workouts",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 3,
    image:
      "https://cdn.dribbble.com/userupload/6986748/file/original-0fa500a679cc7b5d40c109d3614b9b6b.png?compress=1&resize=640x480&vertical=center",
    title: "Guess The Number!",
    github: "https://github.com",
    demo: "https://github.com",
  },
];
const Protfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfoilo__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfoilo__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Protfolio;

// {
//   /* ----------- */
// }
// <article className="portfoilo__item">
//   <div className="portfolio__item-image">
//     <img
//       src="https://cdn.dribbble.com/userupload/6986748/file/original-0fa500a679cc7b5d40c109d3614b9b6b.png?compress=1&resize=640x480&vertical=center"
//       alt="img-1"
//     />
//   </div>
//   <h3>This is a portfolio item title</h3>
//   <div className="portfoilo__item-cta">
//     <a href="https://github.com" className="btn" target="_blank">
//       Github
//     </a>
//     <a href="https://github.com" className="btn btn-primary" target="_blank">
//       Live Demo
//     </a>
//   </div>
// </article>;
