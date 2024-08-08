<template>
    <div class="navside" :class="{ dark, expanded }">
        <div class="navside-title">
            <h5 v-if="expanded">My Podcasts</h5>
            <button class="expand" :class="{ dark }" type="button" @click="toggleExpand()">
                <img v-if="dark" src="../assets/imgs/expand-white.svg">
                <img v-if="!dark" src="../assets/imgs/expand-black.svg">
            </button>
        </div>
        <div class="navside-body" :class="{ expanded: !expanded }">
            <ul class="subscriptions" :class="{ dark }">
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
                <li class="sub" @click="selectPodcast()">
                    <div class="channel-logo">
                        <img src="../assets/imgs/logo-channel.png" width="30px">
                    </div>
                    <div class="channel-name" v-if="expanded">
                        the true
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NavSide',
    data () {
        return {
            expanded: true
        }
    },
    props: ['dark'],
    watch: {
        dark (theme) {
            return theme
        }
    },
    methods: {
        selectPodcast () {
            console.log('podcast channel selected')
        },
        toggleExpand () {
            this.expanded = !this.expanded;
        }
    }
}
</script>
<style scoped>
/* THEME CONFIG */
.navside { background-color: var(--bg-hard-light); color: black; }
.navside.dark { background-color: var(--bg-hard-dark); color: white; }

.subscriptions .sub { color: black; border: 1px dashed var(--bg-hard-light); }
.subscriptions.dark .sub { color: white; border: 1px dashed var(--bg-hard-dark); }

.subscriptions .sub:hover { border-color: var(--bg-soft-dark); }
.subscriptions.dark .sub:hover { border-color: var(--bg-soft-light); }

.expand:hover { background-color: rgba(0, 0, 0, 0.1); }
.expand.dark:hover { background-color: rgba(255, 255, 255, 0.1); }


/* OTHERS CONFIG */
.navside.expanded .subscriptions img { border-radius: 50%; margin-right: 14px; }
.navside .subscriptions img { border-radius: 50%; }

.navside.expanded .subscriptions .sub { display: flex; justify-content: start; }
.navside .subscriptions .sub { display: flex; justify-content: center; }

.navside.expanded { width: 250px; }
.navside { width: 60px; }

.navside, .navside.expanded {
    inset: 0; height: calc(100vh - 60px);
    transition: width 0.3s;
    padding: 0; margin: 60px 0 0 0;
    display: flex; flex-direction: column;
    justify-content: start;
}

.navside-body:hover::-webkit-scrollbar {
    background-color: transparent;
    width: 5px;
}

.navside.expanded .subscriptions .sub {
    padding: 6px 0 6px 10px; margin: 0;
    cursor: pointer; display: flex;
}

.navside .subscriptions .sub {
    padding: 6px 0; margin: auto; cursor: pointer;
    display: flex;
}

.navside.expanded .navside-title {
    margin: 0; padding: 0;
    display: flex; align-items: center;
    justify-content: space-between;
}

.navside .navside-title {
    margin: 0; padding: 0;
    display: flex; align-items: center;
    justify-content: center;
}

.navside-title h5 {
    padding: 0 0 0 10px; margin: 0;
    font-weight: 600;
}

.navside-body {
    overflow: auto; padding-bottom: 80px;
}

/* NESSE CASO, O EXPANDED ESTÁ CONFIGURADO COMO !EXPANDED NO NAVSIDE-BODY */
.navside-body::-webkit-scrollbar, .navside-body.expanded::-webkit-scrollbar {
  background-color: transparent;
  width: 0;
}

.subscriptions {
    list-style: none; margin: 0; padding: 0;
}

.expand {
    background: transparent; border: none;
    width: 40px; height: 40px; padding: 0; margin: 0;
    border-radius: 50%;
}

.expand img {
    width: 25px;
}

</style>