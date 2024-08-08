<template>
  <header>
    <NavbarComp @theme="(theme) => toggleTheme(theme)" @toggleNavside="(expanded) => toggleNavside(expanded)"/>
  </header>
  <main>
    <section class="side">
      <NavSide :dark="this.dark" :expanded="this.expanded"/>
    </section>
    <section class="router">
      <router-view :dark="this.dark"></router-view>
    </section>
  </main>
  <PodcastPlay/>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue';
import PodcastPlay from './components/PodcastPlay.vue';
import NavSide from './components/NavSide.vue';

export default {
  name: 'App',
  components: { NavbarComp, PodcastPlay, NavSide },
  data () {
    return {
      dark: true,
      expanded: true
    }
  },
  methods: {
    toggleTheme (theme) {
      this.dark = theme;
    },
    toggleNavside (expanded) {
      this.expanded = expanded;
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

    --bg-half-dark-hover: #808080;
    --bg-half-light-hover: #aaa;

    --default-color: #FFB200;

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
  font-family: louis-bold;
  font-size: 1rem;
}

*::-webkit-scrollbar {
  background-color: transparent;
  width: 10px;
}

*::-webkit-scrollbar-thumb {
  background-color: var(--bg-soft-dark);
}

main {
  display: flex; flex-direction: row;
}

section.router {
  flex-grow: 1; overflow: auto; margin-top: 60px;
}
</style>
