let express = require('express');

let app = express();
const PORT = 5000;
app.use(express.static('Server/Public'));
app.listen(PORT, () => {
    console.log('App is running on port 5000');
});