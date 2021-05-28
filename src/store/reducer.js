import * as types from './actionTypes';

const initialState = {
	tocAccepted: false,
};

const reducer = (state = initialState, action) => {
	const { type } = action;
	switch (type) {
		case types.SET_TOC_ACCEPTED:
			return { ...state, tocAccepted: !state.tocAccepted };
		default:
			return state;
	}
};

export { reducer };
