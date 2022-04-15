import tuitsModel from './tuits-model.js';

// Find all tuits in database
export const findAllTuits = () => tuitsModel.find();

// Insert the new tuit to database
export const createTuit = (tuit) => tuitsModel.create(tuit);

// Delete the specified tuit from database
export const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});

// Update the specified tuit in database
export const updateTuit = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit});
