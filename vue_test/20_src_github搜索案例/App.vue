<template>

  <div class="container">
    <MSearch/>
    <MList/>
  </div>

</template>




<script>
  import MSearch from './components/MSearch.vue'
  import MList from './components/MList.vue'

export default {
    name:'App',
    components:{MSearch,MList},
   
    
}
</script>
