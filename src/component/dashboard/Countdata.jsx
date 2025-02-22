
import React, { useRef, useState, useEffect } from 'react';
import { LanguageOutlined, LibraryBooksOutlined, PeopleAltOutlined } from '@mui/icons-material';
import CountUp from 'react-countup';
import './countdata.css'

const CounterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <>
     {/* style={{background: "linear-gradient(to bottom, white 50%, #e9e5e5 50%)"}} */}
    {/* <div className="counter-section-heading">
       <p>{translations.Countdata.Our_Success}</p>
       <h4>{translations.Countdata.We_have_a_proven_track_record_of_success}</h4>
    </div> */}
    <section className="counter-section py-5" ref={counterRef}>
      <div className="container text-center">
        <div className="row mt-4">
          {/* {translations.Countdata.Books_Sold} */}
          <div className="col-md-4 mb-4" >
            <div className="counter-card p-4" style={{borderRadius:"22px",background:"rgb(168 43 38)",color:"#ffd700ad",width:"20vw"}}>
              <LibraryBooksOutlined fontSize="large" style={{ color: "#ffd700ad" }} />
              <h3 className="mt-3">
                {isVisible && <CountUp end={1000} duration={3} suffix="+" />}
              </h3>
              {/* <p className="text-#ffd700ad">{translations.Countdata.Books_Sold}</p> */}
            </div>
          </div>

          {/* {translations.Countdata.Families_Benefited} */}
          <div className="col-md-4 mb-4">
            <div className="counter-card p-4" style={{borderRadius:"22px",background:"rgb(168 43 38)",color:"#ffd700ad",width:"20vw"}}>
              <PeopleAltOutlined fontSize="large" style={{ color: "#ffd700ad" }} />
              <h3 className="mt-3">
                {isVisible && <CountUp end={500} duration={3} suffix="+" />}
              </h3>
              {/* <p className="text-#ffd700ad">{translations.Countdata.Families_Benefited}</p> */}
            </div>
          </div>

          {/* {translations.Countdata.Communities_Reached} */}
          <div className="col-md-4 mb-4">
            <div className="counter-card p-4" style={{borderRadius:"22px",background:"rgb(168 43 38)",color:"#ffd700ad",width:"20vw"}}>
              <LanguageOutlined fontSize="large" style={{ color: "#ffd700ad" }} />
              <h3 className="mt-3">
                {isVisible && <CountUp end={50} duration={3} suffix="+" />}
              </h3>
              {/* <p className="text-#ffd700ad">{translations.Countdata.Communities_Reached}</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default CounterSection;

