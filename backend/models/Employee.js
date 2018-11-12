import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Employee = new Schema({
    Name: {
        type: String
    },
    Age: {
        type: Number
    },
    Position: {
        type: String
    },
    Skill: {
        type: String
    },
    Team: {
        type: String,
        default: 'OS'
    }
});

export default mongoose.model('Employee', Employee);