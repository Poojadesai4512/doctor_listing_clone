const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Fake database (temporary in-memory array)
let doctors = [];

// Add Doctor API
app.post('/api/add-doctor', (req, res) => {
  const doctor = req.body;
  doctor.id = doctors.length + 1; // simple ID
  doctors.push(doctor);
  res.status(201).json({ message: 'Doctor added successfully', doctor });
});

// List Doctors API with Filters & Pagination
app.get('/api/list-doctors', (req, res) => {
  let { page = 1, limit = 10, specialty } = req.query;
  page = parseInt(page);
  limit = parseInt(limit);

  let filteredDoctors = doctors;

  if (specialty) {
    filteredDoctors = filteredDoctors.filter(doc => doc.specialty === specialty);
  }

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedDoctors = filteredDoctors.slice(startIndex, endIndex);

  res.json({
    total: filteredDoctors.length,
    page,
    limit,
    doctors: paginatedDoctors
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
