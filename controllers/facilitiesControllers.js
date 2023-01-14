const asyncHandler = require("express-async-handler")
const Goal = require('../models/facilityModel')



// const { param } = require("../routes/facilityRoutes")
// @desc    Get facilities
// @route   GET /api/facilities
// @access  Private
const getFacilities = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json({message: goals})
})

// @desc    Post facilities
// @route   POST /api/facilities
// @access  Private
const setFacility = asyncHandler(async (req, res) => {


    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field controller')
    }
    const goal = await Goal.create({
        text: req.body.text,
        lga: req.body.lga,
        long: req.body.long,
        lat: req.body.lat
    })

    res.status(200).json(goal)

    // console.log(req.body.text)
    

    
})

// @desc    Put facilities
// @route   PUT /api/facilities/:id
// @access  Private
const updateFacility = asyncHandler(async (req, res) => {
    res.status(200).json({message: `update goals ${req.params.id}`})
    console.log(req.params)
})

// @desc    Delete facilities
// @route   DELETE /api/facilities/:id
// @access  Private
const deleteFacility = asyncHandler(async (req, res) => {
    res.status(200).json({message: `delete goals ${req.params.id}`})
})




module.exports = {
    getFacilities,
    setFacility,
    updateFacility,
    deleteFacility
    
}