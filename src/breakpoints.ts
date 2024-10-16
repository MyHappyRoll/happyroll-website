export const BREAKPOINTS = {
    sm: 480,
    md: 768,
    lg: 1024,
}

export function isSmallViewport() {
    return document.documentElement.clientWidth <= BREAKPOINTS.sm
}

export function isMediumViewport() {
    return document.documentElement.clientWidth > BREAKPOINTS.md
        && document.documentElement.clientWidth < BREAKPOINTS.lg
}

export function isLargeViewport() {
    return document.documentElement.clientWidth >= BREAKPOINTS.lg
}