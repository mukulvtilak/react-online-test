
import Dashboard from 'Routes/dashboard';
import StudentDetails from 'Routes/studentDetails'


export default [
	{
		path: 'dashboard',
		component: Dashboard
	},
	{
		path: '',
		component: StudentDetails
	}
]