<template>
  <div>
      <div class="tabs" v-if="!isMobile">
        <ul>
          <li :class="{ 'active' : activetab === 1998 }"><a @click="activetab=1998">1998</a></li>
          <li :class="{ 'active' : activetab === 2002 }"><a @click="activetab=2002">2002</a></li>
          <li :class="{ 'active' : activetab === 2006 }"><a @click="activetab=2006">2006</a></li>
          <li :class="{ 'active' : activetab === 2012 }"><a @click="activetab=2012">2012</a></li>
          <li :class="{ 'active' : activetab === 2014 }"><a @click="activetab=2014">2014</a></li>
          <li :class="{ 'active' : activetab === 2018 }"><a @click="activetab=2018">2018</a></li>
        </ul>
      </div>
      <div class="tabs-details">
        <div class="accordion-tab" :class="{ 'active' : activetab === 1998 }" v-if="isMobile">
          <a @click="activetab=1998">1998</a>
        </div>
        <div v-show="activetab === 1998" class="tab-content-wrapper">
          <h3>Lorem ipsum projection lorem</h3>
          <div class="tab-panel">
            <div class="tab-panel-content">
              <p>1998 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nim ad minim veniam</p>
              <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
            </div>
            <div class="tab-panel-content">
              <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
              <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
            </div>
            <div class="tab-panel-content">
              <p>Tableau des lorem ipsum</p>
              <GraphTabs />
            </div>
          </div>
        </div>

        <div class="accordion-tab" v-if="isMobile" :class="{ 'active' : activetab === 2002 }">
          <a @click="activetab=2002">2002</a>
        </div>
        <div v-show="activetab === 2002" class="tab-content-wrapper">
          <h3>Lorem ipsum projection lorem</h3>
          <div class="tab-panel">
            <div class="tab-panel-content">
              <p>2002 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nim ad minim veniam</p>
              <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
            </div>
            <div class="tab-panel-content">
              <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
              <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
            </div>
            <div class="tab-panel-content">
              <p>Tableau des lorem ipsum</p>
            </div>
          </div>
        </div>

        <div class="accordion-tab" v-if="isMobile" :class="{ 'active' : activetab === 2006 }">
          <a @click="activetab=2006">2006</a>
        </div>
        <div v-show="activetab === 2006" class="tab-content-wrapper">
          <h3>Lorem ipsum projection lorem</h3>
          <div class="tab-panel">
            <div class="tab-panel-content">
              <p>2006 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nim ad minim veniam</p>
              <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
            </div>
            <div class="tab-panel-content">
              <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
              <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
            </div>
            <div class="tab-panel-content">
              <p>Tableau des lorem ipsum</p>
            </div>
          </div>
        </div>

        <div class="accordion-tab" v-if="isMobile" :class="{ 'active' : activetab === 2012 }">
          <a @click="activetab=2012">2012</a>
        </div>
        <div v-show="activetab === 2012" class="tab-content-wrapper">
          <h3>Lorem ipsum projection lorem</h3>
          <div class="tab-panel">
            <div class="tab-panel-content">
              <p>2012 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nim ad minim veniam</p>
              <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
            </div>
            <div class="tab-panel-content">
              <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
              <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
            </div>
            <div class="tab-panel-content">
              <p>Tableau des lorem ipsum</p>
            </div>
          </div>
        </div>

        <div class="accordion-tab" v-if="isMobile" :class="{ 'active' : activetab === 2014 }">
          <a @click="activetab=2014">2014</a>
        </div>
        <div v-show="activetab === 2014" class="tab-content-wrapper">
          <h3>Lorem ipsum projection lorem</h3>
          <div class="tab-panel">
            <div class="tab-panel-content">
              <p>2014 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nim ad minim veniam</p>
              <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
            </div>
            <div class="tab-panel-content">
              <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
              <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
            </div>
            <div class="tab-panel-content">
              <p>Tableau des lorem ipsum</p>
            </div>
          </div>
        </div>

        <div class="accordion-tab" v-if="isMobile" :class="{ 'active' : activetab === 2018 }">
          <a @click="activetab=2018">2018</a>
        </div>
        <div v-show="activetab === 2018" class="tab-content-wrapper">
          <h3>Lorem ipsum projection lorem</h3>
          <div class="tab-panel">
            <div class="tab-panel-content">
              <p>2018 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nim ad minim veniam</p>
              <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
            </div>
            <div class="tab-panel-content">
              <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
              <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
            </div>
            <div class="tab-panel-content">
              <p>Tableau des lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import GraphTabs from "@/components/GraphTabs.vue";
export default {
  name: "Tabs",
  components: {
    GraphTabs
  },
  data() {
    return {
      activetab: 1998,
      isMobile: false
    };
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth);
      //Init
      this.getWindowWidth();
    });
  },
  methods: {
    getWindowWidth() {
      this.windowWidth = document.documentElement.clientWidth;
      if (this.windowWidth < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.timeline-success {
  padding: 48px 40px;
  background-color: #002140;
}
h2 {
  font-size: 32px;
  color: #fff;
  font-weight: normal;
  margin-bottom: 23px;
}
h3 {
  font-size: 24px;
  font-weight: normal;
  color: #e6ff00;
  width: 100%;
  margin-bottom: 20px;
}
//Tab Nav Item Style
.tabs {
  width: 100.1%;
  border-bottom: 1px solid #fff;
  margin-bottom: 59px;
  > ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: flex-start;
    position: relative;
    top: 15px;
    z-index: 10;
    > li {
      flex: 0 1 54px;
      color: #fff;
      background-color: #002140;
      border: 1px solid #fff;
      &:hover,
      &.active {
        color: #002140;
        background-color: #e6ff00;
        border-color: #e6ff00;
      }
      > a {
        display: block;
        text-align: center;
        font-size: 14px;
        line-height: 30px;
        color: inherit;
        text-decoration: none;
      }
    }
  }
}
//Accordion Tab Style
.accordion-tab {
  display: block;
  width: 54px;
  &:first-child {
    margin-top: 39px;
  }
  &:after {
    content: "|";
    display: block;
    color: #fff;
    text-align: center;
    font-size: 12px;
  }
  &:nth-child(11) {
    &:after {
      content: " ";
    }
  }
  &.active {
    &:after {
      content: "";
      margin-bottom: 15px;
    }
  }
  a {
    color: #fff;
    background-color: #002140;
    border: 1px solid #fff;
    display: block;
    text-align: center;
    font-size: 14px;
    line-height: 30px;
    text-decoration: none;
  }
  &:hover a,
  &.active a {
    color: #002140;
    background-color: #e6ff00;
    border-color: #e6ff00;
  }
}
//Tab Content Styles
.tab-panel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .tab-panel-content {
    flex: 0 1 auto;
    p {
      margin-bottom: 17px;
      font-size: 16px;
      font-weight: normal;
      line-height: 26px;
      color: #f4e8d6;
    }
  }
}
//Animate Tab Content
.tabs-details > div {
  animation: panelFadeIn 4s ease;
}
@keyframes panelFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media (min-width: 768px) {
  h2 {
    font-size: 36px;
  }
  h3 {
    width: 30%;
    margin-bottom: 30px;
  }
  .tab-panel {
    flex-direction: row;
    .tab-panel-content {
      flex: 0 1 30%;
    }
  }
  .accordion-tab {
    &:after {
      content: "";
    }
  }
}
</style>
