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
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import hazardous from "./hazardous";

const steps = ["Basic Details", "Motive", "End"];

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
          <div
            className="step1"
            style={{ display: step === 0 ? "flex" : "none" }}
          >
            <FormControl sx={{ width: "170px" }} size="small">
              <InputLabel id="demo-simple-select-label">
                Posting Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={userSelection["posting_type"]}
                label="Posting Type"
                onChange={(e) => handleChange("posting_type", e.target.value)}
              >
                <MenuItem value={"General"}>General</MenuItem>
                <MenuItem value={"Import"}>Import</MenuItem>
                <MenuItem value={"Export"}>Export</MenuItem>
              </Select>
            </FormControl>
            {userSelection["posting_type"] === "General" ? (
              <>
                <TextField
                  id="filled-basic"
                  label="Pickup"
                  variant="filled"
                  sx={{ width: "170px" }}
                  size="small"
                  value={userSelection["pickup"]}
                  onChange={(e) => handleChange("pickup", e.target.value)}
                />
                <TextField
                  id="filled-basic"
                  label="Dropoff"
                  variant="filled"
                  sx={{ width: "170px" }}
                  size="small"
                  value={userSelection["dropoff"]}
                  onChange={(e) => handleChange("dropoff", e.target.value)}
                />
                <FormControl sx={{ width: "170px" }} size="small">
                  <InputLabel id="demo-simple-select-label">
                    Load Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={userSelection["load_type"]}
                    label="Load Type"
                    onChange={(e) => handleChange("load_type", e.target.value)}
                  >
                    <MenuItem value={"Containerized"}>Containerized</MenuItem>
                    <MenuItem value={"Break_Bulk"}>Break Bulk</MenuItem>
                    <MenuItem value={"Bulk"}>Bulk</MenuItem>
                  </Select>
                </FormControl>
                {userSelection["load_type"] && (
                  <>
                    {userSelection["load_type"] === "Containerized" && (
                      <FormControl sx={{ width: "170px" }} size="small">
                        <InputLabel id="demo-simple-select-label">
                          Container Type
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={userSelection["container_type"]}
                          label="Container Type"
                          onChange={(e) =>
                            handleChange("container_type", e.target.value)
                          }
                        >
                          <MenuItem value={"FCL"}>FCL</MenuItem>
                          <MenuItem value={"LCL"}>LCL</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                    <TextField
                      id="filled-basic"
                      label={
                        userSelection["load_type"] === "Containerized" &&
                        userSelection["container_type"] === "FCL"
                          ? "Trucks"
                          : userSelection["load_type"] === "Containerized" &&
                            userSelection["container_type"] === "LCL"
                          ? "Pallets"
                          : "Trucks"
                      }
                      variant="outlined"
                      sx={{ width: "170px" }}
                      size="small"
                      type="number"
                      inputProps={{ min: 1 }}
                      value={userSelection["trucks_required"]}
                      onChange={(e) =>
                        handleChange("trucks_required", e.target.value)
                      }
                    />
                  </>
                )}
              </>
            ) : (
              (userSelection["posting_type"] === "Import" ||
                userSelection["posting_type"] === "Export") && (
                <>
                  <FormControl sx={{ width: "170px" }} size="small">
                    <InputLabel id="demo-simple-select-label">
                      Loading Port
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={userSelection["loading_port"]}
                      label="Loading Port"
                      onChange={(e) =>
                        handleChange("loading_port", e.target.value)
                      }
                    >
                      <MenuItem value={"Bin Qasim"}>Bin Qasim</MenuItem>
                      <MenuItem value={"Gawadar"}>Gawadar</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ width: "170px" }} size="small">
                    <InputLabel id="demo-simple-select-label">
                      Discharge Port
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={userSelection["discharge_port"]}
                      label="Discharge Port"
                      onChange={(e) =>
                        handleChange("discharge_port", e.target.value)
                      }
                    >
                      <MenuItem value={"Bin Qasim"}>Bin Qasim</MenuItem>
                      <MenuItem value={"Gawadar"}>Gawadar</MenuItem>
                    </Select>
                  </FormControl>

                  <>
                    {userSelection["posting_type"] === "Export" ? (
                      <>
                        <TextField
                          id="filled-basic"
                          label="Shipment Name"
                          variant="outlined"
                          sx={{ width: "170px" }}
                          size="small"
                          value={userSelection["shipment_name"]}
                          onChange={(e) =>
                            handleChange("shipment_name", e.target.value)
                          }
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            label="Loading Date"
                            sx={{ width: "170px" }}
                            onChange={(e: any) =>
                              handleChange(
                                "loading_date",
                                e["$D"] +
                                  "-" +
                                  Number(e["$M"] + 1) +
                                  "-" +
                                  e["$y"]
                              )
                            }
                          />
                        </LocalizationProvider>
                        <TextField
                          id="filled-basic"
                          label="Price Value"
                          variant="outlined"
                          sx={{ width: "170px" }}
                          size="small"
                          type="number"
                          value={userSelection["price_value"]}
                          onChange={(e) =>
                            typeof Number(e.target.value) === "number" &&
                            Number(e.target.value) > 0 &&
                            handleChange("price_value", e.target.value)
                          }
                        />
                        <TextField
                          id="filled-basic"
                          label="CIF Value"
                          variant="outlined"
                          sx={{ width: "170px" }}
                          size="small"
                          type="number"
                          value={userSelection["cif_value"]}
                          onChange={(e) =>
                            typeof Number(e.target.value) === "number" &&
                            Number(e.target.value) > 0 &&
                            handleChange("cif_value", e.target.value)
                          }
                        />
                      </>
                    ) : (
                      <>
                        <TextField
                          id="filled-basic"
                          label="Quantity"
                          variant="outlined"
                          sx={{ width: "170px" }}
                          size="small"
                          type="number"
                          value={userSelection["quantity"]}
                          onChange={(e) =>
                            typeof Number(e.target.value) === "number" &&
                            Number(e.target.value) > 0 &&
                            handleChange("quantity", e.target.value)
                          }
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DateTimePicker
                            label="Delivery Time"
                            sx={{ width: "170px" }}
                            onChange={(e: any) =>
                              handleChange("delivery_time", e["$d"])
                            }
                          />
                        </LocalizationProvider>
                        <TextField
                          id="filled-basic"
                          label="Consignment Name"
                          variant="outlined"
                          sx={{ width: "170px" }}
                          size="small"
                          value={userSelection["consignment_name"]}
                          onChange={(e) =>
                            handleChange("consignment_name", e.target.value)
                          }
                        />
                      </>
                    )}
                  </>
                </>
              )
            )}
          </div>

          <div
            className="step2"
            style={{ display: step === 1 ? "flex" : "none" }}
          >
            <FormControl sx={{ width: "170px" }} size="small">
              <InputLabel id="demo-simple-select-label">Commodity</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={userSelection["commodity"]}
                label="Commodity"
                onChange={(e) => handleChange("commodity", e.target.value)}
              >
                <MenuItem value={"auto_parts"}>Auto Parts</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="filled-basic"
              label="Weight"
              variant="outlined"
              sx={{ width: "170px" }}
              size="small"
              type="number"
              value={userSelection["weight"]}
              onChange={(e) =>
                typeof Number(e.target.value) === "number" &&
                Number(e.target.value) > 0 &&
                handleChange("price_value", e.target.value)
              }
            />
            <FormControl sx={{ width: "170px" }} size="small">
              <InputLabel id="demo-simple-select-label">Hazardous</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={userSelection["hazardous"]}
                label="Hazardous"
                onChange={(e) => handleChange("hazardous", e.target.value)}
              >
                <MenuItem value={"Yes"}>Yes</MenuItem>
                <MenuItem value={"No"}>No</MenuItem>
              </Select>
            </FormControl>
            {userSelection["hazardous"] === "Yes" && (
              <>
                <FormControl sx={{ width: "170px" }} size="small">
                  <InputLabel id="demo-simple-select-label">
                    Hazardous Classification
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={userSelection["hazardous_classification"]}
                    label="Hazardous Classification"
                    onChange={(e) =>
                      handleChange("hazardous_classification", e.target.value)
                    }
                  >
                    {Object.keys(hazardous).map((type) => (
                      <MenuItem value={type}>{type}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {userSelection["hazardous_classification"] && (
                  <FormControl sx={{ width: "170px" }} size="small">
                    <InputLabel id="demo-simple-select-label">
                      {userSelection["hazardous_classification"]}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={
                        userSelection[userSelection["hazardous_classification"]]
                      }
                      label={userSelection["hazardous_classification"]}
                      onChange={(e) =>
                        handleChange(
                          userSelection["hazardous_classification"],
                          e.target.value
                        )
                      }
                    >
                      {Object.entries(
                        hazardous[userSelection["hazardous_classification"]]
                      ).map((type, index) => (
                        <MenuItem value={type[1]}>{type[1]}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              </>
            )}
          </div>

          <div
            className="step2"
            style={{ display: step === 2 ? "flex" : "none" }}
          >
            <FormControl sx={{ width: "170px" }} size="small">
              <InputLabel id="demo-simple-select-label">Freight</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={userSelection["freight"]}
                label="Freight"
                onChange={(e) => handleChange("freight", e.target.value)}
              >
                <MenuItem value={"Yes"}>Yes</MenuItem>
                <MenuItem value={"No"}>No</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: "170px" }} size="small">
              <InputLabel id="demo-simple-select-label">Customs</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={userSelection["customs"]}
                label="Customs"
                onChange={(e) => handleChange("customs", e.target.value)}
              >
                <MenuItem value={"Yes"}>Yes</MenuItem>
                <MenuItem value={"No"}>No</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: "170px" }} size="small">
              <InputLabel id="demo-simple-select-label">
                Transportation
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={userSelection["transportation"]}
                label="Transportation"
                onChange={(e) => handleChange("transportation", e.target.value)}
              >
                <MenuItem value={"Yes"}>Yes</MenuItem>
                <MenuItem value={"No"}>No</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: "170px" }} size="small">
              <InputLabel id="demo-simple-select-label">Insurance</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={userSelection["insurance"]}
                label="Insurance"
                onChange={(e) => handleChange("insurance", e.target.value)}
              >
                <MenuItem value={"Yes"}>Yes</MenuItem>
                <MenuItem value={"No"}>No</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: "170px" }} size="small">
              <InputLabel id="demo-simple-select-label">Warehousing</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={userSelection["warehousing"]}
                label="Warehousing"
                onChange={(e) => handleChange("warehousing", e.target.value)}
              >
                <MenuItem value={"Yes"}>Yes</MenuItem>
                <MenuItem value={"No"}>No</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="filled-basic"
              label="Description"
              variant="outlined"
              sx={{ width: "300px" }}
              size="small"
              type="number"
              value={userSelection["description"]}
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </div>
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
