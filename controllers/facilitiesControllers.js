

const getFacilities = (req, res) => {
    res.status(200).json({message: "Get goals"})
}

const setFacility = (req, res) => {
    res.status(200).json({message: "Set goals"})
}

const deleteFacility = (req, res) => {
    res.status(200).json({message: "delete goals"})
}

const updateFacility = (req, res) => {
    res.status(200).json({message: "update goals"})
}


module.exports = {
    getFacilities,
    setFacility,
    deleteFacility,
    updateFacility
}