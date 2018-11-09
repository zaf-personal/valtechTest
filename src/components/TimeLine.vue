<template>
  <div class="timeline-success">
    <h2>Timeline of success</h2>
    <tabs>
      <tab name="1998" :selected="true">
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
            <tabs class="graph-tabs">
              <tab name="Lorem" :selected="true">
                <div class="chart-wrapper">
                  <apexcharts width="250" height="230" type="bar" :options="chartOptions" :series="series"></apexcharts>
                </div>
              </tab>
              <tab name="Ipsum">
                <div class="chart-wrapper">
                  <apexcharts width="250" height="230" type="bar" :options="chartOptions2" :series="series1"></apexcharts>
                </div>
              </tab>
              <tab name="Amet">
                <div class="chart-wrapper">
                  <apexcharts width="250" height="230" type="bar" :options="chartOptions3" :series="series2"></apexcharts>
                </div>
              </tab>
            </tabs>
          </div>
        </div>
      </tab>
      <tab name="2002">
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
      </tab>
      <tab name="2006">
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
      </tab>
      <tab name="2012">
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
      </tab>
      <tab name="2014">
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
      </tab>
      <tab name="2018">
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
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import Tab from "@/components/Tab.vue";
import VueApexCharts from "vue-apexcharts";
export default {
  name: "TimeLine",
  components: {
    Tabs,
    Tab,
    apexcharts: VueApexCharts
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: "basic-bar",
          selection: {
            enabled: false
          }
        },
        fill: {
          colors: "#e6ff00",
          opacity: 1
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [2018, 2019, 2020, 2021, 2022],
          labels: {
            style: {
              colors: ["#fff", "#fff", "#fff", "#fff", "#fff"]
            }
          }
        },
        yaxis: {
          tickAmount: 6,
          min: 20,
          max: 80,
          labels: {
            style: {
              color: "#fff"
            }
          }
        },
        tooltip: {
          enabled: false
        },
        grid: {
          borderColor: "#fff",
          padding: {
            bottom: 1
          }
        }
      },
      chartOptions2: {
        chart: {
          id: "basic-bar",
          selection: {
            enabled: false
          }
        },
        fill: {
          colors: "#61e3e8",
          opacity: 1
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [2018, 2019, 2020, 2021, 2022],
          labels: {
            style: {
              colors: ["#fff", "#fff", "#fff", "#fff", "#fff"]
            }
          }
        },
        yaxis: {
          tickAmount: 6,
          min: 20,
          max: 80,
          labels: {
            style: {
              color: "#fff"
            }
          }
        },
        tooltip: {
          enabled: false
        },
        grid: {
          borderColor: "#fff",
          padding: {
            bottom: 1
          }
        }
      },
      chartOptions3: {
        chart: {
          id: "basic-bar",
          selection: {
            enabled: false
          }
        },
        fill: {
          colors: "#ffa32b",
          opacity: 1
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [2018, 2019, 2020, 2021, 2022],
          labels: {
            style: {
              colors: ["#fff", "#fff", "#fff", "#fff", "#fff"]
            }
          }
        },
        yaxis: {
          tickAmount: 6,
          min: 20,
          max: 80,
          labels: {
            style: {
              color: "#fff"
            }
          }
        },
        tooltip: {
          enabled: false
        },
        grid: {
          borderColor: "#fff",
          padding: {
            bottom: 1
          }
        }
      },
      series: [
        {
          name: "Lorem",
          data: [40, 50, 55, 60, 75]
        }
      ],
      series1: [
        {
          name: "Ipsum",
          data: [60, 35, 70, 80, 35]
        }
      ],
      series2: [
        {
          name: "Amet",
          data: [55, 40, 35, 30, 25]
        }
      ]
    };
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
}
</style>
<!-- Not "scoped" so Tab Styles can be where template content is taken from -->
<style lang="scss">
//Main Timeline Tabs
.tabs {
  width: 100.1%;
  border-bottom: 1px solid #fff;
  margin-bottom: 59px;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: flex-start;
    position: relative;
    top: 15px;
    z-index: 10;
    li {
      flex: 0 1 54px;
      color: #fff;
      background-color: #002140;
      border: 1px solid #fff;
      &:hover,
      &.is-active {
        color: #002140;
        background-color: #e6ff00;
        border-color: #e6ff00;
      }
      a {
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
//Graph Tab Styles
//Will Override Main Tabs
.graph-tabs {
  margin-top: -7px;
  .tabs {
    width: 100%;
    border-bottom: none;
    margin-bottom: 26px;
    ul {
      justify-content: flex-start;
      position: static;
      li {
        flex: 0 1 51px;
        margin-right: 10px;
        background-color: transparent;
        color: #e6ff00;
        border-color: #e6ff00;
        &:hover,
        &.is-active {
          color: #002140;
          background-color: #e6ff00;
          border-color: #e6ff00;
        }
        &:nth-child(2) {
          color: #61e3e8;
          border-color: #61e3e8;
          &:hover,
          &.is-active {
            color: #002140;
            background-color: #61e3e8;
            border-color: #61e3e8;
          }
        }
        &:last-child {
          color: #ffa32b;
          border-color: #ffa32b;
          &:hover,
          &.is-active {
            color: #002140;
            background-color: #ffa32b;
            border-color: #ffa32b;
          }
        }
        a {
          display: block;
          text-align: center;
          font-size: 10px;
          line-height: 20px;
          color: inherit;
          text-decoration: none;
          text-transform: uppercase;
        }
      }
    }
  }
  .tabs-details {
    margin: -10px 0 10px -7px;
  }
  .apexcharts-grid {
    display: none;
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
</style>
