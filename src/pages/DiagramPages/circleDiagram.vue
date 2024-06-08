<template>
    <div>
        <div class="container">
            <div class="wrapper">
                <div class="header">Створення графіку</div>
                <div class="chose_container">
                    <div class="left_column">
                        <div class="first_row">
                            <h1>Оберыть масив даних</h1>
                            <div class="select_container"></div>
                        </div>
                        <div class="second_row"></div>
                    </div>
                    <div class="right_column">
                        <div class="graphic_container">
                            <canvas></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "circleDiagram",
};
</script>

<style lang="scss" scoped>
.container {
    background-color: #c4c4c4;
}

.wrapper {
    max-width: 1240px;
    text-align: center;
}

.header {
    font-size: 24px;
}
.chose_container {
    justify-content: space-evenly;
}
</style>
