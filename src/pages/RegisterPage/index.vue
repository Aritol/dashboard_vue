<template>
    <div>
        <div class="container">
            <div class="header">
                <!-- <header/> -->
            </div>
            <div class="main_container">
                <div class="column">
                    <div class="top_content">
                        <h1>Створіть ваш особистий профіль</h1>
                        <p>
                            Все що вам потрібно для аналізу данних в одному
                            місці за 5-хвилин
                        </p>
                        <div class="filled">
                            <Icon icon="logos:google-icon" width="30px" />
                            <p>Sign up with google</p>
                        </div>
                    </div>
                    <div class="mid_content">
                        <hr class="line" />
                        <p>АБО</p>
                        <hr class="line" />
                    </div>
                    <div class="bottom_content">
                        <div class="input_container">
                            <label for="firstName">Ім'я</label>
                            <input type="text" name="firstName" />
                        </div>
                        <div class="input_container">
                            <label for="lastName">Фамілія</label>
                            <input type="text" name="lastName" />
                        </div>
                        <div class="input_container">
                            <label for="email">Email</label>
                            <input type="text" name="email" />
                        </div>
                        <div class="input_container">
                            <label for="password">Пароль</label>
                            <input type="password" name="password" />
                        </div>
                        <div class="input_container">
                            <label for="repeatPassword">Повторіть пароль</label>
                            <input type="password" name="repeatPassword" />
                        </div>
                        <div class="terms_container">
                            <input type="checkbox" id="terms_checkbox" />
                            <p>Я даю згоду на обробку персональних даних</p>
                        </div>
                        <div class="submit_button_container">
                            <button>Зареєструватись</button>
                            <p>
                                Вже зареєстровані?
                                <span
                                    @click="$router.push({ name: 'loginPage' })"
                                    >Увійдіть</span
                                >
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <img src="@/assets/images/signup_sideimage.png" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
    name: "RegisterPage",
    components: {
        Icon,
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.main_container {
    display: flex;
    font-family: Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;
    justify-content: space-between;
    padding: 0 200px;
    margin-top: 50px;
}

.top_content {
    text-align: center;
    h1 {
        font-weight: 600;
        font-size: 36px;
        color: #1f1f1f;
    }

    p {
        color: #e4e4e4;
        font-weight: 500;
        font-size: 18px;
        margin-top: 10px;
    }

    .filled {
        margin-top: 35px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 10px 0px;
        border: 3px solid #e4e4e4;
        cursor: pointer;

        transition: all, 0.3s ease;

        &:hover {
            background-color: #ebe9e9;
            box-shadow: 1px 1px #959c98, 2px 2px #959c98, 3px 3px#959c98,
                4px 4px #959c98, 5px 5px #959c98, 6px 6px#959c98,
                7px 7px #959c98;
            -webkit-transform: translateX(-7px);
            transform: translateX(-7px);
        }

        p {
            color: #1f1f1f;
            margin-left: 20px;
            margin-top: 3px;
        }
    }

    .filled:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0;
        background: #999;
        -webkit-transition: 0.3s;
        transition: 0.3s;
    }
    .filled:hover {
        height: 100%;
    }
}

.mid_content {
    margin-top: 20px;
    display: flex;
    align-items: center;

    .line {
        flex-grow: 1;
        border: 1px solid #e4e4e4;
        border-radius: 1em;
    }

    p {
        font-size: 18px;
        margin: 0 20px;
        color: #e4e4e4;
    }
}

.bottom_content {
    .input_container {
        margin-top: 25px;
        label {
            font-weight: 600;
            font-size: 20px;
        }
        input {
            margin-top: 15px;
            display: block;

            border: 2px solid #e4e4e4;
            padding: 8px 5px;
            font-size: 16px;
            width: 100%;

            &:focus {
                border: 2px solid #c4c0c0;
                transition: 0.3s ease;
            }
        }
    }
}

.terms_container {
    margin-top: 30px;
    font-size: 18px;
    display: flex;

    p {
        margin-left: 15px;
    }
}

#terms_checkbox {
}

.submit_button_container {
    margin-top: 30px;

    button {
        padding: 25px 0px;
        width: 100%;
        font-size: 20px;
        background-color: #1f1f1f;
        border: 0px;
        color: #ffff;

        &:hover {
            background-color: #383838;
            transition: 0.25s ease;
        }
    }
    p {
        margin-top: 15px;
        font-size: 18px;
        color: #c4c0c0;
        span {
            color: #1f1f1f;
            font-weight: 600;
            cursor: pointer;
        }
    }
}
</style>
