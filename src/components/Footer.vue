<script setup>

</script>

<template>
  <footer>
   <div id="footeritem">
            <a target="_blank" href="https://fr.linkedin.com/">
                <img src="./icons/linkedin.png" alt="linkedin">
            </a>
            <a target="_blank" href="https://fr-fr.facebook.com/reg/">
                <img src="./icons/facebook.png" alt="facebook">
            </a>
            <a target="_blank" href="https://github.com/">
                <img src="./icons/github.png" alt="github">
            </a>
        </div>
        <p><small>Mise à jour du site le <time datetime="2023-10-20">20 octobre 2023</time></small></p>

        <div class="mousemove"></div>
</footer>  
</template>

<style>
  /* Style pour la souris */

.mousemove {
    height: 50px;
    width: 50px;
    border: 2px solid rgb(12, 147, 156);
    position: absolute;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    box-shadow: 0px 0px 30px rgb(12, 147, 156);
    transition: 0.2s ease;
    z-index: -1;
}

/* Footer */

#footeritem {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

footer {
    background-color: rgb(12, 147, 156);
    height: 150px;
    align-items: center;
    justify-content: space-around;
}

footer img {
    padding-top: 30px;
    padding-left: 10px;
}

footer p {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
}
</style>