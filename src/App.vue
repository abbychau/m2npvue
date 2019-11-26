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
              <span class="nav-text">Timeline</span>
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
            <router-link to="/messenger">
              <i class="fas fa-basketball-ball"></i>
              <span class="nav-text">Messenger</span>
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
  font-size: 14px;
  margin: 0;
  padding: 0;
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
h1 {
  font-size: 3em;
  margin-top: 1.5em;
}
h2 {
  font-size: 2em;
  margin-top: 1em;
}
h3 {
  font-size: 1.5em;
  margin-top: 0.75em;
}
p {
  margin-top: 0.5em;
}
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
  border: 2px double black !important;
}
textarea,
.file,
input[type="submit"],
.border,
button {
  border: 2px solid black;
  border-radius: 3px;
  padding: 0.2em;
  margin-right: 3px;
}
</style>
<script>
import "vue-popperjs/dist/vue-popper.css";
export default {};
</script>
