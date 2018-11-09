<template>
  <div class="overall-success">
    <h2>Overall success + growth</h2>
    <div class="num-wrapper">
      <div class="num-item">
        <div class="num-item--num">
          <animate-number from="1" to="12"></animate-number><sup>%</sup>
        </div>
        <div class="num-item--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div class="num-item">
        <div class="num-item--num">
          <animate-number from="1" to="75"></animate-number><sup>%</sup>
        </div>
        <div class="num-item--text">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
        </div>
      </div>
      <div class="num-item">
        <div class="num-item--num">
          <animate-number from="1" to="28"></animate-number><sup>%</sup>
        </div>
        <div class="num-item--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </div>
      </div>
    </div>
    <a href="#" class="btn-discover">Discover Performance</a>
  </div>
</template>

<script>
export default {
  name: "OverallSuccess"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.overall-success {
  padding: 48px 40px;
  background-color: #e6f0f3;
}
h2 {
  font-size: 32px;
  color: #002140;
  font-weight: normal;
  margin-bottom: 16px;
}
.num-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 26px;
  .num-item {
    flex: 0 1 auto;
    color: #002140;
    .num-item--num {
      text-align: center;
      padding-bottom: 15px;
      border-bottom: 1px solid #d8d8d8;
      margin-bottom: 13px;
      font-size: 90px;
      letter-spacing: -5px;
      line-height: 113px;
      sup {
        vertical-align: 20px;
        font-size: 60%;
      }
    }
    .num-item--text {
      font-size: 14px;
      line-height: 22px;
    }
  }
}
.btn-discover {
  display: block;
  margin: 40px auto 0 auto;
  width: 218px;
  line-height: 50px;
  font-size: 14px;
  color: #002140;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border: 1px solid #002140;
  border-bottom: none;
}
@media (min-width: 768px) {
  h2 {
    font-size: 36px;
  }
  .num-wrapper {
    flex-direction: row;
    .num-item {
      flex: 0 1 255px;
    }
  }
  .btn-discover {
    margin: 0 auto 30px auto;
  }
}
</style>
