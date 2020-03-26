import Vue from "vue";
import Router from "vue-router";

import Home from "./components/Home";
import News from "./components/News";
import OneNew from "./components/News/OneNew";
import AllNews from "./components/News/AllNews";
import Profile from "./components/Profile";
import MyProfile from "./components/Profile/MyProfile";
import Messages from "./components/Profile/Messages";
import AllMessages from "./components/Profile/AllMessages";
import OneMessage from "./components/Profile/OneMessage";
import ProfileSettings from "./components/Profile/ProfileSettings";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: Home },
    {
      path: "/news",
      component: News,
      children: [
        {
          path: "",
          component: AllNews
        },
        {
          path: ":id",
          component: OneNew,
          props: true
        }
      ]
    },
    {
      path: "/profile",
      component: Profile,
      children: [
        {
          path: "messages",
          component: Messages,
          children: [
            {
              path: "",
              component: AllMessages
            },
            {
              path: ":id",
              component: OneMessage,
              props: true
            }
          ]
        },
        {
          path: "settings",
          component: ProfileSettings
        },
        {
          path: "",
          component: MyProfile
        }
      ]
    }
  ]
});
