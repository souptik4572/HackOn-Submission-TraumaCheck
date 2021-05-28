import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import TocDialog from "./Dialog/TocDialog/TocDialog";
import GetInfoDialog from "./Dialog/GetInfoDialog/GetInfoDialog";

const useStyles = makeStyles({
  root: {
    backgroundImage:
      'url("https://cdn.pixabay.com/photo/2020/08/09/09/30/woman-5474989_1280.jpg")',
    // backgroundImage:
    //   'url("https://cdn.pixabay.com/photo/2021/01/31/21/19/brain-5968585_960_720.jpg")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    display: "grid",
    alignItems: "center",
    textAlign: "center",
    color: (props) => props.color,
  },
  msg: {
    color: "#000",
    fontSize: "2rem",
    padding: "50px 100px",
    backgroundColor: "rgba(245, 245, 245, 0.5)",
    "& p": {
      fontSize: "4rem",
      fontWeight: "600",
      fontFamily: "'Architects Daughter', cursive",
    },
  },
  navigationButtons: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    // marginTop: 75,
    "& a": {
      textDecoration: "none",
    },
  },
  btn: {
    margin: "4rem",
    marginTop: 0,
    padding: "20px 50px",
    fontSize: "1.3rem",
    borderRadius: "1.2rem",
    fontWeight: "bold",
  },
});

const LandingPage = (props) => {
  const classes = useStyles();
  const [openInfo, setOpenInfo] = useState(false);
  const [openToc, setOpenToc] = useState(false);

  const handleClickOpenInfo = () => {
    setOpenInfo(true);
  };
  const handleCloseInfo = () => {
    setOpenInfo(false);
  };

  const handleClickOpenToc = () => {
    setOpenToc(true);
  };
  const handleCloseToc = () => {
    setOpenToc(false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.msg}>
        <p>😟 Welcome to TraumaCheck 😩</p>
      </div>
      <div className={classes.navigationButtons}>
        <Button
          color="primary"
          variant="contained"
          className={classes.btn}
          size="large"
          onClick={handleClickOpenInfo}
        >
          Know More
        </Button>
        <Button
          color="secondary"
          variant="contained"
          className={classes.btn}
          size="large"
          onClick={handleClickOpenToc}
        >
          Start Test
        </Button>
      </div>
      <GetInfoDialog
        open={openInfo}
        handleClick={handleClickOpenInfo}
        handleClose={handleCloseInfo}
      ></GetInfoDialog>
      <TocDialog
        open={openToc}
        handleClick={handleClickOpenToc}
        handleClose={handleCloseToc}
      />
    </div>
  );
};

export default LandingPage;
