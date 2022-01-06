<template>

  <div class="container">
   <MList/>
   <MSearch/>
  </div>

</template>




<script>
  import MList from './components/MList.vue'
  import MSearch from './components/MSearch.vue'
 

export default {
    name:'App',
    components:{MSearch,MList},
   
    
}
</script>
