export const initialData = [
  {
    name: "Ramsey Tisher",
    gender: "male",
    room: "100",
    entryDate: "1/1/2020",
    specifics: ["hospice", "dnr"],
    dx: [
      {
        code: "S83.511",
        primary: true,
        description: "ACL Rupture of Right Knee",
        clinical: "Return To Provider",
        tags: ["NTA"],
      },
      {
        code: "S83.200A",
        primary: false,
        description: "Bucket handle tear of meniscous",
        clinical: "Return To Provider",
        tags: [],
      },
    ],
    allergies: ["drug", "food", "insect"],
    meds: [
      "high-risk-med",
      "psychotropic",
      "opioid",
      "anticoagulant",
      "diuretic",
    ],
    diets: ["fluid-restrict", "npo", "incontinence"],
    alerts: [
      "no-bm-72",
      "fall-72",
      "behavior",
      "review-careplan",
      "cog",
      "skin",
      "fluid-decline",
      "urinary-cath",
      "skin-2",
      "weight-vary",
    ],
  },
  {
    name: "Jennifer Nolan",
    gender: "female",
    room: "101",
    entryDate: "1/1/2020",
    specifics: ["admission-today", "medicare", "no-care-plan"],
    dx: [],
    allergies: ["food"],
    meds: [],
    diets: ["feeding-tube"],
    alerts: ["behavior"],
  },
  {
    name: "Beth Neil",
    gender: "female",
    room: "102",
    entryDate: "1/1/2020",
    specifics: ["hospice", "no-physician-signature"],
    dx: [
      {
        code: "S47.1XXA",
        primary: true,
        description: "Shoulder Replacement (Right)",
        clinical: "Orthopedic Surgery",
        tags: [],
      },
    ],
    allergies: [],
    meds: ["diuretic", "antibiotic"],
    diets: ["consistency"],
    alerts: ["no-bm-72", "cog", "skin", "fluid-decline"],
  },
  {
    name: "Maggie Emerson",
    gender: "female",
    room: "103",
    entryDate: "1/1/2020",
    specifics: ["discharge-today", "dnr"],
    dx: [],
    allergies: ["seasonal"],
    meds: ["high-risk-med", "psychotropic"],
    diets: [],
    alerts: ["fall-risk", "behavior", "wander"],
  },
  {
    name: "Robin Miller",
    gender: "female",
    room: "104",
    entryDate: "1/1/2020",
    specifics: ["no-care-plan", "no-physician-signature"],
    dx: [],
    allergies: ["animal"],
    meds: ["high-risk-med", "opioid"],
    diets: [],
    alerts: ["no-bm-72", "cog", "skin", "fluid-decline"],
  },
]
