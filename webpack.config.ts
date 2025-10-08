import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import { Configuration } from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import "webpack-dev-server"
import ReactRefreshTypeScript from "react-refresh-typescript"
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"
import CopyWebpackPlugin from "copy-webpack-plugin"


function getPath(...paths: string[]): string {
    return path.resolve(__dirname, ...paths)
}


function getWebpackConfig(env: any): Configuration {
    const isProd = env.prod ? true : false 
    const isDev = !isProd

    const plugins: Configuration["plugins"] = [
        new HtmlWebpackPlugin({template: getPath("public", "index.html")}),
        new ForkTsCheckerWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{from: "public", to: ".", filter: (filepath) => {
                return !filepath.endsWith("index.html")
            }}]
        })
    ]

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({filename: "main.[contenthash].css"}))
    } else {
        plugins.push(new ReactRefreshWebpackPlugin())
    }

    return {
        mode: isProd ? "production" : "development",
        entry: getPath("src", "index.tsx"),
        output: {
            filename: "index.[contenthash].js",
            path: getPath("build"),
            clean: true,
            publicPath: "/"
        },
        devtool: isDev && "eval-cheap-source-map",
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: require.resolve("ts-loader"),
                        options: {
                            getCustomTransformers: () => ({
                                before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                            }),

                        },
                    }
                },
                {
                    test: /((c|sa|sc)ss)$/i,
                    use: [
                        isProd ? MiniCssExtractPlugin.loader : "style-loader",
                        { 
                            loader: "css-loader",
                        },
                        { 
                            loader: "sass-loader",
                            options: {
                                additionalData: '@use "styles/global" as *;',
                                sassOptions: {
                                    loadPaths: [getPath("src")]
                                }
                            },
                        }
                    ]
                },
                {
                    test: /\.svg$/i,
                    type: 'asset',
                    resourceQuery: /url/,
                },
                {
                    test: /\.svg$/i,
                    issuer: /\.[jt]sx?$/,
                    resourceQuery: { not: [/url/] },
                    use: [
                        {
                            loader: '@svgr/webpack',
                            options: {
                                exportType: "named"
                            }
                        }
                    ],
                },
                {
                    test: /\.(png|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
            ]
        },
        plugins: plugins,
        devServer: {
            port: 3000,
            static: {
                directory: getPath("public")
            },
            historyApiFallback: true,
            hot: true
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js", ".jsx", ".scss"],
            
            plugins: [new TsconfigPathsPlugin()]
        }
    }
}


export default getWebpackConfig
