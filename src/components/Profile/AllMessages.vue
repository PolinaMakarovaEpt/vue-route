<template>
  <div>
    <h1>My messages</h1>
    <div class="content">
      <router-link
        v-for="oneMess in messagesArr"
        :key="oneMess.id"
        :to="{path: '/profile/messages/' + oneMess.id, params: {messId: oneMess.id}}"
        class="content__item"
      >{{oneMess.title}}</router-link>
    </div>
  </div>
</template>

<script>
import { messagesArr } from "../dataArr";
export default {
  data() {
    return {
      messagesArr: messagesArr
    };
  }
};
</script>

<style>
</style>