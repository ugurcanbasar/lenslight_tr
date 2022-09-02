import User from "../models/userModel.js";

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json({
            succeed: true,
            user
        })
    } catch (error) {
        res.status(500).json({
            succeed: false,
            error,
        })
    }

}



export { createUser }