<template>
  <div>
    <h3>Add Branches</h3>
    <button v-for="component in allComponentList" :key="component" @click="emitBranch(component)">{{component}}</button>
    <!-- <button @click="emitBranch('WikiDataCard')">WikiDataCard</button>
    <button @click="emitBranch('WikiSnippet')">WikiSnippet</button>
    <button @click="emitBranch('ThreeDModelViewer')">ThreeDModelViewer</button>
    <button @click="emitBranch('ExploreDescription')">ExploreDescription</button>
    <button @click="emitBranch('GutenBergBooks')">GutenBergBooks</button>
    <button @click="emitBranch('G6ExploreComp')">G6ExploreComp</button> -->
  </div>
</template>

<script>
export default {
  props: ['allComponentList'],
  methods: {
    emitBranch(componentName) {
      console.log(componentName);
      this.$emit('emitBranch', componentName);
    },
  },
};
</script>

<style scoped>
h3 {
    font-family: 'Poppins', sans-serif;
}
button {
  margin: 3px;
}
</style>
