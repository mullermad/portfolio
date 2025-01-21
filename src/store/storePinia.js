import { defineStore } from "pinia";
export const  useDarkness=defineStore("dark",{
 state:()=>({
        light:"light"
    }),
    actions:{
        toogleDark(){
            this.light="dark"
        },
        toggleLight(){
            this.light="light"
        }
    }
})