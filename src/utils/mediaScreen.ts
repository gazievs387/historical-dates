


type ScreenType = "mobile" | "tablet" | "desktop" | "lg";

export let deviceScreen: ScreenType;

export const windowWidth = document.body.clientWidth


if (windowWidth < 600) {
    deviceScreen = "mobile"
} else if (windowWidth > 600 && windowWidth < 900)  {
    deviceScreen = "tablet"
} else if (windowWidth > 900 && windowWidth < 1600) {
    deviceScreen = "desktop"
} else {
    deviceScreen = "lg"
}
