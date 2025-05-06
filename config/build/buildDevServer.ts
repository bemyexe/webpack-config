import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';
import {BuildOptions} from './types/type';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 3000,
    open: true,
    // если раздавать статитку через nginx, то надо делать
    // проксирование на index.html
    historyApiFallback: true,
    hot: true,
  };
}
