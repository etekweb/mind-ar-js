import "./ui.scss";
import loading from "./loading.html";
import compatibility from "./compatibility.html";
import scanning from "./scanning.html";
const loadingHTML = loading.default;
const compatibilityHTML = compatibility.default;
const scanningHTML = scanning.default;
class UI {
    constructor({ uiLoading, uiScanning, uiError }) {
        if (uiLoading === 'yes') {
            this.loadingModal = this._loadHTML(loadingHTML);
        }
        else if (uiLoading !== 'no') {
            this.loadingModal = document.querySelector(uiLoading);
        }
        if (uiError === 'yes') {
            this.compatibilityModal = this._loadHTML(compatibilityHTML);
        }
        else if (uiError !== 'no') {
            this.compatibilityModal = document.querySelector(uiError);
        }
        if (uiScanning === 'yes') {
            this.scanningMask = this._loadHTML(scanningHTML);
        }
        else if (uiScanning !== 'no') {
            this.scanningMask = document.querySelector(uiScanning);
        }
        this.hideLoading();
        this.hideCompatibility();
        this.hideScanning();
    }
    showLoading() {
        if (!this.loadingModal)
            return;
        this.loadingModal.classList.remove("hidden");
    }
    hideLoading() {
        if (!this.loadingModal)
            return;
        this.loadingModal.classList.add("hidden");
    }
    showCompatibility() {
        if (!this.compatibilityModal)
            return;
        this.compatibilityModal.classList.remove("hidden");
    }
    hideCompatibility() {
        if (!this.compatibilityModal)
            return;
        this.compatibilityModal.classList.add("hidden");
    }
    showScanning() {
        if (!this.scanningMask)
            return;
        this.scanningMask.classList.remove("hidden");
    }
    hideScanning() {
        if (!this.scanningMask)
            return;
        this.scanningMask.classList.add("hidden");
    }
    _loadHTML(html) {
        const e = document.createElement('template');
        e.innerHTML = html.trim();
        const rootNode = e.content.firstChild;
        document.getElementsByTagName('body')[0].appendChild(rootNode);
        return rootNode;
    }
}
export { UI };
export default {
    UI
};
