const Sliders = require("../Models/Sliders");

/**
 * It's an async function that uses the mongoose model to find all the users in the database and
 * returns them in a json format
 * @param req - The request object. This contains information about the HTTP request that raised the
 * event.
 * @param res - The response object.
 */
    const getSliders = (req, res) => {
        res.status(200).send("para traerme todo")
    }
/**
 * It gets a user from the database by its id
 * @param req - The request object.
 * @param res - The response object.
 * @returns The user is being returned.
 */
    const getSlider = (req, res) => {
        res.status(200).send('por traer sliders por id')
    }
/**
 * It creates a new user in the database
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 * @returns a user object.
 */
    const createSlider = (req, res) => {
        res.status(200).send('por create slide')
    }
/**
 * It searches for a user by id, and if it exists, it changes the baneado property to true or false,
 * depending on its current value
 * @param req - the request object
 * @param res - response
 */
const deleteSlider = (req, res) => {
    res.status(200).send('por delete el slider')
    }

    module.exports = {
        getSlider,
        getSliders,
        createSlider,
        deleteSlider
    }