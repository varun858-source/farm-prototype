const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const ROUTE_MAP = {
  '/': 'index.html',
  '/home': 'index.html',
  '/crop-tech': 'crop-tech.html',
  '/livestock-tech': 'livestock-tech.html',
  '/market-finance': 'market-finance.html',
  '/advisory': 'advisory.html',
  '/satellite-weather': 'satellite-weather.html',
  '/about': 'about.html'
};

const server = http.createServer((req, res) => {
  const urlObj = new URL(req.url, `http://localhost:${PORT}`);
  let pathname = decodeURIComponent(urlObj.pathname);

  if (ROUTE_MAP[pathname]) {
    pathname = '/' + ROUTE_MAP[pathname];
  } else if (!path.extname(pathname) && fs.existsSync(path.join(ROOT, pathname + '.html'))) {
    pathname = pathname + '.html';
  }

  const filePath = path.normalize(path.join(ROOT, pathname));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>404 — Page Not Found</h1><p><a href="/index.html">Return to Maati Home</a></p>');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const headers = { 'Content-Type': contentType };

    if (ext === '.jpg' || ext === '.jpeg') {
      headers['Cache-Control'] = 'public, max-age=86400';
    }

    res.writeHead(200, headers);
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`MAATI AgriTech Ecosystem Server running at http://localhost:${PORT}`);
});
