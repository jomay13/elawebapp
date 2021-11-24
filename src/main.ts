import Axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import jQuery from 'jquery'
// window.$ = window.jQuery = require("jquery");



// import '@/assets/datatablesplugins/datatables-bs4/css/dataTables.bootstrap4.min.css'
// import '@/assets/datatablesplugins/datatables-responsive/css/responsive.bootstrap4.min.css'
// import '@/assets/datatablesplugins/datatables-buttons/css/buttons.bootstrap4.min.css'

import '@/assets/fontawesome-free/css/all.min.css'
import '@/assets/overlayScrollbars/css/OverlayScrollbars.min.css'
import '@/assets/css/adminlte.css'

import '@/assets/jquery/jquery.min.js'
import '@/assets/bootstrap/js/bootstrap.bundle.min.js'
import '@/assets/overlayScrollbars/js/jquery.overlayScrollbars.min.js'
import '@/assets/js/adminlte.min.js'


// import '@/assets/datatablesplugins/datatables/jquery.dataTables.min.js'
// import '@/assets/datatablesplugins/datatables-bs4/js/dataTables.bootstrap4.min.js'
//import '@/assets/datatablesplugins/datatables-responsive/js/dataTables.responsive.min.js'
// import '@/assets/datatablesplugins/datatables-responsive/js/responsive.bootstrap4.min.js'
//import '@/assets/datatablesplugins/datatables-buttons/js/dataTables.buttons.min.js'
// import '@/assets/datatablesplugins/datatables-buttons/js/buttons.bootstrap4.min.js'
// import '@/assets/datatablesplugins/jszip/jszip.min.js'
// import '@/assets/datatablesplugins/pdfmake/pdfmake.min.js'
// import '@/assets/datatablesplugins/pdfmake/vfs_fonts.js'
// import '@/assets/datatablesplugins/datatables-buttons/js/buttons.html5.min.js'
// import '@/assets/datatablesplugins/datatables-buttons/js/buttons.print.min.js'
// import '@/assets/datatablesplugins/datatables-buttons/js/buttons.colVis.min.js'

// import './plugins/element.js'
// import installElementPlus from './plugins/element'

// import ElementPlus from "element-plus";
// import "element-plus/theme-chalk/index.css";

const app = createApp(App)
// installElementPlus(app)
Axios.defaults.baseURL = "https://localhost:44324/api/"
// Axios.defaults.headers.common['Authorization'] = 'Basic ' + localStorage.getItem('token')
app
.use(store)
.use(router)
.mount('#app')