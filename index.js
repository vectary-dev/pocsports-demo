import { VctrApi } from "https://www.vectary.com/viewer-api/v1/api.js";

async function run() {
    console.log("Example script running..");

    function errHandler(err) {
        console.log("API error", err);
    }

    async function onReady() {
        console.log("API ready..");

        try {
            const object = await vctrApi.getObjectByName("BicycleHelmet");

            const whiteTexture = { "map": "./white.jpg" }
            const darkRedTexture = { "map": "./darkred.jpg" }
            const pinkTexture = { "map": "./pink.jpg" }
            const greenTexture = { "map": "./green.jpg" }
            const blueTexture = { "map": "./blue.jpg" }
            const orangeTexture = { "map": "./orange.jpg" }
            const redTexture = { "map": "./red.jpg" }

            console.log(await vctrApi.getObjects());
            document.getElementById("whiteColor").addEventListener("click", () => {
                vctrApi.updateMaterial(object.material, whiteTexture);
            });

            document.getElementById("darkRedColor").addEventListener("click", () => {
              vctrApi.updateMaterial(object.material, darkRedTexture);
            });

            document.getElementById("pinkColor").addEventListener("click", () => {
              vctrApi.updateMaterial(object.material, pinkTexture);
            });

            document.getElementById("greenColor").addEventListener("click", () => {
              vctrApi.updateMaterial(object.material, greenTexture);
            });

            document.getElementById("blueColor").addEventListener("click", () => {
                vctrApi.updateMaterial(object.material, blueTexture);
            });

            document.getElementById("orangeColor").addEventListener("click", () => {
              vctrApi.updateMaterial(object.material, orangeTexture);
            });

            document.getElementById("redColor").addEventListener("click", () => {
                vctrApi.updateMaterial(object.material, redTexture);
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