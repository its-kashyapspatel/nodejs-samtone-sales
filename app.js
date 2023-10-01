require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const UserRoutes = require('./routes/userRoutes');
const ClientRoutes = require('./routes/clientRoutes');
const OrderRoutes = require('./routes/orderRoutes');
const authenticateJWT = require('./middlewares/authMiddleware');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use('/user', UserRoutes);
app.use('/client', authenticateJWT, ClientRoutes);
app.use('/order', authenticateJWT, OrderRoutes);

mongoose.connect(process.env.MONGODB_URL);
mongoose.connection.on('connected', () => console.log('Connected'));
mongoose.connection.on('error', (err) => console.log('Connection failed with - ',err));

app.listen(port, () => {console.log(`Server is running on PORT: ${port}`)});