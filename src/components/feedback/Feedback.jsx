import React, { useState } from 'react';
import './feedback.scss'; 

const feedbackData = [
  {
    id: 1,
    name: "Nicolas :",
    text: "J'ai vraiment apprécié la simplicité et l'élégance de ce portfolio. Les projets sont bien présentés et les descriptions sont claires. Super boulot !",
    imgSrc: '/client-man.jpg',
    
  },
  {
    id: 2,
    name: "Camille  :",
    text: "J'aime beaucoup la section des projets, c'est très inspirant de voir tout ce que vous avez accompli. Continuez comme ça!",
    imgSrc: '/client-women.jpg',
    
  },
  {
    id: 3,
    name: "Lucas  :",
    text: "Le site est vraiment bien conçu, avec des animations fluides et un design moderne. C'est agréable de naviguer à travers vos projets et de voir vos compétences en action.",
    imgSrc: '/avatar3.jpg',
    
  },
  {
    id: 4,
    name: "Sarah  :",
    text: "J'aime beaucoup la façon dont vous avez structuré votre portfolio. Les projets sont mis en valeur de manière efficace et professionnelle.",
    imgSrc: '/avatar4.jpg',
    
  },
  {
    id: 5,
    name: "Patrick  :",
    text: "J'aime beaucoup la façon dont vous avez structuré votre portfolio. Les projets sont mis en valeur de manière efficace et professionnelle.",
    imgSrc: '/client-2.jpg',
    
  },
];

const Feedback = () => {
  const [activeId, setActiveId] = useState(2); // Assuming the middle item is the initial active one

  const changeFeedback = (id) => {
    setActiveId(id);
  };

  const getItemClasses = (id) => {
    if (id === activeId) return 'feedback-item active';
    if (id === activeId - 1 || (activeId === 1 && id === feedbackData.length)) return 'feedback-item left';
    if (id === activeId + 1 || (activeId === feedbackData.length && id === 1)) return 'feedback-item right';
    return 'feedback-item';
  };

  return (
    <div className="feedback" id="feedback">
      <div className="container">
        <div className="section-title ">
          <h2>Avis</h2>
          <p className="lead">Ce qu'ils pensent de mon travail.</p>
          <div className="line"></div>
        </div>

        <div className="feedback-inner">
          <div className="feedback-container">
            {feedbackData.map((item) => (              
              <div
                key={item.id}
                className={getItemClasses(item.id)}
                data-id={item.id}
                onClick={() => changeFeedback(item.id)}
              >
                
                <p className="text"><img src={`${item.id === activeId ?'/quote-icon.png':'/quote-icon-dark.png'}`} className="quote-icon" alt="Quote Icon" />{item.name}</p>
                <p className="text">{item.text}</p>
                <div className="client">
                  <img src={item.imgSrc} alt="Client" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="feedback-btns ">
          {feedbackData.map((item) => (
            <button
              key={item.id}
              className={`feedback-btn ${item.id === activeId ? 'feedback-active-btn' : ''}`}
              onClick={() => changeFeedback(item.id)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
