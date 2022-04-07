import people from './data/users.js';

let users = people;

// 3.1 Requesting data from a Web server with a browser
const userController = app => {
  app.get('/api/users', findAllUsers);
  app.get('/api/users/:uid', findUserById);
  app.post('/api/users', createUser);
  app.delete('/api/users/:uid', deleteUser);
  app.put('/api/users/:uid', updateUser);
};

const findAllUsers = (req, res) => {
  const type = req.query.type;

  // 3.2 Sending query parameters to a Web server
  if (type) {
    res.json(findUsersByType(type));
    return;
  }
  res.json(users);
};

const findUsersByType = type =>
  users.filter(user => user.type.toUpperCase() === type.toUpperCase());

// 3.3. Sending path parameters to a Web server
const findUserById = (req, res) => {
  const userId = req.params.uid;
  const user = users.find(u => u._id === userId);
  res.json(user);
}

// 4.3 Posting data to a Web server using Postman
const createUser = (req, res) => {
  const newUser = req.body;
  newUser._id = (new Date()).getTime().toString();
  users.push(newUser);
  res.json(newUser);
}

// 4.4 Deleting data from a Web server using Postman
const deleteUser = (req, res) => {
  const userId = req.params['uid'];
  users = users.filter(usr =>
    usr._id !== userId);
  res.sendStatus(200);
}

// 4.5 Updating data in a Web server with Postman
const updateUser = (req, res) => {
  const userId = req.params['uid'];
  const updatedUser = req.body;
  users = users.map(usr =>
    usr._id === userId ? updatedUser : usr);
  res.sendStatus(200);
}

export default userController;
