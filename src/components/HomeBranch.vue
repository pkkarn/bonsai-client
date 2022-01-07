<template>
    <div>
        <h5>Bonsai Home</h5>

        <seed-build 
        :graphData="customData"></seed-build>
    </div>
</template>

<script>
import SeedBuild from './SeedBuild.vue'
    export default {
  components: { SeedBuild },
        data() {
            return {
                  customData: {
                    nodes: [
                    {
                        id: '1',
                        label: 'Home 1',
                    },
                    {
                        id: '2',
                        label: 'Home 2',
                    },
                    ],
                    edges: [
                    {
                        source: '1',
                        target: '2',
                    },
                    ],
                },
            }
        }
    }
</script>

<style scoped>

</style>