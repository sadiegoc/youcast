<template>
    <div class="navside" :class="{ dark, expanded }">
        <div class="navside-title">
            <img v-if="dark" src="@/assets/imgs/microphone-white.png" width="28px">
            <img v-if="!dark" src="@/assets/imgs/microphone-black.png" width="28px">
            <h5 v-if="expanded">Podcast Channels</h5>
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
    props: ['dark', 'expanded'],
    watch: {
        dark (theme) {
            return theme
        }
    },
    methods: {
        selectPodcast () {
            console.log('podcast channel selected')
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
    margin: 0 0 8px 0; padding: 8px 0 8px 10px;
    display: flex; align-items: center;
    justify-content: start;
}

.navside .navside-title {
    margin: 0 0 8px 0; padding: 8px 0;
    display: flex; align-items: center;
    justify-content: center;
    border-bottom: 1px dashed var(--bg-soft-dark)
}

.navside-title h5 {
    padding: 0 0 0 10px; margin: 0;
    font-weight: 600; font-size: 1rem;
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

@media (max-width: 670px) {
    .navside {
        position: absolute;
        transform: translateX(-250px);
        transition: width 0.3s;
        z-index: 998;
    }

    .navside.expanded {
        transform: translate(0);
        transition: width 0.3s;
    }
}

</style>