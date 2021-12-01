<template>
<div class="container" v-if="loaderDiv">
  <div class="divLoading">
  </div>
</div>

<div class="container" v-else>
  <div class="container border-bottom mb-2 text-right font-weight-bold">ELA List</div>
   <!-- <router-link :to="{name:'Editela', params:{id:'1'}}">sada</router-link> -->
  <table id="myTable" 
         class="table table-striped dt-responsive nowrap table-hover content-table" 
         style="width:100%;font-size:0.8rem;"> 
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

        <td class="text-center">
        <router-link  :to="{ name : 'Edit', query:{id: listlog.id ,type:listlog.type, details:listlog.details}}"  
                      class="btn btn-sm btn-primary rounded-pill small shadow-sm" 
                      style="font-size:.6rem">
          <i class="fa fa-edit mr-1"></i>Edit
        </router-link>
        </td>
      </tr>
    
    </tbody> 
                  
  </table>
<!-- {name:'Addnew',params: {status : 'sample'}} -->
  <div class="container border-top pt-2 mt-2">

    <router-link :to="{name:'Add'}" class="btn btn-sm btn-primary mr-2"><i class="fa fa-plus"></i> Add new</router-link>
    <!-- <router-link :to="{name:'Addnew'}" class="btn btn-sm btn-primary mr-2"><i class="fa fa-file-excel"></i> Export</router-link>
    <router-link :to="{name:'Addnew'}" class="btn btn-sm btn-primary mr-2"><i class="fa fa-print"></i> Print</router-link> -->
  </div>
</div>
</template>
<script>
import moment from 'moment'
import axios from 'axios'

export default {
  name:'Ela',
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
              "pageLength":5
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


 .content-table {
  border:0px;
  border-radius: 5px 5px 0 0; 
  overflow: hidden;
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.15);
}
</style>
