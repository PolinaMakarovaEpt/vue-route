<template>
  <div id="app">
    <div class="link">
      <router-link to="/" active-class="active-page" exact>Home</router-link>
      <router-link to="/news" active-class="active-page">News</router-link>
      <router-link to="/profile" active-class="active-page">My profile</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  margin-top: 40px;
}

a {
  text-decoration: none;

  color: #4F4F4F;
}

.link {
  width: 240px;
  height: 40px;

  display: flex;
  justify-content: space-between;
}

.active-page {
  color: #2D9CDB;
}

.content {
  display: flex;
  flex-direction: column;

  margin-left: 5px;
}

.content__item {
  margin-bottom: 15px;

  color: #828282;
}
</style>
