import Vue, { CreateElement, RenderContext } from "vue";
export default Vue.component("DynamicallyImportComponent", {
  functional: true,
  props: {
    componentName: {
      type: String
    },
    value: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  render(createElement: CreateElement, { props }: RenderContext) {
    const targetComponent = require(`@/components/${props.componentName}.vue`)
      .default;

    return createElement(targetComponent, {
      props: {
        value: props.value
      }
    });
  }
});
