<template>
    <nav class="navbar dark-hard">
        <div class="container d-flex justify-content-between flex-row">
            <router-link class="navbar-brand text-white" to="/home">YouCast</router-link>
            <form class="form d-flex flex-grow-1 dark-half rounded-pill" role="search">
                <input class="form-search dark-half rounded-start-pill" type="search" placeholder="Search..." v-model="searchText" aria-label="Search"/>
                <button class="btn-search dark-half rounded-end-pill" type="submit"><img src="../assets/imgs/search-light.png" alt="Search" width="20px"></button>
            </form>
            <div class="offcanvas offcanvas-end dark-hard" data-bs-scroll="true" tabindex="-1" id="navbar" aria-labelledby="navbarLabel">
                <div class="offcanvas-header">
                    <router-link class="offcanvas-title text-white" to="/home">YouCast</router-link>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav text-white">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/login">
                                <img src="../assets/imgs/login-white.png">
                                Login
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/register">
                                <img src="../assets/imgs/signup-white.png">
                                Sign Up
                            </router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="../assets/imgs/theme-white.png">
                                Theme
                            </a>
                            <ul class="dropdown-menu dark-hard">
                                <li><a class="dropdown-item" href="#">Dark</a></li>
                                <li><a class="dropdown-item" href="#">Light</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <a class="btn" href="#navbar" data-bs-toggle="offcanvas" role="button" aria-controls="navbar">
                <img src="../assets/imgs/user-light.png" alt="User" width="22px">
            </a>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'NavbarComp'
}
</script>
<style scoped>
.navbar-brand, .offcanvas-title {
    font-family: misa;
    font-size: 1.4rem;
}

.form {
    max-width: 600px;
}

.form .form-search {
    border: none; padding: 8px 0 8px 20px;
    color: white; width: 100%;
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
    border: none; padding: 0 12px;
}

.navbar-nav {
    border: 2px dashed var(--bg-soft-dark);
    border-radius: 4px;
}

.navbar-nav .nav-item a {
    padding-left: 15px;
}

.navbar-nav .nav-item:hover, .dropdown-menu a:hover {
    background-color: var(--bg-soft-dark);
}

.navbar-nav li a {
    color: white;
}

.navbar-nav .nav-item:not(:first-child) {
    border-top: 2px dashed var(--bg-soft-dark);
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

.nav-link.active, .nav-link.show {
    color: white;
}

@media (max-width: 772px) {
    .form {
        width: fit-content;
    }
}

@media (max-width: 470px) {
    .navbar-brand {
        display: none;
    }
}

@media (max-width: 320px) {
    .form {
        max-width: 150px;
    }
}
</style>