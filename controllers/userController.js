require('dotenv').config();
const User = require('../models/User');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY;

exports.createUser = async (req, res) => {
    const { name, email, password, phone } = req.body;
    const saltRounds = 10;
    const userId = uuid.v4();
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new User({ name, email, userId, password: hashedPassword, phone });
        await newUser.save();
        res.status(201).send('User Registered Successfully!');
    } catch(err) {
        res.send(err);
    }
}

exports.loginUser = async (req, res) => {
    const { userId, password } = req.body;
    try {
        const user = await User.findOne({ userId });

        if(!user) {
            res.send('User Not Found!');
            return;
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if(passwordMatch) {
            const token = jwt.sign({userId}, secretKey, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.send('Password Does not Match!');
        }
    } catch(err) {
        res.send(err);
    }
}