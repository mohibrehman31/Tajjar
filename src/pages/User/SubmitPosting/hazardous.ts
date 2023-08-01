const hazardous: {
  [kwy: string]: string[];
} = {
  Explosives: [
    "Explosive with a mass explosive hazard",
    "Explosive with a severe projection hazard",
    "Explosive with a fire, blast or projection hazard but not a mass explosive hazard",
    "Minor fire or projection hazard (includes ammunication and most consumer fireworks)",
    "An insensitive substance with a mass explosion hazard",
    "Extremely insensitive articles",
  ],
  Gases: ["Flammable Gases", "Non-Flammable Gases", "Poisonous Gases"],
  "Flammable Liquids": [
    "Flammable Liquids",
    "Combustible (Alternate Placard)",
    "Fuel Oil (Alternate Placard)",
    "Gasoline (Alternate Placard)",
  ],
  "Flammable Solids": [
    "Flammable Solids",
    "Spontaneously Combustible Solids",
    "Dangerous when wet",
  ],
  "Toxic and Infectious Substance": ["Poison", "Biohazard"],
  "Radioactive substances": ["Radioactive"],
  "Corrosive substance": ["Corrosive"],
  Miscellaneous: ["Miscellaneous"],
};

export default hazardous;
