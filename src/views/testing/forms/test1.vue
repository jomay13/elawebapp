<template>
    <div>
       test1
         <router-link :to="{name:'test2', params:{ id: '123' }}" >click</router-link>
    </div>
</template>

<script>

export default{
    name:'tests1',

}
</script>
