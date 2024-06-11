import axios from "axios";

import apiEndpoints from "@/constants/apiEndpoints";

export function saveImageToServer(formData) {
    return axios.post(apiEndpoints.user.saveImage, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}

export function deleteImage() {
    return axios.post(apiEndpoints.user.deleteImage, { withCredentials: true });
}
export function getUserData() {
    return axios.get(apiEndpoints.user.getUserData);
}
export function callBackOrder(params = {}) {
    return axios.post(apiEndpoints.admin.callBack, params);
}

export function saveReport(params = {}) {
    return axios.post(apiEndpoints.reports.saveReport, params);
}
