const appointments = require('../Models/apModel')

// addAppointment
exports.addAppointmentController = async (req, res) => {
    const { doctor, date, startTime, endTime, description } = req.body
    const userId = req.payload
    try {
        const existingAp = await appointments.findOne({ doctor })
        if (existingAp) {
            res.status(406).json('Appointment exists..')
        } else {
            const newAp = new appointments({ doctor, date, startTime, endTime, description, userId })
            await newAp.save()
            res.status(200).json(newAp)
        }
    } catch (err) {
        res.status(401).json(err.message)
    }
}

// getAppointment
exports.getAppointmentController = async (req, res) => {
    const userId = req.payload
    try {
        const result = await appointments.find({ userId })
        console.log(result);
        res.status(200).json(result)
    } catch (err) {
        res.status(401).json(err)
    }
}

// deleteAppointment
exports.deleteAppointmentController = async (req, res) => {
    const { id } = req.params
    try {
        const removeProduct = await appointments.findByIdAndDelete({_id:id })
        res.status(200).json(removeProduct)
    } catch (err) {
        res.status(401).json(err)
    }
}