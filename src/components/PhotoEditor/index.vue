<template>
    <div>
        <div class="container">
            <div class="content_container">
                <div class="header">
                    <p>Оберіть розмір фото</p>
                    <Icon
                        icon="material-symbols:close"
                        width="50px"
                        color="#ffff"
                        @click="close"
                    />
                </div>
                <div class="img-container">
                    <img
                        alt=""
                        ref="image"
                        :src="base64Image"
                        v-show="showCropp"
                    />
                </div>
                <button @click="savePhotoCropped">Зберегти фото</button>
            </div>
        </div>
    </div>
</template>

<script>
import Cropper from "cropperjs";
import { Icon } from "@iconify/vue";

export default {
    name: "PhotoEditor",
    components: {
        Icon,
    },
    props: {
        src: {
            type: File,
            default: () => {},
        },
    },
    data() {
        return {
            cropper: {},
            destanation: {},
            image: {},
            base64Image: null,
            showCropp: false,
            loading: false,
        };
    },
    watch: {
        src: {
            immediate: true,
            handler(photo) {
                if (photo) {
                    const reader = new FileReader();
                    reader.onload = () => {
                        this.base64Image = reader.result;
                        // this.showCropp = true;
                        // setTimeout(() => {
                        // this.initCropper();
                        // }, 1000);
                    };
                    reader.readAsDataURL(photo);
                }
            },
        },
    },
    methods: {
        initCropper() {
            this.image = this.$refs.image;
            this.cropper = new Cropper(this.image, {
                zoomable: false,
                scalable: false,
                aspectRatio: 1,
                crop: () => {
                    const canvas = this.cropper.getCroppedCanvas();
                    canvas.toBlob((blob) => {
                        this.destanation = new File([blob], "filename.jpg", {
                            type: "image/jpeg",
                        });
                    });
                },
            });
        },
        savePhotoCropped() {
            this.loading = true;
            this.$emit("savePhoto", this.destanation);
        },
        close() {
            this.$emit("close");
        },
    },
    mounted() {
        const reader = new FileReader();
        reader.onload = () => {
            this.base64Image = reader.result;
            this.showCropp = true;
            this.initCropper();
        };
        reader.readAsDataURL(this.src);
    },
    beforeUnmount() {
        this.cropper.destroy();
    },
};
</script>

<style lang="scss" scoped>
.container {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.85);
}

.content_container {
    max-width: 450px;
    margin: 0 auto;
    margin-top: 10%;
    border-radius: 20px;
    background-color: #ffff;
    overflow: hidden;
}

.header {
    max-width: 450px;
    text-align: center;
    padding: 10px 0px;
    background-color: black;
    color: #ffff;
    font-size: 22px;
    display: flex;
    p {
        margin-left: 27%;
        margin-top: 16px;
    }

    svg {
        margin-left: 65px;
        cursor: pointer;
    }
}

.img-container {
    // max-height: 600px;
    margin: 20px auto;
    // padding: 20px 0px;

    height: 350px; /* Added */
    width: 400px; /* Added */
    // overflow: hidden; /* Added */
    // display: flex; /* Added */
    // text-align: center;
    // justify-content: center; /* Added */
    // align-items: center; /* Added */
    img {
        // width: 100%; /* Added */
        display: block;
        max-width: 100%;
    }

    canvas {
        // margin: 0 auto;
        // overflow: hidden;
    }
}

button {
    margin-top: 20px;
    margin-bottom: 25px;
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
</style>
