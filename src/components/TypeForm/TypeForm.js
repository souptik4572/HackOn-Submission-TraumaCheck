import React from "react";
import Hotkeys from "react-hot-keys";
import PropTypes from "prop-types";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

/** Typeform component that renders each component of a form */
class TypeForm extends React.Component {
  /** constructor */
  constructor(props) {
    super(props);

    /** Initial State */
    this.state = {
      current: 0,
      isSnackbarOpen: false,
    };

    /** Styles */
    this.styles = {
      tfShow: {
        display: "block",
      },
      tfHide: {
        display: "none",
      },
    };

    /** Binding this to methods */
    this.incState = this.incState.bind(this);
    this.decState = this.decState.bind(this);
    this.isFirstComponent = this.isFirstComponent.bind(this);
    this.isLastComponent = this.isLastComponent.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleSnackbarOpen = this.handleSnackbarOpen.bind(this);
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
  }

  /** Set className for component to show/hide */
  setClass(element, tfStyle) {
    if (!element) {
      return null;
    }
    const Element = element.type;
    return (
      <div style={tfStyle}>
        <Element {...element.props} />
      </div>
    );
  }

  /** Get the current component to show on screen */
  getCurrentView(children) {
    let allChildren = [];
    allChildren = React.Children.map(children, (child, index) => {
      let currentChild = this.setClass(child, this.styles.tfHide);
      if (index === this.state.current) {
        currentChild = this.setClass(child, this.styles.tfShow);
      }
      return currentChild;
    });
    /** If all elements are shown then conditionally show a review screen */
    if (this.isLastComponent() && this.props.showReviewView) {
      React.Children.map(children, (child) => {
        const x = { ...child };
        x.props = { ...x.props, children: child.props.children[1] };
        allChildren.push(this.setClass(x, this.styles.tfShow));
      });
      if (this.props.completionText) {
        allChildren.unshift(
          <h1 style={{ width: "100vw" }} className="form-completion-text">
            {this.props.completionText}
          </h1>
        );
      }
    }
    return allChildren;
  }

  /** Increment State counter */
  incState() {
    if (this.state.current < this.props.children.length) {
      const current = this.state.current + 1;
      this.setState({
        current,
      });
    }
    this.props.nextBtnOnClick();
  }

  /** Decrement State counter */
  decState() {
    if (this.state.current > 0) {
      const current = this.state.current - 1;
      this.setState({
        current,
      });
    }
    this.props.backBtnOnClick();
  }

  /** Check if first component */
  isFirstComponent() {
    return this.state.current === 0;
  }

  /** Check if last component */
  isLastComponent() {
    return this.props.showReviewView
      ? this.state.current === this.props.children.length
      : this.state.current === this.props.children.length - 1;
  }

  // Opens our error snackbar
  handleSnackbarOpen() {
    this.setState({ isSnackbarOpen: true });
  }

  // Closes our error snackbar
  handleSnackbarClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ isSnackbarOpen: false });
  }

  // Handles submitting our form
  handleFormSubmit() {
    if (this.props.areAllInputsFilled) {
      this.props.onSubmit();
      return;
    }
    this.handleSnackbarOpen();
  }

  /** Implementing hotkeys keydown event */
  onKeyDown(keyName, e, handle) {
    switch (e.key) {
      case "ArrowLeft":
        this.decState();
        break;
      case "ArrowRight":
        this.incState();
        break;
      case "Enter":
        this.isLastComponent() ? this.handleFormSubmit() : this.incState();
        break;
      default:
        break;
    }
  }

  /** render the typeform */
  render() {
    return (
      <div className="form-container">
        <Hotkeys
          keyName="left, right, enter"
          onKeyDown={this.onKeyDown.bind(this)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: "1.2rem",
            }}
          >
            {this.getCurrentView(this.props.children)}
          </div>
          <div style={{ marginBottom: "1.2rem" }}>
            {!this.isFirstComponent() && (
              <button
                onClick={this.decState}
                className={this.props.backBtnClass}
              >
                {this.props.backBtnText}
              </button>
            )}
            {this.isLastComponent() ? (
              <button
                type="submit"
                onClick={this.handleFormSubmit}
                className={this.props.submitBtnClass}
                ref="submitButton"
              >
                {this.props.submitBtnText}
              </button>
            ) : (
              <button
                onClick={this.incState}
                className={this.props.nextBtnClass}
              >
                {this.props.nextBtnText}
              </button>
            )}
          </div>
        </Hotkeys>
        <Snackbar
          open={this.state.isSnackbarOpen}
          autoHideDuration={4000}
          onClose={this.handleSnackbarClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <Alert onClose={this.handleSnackbarClose} severity="error">
            Please fill all the input fields
          </Alert>
        </Snackbar>
      </div>
    );
  }
}

/** Validating propTypes */
TypeForm.propTypes = {
  backBtnClass: PropTypes.string,
  backBtnOnClick: PropTypes.func,
  backBtnText: PropTypes.string,
  children: PropTypes.array.isRequired,
  completionText: PropTypes.string,
  nextBtnClass: PropTypes.string,
  nextBtnOnClick: PropTypes.func,
  nextBtnText: PropTypes.string,
  onSubmit: PropTypes.func,
  showReviewView: PropTypes.bool,
  submitBtnClass: PropTypes.string,
  submitBtnText: PropTypes.string,
};

/** Default Props */
TypeForm.defaultProps = {
  backBtnOnClick: () => {},
  backBtnText: "Back",
  nextBtnOnClick: () => {},
  nextBtnText: "Next",
  onSubmit: () => {},
  showReviewView: true,
  submitBtnText: "Save",
};

/** export the typeform component */
export default TypeForm;
