import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import Experience from "./Experience";
import Education from "./Education";
import Skill from "./Skill";
import Summary from "./Summary";

const Parent = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {step === 1 && <ContactInfo onNext={handleNext} progress={progress} />}
      {step === 2 && (
        <Experience
          onPrevious={handlePrevious}
          onNext={handleNext}
          progress={progress}
        />
      )}
      {step === 3 && (
        <Education
          onPrevious={handlePrevious}
          onNext={handleNext}
          progress={progress}
        />
      )}
      {step === 4 && (
        <Skill
          onPrevious={handlePrevious}
          onNext={handleNext}
          progress={progress}
        />
      )}
      {step === 5 && (
        <Summary onPrevious={handlePrevious} progress={progress} />
      )}
    </div>
  );
};

export default Parent;
