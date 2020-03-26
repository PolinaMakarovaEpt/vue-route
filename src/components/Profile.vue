<template>
  <div>
    <div class="link links">
        <router-link to="/profile" active-class="active-page" exact>Profile</router-link>
        <router-link to="/profile/settings" active-class="active-page" append>Settings</router-link>
        <router-link to="/profile/messages" active-class="active-page" append>Messages</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "MyProfile"
};
</script>

<style>
.links {
margin-left: 25px;
}
</style>