import React from "react";
import OptFormWrapper from "../components/OptForm/OptFormWrapper";
import OptFormText from "../components/OptForm/OptFormText";
import OptFormEmail from "../components/OptForm/OptFormEmail";
import OptFormButton from "../components/OptForm/OptFormButton";

function OptFormCompound() {
  return (
    <>
      <OptFormText>
        Ready to watch? Enter your email to create your membership <br/>and see all your Birthday Messages.
      </OptFormText>
      <OptFormWrapper>
        <OptFormEmail placeholder="Email Address" />
        <OptFormButton>Get Started</OptFormButton>
      </OptFormWrapper>
    </>
  );
}

export default OptFormCompound;
