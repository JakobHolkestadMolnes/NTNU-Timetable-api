import prisma from '../config/client';
import Logging from '../libraries/Logging';

export const returnCourses = async (itemSize: number,page:number) => {
	const pageSize = itemSize * (page-1);
	const courses = await prisma.course.findMany({
		take:itemSize,
		skip:pageSize

	}).catch((err) => {
		Logging.error(err);
		return null;
	});
	return courses;
};

export const returnAllCourses =async() => {
	const courses = await prisma.course.findMany().catch((err) => {
		Logging.error(err);
		return null;
	});

	return courses;
};