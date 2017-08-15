# Envoy.css

Based on http://basscss.com/v7/docs/

### Starting the local server

```
npm run start

```

This will start a server at [http://localhost:3000]() and watch the local
`src/*.css` files for changes.

### Publishing to NPM

```
npm run publish
```

After updating the version number in `./package.json`, you'll be able to publish
your changes to NPM and thus our CDN provider unpkg. Most builds are available
within 5 minutes of publishing.

