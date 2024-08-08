<template>
    <div class="card mt-4" :class="{ dark }">
        <img src="../assets/imgs/thumbnail-podcast.png" class="card-img-top">
        <div class="card-body d-flex align-items-stretch p-2">
            <div class="card-brand">
                <img src="../assets/imgs/logo-channel.png" width="35px">
            </div>
            <div class="card-info ms-2">
                <h5 class="card-title">Cost of Success</h5>
                <p class="card-text">The true</p>
            </div>
        </div>
        <div class="card-footer justify-content-between d-flex">
            <small>15k views</small>
            <small>01:45:22</small>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PodcastCard',
    props: ['dark'],
    watch: {
        dark (theme) {
            return theme
        }
    }
}
</script>
<style scoped>
.card.dark { background-color: var(--bg-hard-dark); border: 2px dashed var(--bg-half-dark); color: white; }
.card { background-color: var(--bg-hard-light); border: 2px dashed var(--bg-half-light); color: black; }

.card.dark:hover { border-color: var(--bg-half-dark-hover); }
.card:hover { border-color: var(--bg-half-light-hover); }

h5 {
    font-family: louis-bold;
    font-size: 1.1rem;
}

p {
    font-family: louis;
    font-size: 0.9rem;
}

.card {
    cursor: pointer;
    border-radius: 0;
    padding: 10px;
    width: 380px;
}


.card-img-top {
    border-radius: 0;
}

.card-brand img {
    border-radius: 50%
}

.card-footer {
    border-top-color: var(--bg-soft-dark);
    border-top-style: dashed;
    text-align: right; background: transparent;
}

small {
    font-family: louis;
    font-size: 0.8rem; color: #909090;
    font-weight: 600;
}

@media (max-width: 576px) {
    .card {
        width: 100%;
    }
}
</style>