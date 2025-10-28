import { ModuleOptions } from "webpack";
import ReactRefreshTypeScript from "react-refresh-typescript"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { getPath } from "./utils/getPath";


export function getModuleRules(isDev: boolean): ModuleOptions["rules"] {
    const isProd = !isDev
    
    const rules: ModuleOptions["rules"] = [
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
    
    return rules
}
