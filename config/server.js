'use strict';

const express = require('express');
const app = express();
const port = process.env.npm_package_config_port;

app.use(express.static(process.env.npm_package_config_paths_output));

app.listen(port, function(){
	console.info('Serving on http://localhost:' + port);
});