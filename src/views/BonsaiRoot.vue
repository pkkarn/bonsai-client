<template>
    <div>
        <!-- Kind of Navigation -->
        <!-- <BranchList/> -->
        <!-- View of your branches -->
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script>
// import BranchList from '../components/BranchList.vue'
    export default {
        components: {
            // BranchList
        }
    }
</script>

<style scoped>

</style>