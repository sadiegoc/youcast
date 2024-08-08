<template>
    <nav class="navbar position-fixed" :class="{ dark }">
        <div class="container-fluid d-flex justify-content-between">
            <div>
                <button class="expand" :class="{ dark }" type="button" @click="toggleNavside()">
                    <img v-if="dark" src="../assets/imgs/expand-white.svg">
                    <img v-if="!dark" src="../assets/imgs/expand-black.svg">
                </button>
                <router-link class="navbar-brand" to="/home">YouCast</router-link>
            </div>
            <form :class="{ dark }" class="form d-flex flex-grow-1 rounded-pill" role="search">
                <input class="form-search rounded-start-pill" type="search" placeholder="Search..." v-model="searchText" aria-label="Search"/>
                <button class="btn-search rounded-end-pill" type="submit">
                    <img v-if="dark" src="../assets/imgs/search-light.png" alt="Search" width="25px">
                    <img v-if="!dark" src="../assets/imgs/search-dark.png" alt="Search" width="25px">
                </button>
            </form>
            <div class="offcanvas offcanvas-end" :class="{ dark }" data-bs-scroll="true" tabindex="-1" id="navbar" aria-labelledby="navbarLabel">
                <div class="offcanvas-header">
                    <button type="button" v-if="dark" class="btn-close text-reset btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    <button type="button" v-if="!dark" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav" :class="{ dark }">
                        <li class="nav-item" data-bs-dismiss="offcanvas">
                            <router-link class="nav-link" to="/home">
                                <img v-if="dark" src="../assets/imgs/home-white.png">
                                <img v-if="!dark" src="../assets/imgs/home-black.png">
                                Home
                            </router-link>
                        </li>
                        <li class="nav-item" data-bs-dismiss="offcanvas">
                            <router-link class="nav-link" to="/login">
                                <img v-if="dark" src="../assets/imgs/login-white.png">
                                <img v-if="!dark" src="../assets/imgs/login-black.png">
                                Login
                            </router-link>
                        </li>
                        <li class="nav-item" data-bs-dismiss="offcanvas">
                            <router-link class="nav-link" to="/register">
                                <img v-if="dark" src="../assets/imgs/signup-white.png">
                                <img v-if="!dark" src="../assets/imgs/signup-black.png">
                                Sign Up
                            </router-link>
                        </li>
                        <li class="nav-item" :class="{ dark }" data-bs-dismiss="offcanvas">
                            <a class="nav-link" href="#" @click="toggleTheme()">
                                <img v-if="dark" src="../assets/imgs/theme-white.png">
                                <img v-if="!dark" src="../assets/imgs/theme-black.png">
                                <span v-if="!dark">Dark</span>
                                <span v-if="dark">Ligth</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <a class="btn" href="#navbar" data-bs-toggle="offcanvas" role="button" aria-controls="navbar">
                <img v-if="dark" src="../assets/imgs/user-light.png" alt="User" width="22px">
                <img v-if="!dark" src="../assets/imgs/user-dark.png" alt="User" width="22px">
            </a>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'NavbarComp',
    data () {
        return {
            dark: true,
            expanded: true
        }
    },
    methods: {
        toggleTheme () {
            this.dark = !this.dark;
            this.$emit('theme', this.dark);
            localStorage.setItem("theme", this.dark);
        },
        toggleNavside () {
            this.expanded = !this.expanded;
            this.$emit('toggleNavside', this.expanded);
        }
    },
    mounted () {
        this.dark = JSON.parse(localStorage.getItem("theme"))
        this.$emit('theme', this.dark)
    }
}
</script>
<style scoped>
.navbar { background-color: var(--bg-hard-light); }
.navbar.dark { background-color: var(--bg-hard-dark); }

.form { background-color: var(--bg-half-light); color: black; }
.form.dark { background-color: var(--bg-half-dark); color: white; }

.form:hover { background-color: var(--bg-soft-light); }
.form.dark:hover { background-color: var(--bg-soft-dark); }

.form .form-search { color: black; }
.form.dark .form-search { color: white; }

.form-search, .btn-search { background: transparent; }

.offcanvas { background-color: var(--bg-hard-light); }
.offcanvas.dark { background-color: var(--bg-hard-dark); }

.navbar-nav, .navbar-nav a { color: black; }
.navbar-nav.dark, .navbar-nav.dark a { color: white; }

.navbar-nav.dark { border: 2px dashed var(--bg-soft-dark); }
.navbar-nav { border: 2px dashed var(--bg-soft-light); }

.navbar-nav.dark .nav-item:hover, .dropdown-menu.dark a:hover { background-color: var(--bg-half-dark); }
.navbar-nav .nav-item:hover, .dropdown-menu a:hover { background-color: var(--bg-half-light); }

.dropdown-menu { background-color: var(--bg-hard-light); }
.dropdown-menu.dark { background-color: var(--bg-hard-dark); }

.navbar-nav.dark .nav-item:not(:first-child) { border-top: 2px dashed var(--bg-soft-dark); }
.navbar-nav .nav-item:not(:first-child) { border-top: 2px dashed var(--bg-soft-light); }

.nav-link.active, .nav-link.show { color: black; }
.navbar-nav.dark .nav-link.active, .navbar-nav.dark .nav-link.show { color: white; }

.navbar {
    height: 60px; inset: 0;
    z-index: 999;
}

.form .form-search {
    border: none; padding: 10px 0 10px 20px;
    width: 100%;
}

.navbar-brand {
    font-family: pixelmania;
    font-size: 0.7rem;
    color: var(--default-color);
    text-transform: uppercase;
}

.form {
    max-width: 600px;
}

.form-search::-webkit-search-cancel-button {
    -webkit-appearance: none;
    cursor: pointer;

    height: 20px;
    width: 20px;
    background-image: url(../assets/imgs/close-white.svg);
    background-size: cover;
}

.form .form-search:focus {
    outline: none;
}

.form .btn-search {
    border: none; padding: 0 14px;
}

.navbar-nav .nav-item a {
    padding-left: 15px;
}

.navbar-nav .nav-item img {
    width: 16px; margin-right: 15px;
}

.dropdown-menu li a {
    padding-left: 0;
}

.dropdown-menu {
    margin: 0; padding: 0;
    border-radius: 0; border: none;
}

.expand {
    background: transparent; border: none;
    width: 50px; height: 50px; padding: 0; margin: 0 20px 0 0;
    border-radius: 50%;
}

.expand:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.expand img {
    width: 25px;
}

@media (max-width: 880px) {
    .form {
        width: min-content;
    }

    .navbar-brand {
        display: none;
    }
}

@media (max-width: 342px) {
    .form {
        width: 150px;
    }
}
</style>