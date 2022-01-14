<template>
    <div id="bonsaiBranch">
        <EmitBranch :allComponentList="allComponentList" @emitBranch="addComponent" />
        <div ref="bonsai_root" id="bonsaiPaint"></div>
    </div>
</template>

<script>
import bonsaiConfig from '@/config/bonsaiConfig';
import { Graph } from '@antv/x6';
import '@antv/x6-vue-shape';
import { createApp } from 'vue';
import EmitBranch from '@/components/EmitBranch.vue';
import TempComponent from '@/components/TempComponent.vue';
    export default {
        async mounted() {
            await this.buildMyBonsai();
        },
        components: {
            EmitBranch
        },

        computed: {
            allComponentList() {
                return this.componentsOptions.map((item) => item.name);
            },
        },

        data() {
            return { 
                connected: true,
                componentsOptions: [
                    {
                    name: 'TempComponent',
                    component: TempComponent,
                    options: {
                        title: 'Noted Items',
                        description: 'View all your notes',
                        }
                    },
                ],
            }
        },

        methods: {
            async buildMyBonsai() {
                this.config = bonsaiConfig;
                this.config.container = this.$refs.bonsai_root;
                this.config.width = document.getElementById('bonsaiBranch').clientwidth;
                this.config.height = document.getElementById('bonsaiBranch').clientheight;
                this.graph = new Graph(this.config);
                
                // 使用文档：https://x6.antv.vision/zh/docs/tutorial/advanced/react#%E6%B8%B2%E6%9F%93-html-%E8%8A%82%E7%82%B9
                if (this.connected) {
                    this.source = this.graph.addNode({
                    shape: 'html',
                    x: 120,
                    y: 50,
                    width: 120,
                    height: 50,
                    html: () => {
                        const wrap = document.createElement('div');
                        wrap.style.width = '100%';
                        wrap.style.height = '100%';
                        wrap.style.display = 'flex';
                        wrap.style.alignItems = 'center';
                        wrap.style.justifyContent = 'center';
                        wrap.style.border = '2px solid #9254de';
                        wrap.style.background = '#efdbff';
                        wrap.style.borderRadius = '4px';
                        wrap.innerText = 'Bonsai Root';
                        return wrap;
                    },
                    });
                }
            },

            
            async addComponent(componentName) {
                // Generate random id to use for the new component
                const id = `V${Math.random().toString(36).substr(2, 9)}`;
                // create div element and add classname so that we can edit its outer style
                const wrap = document.createElement('div');
                wrap.classList.add('nodeEl');
                // A div element with id that we created - we will mount our new component or instance here.
                wrap.innerHTML = `<div id="${id}"></div>`;
                // Now simply add newNode and put your div element inside it - Now you have a div with the id on which we will mount our new component or instance
                const newNode = this.graph.addNode({
                    shape: 'html',
                    x: Math.random() * 700, // to prvent overlap - I added this to place new node at random position
                    y: Math.random() * 700,
                    width: 200,
                    height: 70,
                    html: wrap,
                });
                // As we now its listening emit event
                this.componentsOptions.forEach((obj) => {
                    // Loop and store the component which we will mount on our new instance
                    if (obj.name === componentName) {
                    console.log('Ir bhai');
                    console.log(obj.component);
                    this.currentComponent = obj.component;
                    }
                });

                // One edge for each component where it will be connected with main node [Although i think it will be optional]
                if (this.connected) {
                    this.graph.addEdge({
                    source: this.source,
                    target: newNode,
                    });
                }
                // create new vue instance with store and pass the id of the div element to mount our component on
    
                const newInstance = createApp(this.currentComponent);
                newInstance.mount(`#${id}`);
            },

        }
    }
</script>

<style scoped>
#bonsaiBranch {
  width: 100%;
  height: 100vh;
}

#bonsaiPaint {
  width: 100%;
  height: 100%;
}
</style>