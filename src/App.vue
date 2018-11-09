<template>
  <div id="app">
    <div id="nav">
      <div class="top-nav">
        <ul class="quick-nav">
          <li><a href="">Research</a></li>
          <li><a href="">Locations</a></li>
          <li><a href="">Contributions</a></li>
          <li><a href="">News Hub</a></li>
          <li><a href="">FR</a></li>
        </ul>
      </div>
      <nav class="navbar">
        <div class="navbar-toggle">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <a href="/" class="logo">logo</a>
        <ul class="main-nav">
          <li><a href="">We are ipsum</a></li>
          <li><a href="">We are dolr</a></li>
          <li><a href="">iopsum</a></li>
          <li><a href="">amet</a></li>
        </ul>
      </nav>
      <!--<router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 900px;
  margin: 0 auto;
}
#nav {
  ul {
    list-style-type: none;
    li {
      a {
        margin-left: 40px;
        color: #fff;
        text-decoration: none;
        &:hover {
          color: #667a8c;
        }
      }
    }
  }
  .top-nav {
    display: none;
  }
  .navbar {
    height: 50px;
    padding-bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #002140;
    .navbar-toggle {
      position: absolute;
      right: 15px;
      cursor: pointer;
      div {
        width: 34px;
        height: 3px;
        background-color: #e6f0f3;
        margin: 5px 0;
      }
    }
    .logo {
      margin-left: 42px;
      font-size: 20px;
      text-transform: uppercase;
      color: #fff;
      text-decoration: none;
    }
    .main-nav {
      display: none;
      margin-right: 40px;
      flex-direction: row;
      justify-content: flex-end;
      font-size: 14px;
      li {
        margin: 0;
      }
    }
  }
}
@media (min-width: 768px) {
  #nav {
    .top-nav {
      height: 30px;
      padding-bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #002140;
      border-bottom: 1px solid #334d66;
      .quick-nav {
        width: 100%;
        display: flex;
        margin-right: 40px;
        flex-direction: row;
        justify-content: flex-end;
        font-size: 10px;
        text-transform: uppercase;
        li {
          &:last-child {
            border-left: 1px solid #334d66;
            margin: 0 0 0 40px;
          }
          a {
            line-height: 30px;
          }
        }
      }
    }
    .navbar {
      .navbar-toggle {
        display: none;
      }
      .main-nav {
        display: flex;
      }
    }
  }
}
</style>
