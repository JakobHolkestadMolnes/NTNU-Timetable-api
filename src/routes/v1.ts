import express from 'express';
import { returnAllCourses, returnCourses } from '../controllers/courses';
import Logging from '../libraries/Logging';




/**
 * Routes for logs
 * @remarks This is the main router for comments, all routes are prefixed with http://example.domain/comments/
 * 
 */
const router = express();

/* router.get('/courses', (req, res)=>{
	const items =parseInt((req.query.items as string));
	const page = parseInt(req.query.page as string);


	if (typeof items != 'number') {
		return res.status(400).json({
			err: 'items is not a number'
		});}
	

	if (typeof page != 'number') {
		return res.status(400).json({
			err: 'page is not a number'
		});
	}

	const courses = returnCourses(items, page);
	if (courses == null) return res.status(500).json({err:'nothing to return'});
	return res.json({
		courses
	});
}); */

router.get('/allcourses', async (req, res)=>{

	const courses = await returnAllCourses();
	Logging.warn(courses);
	if (courses == null) return res.status(500).json({err:'nothing to return'});
	return res.json({
		courses
	});
});



export default router;