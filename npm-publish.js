#!/usr/bin/env node

const npm = require('npm-utils');
process.argv.NPM_TOKEN = '69940e2b-01db-4b58-9fb4-5572ef814016';


function onError (err) {
  console.error(err);
  process.exit(-1)
}

npm.setAuthToken()
  .then(npm.publish)
  .catch(onError);
