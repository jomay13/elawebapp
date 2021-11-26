<template>
  <div class="container">
    <form @submit.prevent="addLogs">
      <div class="row">
        <div class="col-sm-6">
          <!-- text input -->
          <div class="form-group">
          <label>Type</label>
          <select v-model="type" class="form-control">
            <option value="Picking" selected>Picking</option>
          </select>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <!-- textarea -->
          <div class="form-group">
            <label>Details</label>
            <textarea  v-model="details" class="form-control" rows="3" placeholder="Enter ..."></textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-2">
          <button type="submit" class="btn btn-sm btn-primary btn-block"><i class="fa fa-save"></i> Update</button>
          </div>
        <div class="col-sm-10">
        </div>
      </div>
    </form> 
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Editela',

  data(){
    return{
      'type':'',
      'details':'',
    }
  },

// methods:{
//   addLogs(){
//     axios.put('PostError' + this.id,{
//       createdby : localStorage.getItem('userno'),
//       type : this.type,
//       details : this.details
//     },{headers:{Authorization : 'Basic ' + localStorage.getItem('token')}})
//     .then((response)=>{ alert('Record saved!.'), this.$router.push('/Showlogs') })
//     .catch((error) => (console.log(error.message)))
//     }
//   }
}
</script>
