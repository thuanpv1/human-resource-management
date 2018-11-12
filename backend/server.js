import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Employee from './models/Employee';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/employees');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/employees').get((req, res) => {
    Employee.find((err, employees) => {
        if (err)
            console.log(err);
        else
            res.json(employees);
    });
});

router.route('/employees/:id').get((req, res) => {
    Employee.findById(req.params.id, (err, employee) => {
        if (err)
            console.log(err);
        else
            res.json(employee);
    });
});

router.route('/employees/add').post((req, res) => {
    let employee = new Employee(req.body);
    employee.save()
        .then(employee => {
            res.status(200).json({'employee': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/employees/update/:id').post((req, res) => {
    Employee.findById(req.params.id, (err, employee) => {
        if (!employee)
            return next(new Error('Could not load document'));
        else {
            employee.Name = req.body.Name;
            employee.Age = req.body.Age;
            employee.Position = req.body.Position;
            employee.Skill = req.body.Skill;
            employee.Team = req.body.Team;

            employee.save().then(employee => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/employees/delete/:id').get((req, res) => {
    Employee.findByIdAndRemove({_id: req.params.id}, (err, employee) => {
        if (err)
            res.json(err);
        else
            res.json('Remove successfully');
    })
})

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));