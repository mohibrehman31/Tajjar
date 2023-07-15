import "./index.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Button } from "@mui/joy";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

export default function SubmitPosting() {
  const [step, setStep] = useState<number>(0);
  const [age, setAge] = useState<number>(0);

  const isStepFailed = (step: number) => {
    return step === 3;
  };

  return (
    <div className="submit-posting-page">
      <div className="submit-posting-body">
        <Box
          sx={{
            width: "80%",
            backgroundColor: "#5e6eef",
            p: 2,
            borderRadius: 6,
          }}
        >
          <Stepper activeStep={step} sx={{ color: "black" }}>
            {steps.map((label, index) => {
              const labelProps: {
                optional?: React.ReactNode;
                error?: boolean;
              } = {};
              isStepFailed(index) && (labelProps.error = true);
              return (
                <Step key={label}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>

        <div style={{width: '200px'}}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Button
          variant="outlined"
          onClick={() => setStep((prevState) => prevState + 1)}
        >
          step
        </Button>
      </div>
    </div>
  );
}
