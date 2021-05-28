import React, { useState, useEffect } from "react";
import { useInputState } from "../../hooks/useInputState";
import { makeStyles } from "@material-ui/styles";
import TypeForm from "../TypeForm/TypeForm";
import axios from "../../axios";

import * as all from "../../constants";

import NumericInput from "../Inputs/NumericInput";
import SelectInput from "../Inputs/SelectInput";

const inputFieldDefault = (defaultValue) => {
  return true ? defaultValue : "";
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  typeForm: {
    display: "contents",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  btn: {
    outline: "none",
    cursor: "pointer",
    position: "relative",
    padding: "12px 36px",
    margin: "5px 10px",
    textTransform: "uppercase",
    fontSize: "0.9rem",
    fontFamily: "'Roboto', sans-serif",
    textAlign: "center",
    color: "#FFF",
    letterSpacing: "2px",
    borderRadius: "5px",
    border: "none",
    transition: "all 0.2s",
  },
  nextBtn: {
    backgroundColor: "#F57F17;",
    "&:hover": {
      boxShadow:
        "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    },
    fontFamily: "'Montserrat', sans-serif",
  },
  backBtn: {
    backgroundColor: "#CDDC39;",
    "&:hover": {
      boxShadow:
        "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    },
    fontFamily: "'Montserrat', sans-serif",
  },
  submitBtn: {
    backgroundColor: "#BA68C8;",
    "&:hover": {
      boxShadow:
        "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    },
    fontFamily: "'Montserrat', sans-serif",
  },
  memeDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const CompleteForm = (props) => {
  const classes = useStyles();
  const [age, changeAge, resetAge] = useInputState(inputFieldDefault(36));
  const [noEmployees, changeNoEmployees, resetNoEmployees] = useInputState(
    inputFieldDefault(600)
  );
  const [gender, changeGender, resetGender] = useInputState(
    inputFieldDefault("M")
  );
  const [selfEmployed, changeSelfEmployed, resetSelfEmployed] = useInputState(
    inputFieldDefault("Yes")
  );
  const [
    familyHistory,
    changeFamilyHistory,
    resetFamilyHistory,
  ] = useInputState(inputFieldDefault("Yes"));
  const [treatment, changeTreatment, resetTreatment] = useInputState(
    inputFieldDefault("No")
  );
  const [remoteWork, changeRemoteWork, resetRemoteWork] = useInputState(
    inputFieldDefault("No")
  );
  const [techCompany, changeTechCompany, resetTechCompany] = useInputState(
    inputFieldDefault("Yes")
  );
  const [benefits, changeBenefits, resetBenefits] = useInputState(
    inputFieldDefault("Don't know")
  );
  const [careOptions, changeCareOptions, resetCareOptions] = useInputState(
    inputFieldDefault("Not sure")
  );
  const [
    wellnessProgram,
    changeWellnessProgram,
    resetWellnessProgram,
  ] = useInputState(inputFieldDefault("No"));
  const [seekHelp, changeSeekHelp, resetSeekHelp] = useInputState(
    inputFieldDefault("Don't know")
  );
  const [anonymity, changeAnonymity, resetAnonymity] = useInputState(
    inputFieldDefault("Don't know")
  );
  const [leave, changeLeave, resetLeave] = useInputState(
    inputFieldDefault("Don't know")
  );
  const [
    mentalHealthConsequence,
    changeMentalHealthConsequence,
    resetMentalHealthConsequence,
  ] = useInputState(inputFieldDefault("No"));
  const [coworkers, changeCoworkers, resetCoworkers] = useInputState(
    inputFieldDefault("Yes")
  );
  const [supervisor, changeSupervisor, resetSupervisor] = useInputState(
    inputFieldDefault("Yes")
  );
  const [
    mentalVsPhysical,
    changeMentalVsPhysical,
    resetMentalVsPhysical,
  ] = useInputState(inputFieldDefault("Don't know"));
  const [
    obsConsequence,
    changeObsConsequence,
    resetObsConsequence,
  ] = useInputState(inputFieldDefault("No"));

  const [areAllInputsFilled, setAreAllInputsFilled] = useState(false);

  const { changeStep, nextStep, nextToNextStep, setResult } = props;

  const allResetInputs = [
    resetAge,
    resetNoEmployees,
    resetGender,
    resetSelfEmployed,
    resetFamilyHistory,
    resetTreatment,
    resetRemoteWork,
    resetTechCompany,
    resetBenefits,
    resetCareOptions,
    resetWellnessProgram,
    resetSeekHelp,
    resetAnonymity,
    resetLeave,
    resetMentalHealthConsequence,
    resetCoworkers,
    resetSupervisor,
    resetMentalVsPhysical,
    resetObsConsequence,
  ];

  useEffect(() => {
    const allInputValues = [
      age,
      noEmployees,
      gender,
      selfEmployed,
      familyHistory,
      treatment,
      remoteWork,
      techCompany,
      benefits,
      careOptions,
      wellnessProgram,
      seekHelp,
      anonymity,
      leave,
      mentalHealthConsequence,
      coworkers,
      supervisor,
      mentalVsPhysical,
      obsConsequence,
    ];

    let isMounted = true;
    if (isMounted)
      setAreAllInputsFilled(
        allInputValues.every((inputValue) => inputValue !== "")
      );
    return function cleanup() {
      isMounted = false;
    };
  }, [
    age,
    noEmployees,
    gender,
    selfEmployed,
    familyHistory,
    treatment,
    remoteWork,
    techCompany,
    benefits,
    careOptions,
    wellnessProgram,
    seekHelp,
    anonymity,
    leave,
    mentalHealthConsequence,
    coworkers,
    supervisor,
    mentalVsPhysical,
    obsConsequence,
  ]);

  const employeeString = (noEmployees) => {
    if (noEmployees >= 1 && noEmployees <= 25) return "1-25";
    else if (noEmployees >= 26 && noEmployees <= 100) return "26-100";
    else if (noEmployees >= 101 && noEmployees <= 500) return "100-500";
    else if (noEmployees >= 501 && noEmployees <= 1000) return "500-1000";
    else return "More than 1000";
  };

  const handleSubmit = () => {
    const ourData = {
      Timestamp: "27-08-2014 11:33",
      Age: String(age),
      Gender: gender,
      Country: "United States",
      state: "CT",
      self_employed: selfEmployed,
      family_history: familyHistory,
      treatment: treatment,
      no_employees: employeeString(noEmployees),
      remote_work: remoteWork,
      tech_company: techCompany,
      benefits: benefits,
      care_options: careOptions,
      wellness_program: wellnessProgram,
      seek_help: seekHelp,
      anonymity: anonymity,
      leave: leave,
      mental_health_consequence: mentalHealthConsequence,
      phys_health_consequence: "No",
      coworkers: coworkers,
      supervisor: supervisor,
      mental_health_interview: "No",
      phys_health_interview: "No",
      mental_vs_physical: mentalVsPhysical,
      obs_consequence: obsConsequence,
      comments:
        "I'm not on my company's health insurance which could be part of the reason I answered Don't know to so many questions.",
    };
    changeStep(nextStep);
    axios
      .post(`/predict`, ourData)
      .then(function (response) {
        const actualData = response.data;
        setResult(actualData);
        changeStep(nextToNextStep);
      })
      .catch(function (error) {
        console.log(error);
      });
    allResetInputs.forEach((resetValue) => {
      resetValue("");
    });
  };

  return (
    <div className={classes.root}>
      <TypeForm
        onSubmit={handleSubmit}
        submitBtnText="Submit"
        nextBtnClass={`${classes.btn} ${classes.nextBtn}`}
        backBtnClass={`${classes.btn} ${classes.backBtn}`}
        submitBtnClass={`${classes.btn} ${classes.submitBtn}`}
        className={classes.typeForm}
        completionText="Review your submission"
        areAllInputsFilled={areAllInputsFilled}
      >
        <div className={classes.memeDiv}>
          <img width="400" height="400" src={all.AGE.image} />
          <NumericInput
            text={all.AGE.text}
            value={age}
            changeValue={changeAge}
          />
        </div>
        <div className={classes.memeDiv}>
          <img width="400" height="350" src={all.GENDER.image} />
          <SelectInput
            text={all.GENDER.text}
            options={all.GENDER.options}
            value={gender}
            changeValue={changeGender}
          />
        </div>
        <div className={classes.memeDiv}>
          <img width="550" height="350" src={all.SELF_EMPLOYED.image} />
          <SelectInput
            text={all.SELF_EMPLOYED.text}
            options={all.SELF_EMPLOYED.options}
            value={selfEmployed}
            changeValue={changeSelfEmployed}
          />
        </div>
        <div className={classes.memeDiv}>
          <img width="400" height="500" src={all.FAMILY_HISTORY.image} />
          <SelectInput
            text={all.FAMILY_HISTORY.text}
            options={all.FAMILY_HISTORY.options}
            value={familyHistory}
            changeValue={changeFamilyHistory}
          />
        </div>
        <div className={classes.memeDiv}>
          <img width="450" height="350" src={all.TREATMENT.image} />
          <SelectInput
            text={all.TREATMENT.text}
            options={all.TREATMENT.options}
            value={treatment}
            changeValue={changeTreatment}
          />
        </div>
        <div className={classes.memeDiv}>
          <img width="350" height="350" src={all.NO_EMPLOYEES.image} />
          <NumericInput
            text={all.NO_EMPLOYEES.text}
            value={noEmployees}
            changeValue={changeNoEmployees}
          />
        </div>
        <div className={classes.memeDiv}>
          <img width="500" height="350" src={all.REMOTE_WORK.image} />

          <SelectInput
            text={all.REMOTE_WORK.text}
            options={all.REMOTE_WORK.options}
            value={remoteWork}
            changeValue={changeRemoteWork}
          />
        </div>
        <div className={classes.memeDiv}>
          <img width="500" height="350" src={all.TECH_COMPANY.image} />

          <SelectInput
            text={all.TECH_COMPANY.text}
            options={all.TECH_COMPANY.options}
            value={techCompany}
            changeValue={changeTechCompany}
          />
        </div>
        <div className={classes.memeDiv}>
          <img width="500" height="350" src={all.BENEFITS.image} />
          <SelectInput
            text={all.BENEFITS.text}
            options={all.BENEFITS.options}
            value={benefits}
            changeValue={changeBenefits}
          />
        </div>
        <div className={classes.memeDiv}>
          <img width="500" height="350" src={all.CARE_OPTIONS.image} />
          <SelectInput
            text={all.CARE_OPTIONS.text}
            options={all.CARE_OPTIONS.options}
            value={careOptions}
            changeValue={changeCareOptions}
          />
        </div>
        <div className={classes.memeDiv}>
          <img width="400" height="350" src={all.WELLNESS_PROGRAM.image} />
          <SelectInput
            text={all.WELLNESS_PROGRAM.text}
            options={all.WELLNESS_PROGRAM.options}
            value={wellnessProgram}
            changeValue={changeWellnessProgram}
          />
        </div>
        <div className={classes.memeDiv}>
          <img width="400" height="350" src={all.SEEK_HELP.image} />

          <SelectInput
            text={all.SEEK_HELP.text}
            options={all.SEEK_HELP.options}
            value={seekHelp}
            changeValue={changeSeekHelp}
          />
        </div>
        <div className={classes.memeDiv}>
          <img width="400" height="350" src={all.ANONYMITY.image} />
          <SelectInput
            text={all.ANONYMITY.text}
            options={all.ANONYMITY.options}
            value={anonymity}
            changeValue={changeAnonymity}
          />
        </div>
        <div className={classes.memeDiv}>
          <img width="400" height="350" src={all.LEAVE.image} />

          <SelectInput
            text={all.LEAVE.text}
            options={all.LEAVE.options}
            value={leave}
            changeValue={changeLeave}
          />
        </div>
        <div className={classes.memeDiv}>
          <img
            width="400"
            height="350"
            src={all.MENTAL_HEALTH_CONSEQUENCE.image}
          />

          <SelectInput
            text={all.MENTAL_HEALTH_CONSEQUENCE.text}
            options={all.MENTAL_HEALTH_CONSEQUENCE.options}
            value={mentalHealthConsequence}
            changeValue={changeMentalHealthConsequence}
          />
        </div>
        <div className={classes.memeDiv}>
          <img width="400" height="350" src={all.COWORKERS.image} />
          <SelectInput
            text={all.COWORKERS.text}
            options={all.COWORKERS.options}
            value={coworkers}
            changeValue={changeCoworkers}
          />
        </div>
        <div className={classes.memeDiv}>
          <img width="400" height="350" src={all.SUPERVISOR.image} />

          <SelectInput
            text={all.SUPERVISOR.text}
            options={all.SUPERVISOR.options}
            value={supervisor}
            changeValue={changeSupervisor}
          />
        </div>
        <div className={classes.memeDiv}>
          <img width="300" height="450" src={all.MENTAL_VS_PHYSICAL.image} />

          <SelectInput
            text={all.MENTAL_VS_PHYSICAL.text}
            options={all.MENTAL_VS_PHYSICAL.options}
            value={mentalVsPhysical}
            changeValue={changeMentalVsPhysical}
          />
        </div>
        <div className={classes.memeDiv}>
          <img width="400" height="350" src={all.OBS_CONSEQUENCES.image} />

          <SelectInput
            text={all.OBS_CONSEQUENCES.text}
            options={all.OBS_CONSEQUENCES.options}
            value={obsConsequence}
            changeValue={changeObsConsequence}
          />
        </div>
      </TypeForm>
    </div>
  );
};

export default CompleteForm;
