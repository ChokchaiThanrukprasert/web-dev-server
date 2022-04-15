import mongoose from 'mongoose';
import tuitsSchema from './tuits-schema.js'

// Tuit Model for MongoDB "Tuit" Schema
const tuitsModel = mongoose.model('TuitModel', tuitsSchema);

export default tuitsModel;
