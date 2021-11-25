<template>

<!-- <div class="container">
  <span class="small">Search by</span>
<div class="input-group mb-3" style="width:20rem">

  <div class="input-group-prepend">
    <select name="" id="" class="form-control">
      <option value="">Details</option>
      <option value="">Type</option>
    </select>
  </div>

  <input type="text" class="form-control">
  </div>
</div> -->

<div class="container" v-if="loaderDiv">
  <div class="divLoading">
 
  </div>
</div>

<div class="container" v-else>
  <table id="myTable" class="table table-striped table-bordered dt-responsive nowrap table-hover" style="width:100%;font-size:0.8rem"> 
    <thead>
      <tr>
        <th>Log ID</th>
        <th>Details</th>
        <th>Type</th>
        <th>Created by</th>
        <th>Date created</th>
        <th></th>
        <!-- th>Action</th> -->
      </tr>
    </thead>
    <tbody>
      <tr v-for="listlog in listlogs" :key="listlog.id">
        <td>{{ listlog.id }}</td>
        <td>{{ listlog.details }}</td>
        <td>{{ listlog.type }}</td>
        <td>{{ listlog.username }}</td>
        <td>{{ moment(listlog.datecreated).format("ddd MMM DD, YYYY [at] HH:mm a") }}</td>

        <td class="text-center"><router-link to="/Editela" class="btn btn-sm btn-dark rounded-pill small" style="font-size:.6rem"><i class="fa fa-edit"></i>Edit</router-link></td>
      </tr>
    </tbody>                
  </table>

  <div class="container border-top pt-2 mt-2">
    <router-link to="/Addnew" class="btn btn-sm btn-primary"><i class="fa fa-plus"></i> Add new</router-link>
  </div>
</div>





</template>

<script>
// import '@/assets/datatablesplugins/scripttable.js'
import moment from 'moment'
import axios from 'axios'
export default {
  name:'Showlogs',
    created(){
    this.moment = moment; 
    },
    data(){
      return{
        listlogs:[],
        'loaderDiv':true
      }
    },

  async mounted(){ 
    await axios.get('PostError',{
        headers:{
          Authorization : 'Basic ' + localStorage.getItem('token')
        }
      }).then((response) => {
        this.listlogs = response.data
         this.loaderDiv = false
        })

    await $(document).ready(function() {
            $('#myTable').DataTable({
              "bLengthChange": false,
              "bAutoWidth": false,
              "scrollY":"230px"
            });
          });
      },
}
</script>

<style scoped>
  .divLoading{
      width: 100%;
      height:60vh;
      animation: ldg 1s infinite;
      text-align: center;

  }

  .txtSpan{
    margin-top:10px;
    border: 1px solid black;
  }

  @keyframes ldg {
    0% { background-color: #ddd; }
    50% { background-color: #d0d0d0; }
    100% { background-color: #ddd; } 
  }

</style>
