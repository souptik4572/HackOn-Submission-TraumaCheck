import { Switch, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import MindReview from '../MindReview/MindReview';
import _404 from '../_404/_404';

const Routes = () => {
	return (
		<Switch>
			<Route path='/' exact render={() => <LandingPage />} />
			<Route path='/details' exact render={() => <MindReview />} />
			<Route path='*' component={_404} />
		</Switch>
	);
};

export default Routes;
