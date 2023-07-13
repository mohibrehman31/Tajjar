import "./index.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Button } from "@mui/joy";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

export default function SubmitPosting() {

    const [step, setStep] = useState<number>(0)

  const isStepFailed = (step: number) => {
    return step === 2;
  };

  return (
    <div className="submit-posting-page">
      <div className="submit-posting-body">
        <Box sx={{ width: "80%" }}>
          <Stepper activeStep={step}>
            {steps.map((label, index) => {
              const labelProps: {
                optional?: React.ReactNode;
                error?: boolean;
              } = {};
              if (isStepFailed(index)) {

                labelProps.error = true;
              }

              return (
                <Step key={label}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>

        <Button variant="outlined" onClick={() =>setStep((prevState) => prevState + 1)}>step</Button>
      </div>
    </div>
  );
}
