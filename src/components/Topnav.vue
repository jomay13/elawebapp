<template>
  <nav class="main-header navbar navbar-expand navbar-light  navbar-light  sticky">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item menBar">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars text-light"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link"></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link"></a>
      </li>
    </ul>
    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Navbar Search -->
      <!-- Messages Dropdown Menu -->
      <li class="nav-item dropdown" >
        <a class="nav-link text-light" data-toggle="dropdown" href="#">
          <i class="far fa-user mr-2"></i>{{ username }}
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <div class="media-body text-center">
                <p class="text-sm">Hi! {{ username }}</p>
              </div>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a v-on:click="logoutAndDestroy" href="#" class="dropdown-item dropdown-footer">Sign out</a>
        </div>
      </li>
      <li class="nav-item">
        <a  class="nav-link text-light" data-widget="fullscreen" href="#" role="button">
          <i class="fas fa-expand-arrows-alt"></i>
        </a>
      </li>

    </ul>
  </nav>
</template>
<script>
export default{
    name:'Topnav',
    // props:['username'],
    data(){
      return{
        username:localStorage.getItem('username')
      }
    },
      methods:{
        logoutAndDestroy () {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('userno');
        this.$router.push('/')
      }
  }
}
</script>
<style scoped>


.menBar{
display: none;
}
/* @media screen and (max-width: 1200px) {
  .menBar{

    display: none;
  }
} */

@media screen and (max-width: 950px) {
  .menBar{

    display: block;
  }
}

</style>
