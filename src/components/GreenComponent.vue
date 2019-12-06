<template>
  <div class="comp-green">
    <h1>{{ text }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class GreenComponent extends Vue {
  @Prop({
    type: Object,
    default: {
      text: "Green"
    }
  })
  private value!: any;

  get text() {
    return this.value.text;
  }
}
</script>

<style scoped>
.comp-green {
  text-align: center;
  background-color: #282;
  color: #fff;
}
</style>
