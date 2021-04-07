<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <template>
      <div class="center examplex">
        <vs-navbar center-collapsed color='primary' v-model="active">
          <template #left>
            <img src="/logo2.png" alt="">
          </template>
          <vs-navbar-item :active="active == 'guide'" id="guide">
            Guide
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'docs'" id="docs">
            Documents
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'components'" id="components">
            Components
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'license'" id="license">
            license
          </vs-navbar-item>
          <template #right>
            <vs-button flat >Login</vs-button>
            <vs-button>Get Started</vs-button>
          </template>
        </vs-navbar>
        <div class="square">
          <div class="child"> 
            <p>Child 1</p>
          </div>
          <div class="child"> 
            <p>Child 2</p>
          </div>
          <div class="child"> 
            <p>Child 3</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
