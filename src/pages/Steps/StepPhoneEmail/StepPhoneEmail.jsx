import React from "react";

const phoneEmailMap = {
  phone: Phone,
  email: Email,
};

const StepPhoneEmail = ({ onNext }) => {
  const [type, setType] = useState("phone");
  const Component = phoneEmailMap[type];

  function onNext() {
    setStep(step + 1);
  }

  return (
    <div>
      <Component onNext={onNext} />
    </div>
  );
};

export default StepPhoneEmail;
