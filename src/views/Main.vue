<template>
  <div>
    <h1>This is {{ configName }} page.</h1>
    <DynamicallyImportComponent
      v-for="comp in componentList"
      :key="comp.name"
      :componentName="comp.name"
      :value="comp.renderData"
    />
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
import DynamicallyImportComponent from "@/components/DynamicallyImportComponent";

interface ComponentList {
  name: string;
  renderData: any;
}

@Component({
  components: {
    DynamicallyImportComponent
  }
})
export default class Main extends Vue {
  private componentList: ComponentList[] = [];

  get configName() {
    return this.$route.params.p_config;
  }

  mounted() {
    this.onChangeRoute();
  }

  @Watch("configName")
  onChangeRoute() {
    switch (this.configName) {
      case "hoge1":
        this.componentList = [
          {
            name: "BlueComponent",
            renderData: {
              text: "Hoge1 green!"
            }
          },
          {
            name: "RedComponent",
            renderData: {
              text: "Hoge1 red!"
            }
          },
          {
            name: "GreenComponent",
            renderData: {
              text: "Hoge1 Green!"
            }
          }
        ];
        return;
      case "fuga2":
        this.componentList = [
          {
            name: "GreenComponent",
            renderData: {
              text: "Fuga2 Green?"
            }
          },
          {
            name: "GreenComponent",
            renderData: {
              text: "Fuga2 Green?"
            }
          },
          {
            name: "BlueComponent",
            renderData: {
              text: "Fuga2 Blue!?"
            }
          }
        ];
        return;
    }
  }
}
</script>
