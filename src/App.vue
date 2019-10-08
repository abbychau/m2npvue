<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
      <div class="logo"></div>
      <a-menu theme="light" mode="inline" :defaultSelectedKeys="['4']">
        <a-menu-item key="1">
          <router-link to="/">
          <a-icon type="user" />
          <span class="nav-text">Home</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/about">
          <a-icon type="video-camera" />
          <span class="nav-text">About</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/login">
          <a-icon type="upload" />
          <span class="nav-text">Login</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link to="/afterlogin">
          <a-icon type="bar-chart" />
          <span class="nav-text">After Login</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="5">
          <router-link to="/login/facebook/callback">
          <a-icon type="bar-chart" />
          <span class="nav-text">Callback</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="6">
          <a-icon type="appstore-o" />
          <span class="nav-text">nav 6</span>
        </a-menu-item>
        <a-menu-item key="7">
          <a-icon type="team" />
          <span class="nav-text">nav 7</span>
        </a-menu-item>
        <a-menu-item key="8">
          <a-icon type="shop" />
          <span class="nav-text">nav 8</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header :style="{ background: '#fff', height:'2em', lineHeight:'2em' }">testing</a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
<router-view/>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        m2np.com
      </a-layout-footer>
    </a-layout>
  </a-layout>

</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
