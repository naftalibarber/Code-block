# Code Block Studio — GitHub Pages

The code editor source lives in [scratch-clone](./scratch-clone). The existing root files remain untouched.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` builds the React app and deploys `scratch-clone/dist/client`.

Once **Settings → Pages → Build and deployment → Source = GitHub Actions** is selected and the deployment succeeds, open:

https://naftalibarber.github.io/Code-block/

## Local development

```bash
cd scratch-clone
npm ci --legacy-peer-deps
npm start
```

## Production build

```bash
cd scratch-clone
npm ci --legacy-peer-deps
npm run build:pages
```

The webpack production public path is `/Code-block/` to resolve JavaScript and other assets under the repository's Pages subpath.

Original source: https://github.com/tamalCodes/scratch-clone (ISC as declared by upstream). This project has not been verified with an end-to-end browser test.
