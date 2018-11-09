<template>
  <div class="home">
    <OverallSuccess />
    <TimeLine />
  </div>
</template>

<script>
// @ is an alias to /src
import OverallSuccess from "@/components/OverallSuccess.vue";
import TimeLine from "@/components/TimeLine.vue";

export default {
  name: "Home",
  components: {
    OverallSuccess,
    TimeLine
  }
};
</script>
