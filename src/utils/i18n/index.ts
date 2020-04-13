export default function i18n (language: string) {
    if (language.includes("es")) {
        return require("./es.json")
    }

    return require("./en.json")
}
