import { defineStore } from "pinia";

export const useDarkness = defineStore("dark", {
    state: () => ({
        light: "light"
    }),
    actions: {
        toggleDark() {
            this.light = "dark"
        },
        toggleLight() {
            this.light = "light"
        }
    }
})
