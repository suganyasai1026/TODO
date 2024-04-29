const express = require("express")
const { UserModel } = require("../model/user")
const app = express()
const bcrypt = require("bcrypt")
const userRouter = express.Router()
const jwt = require("jsonwebtoken");

userRouter.get("/", (req, res) => {
    res.send("all is set ")
})

userRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    let isEmailExist = await UserModel.findOne({ email: email })
    if (isEmailExist == null) {
        bcrypt.hash(password, 10, async function (err, hash) {
            if (err) {
                return res.send({ message: "something went wrong", status: 0 })
            }
            try {
                let user = new UserModel({ name, email, password: hash })
                await user.save()
                res.send({
                    message: "user created",
                    status: 1,
                })

            }
            catch (error) {
                res.send({
                    message: error.message,
                    status: 0,
                })
            }
        })

    }
    else {
        res.send({
            message: "user already created",
            status: 1,
        })
    }

})

userRouter.post("/login", async (req, res) => {
   
    const { email, password } = req.body
    let option = {
        expiresIn: "20m"
    }
    try {
        let data = await UserModel.find({ email })
     

        if (data.length > 0) {
            let token = jwt.sign({ userId: data[0]._id }, "jwt", option)
            bcrypt.compare(password, data[0].password, function (err, result) {
                if (err)
                    return res.send({ message: "something went wrong", status: 0 })

                if (result) {
                    res.send({ message: "user logged in", status: 1, token: token })
                }
                else {
                    res.send({ message: "password wrong", status: 0 })
                }
            })
        }
        else {
            res.send({ message: "user do not exist", status: 0 })
        }
    }
    catch (error) {
        res.send({ message: error.message, status: 0 })
    }
})

module.exports = userRouter;