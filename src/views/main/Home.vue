<template>
<!-- <div class="hold-transition sidebar-mini layout-fixed"> -->
<!-- Site wrapper -->
<div class="wrapper">
  <!-- Navbar -->
  <Topnav/>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-secondary elevation-4">
    <!-- Brand Logo -->

    <div class="border" style="background:#2d3436"> 
      <a href="#" class="brand-link bg-dark">
          <span class="brand-text font-weight-light float-center">Error Log Architecture</span>
        </a>
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
          <li class="nav-item" v-for="menu in menuslink" :key="menu.id">
            <router-link :to="menu.menulink" class="nav-link">
              <i class="nav-icon far fa-calendar-alt"></i>
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
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item">ELA List</li>
        </ol>
       
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content" >
      <!-- style="height:70vh; overflow: scroll;" -->
      <div class="container-fluid" >
          <router-view :key="$router.fullPath"/>
      </div>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  <footer class="main-footer">
    <div class="float-right d-none d-sm-block">
    </div>
    <strong>Copyright &copy; 2021-2022.</strong> All rights reserved.
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
import Showlogs from '@/views/main/forms/Showlogs.vue'

import axios from 'axios'

export default{
  name: 'Home',
  components:{
    Topnav,
    Footer,
    Showlogs,
  },

  data(){
    return{
      menuslink:[]
    }
  },
  mounted(){
    
    axios.get('Menulink',{
      headers:{
        Authorization : 'Basic ' + localStorage.getItem('token')
      }
    }).then((response) => ( this.menuslink = response.data ))
  }


};
</script>

