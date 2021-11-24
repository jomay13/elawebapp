<template>
<div class="card p-4">
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


<div class="container">
<table id="myTable" class="table table-striped table-bordered dt-responsive nowrap table-hover" style="width:100%;font-size:0.9rem">
  <thead>
    <tr>
      <th>Log ID</th>
      <th>Details</th>
      <th>Type</th>
      <th>Created by</th>
      <th>Date created</th>
      <!-- <th>Action</th> -->
    </tr>
  </thead>
  <tbody>
    <tr v-for="listlog in listlogs" :key="listlog.id">
      <td>{{ listlog.id }}</td>
      <td>{{ listlog.details }}</td>
      <td>{{ listlog.type }}</td>
      <td>{{ listlog.username }}</td>
      <td>{{ listlog.datecreated }}</td>
      <!-- <td class="text-center"><button type="submit" class="btn btn-sm btn-dark rounded-circle"><i class="fa fa-edit"></i></button></td> -->
    </tr>
  </tbody>       
                  
</table>
</div>
<div class="container border-top pt-2 mt-2">
 <router-link to="/Addnew" class="btn btn-sm btn-primary"><i class="fa fa-plus"></i> Add new</router-link>
</div>

</div>
</template>

<script>
// import '@/assets/datatablesplugins/scripttable.js'
import axios from 'axios'
export default {

  name:'Showlogs',

  data(){
    return{
      listlogs:[]
    }
  },

  computed:{

  },

 async mounted(){
    await axios.get('PostError',{
      headers:{
        Authorization : 'Basic ' + localStorage.getItem('token')
      }
    }).then((response => (this.listlogs = response.data)))

    $(document).ready(function() {
        $('#myTable').DataTable({
            "bPaginate": true,
            "bLengthChange": false,
            "bFilter": true,
            "bInfo": true,
            "bAutoWidth": false
        });
    });
  },

  created(){

  }
}
</script>
