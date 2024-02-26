<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <base-tag>Tomato</base-tag>
            </div>
            <div class="col">
                <base-tag>Chicken</base-tag>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <base-tag>Cheese</base-tag>
            </div>
            <div class="col">
                <base-tag>Pasta</base-tag>
            </div>
            <div class="col">
                <base-tag>Carrot</base-tag>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <base-tag>Rice</base-tag>
            </div>
            <div class="col">
                <base-tag>Potatoes</base-tag>
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