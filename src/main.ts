import './assets/main.scss'
import {library} from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

library.add(fas, far);

const app = createApp(App)
.component('FontAwesomeIcon', FontAwesomeIcon);

app.use(createPinia())

app.mount('#app')
