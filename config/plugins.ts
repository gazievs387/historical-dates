import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import { Configuration } from "webpack"
import CopyWebpackPlugin from "copy-webpack-plugin"
import { getPath } from "./utils/getPath"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"


export function getWebpackPlugins(isProd: boolean): Configuration["plugins"] {
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

    return plugins
}
