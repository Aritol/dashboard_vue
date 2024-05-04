<template>
    <div class="content_container">
        <div class="wrapper">
            <div class="item">
                <Icon
                    icon="material-symbols:add"
                    color="#888888"
                    width="100px"
                />
                <div class="info_container">
                    <h1>Створити</h1>
                    <p>самостійно</p>
                </div>
            </div>
            <div class="item">
                <Icon
                    icon="material-symbols:upload"
                    color="#888888"
                    width="100px"
                />
                <div class="info_container">
                    <h1>Завантажити</h1>
                    <p>з файлів</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
    name: "NewReport",
    components: {
        Icon,
    },
};
</script>

<style lang="scss" scoped>
.content_container {
    font-family: "Roboto", sans-serif;
}
.wrapper {
    margin-top: 100px;
    display: flex;
    justify-content: space-evenly;
}

.item {
    // box-sizing: border-box;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.15);
    border: 2px solid #e4e4e4;
    cursor: pointer;
    text-align: center;
    transition: all, 0.3s ease-in-out;
    border-radius: 20px;

    &:hover {
        box-shadow: 1px 1px #959c98, 2px 2px #959c98, 3px 3px#959c98,
            4px 4px #959c98, 5px 5px #959c98, 6px 6px#959c98, 7px 7px #959c98;
        -webkit-transform: translateX(-7px);
        transform: translateX(-7px);
        background-color: #eff4f9;
        svg {
            color: #e8f0fe;
        }
    }
    svg {
        margin: 210px 210px;
    }
}
.info_container {
    border-top: 1px solid #dadce0;
    padding: 20px;
    font-size: 24px;
    color: #3c4043;
    h1 {
        font-weight: bold;
    }
    p {
        color: #888;
    }
}
</style>
