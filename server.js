const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const {database} = require('./src/db')

const PORT = process.env.PORT || 3001;

const server = express()

const RouterAcronico = require('./src/routes')
server.use(cors({ origin: 'https://clientacronimo-production.up.railway.app' }));
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(morgan('dev'));

server.use('/api', RouterAcronico)


database.sync({force:true}).then(()=>
server.listen(PORT, () => {
  console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
})
)


