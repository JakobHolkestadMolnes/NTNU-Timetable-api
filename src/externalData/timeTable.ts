import axios from 'axios';

export const fetchTimeTable = async (courseCode: string, year:string) => {
	const response = await axios.get(
		`https://www.ntnu.no/web/studier/emner?p_p_id=coursedetailsportlet_WAR_courselistportlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=schedules&p_p_cacheability=cacheLevelPage&_coursedetailsportlet_WAR_courselistportlet_courseCode=${courseCode}&year=${year}&version=1`
	);
	return response.data;
};
