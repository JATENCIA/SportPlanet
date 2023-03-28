const Users = require("../Models/Users");

/**
 * It's an async function that uses the mongoose model to find all the users in the database and
 * returns them in a json format
 * @param req - The request object. This contains information about the HTTP request that raised the
 * event.
 * @param res - The response object.
 */
const getUsers = async (req, res) => {
  try {
    const user = await Users.find({});
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ mensage: `${error}` });
  }
};

/**
 * It gets a user from the database by its id
 * @param req - The request object.
 * @param res - The response object.
 * @returns The user is being returned.
 */
const getUser = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    if (!user) return res.status(204).json({});
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ mensage: `${error}` });
  }
};
/**
 * It creates a new user in the database
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 * @returns a user object.
 */

const createUser = async (req, res) => {
  try {
    const userFound = await Users.findOne({ eMail: req.body.eMail });
    if (userFound)
      return res.status(301).json({ messge: "this URL already exits" });

    const usersc = await Users.find({});
    let iNumber = 0;
    let iDni = 0;

    if (usersc.length !== 0) {
      iNumber = Number(usersc[usersc.length - 1].telephone);
      iDni = Number(usersc[usersc.length - 1].dni);
    }
    if (iNumber < 1) iNumber = 111111111;
    else {
      ++iNumber;
    }
    if (iDni < 1) iDni = 1111111;
    else {
      ++iDni;
    }
    const user = req.body;
    const newUser = new Users({
      dni: user.dni || iDni,
      name: user.name,
      eMail: user.eMail,
      lastName: user.lastName || "",
      telephone: user.telephone || iNumber.toString(),
      location: user.location || "",
      image: user.image || "http://cdn.onlinewebfonts.com/svg/img_141364.png",
    });

    const saveUser = await newUser.save();
    res.status(200).json(saveUser);
  } catch (error) {
    res.status(500).json({ mensage: `${error}` });
  }
};

/**
 * It searches for a user by id, and if it exists, it changes the baneado property to true or false,
 * depending on its current value
 * @param req - the request object
 * @param res - response
 */
const deleteUser = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    let baneado = user?.baneado;
    if (user) {
      if (baneado === false) baneado = true;
      else baneado = false;
    } else
      res.status(201).json({
        message: "the user you are trying to search for does not exist",
      });
    await Users.updateOne({ _id: req.params.id }, { $set: { baneado } });

    baneado
      ? res
          .status(200)
          .json({ message: "The user is temporarily or permanently disabled." })
      : res.status(200).json({ message: "the user is enabled" });
  } catch (error) {
    res.status(500).json({ messaje: `${error}` });
  }
};
/**
 * It finds a user by id and updates it with the new data
 * @param req - The request object. This contains information about the HTTP request that raised the
 * event.
 * @param res - The response object.
 * @returns The userUpdate is being returned.
 */

const updateUser = async (req, res) => {
  try {
    const userUpdate = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!userUpdate) return res.status(204).json({});
    res.status(200).json(userUpdate);
  } catch (error) {
    res.status(500).json({ mensage: `${error}` });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
};
