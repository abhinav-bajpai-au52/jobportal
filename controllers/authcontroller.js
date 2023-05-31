const UserModel = require("../models/userModel")
const jwt = require('jsonwebtoken')

const signup = async (request, response) => {
    const { name, email, password  } = request.body

    try {
    const newUser = await UserModel.create({ name, email, password })
    response.send({ status: 'success', user: { name: newUser.name, email: newUser.email, id: newUser.id} })
    } catch (error) {
    response.status(500).send({ status: 'error', msg: 'Error adding user to DB' })
    }
}

const login = async (request, response) => {
    const { email, password } = request.body

    try {
        const user = await UserModel.findOne({ email })
        if (!user) {
        response.status(404).send({ status: 'error', msg: 'User Not Found' });
        } else {
            if(user.password !== password) {
                response.status(401).send({ status : "error", msg : "Invalid Password"})
            } 

        console.log(user)
        const userPayload = { email: user.email, name: user.name}
        const token = jwt.sign(userPayload, process.env.JWT_SECRET_KEY, {algorithm: 'HS384', expiresIn: '1d'} )

        console.log(token)
        response.cookie('jwt', token)
        response.send({ status: 'success', msg: "User Logged in successfully"})
        }
    } catch (error) {
        response.send({ status: 'error', msg: 'Error logging In!' })
    }

}

const logout = (request, response) => {
    response.clearCookie('jwt')
    response.send({ status: 'success', msg: "User Logged out successfully" })
}


module.exports = {
    signup,
    login,
    logout
}