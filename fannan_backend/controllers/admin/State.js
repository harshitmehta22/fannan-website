import { state_model } from "../../models/schemas/admin/State.js"
import StatusCodes from "http-status-codes"

export class StateController {

    add_state = async (req, res) => {
        try {

            const statedata = new state_model(req.body)
            const data = await statedata.save()
            res.status(StatusCodes.CREATED).json({ massage: "State Added Successfully", data })

        } catch (error) {

            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ massage: " Something went wrong " })

        }

    }



    get_state = async (req, res) => {
        try {

            const data = await state_model.find()
            res.status(StatusCodes.OK).json({ massage: "States List", data })

        } catch (error) {

            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ massage: " Something went wrong " })

        }

    }
}