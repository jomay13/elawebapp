<template>

  <div class="container">
  
    <div class="container border-bottom mb-2 pb-3 text-right font-weight-bold">  
     <router-link :to="{name:'Ela'}"  class="btn btn-sm btn-primary shadow-sm float-left" ><i class="fas fa-arrow-left"></i></router-link>
      Add new ELA
    </div>
    <form @submit.prevent="addLogs">
      <div class="row">
        <div class="col-sm-6">
          <!-- text input -->
          <div class="form-group">
          <label>Type</label>
          <select v-model="type" class="form-control" required>
            <option  v-for="typ in typeslist" :key="typ.id" :value="typ.typename">{{ typ.typename }}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <!-- textarea -->
          <div class="form-group">
            <label>Details</label>
            <textarea  v-model="details" class="form-control" rows="3" placeholder="Enter ..." required></textarea>
          </div>
        </div>
        </div>
      <div class="row">
        <div class="col-sm-2">
          <button type="submit" class="btn btn-sm btn-primary btn-block"><i class="fa fa-save"></i> Save</button>
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
name:'Add',

data(){
return{
  'type':'Picking',
  'details':'',

  typeslist:[]
}
},

mounted(){
  axios.get('Types', {
      headers:{Authorization : 'Basic ' + localStorage.getItem('token')
      }
    }).then((response)=>{
        this.typeslist = response.data
       })
      .catch((error) => (console.log(error.message)))
},

methods:{
  addLogs(){
    axios.post('PostError',{
      createdby : localStorage.getItem('userno'),
      type : this.type,
      details : this.details
    },{headers:{Authorization : 'Basic ' + localStorage.getItem('token')}})
    .then((response)=>{ alert('Record saved!.'), this.$router.push({name:"Ela"}) })
    .catch((error) => (console.log(error.message)))
    }
  }
}
</script>
