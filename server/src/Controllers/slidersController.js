const Sliders = require("../Models/Sliders");

/**
 * It's an async function that uses the mongoose model to find all the users in the database and
 * returns them in a json format
 * @param req - The request object. This contains information about the HTTP request that raised the
 * event.
 * @param res - The response object.
 */
const getSliders = async (req, res) => {
  try {
    const sliders = await Sliders.find().sort({ createdAt: -1 });
    const reversedSliders = sliders.reverse();
    res.status(200).json(reversedSliders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
/**
 * It gets a user from the database by its id
 * @param req - The request object.
 * @param res - The response object.
 * @returns The user is being returned.
 */
const getSlider = async (req, res) => {
  const { id } = req.params;
  try {
    const slider = await Sliders.findById(id);
    if (!slider) {
      res.status(204).end();
    } else {
      res.status(200).json(slider);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
/**
 * It creates a new user in the database
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 * @returns a user object.
 */
const createSlider = async (req, res) => {
  try {
    const { image } = req.body;
    const slider = new Sliders({
      image: image,
    });
    const savedSlider = await slider.save();
    res.status(200).json(savedSlider);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
/**
 * It searches for a user by id, and if it exists, it changes the baneado property to true or false,
 * depending on its current value
 * @param req - the request object
 * @param res - response
 */
const deleteSlider = async (req, res) => {
  try {
    const { id } = req.params;
    const slider = await Sliders.findById(id);
    if (!slider) {
      return res.status(204).end();
    }
    const baneado = !slider.baneado;
    await Sliders.updateOne({ _id: id }, { $set: { baneado } });

    const message = baneado
      ? `The Slider *** ${slider} *** is temporarily or permanently disabled.`
      : `The Slider *** ${slider} *** is enabled`;
    res.status(200).json({ message, baneado });
  } catch (error) {
    res.status(500).send({ message: message.error });
  }
};

module.exports = {
  getSlider,
  getSliders,
  createSlider,
  deleteSlider,
};
