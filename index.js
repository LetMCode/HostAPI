const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('combined'))

// Đọc file api.json
app.get('/api', (req, res) => {
  const filePath = path.join(__dirname, './product.json'); // Đảm bảo đúng đường dẫn tới file api.json

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read the JSON file' });
    }

    // Trả về dữ liệu JSON từ file
    return res.json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
