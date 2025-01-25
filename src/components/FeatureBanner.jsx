import fiveStars from "../assets/five-stars.png";
import { features } from "../data/features";

const FeatureBanner = () => {

  return (
    <div className="banner-wrapper">
      <div className="five-star-container">
        <img src={fiveStars} alt="..." />
        <p>
          <em>&#39;Quality Assurance Guaranteed!&#39;</em>
        </p>
      </div>
      <div className="banner">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-quote">
              <em>{feature.quote}</em>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureBanner;
