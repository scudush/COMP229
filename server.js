const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Import routes
const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes');
const qualificationRoutes = require('./routes/qualificationRoutes');
const userRoutes = require('./routes/userRoutes');

// Use routes
app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/qualifications', qualificationRoutes);
app.use('/api/users', userRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Backend API is running');
});

const authMiddleware = require('./middleware/auth');

app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: `Hello, ${req.user.username}! This is a protected route.` });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
