<template>
    <div>
        <div class="content_container">
            <div class="wrapper">
                <div class="column first">
                    <div class="wrap">
                        <h1 class="center-text">Максим Андреянов</h1>
                        <div class="photo_container">
                            <div class="photo">
                                <img src="/avatar_test.png" alt="" />
                                <Icon
                                    icon="material-symbols:delete-outline"
                                    width="40px"
                                    color="#888888"
                                    @click="showConfirmPopup = true"
                                />
                                <photo-editor
                                    v-if="showPhotoEditor"
                                    class="photo_editor"
                                    :src="file"
                                    @savePhoto="savePhotoAfterEdit"
                                    @close="showPhotoEditor = false"
                                />
                            </div>
                            <button @click="$refs.file.click">
                                Завантажити інше фото
                            </button>
                            <input
                                type="file"
                                ref="file"
                                style="display: none"
                                @change="fileLoaded"
                            />

                            <div class="info_container">
                                <p>
                                    Завантажте свій аватар. Фото з великим
                                    розміром зміняться автоматично.
                                </p>
                                <p>Максимальний розмір 10мб.</p>
                            </div>
                            <div class="since_date">
                                <p>Користувач з 2018 р.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="wrap">
                        <div class="top_container">
                            <h1>Редагування профілю</h1>
                            <p>Інформація про користувача</p>
                        </div>
                        <div class="user_info_container">
                            <div class="sub_column">
                                <div class="container">
                                    <p>Ім'я</p>
                                    <input type="text" />
                                </div>
                                <div class="container">
                                    <p>Email</p>
                                    <input type="text" />
                                </div>
                                <div class="container">
                                    <p>Пароль</p>
                                    <input type="password" />
                                </div>
                                <button>Зберегти зміни</button>
                            </div>
                            <div class="sub_column ml-40">
                                <div class="container">
                                    <p>Прізвище</p>
                                    <input type="text" />
                                </div>
                                <div class="container">
                                    <p>Повторіть email</p>
                                    <input type="text" />
                                </div>
                                <div class="container">
                                    <p>Повторіть пароль</p>
                                    <input type="password" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="confirm_delete_container">
                <confirm-action-popup
                    v-if="showConfirmPopup"
                    :headerText="'Видалення фотографії'"
                    :bodyText="'Бажаєте видалити фото?'"
                    @close="showConfirmPopup = false"
                    @submit="deletePhoto"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import PhotoEditor from "@/components/PhotoEditor";
import { saveImageToServer, deleteImage } from "@/helpers/data";
import ConfirmActionPopup from "@/components/common/confirmActionPopup.vue";

export default {
    name: "Settings",
    components: {
        Icon,
        PhotoEditor,
        ConfirmActionPopup,
    },
    data() {
        return {
            file: null,
            showPhotoEditor: false,
            showConfirmPopup: false,
        };
    },
    methods: {
        fileLoaded(event) {
            const inputedFile = event.target.files[0];
            if (inputedFile) {
                this.showPhotoEditor = true;
                this.file = inputedFile;
            }
        },
        savePhotoAfterEdit(photo) {
            console.log("photo");
            console.log(photo);
            if (photo) {
                const formData = new FormData();
                formData.append("file", photo);
                // formData.append("userId", userId);
                saveImageToServer(formData)
                    .then((response) => {
                        console.log("response");
                        console.log(response);
                        if (
                            response &&
                            response.data &&
                            response.data.uploadSuccess
                        ) {
                            this.showPhotoEditor = false;
                        }
                    })
                    .catch((err) => {
                        console.error(err);
                        this.showPhotoEditor = false;
                    });
            }
        },
        deletePhoto() {
            deleteImage()
                .then((response) => {
                    if (
                        response &&
                        response.data &&
                        response.data.uploadSuccess
                    ) {
                        this.showConfirmPopup = false;
                    }
                })
                .catch((err) => {
                    console.error(err);
                    this.showConfirmPopup = false;
                });

            deleteImage;
        },
    },
};
</script>

<style lang="scss" scoped>
.content_container {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    width: 100%;
    background-color: #ced5df;
}

.wrapper {
    max-width: 1340px;
    margin: 0 auto;
    padding-top: 40px;
    display: flex;
    // justify-content: space-between;
    // gap: 20px;
}

.center-text {
    text-align: center;
}

.column {
    background-color: #ffffff;
    // display: inline-block;
    margin: 0px 50px 186px 50px;
    // flex: 1;
}
.first {
    padding: 50px;
    max-width: 430px;
    max-height: 500px;
}
.wrap {
    // max-width: 500px;
    // margin: 50px 30px;

    h1 {
        font-size: 19px;
        font-weight: bold;
        margin-top: 20px;
    }
}

.photo_container {
    margin-top: 20px;
    .photo {
        width: 150px;
        height: 150px;
        border-radius: 20px;
        margin: 0 auto;
        overflow: hidden;
        border: 2px solid #000;
        img {
            // width: 100%;
            // height: 100%;
        }
        svg {
            float: right;
            cursor: pointer;
        }
    }

    text-align: center;
    button {
        margin-top: 15px;
        background-color: #ff3d17;
        padding: 17px 20px;
        font-size: 17px;
        color: #ffffff;
        border-radius: 10px;
        transition: all 0.3s ease;

        &:hover {
            background-color: #c03b21;
        }
    }

    .info_container {
        text-align: center;
        // max-width: 300px;
        margin-top: 15px;
        background-color: #f1f4fd;
        padding: 10px 15px;
        font-size: 16px;
        border-radius: 18px;
        line-height: 24px;
    }

    .since_date {
        margin-top: 15px;
        text-align: center;
        font-size: 16px;
        font-weight: bold;
    }
}

.top_container {
    background-color: #f1f4fd;
    padding: 20px 50px 0px 50px;
    min-width: 600px;
    h1 {
        font-size: 27px;
    }
    p {
        font-size: 18px;
        font-weight: bold;
        margin-top: 20px;
        border-bottom: 2px solid #0076fe;
        line-height: 28px;
        max-width: 260px;
    }
}

.user_info_container {
    margin-top: 35px;
    padding: 0px 60px;
    font-size: 22px;
    display: flex;

    button {
        margin-top: 30px;
        background-color: #ff3d17;
        padding: 20px 20px;
        font-size: 18px;
        font-weight: bold;
        color: #ffffff;
        border-radius: 10px;
        transition: all 0.3s ease;

        &:hover {
            background-color: #c03b21;
        }
    }
}
.ml-40 {
    margin-left: 50px;
}
.sub_column {
    color: #586a78;
    // margin-left: 20px;
    margin-bottom: 25px;
    .container {
        input {
            margin: 12px 0px 22px 0px;
            border: 2px solid #f1f4fd;
            padding: 12px 5px;
            font-size: 20px;
            transition: all 0.4s ease;
            &:focus {
                border: 2px solid #0076fe;
            }
        }
    }
}

.photo_editor {
    // position: absolute;
    // top: 0;
    // left: 0;
}
</style>
