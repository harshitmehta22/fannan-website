import StatusCode from 'http-status-codes'
import { city_model } from '../../models/schemas/admin/City.js'
export class CityController {



    add_city = async (req, res) => {

        try {
            console.log(req.body)
            const citydata = new city_model(req.body)
            const data = await citydata.save()
            res.status(StatusCode.CREATED).json({ massege: "city added successfully", data })

        } catch (error) {

            res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ massege: "Something went wrong" })

        }

    }
}