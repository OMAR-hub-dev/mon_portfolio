import React, { useState } from 'react';
import "./reviews.scss"

const Reviews = () => {
  const [currentItem, setCurrentItem] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

  const showPerson = (index) => {
    setCurrentItem(index);
  };

  const handleNext = () => {
    setCurrentItem((prevItem) => (prevItem === reviews.length - 1 ? 0 : prevItem + 1));
  };

  const handlePrev = () => {
    setCurrentItem((prevItem) => (prevItem === 0 ? reviews.length - 1 : prevItem - 1));
  };

  const handleRandom = () => {
    setCurrentItem(Math.floor(Math.random() * reviews.length));
  };

  const { name, job, img, text } = reviews[currentItem];

  return (
    <div className="container">
      <h2>our reviews</h2>
    <div className="review">
      <div className="img-container">
        <img src={img} alt={name} className="person-img" />
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handlePrev}>
          Précédent
        </button>
        <button className="next-btn" onClick={handleNext}>
          Suivant
        </button>
        
      </div>
      <button className="random-btn" onClick={handleRandom}>
          Aléatoire
        </button>
    </div>
    </div>
  );
};

export default Reviews;
