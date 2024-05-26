<template>
    <div>
        <div class="content_container">
            <div class="wrapper" ref="wrapper">
                <div class="name_container">
                    <Icon
                        icon="ion:analytics-sharp"
                        color="#4285f4"
                        width="30px"
                    />
                    <p>Звіт без назви</p>
                </div>
                <div class="owner_container">
                    <p>Андреянов Максим</p>
                </div>
                <div class="last_seen_container">
                    <p>25 травня 2024 р.</p>
                    <div class="more_container">
                        <div class="more_button">
                            <Icon
                                icon="akar-icons:more-vertical"
                                color="#888888"
                                width="25px"
                                @click="showOptions = true"
                            />
                        </div>
                        <div class="options" v-if="showOptions" ref="options">
                            <div class="option">
                                <Icon
                                    icon="material-symbols:drive-file-rename-outline-outline-sharp"
                                    color="#888888"
                                    width="30px"
                                />
                                <p>Перейменувати</p>
                            </div>
                            <div class="option">
                                <Icon
                                    icon="material-symbols:delete-outline"
                                    color="#888888"
                                    width="30px"
                                />
                                <p>Видалити</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
    name: "reportsListItem",
    components: {
        Icon,
    },
    data() {
        return {
            showOptions: false,
        };
    },
    methods: {
        handleClickOutside(event) {
            const wrapper = this.$refs.wrapper;
            const options = this.$refs.options;
            if (
                wrapper &&
                !wrapper.contains(event.target) &&
                options &&
                !options.contains(event.target)
            ) {
                this.showOptions = false;
            }
        },
    },

    mounted() {
        document.addEventListener("click", this.handleClickOutside);
    },
    beforeUnmount() {
        document.removeEventListener("click", this.handleClickOutside);
    },
};
</script>

<style lang="scss" scoped>
.content_container {
}

.wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    // margin-top: 10px;
    border-bottom: 1px solid #dadce0;
    padding: 10px 4px;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #f8f9fa;
    }

    p {
        font-size: 16px;
    }
}

.name_container {
    display: flex;
    align-items: center;
    max-width: 250px;
    width: 100%;

    p {
        margin-left: 15px;
    }
}

.last_seen_container {
    display: flex;
    align-items: center;
    svg {
        margin-left: 5px;
    }
}
.options {
    position: absolute;
    top: 50%;
    right: 0;
    background: white;
    border: 1px solid #ddd;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    max-width: 250px;
    width: 100%;
    z-index: 100;
}
.option {
    padding: 15px 10px;

    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #f8f9fa;
    }

    p {
        margin-left: 10px;
        font-size: 18px;
    }
}

// box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
</style>
