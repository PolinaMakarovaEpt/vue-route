<template>
  <div>
    <h1>News page</h1>
    <div class="content">
      <router-link
        v-for="oneNew in newsArr"
        :key="oneNew.id"
        :to="'/news/' + oneNew.id"
        class="content__item"
      >{{oneNew.title}}</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { newsArr } from "../dataArr";
export default {
  name: "NewsArr",
  data() {
    return {
      newsArr: newsArr
    };
  }
};
</script>

<style>
</style>