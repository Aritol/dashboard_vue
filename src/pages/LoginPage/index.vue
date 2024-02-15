<template>
    <div class="content_container">
        <div class="header_container">
            <h1>Почніть роботу з MetaGraph</h1>
            <p>Візуалізуйте свої дані просто зрозуміло та безкоштовно.</p>
        </div>
        <div class="main_container">
            <div class="input_container">
                <label for="email">Пошта</label>
                <input type="text" id="email" />
            </div>
            <div class="input_container">
                <label for="password">Пароль</label>
                <input type="text" id="password" />
            </div>
            <div class="forgot_password">
                <p>Забули пароль?</p>
            </div>
            <button>Увійти</button>
            <div class="bottom_info_container">
                <p>Ще немає аккаунту?</p>
                <router-link to="/signup">Зареєструватись</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginPage",
};
</script>

<style lang="scss" scoped>
.content_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #fafbfe;
    font-family: Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;
    p {
        color: #646a72;
        font-size: 16px;
        font-weight: 600;
    }
}

.header_container {
    margin-top: 60px;
    h1 {
        text-align: center;
        color: rgb(35, 44, 66);
        font-weight: 700;
        font-size: 24px;
        margin-top: 20px;
    }
    p {
        margin-top: 10px;
    }
}

.main_container {
    // margin-top: 30px;
    button {
        margin-top: 50px;
        background-color: rgb(80, 158, 227);
        font-size: 20px;
        font-weight: 600;
        color: white;
        padding: 20px 250px;
        border-radius: 15px;
        transition: background-color 200ms ease 0s, border-color 200ms ease 0s,
            color 200ms ease 0s, opacity 200ms ease 0s;

        &:hover {
            background-color: #2d86d4;
        }
    }
}

.input_container {
    // display: flex;
    margin-top: 40px;

    label {
        font-size: 15px;
        font-weight: 600;
    }

    input {
        margin-top: 10px;
        display: block;
        padding: 8px 15px;
        font-size: 19px;
        transition: border-color 100ms ease 0s;
        background-color: rgb(255, 255, 255);
        transition: border-color 400ms ease 0s;
        border: solid 2px transparent;
        border-radius: 8px;
        min-width: 565px;
        &:focus {
            border: solid 2px #88bdec;
        }
    }
}

.forgot_password {
    margin-top: 20px;
    p {
        margin-top: 10px;
        cursor: pointer;
    }
}

.bottom_info_container {
    display: flex;
    margin-top: 20px;
    p {
        margin: 0;
    }
    a {
        margin-left: 5px;
        font-size: 16px;
        color: rgb(80, 158, 227);
        font-weight: 700;
    }
}
</style>
