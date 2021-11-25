<template>
<div class="login-page">
<div class="container">

</div>
<div class="login-box">
    <div class="card">
        <div class="card-body login-card-body">
            <p class="login-box-msg">

            <i :class="icon"></i>
            {{ errorMsg }}</p>

            <form @submit.prevent="loginSubmit">
                <div class="input-group mb-3 ">
                    <input v-model="username" type="text" :class="'form-control '+ errcred"  placeholder="Username">
                        <div class="input-group-append">
                            <div :class="'input-group-text ' + errcred">
                                <span class="fas fa-envelope"> 
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="input-group mb-3">
                        <input  v-model="password"  type="password"  :class="'form-control '+ errcred" placeholder="Password">
                        <div class="input-group-append">
                            <div :class="'input-group-text '+ errcred">
                                <span class="fas fa-lock"> 
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-8">
                            <div class="icheck-primary">
                                <input type="checkbox" id="remember" class="mr-1">
                                <label for="remember">
                                    Remember
                                </label>
                            </div>
                        </div>
                        <div class="col-4"> 
                            <button type="submit" class="btn btn-sm btn-primary btn-block"><i class="fas fa-sign-in-alt mr-2"></i>Sign In</button>
                        </div>
                    </div>
                </form>
            </div>
    </div>
</div>
</div>
</template>

<script>

import axios from 'axios'

export default{
name:'Login',

data(){
    return{
        'errorMsg' : 'Sign in now',
        'icon':'fas fa-key mr-2',   
        'errcred':''
    }
},

mounted(){
    const tokenAuth = localStorage.getItem('token')
    if(tokenAuth != null ){
        this.$router.push('/Showlogs')
    }
},
methods: {
async loginSubmit(){ 
    const username = this.username;
    const password = this.password;
    const encoded = window.btoa(username + ":" + password );       
    this.errorMsg = "Authenticating please wait."
    this.icon = 'fa fa-circle-o-notch fa-spin mr-2'
    await axios.get("LoginUser",{
        headers:{
                Authorization: 'Basic ' + encoded,
            }
        }).then((response) =>{
        this.userinfo = response.data 

        localStorage.setItem('token',encoded);
        localStorage.setItem('username', this.userinfo.username);
        localStorage.setItem('userno', this.userinfo.userno);
        this.$router.push('/Showlogs')

        // this.$store.dispatch('storename', this.userinfo.userno)
        // console.log(response);
            }
        ).catch((error) => {
            this.errorMsg=error.response.data
            this.errcred = 'border-danger'
            });

        this.icon = 'fas fa-key mr-2'
    }   
 }
}
</script>
