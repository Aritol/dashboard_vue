<template>
    <div class="content container">
        <div class="top_container">
            <Icon
                icon="carbon:user-avatar-filled"
                width="80px"
                color="#21ACED"
                @mouseover="showSubMenu = true"
            />
        </div>
        <div
            class="botom_container"
            v-show="showSubMenu"
            @mouseleave="showSubMenu = false"
        >
            <div class="img_container">
                <img src="" alt="" v-if="profile" />
                <div v-else>
                    <Icon
                        icon="carbon:user-avatar-filled"
                        width="100px"
                        color="#21ACED"
                        @mouseover="showSubMenu = true"
                    />
                </div>
            </div>
            <div class="info_container" v-if="isAuthorized">
                <p>{{}}</p>
            </div>
            <div class="buttons_container">
                <div
                    class="button"
                    v-if="isAuthorized"
                    @click="$router.push({ name: 'settingsPage' })"
                >
                    <p>Налаштування</p>
                    <Icon
                        icon="material-symbols:settings-rounded"
                        width="40px"
                        color="#888888"
                    />
                </div>
                <div class="button" v-if="isAuthorized">
                    <p>Довідка</p>
                    <Icon
                        icon="material-symbols:info-outline"
                        width="40px"
                        color="#888888"
                    />
                </div>
                <div class="button" v-if="isAuthorized" @click="logoutUser">
                    <p>Вихід</p>
                    <Icon
                        icon="material-symbols:exit-to-app"
                        width="40px"
                        color="#888888"
                    />
                </div>
                <div
                    class="button"
                    v-else
                    @click="$router.push({ name: 'loginPage' })"
                >
                    <p>Вхід</p>
                    <Icon
                        icon="material-symbols:exit-to-app"
                        width="40px"
                        color="#888888"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "avatar",
    components: {
        Icon,
    },
    data() {
        return {
            showSubMenu: false,
            profile: false,
        };
    },
    computed: {
        ...mapGetters("auth", ["authorized"]),
        isAuthorized() {
            return this.authorized;
        },
    },
    methods: {
        ...mapActions("auth", ["logout"]),
        logoutUser() {
            this.logout();
        },
    },
};
</script>

<style lang="scss" scoped>
.container {
    position: relative;
}

.top_container {
    margin-bottom: 5px; /* Додамо відступ між верхнім та нижнім контейнером */
}

.botom_container {
    margin-left: 40px;
    position: absolute;
    margin-top: 20px;
    transform: translateX(-50%);
    // width: 200px; /* Задамо ширину контейнера */
    border: 1px solid #ccc; /* Додамо рамку */
    border-radius: 5px; /* Закруглимо кути рамки */
    background-color: #fff; /* Задамо фоновий колір */
    // padding: 10px; /* Додамо відступи всередині контейнера */
}

.botom_container::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0 10px 10px 10px;
    border-style: solid;
    border-color: transparent transparent #ccc transparent;
}
.img_container {
    margin-top: 10px;
    div {
        text-align: center;
    }
}

// .botom_container .img_container,
// .botom_container .info_container {
//     /* Стилі для контейнерів зображення та інформації */
// }

.botom_container .buttons_container {
    display: flex;
    flex-direction: column;
    gap: 20px; /* Відступ між кнопками */
}
.buttons_container {
    margin-top: 10px;
    border-top: 2px solid #e4e4e4;
}

.button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    // text-align: left;
    padding: 45px 30px 45px 30px;
    &:hover {
        background-color: #f3f8fc;
    }

    svg {
        margin-left: auto; /* Поміщаємо іконку вправо */
    }
}
p {
    font-size: 20px;
    margin-right: 20px;
    text-align: center; /* Вирівнюємо текст по центру */
    flex-grow: 1;
}
</style>
