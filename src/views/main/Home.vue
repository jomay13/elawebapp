<template>

<div class="wrapper">
  <Topnav/>
  <aside class="main-sidebar sidebar-light-secondary elevation-4" >
    <div > 
      <router-link :to="{name:'Ela'}" class="brand-link bg-dark text-center">
          <span class="font-weight-bold">ELA</span>
          <span class="brand-text float-center small" style="text-shadow: 0 0 1px black;">
            Error Log Architecture
          </span>
        </router-link>
    </div>
 

    <!-- Sidebar -->
    <div class="sidebar" >
      <!-- Sidebar user (optional) -->

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li class="nav-header">Activity</li>  

          <li class="nav-item menuLoading" v-if="menuloader">
             <router-link to="" class="nav-link menuLoading" >
              <p>...</p>
            </router-link>   
          </li> 


          <li class="nav-item" v-for="menu in menuslink" :key="menu.id" v-else>
            <a href="#" @click="chngRoute(menu.menulink)" :class="navHighlighter(menu.menulink)">
              <i class="nav-icon far fa-file-alt "></i>
              <p>
                {{ menu.menuname }}
              </p>
            </a>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
  
    <section class="content-header">
      <div class="container-fluid">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" v-for="breadCrumb in breadCrumbs.slice(1)" :key="breadCrumb.key">
            <router-link to :class="chckCurrent(breadCrumb)">{{ breadCrumb }}</router-link>      
          </li>
        </ol>
      </div>
    </section>

    <!-- Main content -->
    <section class="content" >
        <div class="card p-4 ">
          <router-view :key="$router.fullPath"/>
         </div> 
    </section>
    <!-- /.content -->
  </div>

  <footer class="main-footer"> 
    <div class="float-right d-none d-sm-block small">
        <strong class="">Copyright &copy; 2021-2022 ELA.</strong> All rights reserved.
    </div>
  </footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
</div>

<!-- </div> -->
</template>
<script>
import Topnav from '@/components/Topnav.vue'
import Footer from '@/components/Footer.vue'

import axios from 'axios'

export default{
  name: 'Home',
  components:{
    Topnav,
    Footer,

  },

  data(){
    return{
      menuloader:true,
      menuslink:[],
      listlogs:[],
      breadCrumbs:[],
    }
  },

  watch:{
    $route (to, from){
      const splitedPath = this.$route.path.split('/')
      this.breadCrumbs = splitedPath 
    }
  },

  methods:{
    navHighlighter(navLink){
      const splitedPath = this.$route.path.split('/')
      const lnk1 = splitedPath[2]
      const lnk = navLink.replace(/[^a-zA-Z ]/g, "")

      if(lnk == lnk1){
        return 'nav-link active'
      }else{
        return 'nav-link'
      }
    },
    chngRoute(rr){
      this.$router.push({name:rr})
    },
    chckCurrent(crr){
      if(this.$route.name == crr){
        return 'text-secondary'
      }
      else
      {
        return 'text-primary display-block'
      }
    },
  },
async mounted(){
  const splitedPath = this.$route.path.split('/')
  this.breadCrumbs = splitedPath 
  await  axios.get('Menulink?stat=Active',{
      headers:{
        Authorization : 'Basic ' + localStorage.getItem('token')
      }
    }).then((response) => {

      this.menuslink = response.data , 
      this.menuloader = false})
      .catch((error) => {this.$router.push("/")})      
  }
};
</script>
<style scoped>

  body{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .menuLoading{
      width: 100%;
      animation: ldg 1s infinite;
      text-align: center;
  }
  .txtSpan{
    margin-top:10px;
    border: 1px solid black;
  }

  @keyframes ldg {
    0% { background-color: #ddd;color:#d0d0d0;}
    50% { background-color: #d0d0d0; color:#ddd; }
    100% { background-color: #ddd;color:#d0d0d0;} 
  }
</style>


