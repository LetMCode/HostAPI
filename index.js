const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// app.use(morgan('combined'))

// Đọc file api.json

app.get('/api/page/:id', (req, res) => {
    const { id } = req.params;

    const filePath = path.join(__dirname, './product.json');
    
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to read the JSON file' });
      }
  
      const jsonData = JSON.parse(data);
      res.json(jsonData.product[id].page);  // Trả về tất cả sản phẩm
    });
  });

  app.get('/api/product', (req, res) => {
    const filePath = path.join(__dirname, './product.json'); // Đảm bảo đúng đường dẫn tới file api.json
  
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to read the JSON file' });
      }
  
      // Trả về dữ liệu JSON từ file
      const jsonData = JSON.parse(data);
      return res.json(jsonData.cartUser);
    });
  });
  

app.get('/api/cartUser', (req, res) => {
  const filePath = path.join(__dirname, './product.json'); // Đảm bảo đúng đường dẫn tới file api.json

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read the JSON file' });
    }

    // Trả về dữ liệu JSON từ file
    const jsonData = JSON.parse(data);
    return res.json(jsonData.cartUser);
  });
});

app.listen(port, () => {
  console.log(`${port}`)
  console.log(`Server running on port https://hostapi-g350.onrender.com`);
});
