import partial from 'webpack-partial';
import StatsPlugin from 'stats-webpack-plugin';

export default (name = 'stats.json', options) => (config) => partial(config, {
  plugins: [
    new StatsPlugin(name, options),
  ],
});
