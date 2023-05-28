import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

import '../css/dashboard.css';
import '../css/page.css';

function Dashboard() {
	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend
	);

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'Most recent table',
			},
		},
	};

	const labels = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
	];

	const exampleApiData = {
		labels,
		datasets: [
			{
				label: 'Bench',
				data: labels.map(() => Math.random(0, 100)),
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
			{
				label: 'Squat',
				data: labels.map(() => Math.random(0, 100)),
				borderColor: '#000FFF',
				backgroundColor: '#0000FF',
			},
		],
	};

	return (
		<>
			<h1 className='page-title'>Dashboard</h1>
			<div className='dashboard page-container'>
				<div className='recent-tables'>
					<li>
						<button>Workouts</button>
					</li>
					<li>
						<button>Weight Tracking</button>
					</li>
					<li>
						<button>Water drinking</button>
					</li>
					<li>
						<button>Money Habits</button>
					</li>
					<li>
						<button>Screen Time</button>
					</li>
					<li>
						<button>Show more</button>
					</li>
				</div>
				<div className='summary-chart'>
					<Line options={options} data={exampleApiData} />
				</div>
			</div>
		</>
	);
}

export default Dashboard;
