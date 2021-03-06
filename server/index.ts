// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';
import * as express from 'express';
import { join } from 'path';
import * as fs from 'fs';

// firebase cloud functions
import * as firebaseFunctions from 'firebase-functions';


// NOTE: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } =  require('./server/main');

// NgUniversalTools: Express Engine and moduleMap for lazy loading
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

// check if Firebase functions is enabled or not
const  DISABLE_FIREBASE  =  process.env.DISABLE_FIREBASE  ||  false;

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const  app  =  express();
const  PORT  =  process.env.PORT  ||  4000;
const  DIST_FOLDER  =  join(process.cwd(), DISABLE_FIREBASE  ?  'dist'  :  './');

app.engine('html', ngExpressEngine({
bootstrap:  AppServerModuleNgFactory,
providers: [
    provideModuleMap(LAZY_MODULE_MAP)
]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

if ( DISABLE_FIREBASE ) {
  // Server static files using the express server only if not using firebase hosting
  app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));
}

// All regular routes use the Universal engine
app.get('*', (req, res) => {

  function checkIfExitsFile(filename) {
    const path = join(DIST_FOLDER, '/seoHeaders/', `index_${page}.html`);
    try {
      if (fs.existsSync(path)) {
        return true;
      }
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  const page = req.originalUrl.split('/').pop();
  let renderIndex = 'index_ssr.html';
  let renderFolder = 'browser';
  if ( checkIfExitsFile(page) ) { //  Load custom index page
    renderFolder = 'seoHeaders';
    renderIndex = `index_${page}.html`;
  }
  // const renderFile = `index_${req.originalUrl.split('/').pop()}.html`;
  res.render(join(DIST_FOLDER, renderFolder, renderIndex), {req});
});

if ( DISABLE_FIREBASE ) {
  // Start up the Node server if not using firebase cloud functions
  app.listen(PORT, () => {
    console.log(`Node server listening on http://localhost:${PORT}`);
  });
}

export let ssr  =  DISABLE_FIREBASE  ?  null  :  firebaseFunctions.https.onRequest(app);
