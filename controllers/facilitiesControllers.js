
// @desc    Get facilities
// @route   GET /api/facilities
// @access  Private
const getFacilities = (req, res) => {
    res.status(200).json({message: "Get goals"})
}

// @desc    Post goals
// @route   POST /api/facilities
// @access  Private
const setFacility = (req, res) => {
    res.status(200).json({message: "Set goals"})
}

// @desc    Put goals
// @route   PUT /api/facilities
// @access  Private
const updateFacility = (req, res) => {
    res.status(200).json({message: "update goals"})
}

// @desc    Delete goals
// @route   DELETE /api/facilities
// @access  Private
const deleteFacility = (req, res) => {
    res.status(200).json({message: "delete goals"})
}




module.exports = {
    getFacilities,
    setFacility,
    updateFacility,
    deleteFacility
    
}