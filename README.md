# A simple Lib Template (batteries included)

#### A starting point for writing JavaScript libraries.

Rollup is used to bundle JavaScript modules and styles (css or scss) to the `dist` folder.

It comes with

- [Jest](https://jestjs.io/),
- [normalize.css](https://github.com/necolas/normalize.css/),
- [skeleton](http://getskeleton.com/) and
- [airbnb .jshintrc](https://github.com/airbnb/javascript)

write

- Javascript in the `src` folder,
- scss in the `styles` folder and
- tests in the `test` folder

install the dev dependencies with

```bash
npm i
```

run minification and browsersync (watches file changes) with

```bash
npm run dev
```

run tests (incl. coverage) with

```bash
npm test
```

PRs welcome!
