import { createApp } from 'vue'
import {Icon} from '@iconify/vue';
import {createPinia} from "pinia"
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from 'primevue/button';
import './style.css'
import App from './App.vue'
const app = createApp(App);
const pinia=createPinia()
app.component('Icon', Icon); 
app.use(pinia)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities' 
        }
        }
    }
 });
app.component('Button', Button);
app.mount('#app');
