<template>
  <div class="comp-red">
    <h1>{{ text }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class BlueComponent extends Vue {
  @Prop({
    type: Object,
    default: {
      text: "Red"
    }
  })
  private value!: any;

  get text() {
    return this.value.text;
  }
}
</script>

<style scoped>
.comp-red {
  text-align: left;
  background-color: #d55;
  color: #fff;
}
</style>
