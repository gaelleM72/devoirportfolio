<script setup>

</script>

<template>
    <nav>
            <div id="profil">
                <a target="_blank" href="./icons/avatar.png">
                    <img src="./icons/avatar.png" alt="avatar">
                </a>
                <h1>Mancuso Gaëlle</h1>
            </div>
            <ul class="menu">
                <li><a href="#présentation">Présentation</a></li>
                <li><a href="#project-container">Projets</a></li>
                <li><a href="#form">Contact</a></li>
            </ul>
        </nav>
</template>

<style scoped>
#profil img {
    display: flex;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-left: 20px;
    box-shadow: 0px 0px 10px black;
}

nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    top: 0;
    background-color: rgb(12, 147, 156);
}

#profil {
    display: flex;
    align-items: center;
}

h1 {
    font-size: 30px;
    margin-left: 20px;
    color: white;
}

nav ul {
    display: flex;
    list-style-type: none;

}

ul li a {
    font-size: 20px;
    letter-spacing: 0.1rem;
    color: white;
}

nav ul li:hover {
    color: white;
    text-decoration: underline;
}

.menu li {
    float: left;
    padding: 35px;
}

.menu li a {
    text-decoration: none;
}
</style>