<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {};
  }
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
}

.content__item {
  margin-bottom: 15px;

  color: #828282;
}
</style>