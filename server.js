const express = require('express');
const app = express();
app.use(express.json());

const STUDENT_SECRET = "YOUR_SECRET_HERE"; 

app.post('/api-endpoint', (req, res) => {
  const body = req.body;

  
  if (body.secret !== STUDENT_SECRET) {
    return res.status(401).json({ status: "error", message: "Invalid secret!" });
  }

  
  res.status(200).json({ status: "ok", message: "Request received", task: body.task });

  console.log("Request received:", body);
});

app.listen(3000, () => {
  console.log("API Server running on http://localhost:3000/api-endpoint");
});
