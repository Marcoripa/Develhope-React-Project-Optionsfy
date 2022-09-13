import './dashboard.css';
import { useUserContext } from '../../services/Authentication';
import 'font-awesome/css/font-awesome.min.css';
import Accordion from './Accordion';

export function Dashboard() {
	const { user } = useUserContext();
	const name = user;
	const googleName = sessionStorage.getItem('name');

	return (
		<main className='dashboard-main'>
			<h1 className='dashboard-welcome-message'>
				Welcome back
				{name ? (
					<span className='user-name'>{`, ${name}`}</span>
				) : (
					<span className='user-name'>{`, ${googleName}`}</span>
				)}{' '}
				👋🏻
			</h1>

			<Accordion />
		</main>
	);
}
