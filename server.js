
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import open from "open";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
  open(`http://localhost:3000`)
});
app.use(express.static(__dirname));

