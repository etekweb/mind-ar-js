import cv from "../libs/opencv.js";
let initialized = false;
const _cv = {};
const waitResolves = [];
const waitCV = async () => {
    if (initialized)
        return true;
    return new Promise((resolve, reject) => {
        waitResolves.push(resolve);
    });
};
cv.then((target) => {
    initialized = true;
    Object.assign(_cv, target);
    waitResolves.forEach((resolve) => {
        resolve();
    });
});
export { _cv as cv };
export { waitCV };
export default {
    cv: _cv,
    waitCV
};
