<template>
  <h1>{{oneMess.title}}</h1>
</template>

<script>
import { changeMessage } from "../dataArr";

export default {
  // props: ["newId"],

  data() {
    return {
    };
  },

  computed: {
    oneMess() {
      return changeMessage(1)
    }
  }
};
</script>

<style>
</style>