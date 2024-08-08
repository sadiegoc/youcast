<template>
    <div class="player" v-if="startPod">
        <audio id="audio"></audio>
        <div id="volume">
            <input type="range" class="volume" min="0" max="100">
            <button type="button" class="btn-volume">
                <img src="@/assets/imgs/volume-white.png" width="20px">
            </button>
        </div>
        <button class="play-pause" @click="togglePlay()">
            <img v-if="paused" src="@/assets/imgs/play-black.png" width="16px">
            <img v-if="!paused" src="@/assets/imgs/pause-black.png" width="16px">
        </button>
        <div class="podcast-progress">
            <input type="range" class="progress" value="0">
        </div>
        <div class="close-player">
            <button type="button" @click="closePlayer()">
                <img src="@/assets/imgs/close-white.svg" width="20px">
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PodcastPlay',
    props: ['startPod'],
    data () {
        return {
            paused: true,
            displayPlayer: true
        }
    },
    methods: {
        togglePlay () {
            this.paused = !this.paused;
        },
        closePlayer () {
            this.$emit('closePod')
        }
    }
}
</script>
<style scoped>
.player {
    inset: auto 0 0 0; position: fixed;
    height: 60px; background-color: rgba(0, 0, 0, 0.8);
    display: flex; flex-direction: row; align-items: center;
    justify-content: flex-start;
}

.player .play-pause {
    border: none; background-color: var(--default-color);
    border-radius: 50%; width: 40px; height: 40px;
    margin: 0; padding: 0;
}

.player .play-pause:hover {
    filter: contrast(1.6);
}

#volume {
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    width: 60px; cursor: pointer; position: relative;
}

#volume:hover .volume, #volume .btn-volume:active .volume {
    opacity: 1;
}

#volume .btn-volume {
    border: none; width: 25px; height: 25px;
    background: transparent;
}

.player .volume {
    position: absolute;
    transform: rotateZ(-90deg) translateX(65%);
    -webkit-appearance: none; appearance: none;
    background-color: var(--bg-soft-light);
    height: 10px; width: 120px; cursor: pointer;
    opacity: 0;
}

.player .volume::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 8px; height: 16px;
    background-color: var(--bg-half-dark);
    cursor: pointer;
}

.player .podcast-progress {
    width: max-content; margin: 0 15px 0 15px;
    flex-grow: 1;
}

.player .progress {
    -webkit-appearance: none; appearance: none;
    width: 100%; background: transparent;
}

.player .progress::-webkit-slider-runnable-track {
    -webkit-appearance: none; appearance: none;
    background-color: var(--bg-half-dark); border-radius: 4px;
    cursor: pointer; height: 8px;
}

.player .progress::-webkit-slider-thumb {
    -webkit-appearance: none; appearance: none;
    width: 12px; height: 12px; border-radius: 50%;
    background-color: var(--default-color);
    
}

.close-player {
    margin: 0 15px 0 0;
}

.close-player button {
    border: none; background: transparent;
    width: 40px; height: 40px;
    margin: 0; padding: 0;
    border-radius: 50%;
}

.close-player button:hover {
    background-color: rgba(255, 255, 255, 0.3);
}

</style>