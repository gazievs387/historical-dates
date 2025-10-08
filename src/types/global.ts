


declare module "*.svg" {
    import { FC, SVGProps } from "react";
    export const ReactComponent: FC<SVGProps<SVGElement>>;
}

declare module "*.scss" {
    const content: Record<string, string>;
    export default content;
}
