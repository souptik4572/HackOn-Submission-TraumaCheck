import React, { useState } from 'react';
import CompleteForm from '../CompleteForm/CompleteForm';
import FormReview from '../../FormReview';
import CircularProgress from '../CircularProgress/CircularProgress';
import Result from '../Result/Result';

import { TYPE_FORM, FORM_REVIEW, LOADER, RESULT } from '../../constants';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import * as types from '../../store/actionTypes';

const MindReview = (props) => {
	const { tocAccepted } = props;
	const [step, setStep] = useState(TYPE_FORM);
	const [result, setResult] = useState({ output: false });
	const changeStep = (newStep) => {
		setStep(newStep);
	};
	let respectiveComponent;
	switch (step) {
		case TYPE_FORM:
			respectiveComponent = (
				<CompleteForm
					changeStep={changeStep}
					nextStep={LOADER}
					nextToNextStep={RESULT}
					setResult={setResult}
				/>
			);
			break;
		case FORM_REVIEW:
			respectiveComponent = (
				<FormReview
					changeStep={changeStep}
					nextStep={LOADER}
					nextToNextStep={RESULT}
					setResult={setResult}
				/>
			);
			break;
		case LOADER:
			respectiveComponent = <CircularProgress />;
			break;
		case RESULT:
			respectiveComponent = (
				<Result result={result} nextStep={TYPE_FORM} changeStep={changeStep} />
			);
			break;
		default:
			break;
	}
	return tocAccepted ? <div>{respectiveComponent}</div> : <Redirect to='/' />;
};

const mapStateToProps = (state) => ({
	tocAccepted: state.tocAccepted,
});

const mapDispatchToProps = (dispatch) => ({
	setTocAccepted: () => dispatch({ type: types.SET_TOC_ACCEPTED }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MindReview);
