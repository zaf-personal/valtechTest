<template>
  <div>
    <div class="graph-tabs">
      <ul>
        <li :class="{ 'active' : activetab === 'lorem' }"><a @click="activetab='lorem'">lorem</a></li>
        <li :class="{ 'active' : activetab === 'ipsum' }"><a @click="activetab='ipsum'">ipsum</a></li>
        <li :class="{ 'active' : activetab === 'amet' }"><a @click="activetab='amet'">amet</a></li>
      </ul>
    </div>
    <div class="graphs">
      <div class=y-legend>$B</div>
      <div class=x-legend>Year</div>
      <div v-show="activetab === 'lorem'" class="chart-wrapper">
        <apexcharts width="250" type="bar" :options="chartOptions1" :series="series1"></apexcharts>
      </div>
      <div v-show="activetab === 'ipsum'" class="chart-wrapper">
        <apexcharts width="250" type="bar" :options="chartOptions2" :series="series2"></apexcharts>
      </div>
      <div v-show="activetab === 'amet'" class="chart-wrapper">
        <apexcharts width="250" type="bar" :options="chartOptions3" :series="series3"></apexcharts>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  name: "GraphTabs",
  components: {
    apexcharts: VueApexCharts
  },
  data() {
    return {
      activetab: "lorem",
      chartOptions1: {
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
      series1: [
        {
          name: "Lorem",
          data: [40, 50, 55, 60, 75]
        }
      ],
      series2: [
        {
          name: "Ipsum",
          data: [60, 35, 70, 80, 35]
        }
      ],
      series3: [
        {
          name: "Amet",
          data: [55, 40, 35, 30, 25]
        }
      ]
    };
  },
  computed: {
    href() {
      return "#" + this.name.toLowerCase().replace(/ /g, "-");
    }
  },
  mounted() {
    this.isActive = this.selected;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.graph-tabs {
  margin-top: -7px;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: flex-start;
    li {
      flex: 0 1 51px;
      margin-right: 10px;
      background-color: transparent;
      color: #e6ff00;
      border: 1px solid #e6ff00;
      &:hover,
      &.active {
        color: #002140;
        background-color: #e6ff00;
        border-color: #e6ff00;
      }
      &:nth-child(2) {
        color: #61e3e8;
        border-color: #61e3e8;
        &:hover,
        &.active {
          color: #002140;
          background-color: #61e3e8;
          border-color: #61e3e8;
        }
      }
      &:last-child {
        color: #ffa32b;
        border-color: #ffa32b;
        &:hover,
        &.active {
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
.graphs {
  clear: both;
  position: relative;
  width: 250px;
  margin-top: 30px;
  font-size: 11px;
  font-weight: bold;
  color: #fff;
}
.y-legend {
  position: absolute;
  top: -5px;
  left: 7px;
}
.x-legend {
  position: absolute;
  bottom: 12px;
  right: -25px;
}
</style>
<!-- Not scoped to modify chart style -->
<style lang="scss">
.apexcharts-grid {
  display: none;
}
</style>
