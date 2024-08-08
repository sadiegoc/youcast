<template>
    <div class="home" :class="{ dark }">
        <div class="container-fluid">
            <div class="row row-cols-1 row-cols-sm-auto align-items-start justify-content-center">
                <div class="col">
                    <PodcastCard :dark="this.dark" @click="startPodcast()"/>
                </div>
                <div class="col">
                    <PodcastCard :dark="this.dark" @click="startPodcast()"/>
                </div>
                <div class="col">
                    <PodcastCard :dark="this.dark" @click="startPodcast()"/>
                </div>
                <div class="col">
                    <PodcastCard :dark="this.dark" @click="startPodcast()"/>
                </div>
                <div class="col">
                    <PodcastCard :dark="this.dark" @click="startPodcast()"/>
                </div>
                <div class="col">
                    <PodcastCard :dark="this.dark" @click="startPodcast()"/>
                </div>
                <div class="col">
                    <PodcastCard :dark="this.dark" @click="startPodcast()"/>
                </div>
                <div class="col">
                    <PodcastCard :dark="this.dark" @click="startPodcast()"/>
                </div>
                <div class="col">
                    <PodcastCard :dark="this.dark" @click="startPodcast()"/>
                </div>
                <div class="col">
                    <PodcastCard :dark="this.dark" @click="startPodcast()"/>
                </div>
                <div class="col">
                    <PodcastCard :dark="this.dark" @click="startPodcast()"/>
                </div>
                <div class="col">
                    <PodcastCard :dark="this.dark" @click="startPodcast()"/>
                </div>
                <div class="col">
                    <PodcastCard :dark="this.dark" @click="startPodcast()"/>
                </div>
                <div class="col">
                    <PodcastCard :dark="this.dark" @click="startPodcast()"/>
                </div>
                <div class="col">
                    <PodcastCard :dark="this.dark" @click="startPodcast()"/>
                </div>
                <div class="col">
                    <PodcastCard :dark="this.dark" @click="startPodcast()"/>
                </div>
                <div class="col">
                    <PodcastCard :dark="this.dark" @click="startPodcast()"/>
                </div>
                <div class="col">
                    <PodcastCard :dark="this.dark" @click="startPodcast()"/>
                </div>
                <div class="col">
                    <PodcastCard :dark="this.dark" @click="startPodcast()"/>
                </div>
                <div class="col">
                    <PodcastCard :dark="this.dark" @click="startPodcast()"/>
                </div>
                <div class="col">
                    <PodcastCard :dark="this.dark" @click="startPodcast()"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PodcastCard from '@/components/PodcastCard.vue';
export default {
    name: 'HomeView',
    props: ['dark'],
    components: { PodcastCard },
    methods: {
        startPodcast () {
            console.log('start podcast')
        }
    },
    watch: {
        dark (theme) {
            return theme
        }
    }
}
</script>
<style scoped>

.home { background-color: var(--bg-hard-light); }
.home.dark { background-color: var(--bg-hard-dark); }

.home {
    padding-bottom: 80px;
    height: calc(100vh - 60px); overflow: auto;
}

</style>