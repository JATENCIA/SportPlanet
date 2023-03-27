const Stores = require("../Models/Stores");

/**
 * It gets all the stores from the database and returns them in the response
 * @param req - The request object. This contains information about the HTTP request that raised the
 * event.
 * @param res - The response object.
 */
const getStores = async (req, res) => {
  try {
    const stores = await Stores.find({});
    const { store } = req.query;

    if (store) {
      let result = stores.filter((elem) =>
        elem.name.toLowerCase().includes(store.toLowerCase())
      );

      result.length ? res.status(200).json(result) : res.status(204).json({});
    } else res.status(200).json(stores);
  } catch (error) {
    res.status(500).json({ mensage: `${error}` });
  }
};

/**
 * It gets a store by its id
 * @param req - The request object. This contains information about the HTTP request that raised the
 * event.
 * @param res - The response object.
 * @returns The store with the id that was passed in the request.
 */
const getStore = async (req, res) => {
  try {
    const store = await Stores.findById(req.params.id);
    if (!store) return res.status(204).json({});
    res.status(200).json(store);
  } catch (error) {
    res.status(500).json({ mensage: `${error}` });
  }
};

/**
 * It creates a new store in the database
 * @param req - The request object. This contains information about the HTTP request that raised the
 * event.
 * @param res - The response object.
 */
const createStore = async (req, res) => {
  try {
    const storeFound = await Stores.findOne({ name: req.body.name });
    if (storeFound)
      return res
        .status(301)
        .json({ messge: `this Store name ${req.body.name} already exits` });

    const store = new Stores(req.body);
    const saveStore = await store.save();
    res.status(201).json(saveStore);
  } catch (error) {
    res.status(500).json({ mensage: `${error}` });
  }
};

/**
 * It finds a store by its id and updates it with the data sent in the request body
 * @param req - The request object.
 * @param res - The response object.
 * @returns the updated store.
 */
const updateStore = async (req, res) => {
  try {
    const storeUpdate = await Stores.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!storeUpdate) return res.status(204).json({});
    res.status(200).json(storeUpdate);
  } catch (error) {
    res.status(500).json({ mensage: `${error}` });
  }
};

/**
 * It receives a request and a response, it tries to find a store by its id, if it finds it, it changes
 * the baneado property to the opposite of what it was, and then it updates the store in the database
 * @param req - The request object. This contains information about the HTTP request that raised the
 * event.
 * @param res - The response object.
 */
const deleteStore = async (req, res) => {
  try {
    const store = await Stores.findById(req.params.id);
    let baneado = store?.baneado;
    if (store) {
      if (baneado === false) baneado = true;
      else baneado = false;
    } else res.status(204).json({});
    await Stores.updateOne({ _id: req.params.id }, { $set: { baneado } });

    baneado
      ? res.status(200).json({
          message: `The store *** ${store.name} *** is temporarily or permanently disabled.`,
          baneado: baneado,
        })
      : res.status(200).json({
          message: `the store *** ${store.name} *** is enabled`,
          baneado: baneado,
        });
  } catch (error) {
    res.status(500).json({ messaje: `${error}` });
  }
};

module.exports = { getStores, createStore, getStore, deleteStore, updateStore };
