import posts from "./data/tuits.js";

let tuits = posts;

// 5.2 Posting data to a RESTful Web service API
const createTuit = (req, res) => {
  const newTuit = req.body;
  newTuit._id = (new Date()).getTime().toString();
  newTuit.postedBy = {"username": "Doggo Corgi"};
  newTuit.handle = "doggoCorgi";
  newTuit.verified = false;
  newTuit['logo-image'] = "/images/corgi.jpg";
  newTuit['avatar-image'] = "/images/corgi.jpg";
  newTuit.stats = {
    "comments": 0,
    "retuits": 0,
    "likes": 0,
    "dislikes": 0
  };
  newTuit.liked = false;
  tuits.push(newTuit);
  res.json(newTuit);
}

// 5.1 Retrieving data from a RESTful Web service API
const findAllTuits = (req, res) => res.json(tuits);

// 5.4 Updating data in a RESTful Web service API
const updateTuit = (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
  res.sendStatus(200);
}

// 5.3 Deleting data from a RESTful Web service API
const deleteTuit = (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
  res.sendStatus(200);
}

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findAllTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}
