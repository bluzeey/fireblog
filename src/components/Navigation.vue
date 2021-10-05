<template>
<header>
    <nav class="container">
        <div class="branding">
            <router-link class="header" :to="{name:'Home'}">
            Fireblog
            </router-link>
            <div class="nav">
                <ul>
                    <router-links class="link" to="#">Home</router-links>
                    <router-links class="link" to="#">Blogs</router-links>
                    <router-links class="link" to="#">Create Post</router-links>
                    <router-links class="link" to="#">Login/Register</router-links>
                </ul>
            </div>
        </div>
    </nav>
    <MenuIcon/>
    <transition name="mobile-nav">
                <ul>
                    <router-links class="link" to="#">Home</router-links>
                    <router-links class="link" to="#">Blogs</router-links>
                    <router-links class="link" to="#">Create Post</router-links>
                    <router-links class="link" to="#">Login/Register</router-links>
                </ul>
    </transition>
</header>  
</template>

<script>
import MenuIcon from '../assets/Icons/bars-regular.svg'
export default {
     name:'navigation',
     components:{
         MenuIcon
         }
}
</script>

<style lang="scss" scoped>
header{
    background-color:#fff;
    padding:0 25px;
    box-shadow:0 4px 6px -1px;
}
</style>