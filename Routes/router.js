const express = require('express')
const userController = require('../Controllers/userController')
const apController = require('../Controllers/apController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const router = new express.Router()

// register
router.post('/register', userController.registerController)
// login
router.post('/login', userController.loginController)
// addAppointment
router.post('/add-ap', jwtMiddleware, apController.addAppointmentController)
// getAppointment
router.get('/get-ap', jwtMiddleware, apController.getAppointmentController)
// deleteAppointment
router.delete('/delete-ap/:id', jwtMiddleware, apController.deleteAppointmentController)

module.exports = router