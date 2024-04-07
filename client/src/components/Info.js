import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical } from "@fortawesome/free-solid-svg-icons";
import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";
import "../styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Emergency Care"
          description="Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention, our team of
            dedicated healthcare professionals is available 24/7 to provide
            prompt and efficient care."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Handicap Care"
          description="Our dedicated team provides expert, personalized care for individuals
            with disabilities, enhancing their quality of life through comprehensive medical
            support, therapy, and accessibility solutions."
          icon={faAccessibleIcon}
        />

        <InformationCard
          title="Heart Disease"
          description="Our team of experienced cardiologists and medical experts use
            state-of-the-art technology to assess your cardiovascular health and
            design personalized treatment plans. From comprehensive screenings
            to advanced interventions, we are committed to helping you maintain
            a healthy heart and lead a fulfilling life."
          icon={faHeartPulse}
        />

      </div>
    </div>
  );
}

export default Info;
