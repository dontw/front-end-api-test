<template>
<div>
 <h1>shiba view</h1>
 <ul>
     <li>
         <img :src="props1" alt="">
     </li>
      <li>
         <img :src="props2" alt="">
     </li>
      <li>
         <img :src="props3" alt="">
     </li>
 </ul>
</div>
</template>
<script>
export default {
  props: {
    props1: {
      type: String
    },
    props2: {
      type: String
    },
    props3: {
      type: String
    }
  }
}
</script>
