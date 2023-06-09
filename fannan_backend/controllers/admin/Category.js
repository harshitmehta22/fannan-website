import { StatusCodes } from "http-status-codes"
import { CommonMsg } from "../../helpers/CommonResp.js"
import { UserModel } from "../../models/schemas/user/User.js"
import { category_model } from "../../models/schemas/admin/Category.js"

export class CategoryController {

    async add_category(req, res) {
        try {
            const userdata = new category_model(req.body)
            const category = await userdata.save()
            res.status(201).json({ massege: "data added successfully", category })
        } catch (error) {
            console.log(error)
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(CommonMsg.internal_error)
        }

    }



}