#webpack-config-stats

Generate a `stats.json` file to go with your [webpack] build.

![build status](http://img.shields.io/travis/webpack-config/webpack-config-stats/master.svg?style=flat)
![coverage](http://img.shields.io/coveralls/webpack-config/webpack-config-stats/master.svg?style=flat)
![license](http://img.shields.io/npm/l/webpack-config-stats.svg?style=flat)
![version](http://img.shields.io/npm/v/webpack-config-stats.svg?style=flat)
![downloads](http://img.shields.io/npm/dm/webpack-config-stats.svg?style=flat)

## Usage

Install:

```sh
npm install --save webpack-config-stats
```

Add to your `webpack.config.babel.js`:

```javascript
import stats from `webpack-config-stats`;

stats()({
  /* existing webpack configuration */
})
```

[webpack]: https://webpack.github.io
