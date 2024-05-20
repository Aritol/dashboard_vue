<template>
    <div>
        <div class="container">
            <div class="wrapper">
                <div class="content_container">
                    <div class="modal_header">
                        <h1>Замовити зворотній дзвінок</h1>
                        <Icon
                            icon="material-symbols:close"
                            width="40px"
                            color="#999"
                            @click="close"
                        />
                    </div>
                    <div class="modal_body">
                        <form action="" @submit.prevent="onSubmit">
                            <div class="form_item">
                                <label for="">Ім'я</label>
                                <input type="text" required />
                            </div>
                            <div class="form_item">
                                <label for="">Телефон</label>
                                <input
                                    type="text"
                                    placeholder="+38 (___) ___ __ __"
                                    required
                                    v-mask="'+38 (0##) ### ## ##'"
                                />
                            </div>
                            <div class="form_item">
                                <textarea
                                    name=""
                                    id=""
                                    placeholder="Коментар"
                                    cols="10"
                                    rows="5"
                                ></textarea>
                            </div>
                            <div class="form_item"></div>
                            <button type="submit">Передзвоніть мені</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { mask } from "vue-the-mask";
export default {
    name: "callBackPopup",
    components: {
        Icon,
    },
    directives: {
        mask,
    },
    methods: {
        close() {
            this.$emit("close");
        },
        onSubmit() {
            console.log("sdsds");
        },
    },
};
</script>

<style lang="scss" scoped>
.container {
    font-family: Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    display: flex;
    justify-content: center;
    z-index: 1;
}
.wrapper {
    margin-top: 10%;
    background-color: #ffff;
    max-height: 600px;
    max-width: 450px;
    width: 100%;
}

.content_container {
    // padding: 20px 20px;
}

.modal_header {
    font-size: 26px;
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    h1 {
        padding-top: 5px;
    }
    svg {
        cursor: pointer;
        float: right;
    }
}
.modal_body {
    padding: 0px 30px;
}

.form_item {
    margin-top: 30px;
    label {
        font-size: 20px;
    }
    input {
        margin-top: 10px;
        display: block;
        width: 100%;
        border: 2px solid #cacaca;
        font-size: 18px;
        padding: 8px 5px;
        border-radius: 13px;
    }
    textarea {
        width: 100%;
        height: auto;
        min-height: 100px;
        max-height: 200px;
        max-width: 400px;
        min-width: 400px;
        padding: 4px 5px;
        border: 2px solid #cacaca;
        border-radius: 13px;
    }
}

button {
    margin-top: 20px;
    text-align: center;
    font-size: 28px;
    width: 100%;
    padding: 12px 30px;
    color: #fff;
    background-color: #509ee3;
    border-color: #509ee3;
    border-radius: 10px;
    transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
    &:hover {
        background-color: #1c6bb0;
    }
}
</style>
