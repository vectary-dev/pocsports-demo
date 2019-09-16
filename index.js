import { VctrApi } from "https://www.vectary.com/viewer-api/v1/api.js";

async function run() {
    console.log("Example script running..");

    function errHandler(err) {
        console.log("API error", err);
    }

    async function onReady() {
        console.log("API ready..");

        try {
            const object = await vctrApi.getObjectByName("Outside");
            const insideObject = await vctrApi.getObjectByName("Inside");
            const logoObject = await vctrApi.getObjectByName("Logos");

            const blackColor = { "color": "#000000" }
            const whiteColor = { "color": "#eff8f9" }
            const darkRedColor = { "color": "#c02739" }
            const pinkColor = { "color": "#b33a8b" }
            const greenColor = { "color": "#8fb92d" }
            const blueColor = { "color": "#253b64" }
            const orangeColor = { "color": "#ff8f63" }
            const redColor = { "color": "#fe5136" }

            console.log(await vctrApi.getObjects());
            document.getElementById("whiteColor").addEventListener("click", () => {
                vctrApi.updateMaterial(object.material, whiteColor);
                vctrApi.updateMaterial(insideObject.material, blackColor);
                vctrApi.updateMaterial(logoObject.material, blueColor);
            });

            document.getElementById("darkRedColor").addEventListener("click", () => {
                vctrApi.updateMaterial(object.material, darkRedColor);
                vctrApi.updateMaterial(insideObject.material, blackColor);
                vctrApi.updateMaterial(logoObject.material, whiteColor);
            });

            document.getElementById("pinkColor").addEventListener("click", () => {
                vctrApi.updateMaterial(object.material, pinkColor);
                vctrApi.updateMaterial(insideObject.material, blackColor);
                vctrApi.updateMaterial(logoObject.material, whiteColor);
            });

            document.getElementById("greenColor").addEventListener("click", () => {
                vctrApi.updateMaterial(object.material, greenColor);
                vctrApi.updateMaterial(insideObject.material, whiteColor);
                vctrApi.updateMaterial(logoObject.material, whiteColor);
            });

            document.getElementById("blueColor").addEventListener("click", () => {
                vctrApi.updateMaterial(object.material, blueColor);
                vctrApi.updateMaterial(insideObject.material, blackColor);
                vctrApi.updateMaterial(logoObject.material, whiteColor);
            });

            document.getElementById("orangeColor").addEventListener("click", () => {
                vctrApi.updateMaterial(object.material, orangeColor);
                vctrApi.updateMaterial(insideObject.material, whiteColor);
                vctrApi.updateMaterial(logoObject.material, whiteColor);
            });

            document.getElementById("redColor").addEventListener("click", () => {
                vctrApi.updateMaterial(object.material, redColor);
                vctrApi.updateMaterial(insideObject.material, blackColor);
                vctrApi.updateMaterial(logoObject.material, whiteColor);
            });

        } catch (e) {
            errHandler(e);
        }

    }
    const vctrApi = new VctrApi("93c40814-2e15-4df7-a31b-698971a88441", errHandler);
    try {
        await vctrApi.init();
        onReady();
    } catch (e) {
        errHandler(e);
    }
}

run();