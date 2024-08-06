<template>
  <header>
    <NavbarComp @theme="(theme) => toggleTheme(theme)"/>
  </header>
  <main>
    <router-view :dark="this.dark"></router-view>
  </main>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue';

export default {
  name: 'App',
  components: { NavbarComp },
  data () {
    return {
      dark: false
    }
  },
  methods: {
    toggleTheme (theme) {
      this.dark = theme;
    }
  }
}
</script>

<style>
:root {
    --bg-hard-dark: #151515;
    --bg-half-dark: #404040;
    --bg-soft-dark: #505050;

    --bg-hard-light: #fff;
    --bg-half-light: #ddd;
    --bg-soft-light: #bbb;

    --default-color: #32DE8A;

    --border-radius: 8px;
}

@font-face {
  font-family: pixelmania;
  src: url(./assets/fonts/pixelmania/Pixelmania.ttf);
}

@font-face {
  font-family: louis;
  src: url(./assets/fonts/louis/LouisGeorgeCafe.ttf);
}

@font-face {
  font-family: louis-light;
  src: url(./assets/fonts/louis/LouisGeorgeCafeLight.ttf);
}

@font-face {
  font-family: louis-bold;
  src: url(./assets/fonts/louis/LouisGeorgeCafeBold.ttf);
}

* {
  font-family: louis;
  font-size: 1rem;
}

body::-webkit-scrollbar {
  background-color: var(--bg-hard-dark);
  width: 6px;
}

body::-webkit-scrollbar-thumb {
  background-color: var(--default-color);
  border-radius: 5px;
}
</style>
