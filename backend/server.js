const express = require('express');
const cors = require('cors');
const sweetRoutes = require('./routes/sweetRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', sweetRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(` Server running on http://localhost:${PORT}`));
