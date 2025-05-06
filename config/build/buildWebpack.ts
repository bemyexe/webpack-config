import webpack from 'webpack';
import {buildDevServer} from './buildDevServer';
import {buildLoaders} from './buildLoaders';
import {buildPlugins} from './buildPlugins';
import {buildResolve} from './buildResolve';
import {BuildOptions} from './types/type';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const isDev = options.mode === 'development';
  const {mode, paths} = options;

  return {
    // определяет в каком формате происходит сборка.
    mode: mode ?? 'production',
    // входная точка всего приложения
    entry: paths.entry,
    // папка, в которую будет попадать конечная сборка.
    output: {
      // браузер кэширует имена файлов, по этому необходимл добавлять hash id к имени.
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
    },
    // установленные плагины.
    plugins: buildPlugins(options),

    module: {
      // в массиве rules важна последовательность лоадеров с конца.
      rules: buildLoaders(options),
    },
    resolve: buildResolve(options),
    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
