import "./index.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Button } from "@mui/joy";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

const steps = ["Basic Details", "Motive", "End"];

const postingType: {
  [key: string]: {
    [key: string]: {
      type: string;
      options?: string[];
      extension?: { 
        [key: string]: {
        type: string;
        options?: string[];
        }
      };
    };
  };
} = {
  General: {
    Pickup: {
      type: "input",
    },
    Dropoff: {
      type: "input",
    },
    "Load Type": {
      type: "select",
      options: ["Containerized", "Break Bulk", "Bulk"],
      extension: {
        Containerized: {
        type: "select",
        options: ["FCL", "LCL"],
        }
      },
    },
  },
};



interface userSelectionType {
  [key: string]: string;
}

export default function SubmitPosting() {
  const [step, setStep] = useState<number>(0);
  const [userSelection, setSelection] = useState<userSelectionType>({});

  const isStepFailed = (step: number) => {
    return step === 3;
  };

  const handleChange = (field: string, value: string) => {
    let newChange: userSelectionType = {
      ...userSelection,
      [field]: value,
    };
    setSelection(newChange);
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

        <div className="submit-posting-form">
          <FormControl sx={{ width: "150px" }} size="small">
            <InputLabel id="demo-simple-select-label">Posting Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userSelection["posting_type"]}
              label="Posting Type"
              onChange={(e) => handleChange("posting_type", e.target.value)}
            >
              {Object.keys(postingType).map((type: string, index: number) => (
                <MenuItem key={index} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {userSelection.posting_type &&
            Object.keys(postingType[userSelection.posting_type]).map(
              (type: string, index) =>
                postingType[userSelection.posting_type][type].type ===
                "select" ? (
                  <FormControl sx={{ width: "150px" }} size="small" key={index}>
                    <InputLabel id="demo-simple-select-label">
                      {type}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={userSelection[type]}
                      label={type}
                      onChange={(e) => handleChange(type, e.target.value)}
                    >
                      {postingType[userSelection.posting_type][
                        type
                      ].options?.map((type, index) => (
                        <MenuItem key={index} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                ) : (
                  <TextField
                    id="filled-basic"
                    label={type}
                    variant="filled"
                    sx={{ width: "150px" }}
                    size="small"
                    value={userSelection[type]}
                    onChange={(e) => handleChange(type, e.target.value)}
                  />
                )
            )}
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
