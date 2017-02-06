import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index';
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', router);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});