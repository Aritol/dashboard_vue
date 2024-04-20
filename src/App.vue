<template>
    <div class="app">
        <Header/>
        <router-view></router-view>
    </div>
</template>

<script>
import  Header  from "@/components/Header";
export default {
    name: "App",
    components: {
        Header,
    },
};
</script>

<style>
@import "@/assets/styles/null.scss";
.app {
    /* margin: 0 auto; */
}

/* #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
} */
</style>
