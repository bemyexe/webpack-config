import {ModuleOptions, runtime} from 'webpack';
import {BuildOptions} from './types/type';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const svgrLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          typescrpt: true,
          ext: 'tsx',
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: 'convertColors',
                params: {
                  currentColor: true,
                },
              },
            ],
          },
        },
      },
    ],
  };

  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        namedExport: false, // false, для експорта стилей по дефолту
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
      },
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      cssLoaderWithModules,
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };

  const typeScriptLoader =
    // установка TypeScript loader. Тс лоадер так же обрабатывает jsx,
    // если TS лоадера нет, то нужно подключать Babel
    {
      // регулярка для обработки необходимого расширения.
      test: /\.tsx?$/,
      // название лоадера.
      use: [
        {
          loader: 'ts-loader',
          options: {
            getCustomTransformers: () => ({
              before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
            }),
            transpileOnly: isDev,
          },
        },
      ],
      // исключение, которое не обрабатываем.
      exclude: /node_modules/,
    };

  const babelLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        // эти настройки можно вынести в babel.config.json, например.
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          [
            '@babel/preset-react',
            {
              runtime: isDev ? 'automatic' : 'classic',
            },
          ],
        ],
      },
    },
  };

  return [
    assetLoader,
    svgrLoader,
    scssLoader,
    // typeScriptLoader,
    babelLoader,
  ];
}
