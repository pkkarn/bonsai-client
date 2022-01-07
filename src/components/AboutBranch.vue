<template>
    <div>
        <h5>Bonsai About</h5>

        <seed-build 
        :graphData="customData"></seed-build>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                customData: {
                    nodes: [
                    {
                        id: '1',
                        label: 'About 1',
                    },
                    {
                        id: '2',
                        label: 'About 2',
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