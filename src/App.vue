<template>
  <NavbarComp/>
  <router-view></router-view>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue';

export default {
  name: 'App',
  components: { NavbarComp }
}
</script>

<style>
:root {
    --bg-hard-dark: #202020;
    --bg-half-dark: #353535;
    --bg-soft-dark: #454545;

    --bg-hover-dark: #606060;

    --border-radius: 8px;
}

@font-face {
  font-family: roboto-regular;
  src: url(./assets/fonts/roboto/Roboto-Regular.ttf);
}

@font-face {
  font-family: roboto-thin;
  src: url(./assets/fonts/roboto/Roboto-Thin.ttf);
}

@font-face {
  font-family: roboto-light;
  src: url(./assets/fonts/roboto/Roboto-Light.ttf);
}

@font-face {
  font-family: misa;
  src: url(./assets/fonts/misa/13_Misa.TTF);
}

* {
  font-family: roboto-thin;
  font-size: 1rem;
}

.dark-hard {
  background-color: var(--bg-hard-dark);
}

.dark-half {
  background-color: var(--bg-half-dark);
}

.dark-soft {
  background-color: var(--bg-soft-dark);
}

.text-white, .text-white a {
  color: white; text-decoration: none;
}
</style>
