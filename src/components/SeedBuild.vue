<template>
  <div class="graphCanvas">
    <div ref="currentGraph"></div>
  </div>
</template>

<script>
import G6 from '@antv/g6';
import branchConfig from '../config/branchConfig';

export default {
  props: {
    graphData: {
      type: Object,
      required: true,
    },
    pluginsData: {
      type: Array,
      default: () => ['minimap', 'tooltip'],
    },
  },

  async mounted() {
    // build function
    await this.buildGraph();
  },

  computed: {
    // this is your main container id you can say
    // uniqueGraphId() {
    //   return `${this.graphId}_${Math.random().toString(36).substr(2, 9)}`;
    // },
  },

  methods: {
    async buildGraph() {
      this.activePlugins = [];
      if (this.pluginsData.includes('minimap')) {
        this.minimap = new G6.Minimap({
          size: [50, 50],
          className: 'minimap',
          type: 'delegate',
        });
        this.activePlugins.push(this.minimap);
      }
      if (this.pluginsData.includes('tooltip')) {
        this.tooltip = new G6.Tooltip({
          offsetX: 10,
          offsetY: 10,
          fixToNode: [1, 0.5],
          // the types of items that allow the tooltip show up
          // 允许出现 tooltip 的 item 类型
          itemTypes: ['node', 'edge'],
          // custom the tooltip's content
          // 自定义 tooltip 内容
          getContent: (e) => {
            const outDiv = document.createElement('div');
            outDiv.style.width = 'fit-content';
            outDiv.style.height = 'fit-content';
            const model = e.item.getModel();
            if (e.item.getType() === 'node') {
              outDiv.innerHTML = `${model.label}`;
            } else {
              const source = e.item.getSource();
              const target = e.item.getTarget();
              outDiv.innerHTML = `source: ${source.getModel().label}<br/>target: ${target.getModel().label}`;
            }
            return outDiv;
          },
        });
        this.activePlugins.push(this.tooltip);
      }

      this.config = branchConfig;
      this.config.plugins = this.activePlugins;
      this.config.container = this.$refs.currentGraph;
      this.current_graph = new G6.Graph(this.config);
      this.current_graph.data(this.graphData);
      this.current_graph.render();
    },
  },
};
</script>

<style scoped>
.graphCanvas {
  background: #576f7f;
  flex: 1 1 auto;
}

</style>
