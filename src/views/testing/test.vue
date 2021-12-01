<template>
<div class="wrapper">
  <!-- Navbar -->
  <Topnav/>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-light-secondary elevation-4" >
    <!-- Brand Logo -->

    <div > 
      <router-link :to="{name:'Showlogs'}" class="brand-link bg-dark text-center">
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
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
    
          <li class="nav-header">Activity</li>  


          <li class="nav-item menuLoading" v-if="menuloader">
             <router-link to="" class="nav-link menuLoading" >
              <p>...</p>
            </router-link>   
          </li> 


          <li class="nav-item" v-for="menu in menuslink" :key="menu.id" v-else>
            <router-link to @click="chngRoute(menu.menulink)" :class="sample(menu.menulink)">
              <i class="nav-icon far fa-file-alt "></i>
              <p>
                {{ menu.menuname }}
              </p>
            </router-link>
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
           
            <router-link :to="{name:breadCrumb}" :class="chckCurrent(breadCrumb)">{{ breadCrumb }}</router-link>
            
          </li>
          <!-- <li class="breadcrumb-item">{{ brdName }}</li> -->
        </ol>
       
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content" >
      <!-- style="height:70vh; overflow: scroll;" -->

        <div class="card p-4 ">
          <router-view/>
         </div> 
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

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
</template>

<script>
import Topnav from '@/components/Topnav.vue'
import Footer from '@/components/Footer.vue'

import axios from 'axios'

export default{
  name: 'test',
  components:{
    Topnav,
    Footer,

  },

  data(){
    return{

      menuloader:true,
      test:'',
      menuslink:[],
      listlogs:[],
      breadCrumbs:[],
      bd:[]
    }
  },
  methods:{
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

    sample(test){
      const splitedPath = this.$route.path.split('/')

      this.breadCrumbs = splitedPath
      const lnk1 = splitedPath[2]
      const lnk = test.replace(/[^a-zA-Z ]/g, "")
      if(lnk == lnk1){
        return 'nav-link active'
      }else{
        return 'nav-link'
      }
    }
  }
  ,
async mounted(){
  await  axios.get('Menulink?stat=Active',{
      headers:{
        Authorization : 'Basic ' + localStorage.getItem('token')
      }
    }).then((response) => { this.menuslink = response.data , this.menuloader = false})
      .catch((error) => {this.$router.push("/")})      
  }
};
</script>