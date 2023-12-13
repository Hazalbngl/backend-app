const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
<<<<<<< HEAD
  res.send('Hello, this is the backend!');
=======
  res.send('Hello World!');
>>>>>>> ead4603b88f9a06c21a1a5d956d2199afb3040af
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
