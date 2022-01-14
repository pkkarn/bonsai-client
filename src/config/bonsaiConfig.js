import { Shape } from '@antv/x6';

export default {
  container: 'mountNode',
  grid: true,
  resizing: true,
  width: 1300,
  height: 800,
  scroller: {
    enabled: true,
    pageVisible: true,
    pageBreak: true,
    pannable: true,
  },
  history: {
    enabled: true,
    ignoreAdd: true,
    ignoreRemove: false,
    ignoreChange: false,
  },
  connecting: {
    router: {
      name: 'manhattan',
      args: {
        padding: 1,
      },
    },
    connector: {
      name: 'smooth',
      args: {
        radius: 8,
      },
    },
    anchor: 'center',
    connectionPoint: 'anchor',
    allowBlank: false,
    snap: {
      radius: 20,
    },
    createEdge() {
      return new Shape.Edge({
        attrs: {
          line: {
            stroke: '#000',
            strokeWidth: 21,
            targetMarker: {
              name: 'block',
              width: 12,
              height: 800,
            },
          },
        },
        zIndex: 1,
      });
    },
    validateConnection({ targetMagnet }) {
      return !!targetMagnet;
    },
  },
  mousewheel: {
    enabled: true,
    modifiers: ['ctrl', 'meta'],
    minScale: 0.1,
    maxScale: 3,
  },
  highlighting: {
    magnetAdsorbed: {
      name: 'stroke',
      args: {
        attrs: {
          fill: '#5F95FF',
          stroke: '#5F95FF',
        },
      },
    },
  },

  rotating: true,
  selecting: {
    enabled: true,
    rubberband: true,
    showNodeSelectionBox: true,
  },
  snapline: true,
  keyboard: true,
  clipboard: true,
};
