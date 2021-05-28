import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme, props) => ({
  root: {
    background:
      'url("https://cdn.pixabay.com/photo/2020/08/09/09/30/woman-5474989_1280.jpg")',
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Montserrat', sans-serif !important",
  },
  content: {
    backgroundColor: (props) =>
      props.result.output ? "rgba(255, 23, 68, 0.8)" : "rgba(64,224,208, 0.9)",
    color: "#fff",
    padding: "3rem",
    borderRadius: "1rem",
  },
  icon: {
    width: "50%",
    borderRadius: "50%",
    marginTop: "1rem",
    boxShadow: "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)",
  },
  btnStartAgain: {
    marginTop: "3rem",
  },
}));

const HAPPY_FACE =
  "https://assets.dryicons.com/uploads/icon/svg/8934/2502d1cb-0183-4794-99e7-e77dc4ccd6a7.svg";
const CONFUSED_FACE =
  "https://assets.dryicons.com/uploads/icon/svg/8931/7456c25c-bd3a-4bf7-84d9-3f0f5acfc457.svg";

const Result = (props) => {
  const { output } = props.result;
  const { nextStep, changeStep } = props;
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <h2>
          {output
            ? "You mental health does interfere with your work"
            : "Great your mental health does not interfere with your work"}
        </h2>
        <img
          className={classes.icon}
          src={output ? CONFUSED_FACE : HAPPY_FACE}
          alt="a icon"
        />
        <br />
        <Button
          className={classes.btnStartAgain}
          variant="contained"
          color="primary"
          onClick={() => changeStep(nextStep)}
        >
          Start Again
        </Button>
      </div>
    </div>
  );
};

export default Result;
