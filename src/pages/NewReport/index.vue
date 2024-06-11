<template>
    <div class="content_container">
        <div class="wrapper">
            <!-- <div class="item">
                <Icon
                    icon="material-symbols:add"
                    color="#888888"
                    width="100px"
                />
                <div class="info_container">
                    <h1>Створити</h1>
                    <p>самостійно</p>
                </div>
            </div> -->
            <div class="item" @click="openFileDialog" v-if="!fileLoaded">
                <Icon
                    icon="material-symbols:upload"
                    color="#888888"
                    width="100px"
                />
                <div class="info_container">
                    <h1>Завантажити</h1>
                    <p>з файлів</p>
                </div>
                <input
                    type="file"
                    ref="fileInput"
                    @change="handleFileChange"
                    style="display: none"
                />
                <div class="error_container" v-if="fileLoadError">
                    <api-response-popup
                        :successResponse="false"
                        :responseText="'При завантаженні файлу виникла помилка'"
                        :withTimer="true"
                    />
                </div>
            </div>
        </div>
        <div class="step_two" v-if="fileLoaded">
            <div class="header">
                <h1>Оберіть тип графіку для відображення</h1>
            </div>
            <div class="graphics_container">
                <h1>Типи графіків</h1>
                <div class="graphics_container_wrapper">
                    <div class="row" @click="selectDiagramType('gistogram')">
                        <div class="graphic">
                            <div class="img_container">
                                <img
                                    src="../../assets/images/gistogram.png"
                                    alt=""
                                />
                            </div>
                            <p>Гістограма</p>
                        </div>
                    </div>
                    <div
                        class="row"
                        @click="selectDiagramType('circleDiagram')"
                    >
                        <div class="graphic">
                            <div class="img_container">
                                <img
                                    style="width: 295px"
                                    src="../../assets/images/circle_diagram.png"
                                    alt=""
                                />
                            </div>

                            <p>Кругова діаграма</p>
                        </div>
                    </div>
                    <div
                        class="row"
                        @click="selectDiagramType('linearDiagram')"
                    >
                        <div class="graphic">
                            <div class="img_container">
                                <img
                                    style="width: 295px"
                                    src="../../assets/images/linear_gistogram.png"
                                    alt=""
                                />
                            </div>

                            <p>Лінійна діаграма</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { FILE_TYPES } from "@/constants/commonConstants";
import * as XLSX from "xlsx";
import Papa from "papaparse";
import { mapActions } from "vuex";
import ApiResponsePopup from "@/components/common/apiResponsePopup.vue";

export default {
    name: "NewReport",
    components: {
        Icon,
        ApiResponsePopup,
    },
    data() {
        return {
            fileLoaded: false,
            fileLoadError: false,
        };
    },

    methods: {
        ...mapActions("charts", ["setChartDataAction", "setFileTypeAction"]),
        openFileDialog() {
            this.$refs.fileInput.click();
        },
        handleFileChange(event) {
            this.fileLoadError = false;
            const file = event.target.files[0];
            const fileType = file.name.split(".").pop().toLowerCase();
            if (file) {
                switch (fileType) {
                    case FILE_TYPES.FILE_TYPE_JSON:
                        this.readJsonFile(file);
                        break;
                    case FILE_TYPES.FILE_TYPE_XLSX:
                        this.readExcelFile(file);
                        break;
                    case FILE_TYPES.FILE_TYPE_CSV:
                        this.readCsvFile(file);
                        break;
                    default:
                        alert("Unsupported file type");
                }
            }
        },
        readJsonFile(file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const chartData = JSON.parse(event.target.result);
                    this.setFileTypeAction(FILE_TYPES.FILE_TYPE_JSON);
                    this.setChartDataAction(chartData);
                    this.fileLoaded = true;
                } catch (error) {
                    console.error("Error parsing JSON:", error);
                    this.fileLoadError = true;
                }
            };
            reader.readAsText(file);
        },
        readExcelFile(file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const data = new Uint8Array(event.target.result);
                    const workbook = XLSX.read(data, { type: "array" });
                    const excelDataToJson = {};
                    for (const sheetName in workbook.Sheets) {
                        // eslint-disable-next-line
                        if (workbook.Sheets.hasOwnProperty(sheetName)) {
                            const sheetData = XLSX.utils.sheet_to_json(
                                workbook.Sheets[sheetName],
                                {
                                    header: 1,
                                    raw: false,
                                }
                            );
                            excelDataToJson[sheetName] = sheetData;
                        }
                    }
                    this.setFileTypeAction(FILE_TYPES.FILE_TYPE_XLSX);
                    this.setChartDataAction(excelDataToJson);
                    this.fileLoaded = true;
                } catch (error) {
                    console.error("Error parsing Excel:", error);
                    this.fileLoadError = true;
                }
            };
            reader.readAsArrayBuffer(file);
        },
        readCsvFile(file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const csvData = Papa.parse(event.target.result, {
                        header: true,
                        dynamicTyping: true,
                    });
                    this.setFileTypeAction(FILE_TYPES.FILE_TYPE_CSV);
                    const aggrCsvData = {
                        headers: csvData.meta.fields,
                        data: csvData.data,
                    };
                    aggrCsvData.data.pop();
                    this.setChartDataAction(aggrCsvData);
                    this.fileLoaded = true;
                } catch (error) {
                    console.error("Error parsing CSV:", error);
                    this.fileLoadError = true;
                }
            };
            reader.readAsText(file);
        },
        selectDiagramType(diagramType = "") {
            if (diagramType && diagramType.length) {
                this.$router.push({ name: diagramType });
            }
        },
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

.step_two {
    text-align: center;
    .header {
        font-size: 40px;
    }
}
.graphics_container {
    margin-top: 50px;
    h1 {
        font-size: 30px;
    }
}
.graphics_container_wrapper {
    margin-top: 30px;
    display: flex;
    justify-content: space-evenly;
}
.row {
    cursor: pointer;
    transition: all, 0.3s ease-in-out;

    &:hover {
        box-shadow: 1px 1px #959c98, 2px 2px #959c98, 3px 3px#959c98,
            4px 4px #959c98, 5px 5px #959c98, 6px 6px#959c98, 7px 7px #959c98;
        -webkit-transform: translateX(-7px);
        transform: translateX(-7px);
    }
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    border: 2px solid #e4e4e4;
    p {
        border-top: 2px solid #e4e4e4;
        font-size: 30px;
        padding-top: 30px;
        padding-bottom: 20px;
    }
}
.img_container {
    margin: 50px 100px;
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
