<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <base-tag>Pasta</base-tag>
            </div>
            <div class="col">
                <base-tag>Carne</base-tag>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <base-tag>Pollo</base-tag>
            </div>
            <div class="col">
                <base-tag>Patate</base-tag>
            </div>
            <div class="col">
                <base-tag>Zucchine</base-tag>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <base-tag>Pomodoro</base-tag>
            </div>
            <div class="col">
                <base-tag>Riso</base-tag>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
    padding-top: 1rem;
    padding-bottom: 3rem;
}

.row {
    margin-top: 2rem;
}
</style>