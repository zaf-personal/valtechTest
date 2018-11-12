<template>
  <div class="timeline-success">
    <h2>Timeline of success</h2>
    <tabs />
  </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
export default {
  name: "TimeLine",
  components: {
    Tabs
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
@media (min-width: 768px) {
}
</style>
<!-- Not "scoped" so Tab Styles can be where template content is taken from -->
<style lang="scss">
</style>
