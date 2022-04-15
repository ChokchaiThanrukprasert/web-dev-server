import * as tuitsDao from "./tuits-dao.js";

// A9 - 3.4. Creating an API to retrieve data in MongoDB from a React client application
// Find all tuits from database
const findAllTuits = async (req, res) => {
  const tuits = await tuitsDao.findAllTuits()
  res.json(tuits);
}

// Insert a new tuits to database
const createTuit = async (req, res) => {
  const newTuit = req.body;
  newTuit.postedBy = {"username": "Doggo Corgi"};
  newTuit.handle = "doggoCorgi";
  newTuit.verified = false;
  newTuit['avatar-image'] = "/images/corgi.jpg";
  newTuit.stats = {
    "comments": 0,
    "retuits": 0,
    "likes": 0,
    "dislikes": 0
  };
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
}

// Remove the specified tuit from database
const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.send(status);
}

// Update the specifed tuit in database
const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
  res.send(status);
}

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findAllTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}
