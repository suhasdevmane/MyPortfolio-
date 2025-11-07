// Lightweight Express server for Heroku to serve the built Vite React app
// Builds will output to the dist/ folder (default Vite build output)

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const distPath = path.join(__dirname, 'dist');

app.use(
  express.static(distPath, {
    maxAge: '1h',
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-cache');
      }
    },
  })
);

// SPA fallback - serve index.html for all non-file routes
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
