<template>
  <div id="components-layout-demo-fixed-sider">
    <div class="sidemenu">
      <div class="logo"></div>
      <nav>
        <ul>
          <li>
            <router-link to="/myday">
              <i class="fas fa-basketball-ball"></i>
              <span class="nav-text">My Day</span>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <i class="fas fa-basketball-ball"></i>
              <span class="nav-text">Home</span>
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              <i class="fas fa-basketball-ball"></i>
              <span class="nav-text">About</span>
            </router-link>
          </li>
          <li>
            <router-link to="/login">
              <i class="fas fa-basketball-ball"></i>
              <span class="nav-text">Login</span>
            </router-link>
          </li>
          <li>
            <router-link to="/afterlogin">
              <i class="fas fa-basketball-ball"></i>
              <span class="nav-text">After Login</span>
            </router-link>
          </li>
          <li>
            <router-link to="/login/facebook/callback">
              <i class="fas fa-basketball-ball"></i>
              <span class="nav-text">Callback</span>
            </router-link>
          </li>
          <li>
            <router-link to="/settings">
              <i class="fas fa-basketball-ball"></i>
              <span class="nav-text">Settings</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div :style="{ marginLeft: '150px' }">
      <div :style="{}">
        Debug:<br />
        {{ JSON.stringify($store.state.users) }}
      </div>
      <div :style="{ margin: '0 16px 0', overflow: 'initial' }">
        <router-view />
      </div>
      <div :style="{ textAlign: 'center' }">m2np.com</div>
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: "Zpix";
  src: url("assets/Zpix.ttf");
}
* {
  font-family: Zpix;
  font-size: 13px;
  margin: 0;
  padding: 0;
}
body {
  font-family: Zpix;
  font-size: 13px;
}
.sidemenu {
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
  background: black;
}
.sidemenu ul li {
  display: block;
  font-size: 1.2em;
}
.sidemenu ul {
  display: block;
  padding: 1.5em;
}
.sidemenu i {
  padding-right: 0.2em;
}
.sidemenu a {
  color: white;
}
</style>
<script>
import "vue-popperjs/dist/vue-popper.css";
export default {};
</script>
