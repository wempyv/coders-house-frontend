import React, { useState } from "react";
import Card from "../../../../components/shared/Card/Card";
import Button from "../../../../components/shared/Button/Button";
import TextInput from "../../../../components/shared/TextInput/TextInput";

const Phone = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <Card title="Enter your phone number" icon="phone">
      <TextInput
        value={phoneNumber}
        onChange={() => setPhoneNumber(e.target.value)}
      />
      <div>
        <Button text="Next" />
      </div>
    </Card>
  );
};

export default Phone;
