const express = require('express');
const cors = require('cors');
const clientAPI = require('./views/clientAPI');
const { swaggerUi, specs } = require('./docs/swagger');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', clientAPI);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
