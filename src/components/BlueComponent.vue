<template>
  <div class="comp-blue">
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
      text: "Blue"
    }
  })
  private value!: any;

  get text() {
    return this.value.text;
  }
}
</script>

<style scoped>
.comp-blue {
  text-align: right;
  background-color: #27f;
  color: #fff;
}
</style>
