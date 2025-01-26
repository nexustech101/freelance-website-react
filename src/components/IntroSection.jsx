import { CheckCircle, Lightbulb, Monitor } from "lucide-react";
import image from "../assets/mobile-responsive.png";
import { ContactFormModal } from "./ContactForm";
import { ImageToParticles } from "./ParticalCanvas";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const IntroSection = () => {
  const [pixelRef, pixelIsIntersecting] = useIntersectionObserver({ threshold: 0.5 });
  const [qualityRef, qualityIsIntersecting] = useIntersectionObserver({ threshold: 0.5 });
  const [uiRef, uiIsIntersecting] = useIntersectionObserver({ threshold: 0.5 });
  const [articleRef, articleIsIntersecting] = useIntersectionObserver({ threshold: 0.5 });

  return (
    <div className='intro-section text-gray-800'>
      {/* Top Section with Feature Cards */}
      <div className='top-container'>
        <section
          ref={pixelRef}
          className={`fade-section feature-card ${
            pixelIsIntersecting ? "fade-in" : "fade-out"
          }`}
        >
          <div className='feature-card-icon pixel-perfect-icon'>
            <Monitor className='w-7 h-7 text-green' />
          </div>
          <h3 className='font-semibold text-lg mb-2'>Pixel Perfect</h3>
          <p className='text-sm text-gray-600'>
            Most common methods for designing websites that work well on desktop
            are responsive and adaptive design.
          </p>
        </section>

        <section
          ref={qualityRef}
          className={`fade-section feature-card ${
            qualityIsIntersecting ? "fade-in" : "fade-out"
          }`}
        >
          <div className='feature-card-icon high-quality-icon'>
            <CheckCircle className='w-7 h-7 text-green' />
          </div>
          <h3 className='font-semibold text-lg mb-2'>High Quality</h3>
          <p className='text-sm text-gray-600'>
            Most common methods for designing websites that work well on desktop
            are responsive and adaptive design.
          </p>
        </section>

        <section
          ref={uiRef}
          className={`fade-section feature-card ${
            uiIsIntersecting ? "fade-in" : "fade-out"
          }`}
        >
          <div className='feature-card-icon creative-ui-icon'>
            <Lightbulb className='w-7 h-7 text-green' />
          </div>
          <h3 className='font-semibold text-lg mb-2'>Creative UI</h3>
          <p className='text-sm text-gray-600'>
            Most common methods for designing websites that work well on desktop
            are responsive and adaptive design.
          </p>
        </section>
      </div>

      {/* Bottom Section with Hero Image and Content */}
      <div
        ref={articleRef}
        className={`fade-section hero-section-2 ${
          articleIsIntersecting ? "fade-in" : "fade-out"
        }`}
      >
        <div>
          <img src={image} alt='Team collaboration' />
          {/* <ImageToParticles
            className='hero-section-img'
            imageSrc={image}
            particleSize={2}
            particleSpacing={3}
          /> */}
        </div>
        <div className='hero-text-2'>
          <span>
            <pre style={{ color: "#00ff73" }}>I&#39;m a developer,</pre>
            <h1 className='text-3xl font-bold text-gray-900 mb-4'>
              I Can Build Anything You Want
            </h1>
          </span>
          <p className='text-gray-700 text-lg mb-6'>
            Hello there! I&#39;m a developer, and I&#39;m very passionate and
            dedicated to my work. With 5+ years of professional experience with
            engineering software solutions, I have acquired the skills and
            knowledge necessary to make your project a success. I enjoy every
            step of the design process, from discussion to collaboration.
          </p>
          <ContactFormModal text='Get Connected' width='100%' />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
