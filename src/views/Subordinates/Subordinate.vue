<template>
  <div>
    <div class="header-container bottom-line">
      <label class="page-title">Subordinate</label>
    </div>
    <div>
      <leave-form></leave-form>
    </div>
  </div>
</template>

<script>
import LeaveForm from './components/LeaveForm'
import Search from '@/components/Search.vue'
export default {
  components: {
    LeaveForm,
    Search
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header-container {
    margin-top: 50px;
    text-align: left;
  }
  .field {
    margin-top: 20px;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .align-right {
    text-align: right;
  }
  .bottom-line {
    border-bottom: 1px;
    border-bottom-style: solid;
    border-bottom-color: #e0e0E0;
    padding-bottom: 20px;
    margin-bottom: 0;
  }
  .padding-right {
    padding-right: 20px;
  }
  .padding-top {
    padding-top: 20px;
  }
  .page-title {
    width: auto;
    margin-left: 15%;
    margin-top: 50px;
    font-size: 50px;
  }
  .inline-block {
    display: inline-block;
  }
</style>
