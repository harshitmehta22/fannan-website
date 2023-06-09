import express from 'express'
import { usercontroller } from '../controllers/user/User.js';
import { CategoryController } from '../controllers/admin/Category.js';

const AdminRouter = express.Router()



// Category

const category_controller = new CategoryController
AdminRouter.post("/add/category", category_controller.add_category)


export default AdminRouter; 