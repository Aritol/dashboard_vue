<template>
    <div class="content_container">
        <div class="wrapper">
            <div class="item">
                <Icon icon="material-symbols:plus" />
            </div>
            <div class="item">
                <Icon icon="material-symbols:upload-2" />
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

<style lang="scss" scoped></style>
