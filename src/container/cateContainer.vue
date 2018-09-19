<template>
    <div>
        <p>token:{{token}}</p>
        <cate-view 
            :props1="props1Data"
            :props2="props2Data"
            :props3="props3Data"
        />
    </div>
</template>
<script>
import CateView from "@/views/Cate.vue"
import watchToken from "@/mixins/watchToken.js"
export default {
  components: {
    CateView
  },

  mixins: [watchToken],

  data() {
    return {
      props1Data: null,
      props2Data: null,
      props3Data: null
    }
  },

  created() {
    this.getAllData()
  },

  watch: {
    token() {
      this.getAllData()
    }
  },

  methods: {
    getAllData() {
      if (this.token) {
        this.axios
          .get("https://jsonplaceholder.typicode.com/photos/4")
          .then(res => {
            this.props1Data = res.data.thumbnailUrl
          })

        this.axios
          .get("https://jsonplaceholder.typicode.com/photos/5")
          .then(res => {
            this.props2Data = res.data.thumbnailUrl
          })

        this.axios
          .get("https://jsonplaceholder.typicode.com/photos/6")
          .then(res => {
            this.props3Data = res.data.thumbnailUrl
          })
      }
    }
  }
}
</script>
