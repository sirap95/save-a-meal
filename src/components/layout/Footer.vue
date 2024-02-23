<template>
    <div class="footer">
        <p>&copy; 2024 Your Website. All rights reserved. | Designed by <a href="https://www.example.com">Gregorio
                Siravo</a>
        </p>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.main {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.footer {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
}

.footer a {
    color: #fff;
    text-decoration: none;
}

.footer a:hover {
    text-decoration: underline;
}
</style>