import chroma from 'chroma-js'; 

export default {
    container: 'mountNode', // The container id or HTML node of the graph canvas.
    width: 1500,
    height: 863,
    animate: true,
    layout: {
      type: 'gForce',
      center: [800, 400], // The center of the graph by default
      linkDistance: 100,
      nodeStrength: 1000,
      edgeStrength: 300,
      nodeSize: 30,
    },
  
    modes: {
      default: ['drag-node', 'drag-canvas', 'zoom-canvas'],
      hsl: ['activate-relations', 'activate-node', 'activate-edge', 'click-select', 'drag-node', 'drag-canvas', 'zoom-canvas'],
    },
    nodeStateStyles: {
    
    },
    defaultNode: {
      type: 'node',
      size: [20],
      style: {
        stroke: '#fff',
        lineWidth: 1,
        fontFamily: 'Poppins',
        fill: chroma.random().darken().hex(),
      },
      labelCfg: {
        position: 'top',
        color: '#fff',
        style: {
          fontSize: 15,
          fill: '#fff',
          fontWeight: 500,
          fontFamily: 'Poppins',
          color: '#fff',
        },
      },
    },
    defaultEdge: {
      style: {
      },
      labelCfg: {
        position: 'top',
        color: '#fff',
        style: {
          fontSize: 15,
          fill: '#fff',
          fontWeight: 500,
          fontFamily: 'Poppins',
          color: '#fff',
        },
      },
    },
  };
  