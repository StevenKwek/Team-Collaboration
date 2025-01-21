import React from 'react';
import './App.css';
import image1 from './images/talk of the town.svg';
import image2 from './images/indonesia globally.svg';
import image3 from './images/read more.svg'; 

const About = () => {
  const handleReadMoreClick = () => {
    window.location.href = '/read-more'; 
  };

  return (
    <section>
      <div className="image-text-container">
        <div className="image-container">
          <img
            src={image1}
            alt="Mission to make your brand the talk of the town"
          />
        </div>

        <div className="image-container">
          <img
            src={image2}
            alt="Based in Indonesia, operating globally. We prioritize effective and real strategies..."
          />

            <div className="read-more">
              <img
                src={image3}
                alt="Read more"
                onClick={handleReadMoreClick}
              />
            </div>
        </div>
      </div>

    
      <div className="stats-container">
        <div className="stat-box">
          <h2>50M+</h2>
          <p>organic views</p>
        </div>
        <div className="stat-box">
          <h2>200.000+</h2>
          <p>organic followers</p>
        </div>
        <div className="stat-box">
          <h2>10M+</h2>
          <p>likes</p>
        </div>
        <div className="stat-box">
          <h2>100.000%+</h2>
          <p>increased engagement</p>
        </div>
      </div>
    </section>
  );
};

export default About;
