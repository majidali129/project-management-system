

import { getAllUsers, getSession, getUserProfile, loginUser, logoutUser, registerUser, updatePassword } from '#controllers/user.controller.js'
import { verifyJwt } from '#middlewares/verifyJwt.middleware.js'
import { loginUserValidator, registerUserValidator, updatePasswordValidator } from '#validators/user.validator.js'
import { validate } from '#validators/validate.validator.js'
import express from 'express'


const router = express.Router()

router.route('/').post(registerUserValidator(), validate, registerUser);
router.route('/').get(getAllUsers);
router.route('/login').post(loginUserValidator(), validate, loginUser);

// SECURE ROUTES
router.use(verifyJwt)
router.route('/user-profile').get(getUserProfile)
router.route('/session').get(getSession)
router.route('/logout').get(logoutUser)
router.route('/update-password').patch(updatePasswordValidator(), validate, updatePassword)




export default router