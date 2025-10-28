import { Configuration } from "webpack"
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin"
import "webpack-dev-server"
import { getWebpackPlugins } from "./config/plugins"
import { getPath } from "./config/utils/getPath"
import { getModuleRules } from "./config/moduleRules"


function getWebpackConfig(env: any): Configuration {
    const isProd = env.prod ? true : false 
    const isDev = !isProd


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
            rules: getModuleRules(isDev)
        },
        plugins: getWebpackPlugins(isProd),
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
