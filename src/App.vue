<template>
  <div id="components-layout-demo-fixed-sider">
    <div :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
      <div class="logo"></div>
      <nav class='sidemenu'>
        <ul>
          <li>
        <router-link to="/">
          <a-icon type="user" />
          <span class="nav-text">Home</span>
        </router-link>
        </li><li>
        <router-link to="/about">
          <a-icon type="video-camera" />
          <span class="nav-text">About</span>
        </router-link>
        </li><li>
        <router-link to="/login">
          <a-icon type="upload" />
          <span class="nav-text">Login</span>
        </router-link>
        </li><li>
        <router-link to="/afterlogin">
          <a-icon type="bar-chart" />
          <span class="nav-text">After Login</span>
        </router-link>
        </li><li>
        <router-link to="/login/facebook/callback">
          <a-icon type="bar-chart" />
          <span class="nav-text">Callback</span>
        </router-link>
        </li><li>
        <router-link to="/settings">
          <a-icon type="bar-gear" />
          <span class="nav-text">Settings</span>
        </router-link>
        </li></ul>
      </nav>
    </div>
    <div :style="{ marginLeft: '200px' }">
      <div :style="{ background: '#fff', height:'2em', lineHeight:'2em' }">testing</div>
      <div :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <router-view />
      </div>
      <div :style="{ textAlign: 'center' }">m2np.com</div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.sidemenu router-link{
  display:block
}
</style>
