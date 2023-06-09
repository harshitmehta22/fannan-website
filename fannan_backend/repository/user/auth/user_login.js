import { UserModel } from "../../../models/schemas/user/User.js"
import moment from "moment"
import bcrypt from "bcrypt"

export const userLogin = async (req) => {


    const userdata = await UserModel.findOne({ email: req.email })

    if (userdata) {

        const user_password = await bcrypt.compare(req.password, userdata.password)

        if (user_password) {

            userdata.created_at = moment(userdata.created_at).format('MMMM Do YYYY, h:mm:ss a') // June 8th 2023, 7:39:08 pm
            userdata.updated_at = moment(userdata.updated_at).format('MMMM Do YYYY, h:mm:ss a')

            return userdata;
        }
        else {
            return 0;
        }
    }

    else {
        return 1;
    }







}