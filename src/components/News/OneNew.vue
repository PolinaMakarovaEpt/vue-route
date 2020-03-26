<template>
  <h1>{{oneNew.title}}</h1>
</template>

<script>
import { changeNew } from "../dataArr";

export default {
  // props: ["newId"],

  data() {
    return {
    };
  },

  computed: {
    oneNew() {
      // console.log(changeNew(this.$route.params.id))
      return changeNew(this.$route.params.id)
    }
  }
};
</script>

<style>
</style>