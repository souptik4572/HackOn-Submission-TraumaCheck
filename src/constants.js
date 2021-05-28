import first from "./assets/memes/1.jpg";
import third from "./assets/memes/3.jpg";
import fourth from "./assets/memes/4.jpg";
import fifth from "./assets/memes/5.jpg";
import sixth from "./assets/memes/6.jpg";
import second from "./assets/memes/2.png";
import seventh from "./assets/memes/7.jpg";
import eight from "./assets/memes/8.jpg";
import ninth from "./assets/memes/9.jpg";
import tenth from "./assets/memes/10.jpeg";
import eleventh from "./assets/memes/11.jpg";
import twelvth from "./assets/memes/12.jpg";
import thirteenth from "./assets/memes/13.jpg";
import fourteen from "./assets/memes/14.jpg";
import fivteen from "./assets/memes/15.jpg";
import sixteen from "./assets/memes/16.jpg";
import seventeenth from "./assets/memes/17.jpg";
import eighteenth from "./assets/memes/18.jpg";
import nineteenth from "./assets/memes/19.jpg";

export const AGE = {
  text: "Age",
  inputType: "number",
  image: first,
};

export const NO_EMPLOYEES = {
  text: "Number of Employees",
  inputType: "number",
  image: second,
};

export const GENDER = {
  text: "Gender",
  inputType: "select",
  options: ["M", "F", "other", "trans", "queer"],
  image: third,
};

export const SELF_EMPLOYED = {
  text: "Self employed ?",
  inputType: "select",
  options: ["Yes", "No"],
  image: fourth,
};

export const FAMILY_HISTORY = {
  text: "Family history of mental illness ?",
  inputType: "select",
  options: ["Yes", "No"],
  image: fifth,
};

export const TREATMENT = {
  text: "Sought treatment before ?",
  inputType: "select",
  options: ["Yes", "No"],
  image: sixth,
};

export const REMOTE_WORK = {
  text: "Work remotely ?",
  inputType: "select",
  options: ["Yes", "No"],
  image: seventh,
};

export const TECH_COMPANY = {
  text: "In tech company ?",
  inputType: "select",
  options: ["Yes", "No"],
  image: eight,
};

export const BENEFITS = {
  text: "Employer provides mental health benefits ?",
  inputType: "select",
  options: ["Yes", "No", "Don't know"],
  image: ninth,
};

export const CARE_OPTIONS = {
  text: "Any mental health care options ?",
  inputType: "select",
  options: ["Not sure", "Yes", "No"],
  image: tenth,
};

export const WELLNESS_PROGRAM = {
  text: "Employee wellness program ?",
  inputType: "select",
  options: ["Yes", "No", "Don't know"],
  image: eleventh,
};

export const SEEK_HELP = {
  text: "Employer provides resources for mental health issues",
  inputType: "select",
  options: ["Yes", "No", "Don't know"],
  image: twelvth,
};

export const ANONYMITY = {
  text: "Anonymity protected for mental health issues ?",
  inputType: "select",
  options: ["Yes", "No", "Don't know"],
  image: thirteenth,
};

export const LEAVE = {
  text: "Easiness to take leave for mental health issue ?",
  inputType: "select",
  options: [
    "Very easy",
    "Somewhat difficult",
    "Don't know",
    "Very difficult",
    "Somewhat easy",
  ],
  image: fourteen,
};

export const MENTAL_HEALTH_CONSEQUENCE = {
  text: "Negative consequence for discussing mental health issue ?",
  inputType: "select",
  options: ["No", "Maybe", "Yes"],
  image: fivteen,
};

export const COWORKERS = {
  text: "Willingness to discuss mental health issue with coworkers ?",
  inputType: "select",
  options: ["Yes", "Some of them", "No"],
  image: sixteen,
};

export const SUPERVISOR = {
  text: "Willingness to discuss mental health issue with supervisor ?",
  inputType: "select",
  options: ["Yes", "Some of them", "No"],
  image: seventeenth,
};

export const MENTAL_VS_PHYSICAL = {
  text: "Accountability of mental health as serious as physical health ?",
  inputType: "select",
  options: ["Yes", "No", "Don't know"],
  image: eighteenth,
};

export const OBS_CONSEQUENCES = {
  text: "Observed negative consequences for coworkers ?",
  inputType: "select",
  options: ["Yes", "No"],
  image: nineteenth,
};

export const TYPE_FORM = 1;
export const FORM_REVIEW = 2;
export const LOADER = 3;
export const RESULT = 4;
