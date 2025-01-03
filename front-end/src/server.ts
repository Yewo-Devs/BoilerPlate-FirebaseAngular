import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine, isMainModule } from '@angular/ssr/node';
import express from 'express';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import fetch from 'node-fetch';
import path from 'node:path';
import bootstrap from './main.server';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = 'https://cdn.apex-offers.com/';
const indexHtml = join(serverDistFolder, 'index.server.html');

const app = express();
const commonEngine = new CommonEngine();

const hasExtension = (filePath: string): boolean => {
  return path.extname(filePath) !== '';
};

app.set('view engine', 'html');
app.set('views', browserDistFolder);

app.get('**', async (req, res) => {
  try {
    let requestPath = req.path;

    if (!hasExtension(requestPath)) {
      requestPath += '/index.html';
    }

    const cdnPath = `${browserDistFolder}${requestPath}`;
    const response = await fetch(cdnPath);

    if (!response.ok) {
      res.status(response.status).send('Error message');
      return;
    }

    const contentType = response.headers.get('content-type') ?? '';

    res.set('Content-Type', contentType);

    if (contentType.includes('text') || contentType.includes('json')) {
      const body = await response.text();
      res.send(body);
    } else {
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      res.send(buffer);
    }
  } catch (error) {
    console.error('Error fetching:', error);
    res.status(500).send('Internal Server Error');
  }
});

/**
 * Handle all other requests by rendering the Angular application.
 */
app.get('**', (req, res, next) => {
  const { protocol, originalUrl, baseUrl, headers } = req;

  commonEngine
    .render({
      bootstrap,
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: browserDistFolder,
      providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
    })
    .then((html) => res.send(html))
    .catch((err) => next(err));
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
