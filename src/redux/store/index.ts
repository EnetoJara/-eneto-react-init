export function store () {
    if (process.env.NODE_ENV === "development") {
        return import("./dev");
    }
    return import("./prod");
}
