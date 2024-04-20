<template>
    <div>
        <div class="main_container">
            <div class="logo_container">
                <img src="@/assets/images/logo.png" alt="" />
            </div>
            <div class="menu_container">
                <div class="menu_list">
                    <div class="menu_item">
                        <p
                            href=""
                            @click="$router.push({ name: 'newReportPage' })"
                        >
                            Створити звіт
                        </p>
                    </div>
                    <div class="menu_item">
                        <p
                            href=""
                            @click="$router.push({ name: 'myReportsPage' })"
                        >
                            Мої звіти
                        </p>
                    </div>
                    <div class="menu_item">
                        <p
                            href=""
                            @click="$router.push({ name: 'settingsPage' })"
                        >
                            Налаштування
                        </p>
                    </div>
                    <div class="menu_item">
                        <p href="" @click="logout">Вихід</p>
                    </div>
                </div>
            </div>
            <div class="avatar">
                <Avatar />
            </div>
        </div>
    </div>
</template>

<script>
import Avatar from "@/components/Avatar";

export default {
    name: "Header",
    components: {
        Avatar,
    },
    methods: {
        logout() {},
    },
};
</script>

<style lang="scss" scoped>
.main_container {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    display: flex;
    border-bottom: 1px solid #e4e4e4;
    // justify-content: space-between;
}

.logo_container {
    margin-top: 15px;
    margin-left: 200px;

    img {
        cursor: pointer;
        width: 120px;
    }
}

.menu_container {
    margin-top: 15px;
}

.menu_list {
    display: flex;
    align-items: center;
    // flex-direction: row;
    .menu_item {
        display: flex;
        justify-content: center;
        margin-top: 5px;
        margin-left: 100px;
        border-radius: 15px;
        transition: background-color 0.3s;
        &:hover {
            background-color: #f3f8fc;
            a {
                color: #509ee3;
            }
        }
        p {
            font-size: 21px;
            align-items: center;
            padding: 20px;
            cursor: pointer;
            color: #5a6072;
        }
    }
}
.avatar {
    // margin-left: auto; /* Замінюємо margin-left: 140px на margin-left: auto */
    margin-top: 10px;
    // margin-right: 120px;
    margin-left: 350px;
    // float: right;
}
</style>
