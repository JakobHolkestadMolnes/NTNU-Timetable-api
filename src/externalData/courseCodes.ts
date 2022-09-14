import courses from './../data/courses.json';

// TODO: get from ntnu api instead of json file
export const fetchCourseCodes = async () => {
	// return keys from json file as an array of objects
	return Object.keys(courses).map((key) => {
		return { CourseCode: key };
	}
	);
};
