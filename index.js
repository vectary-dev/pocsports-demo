import { VctrApi } from "https://www.vectary.com/embed/viewer/v1/scripts/api/api.js";

async function run() {
    console.log("Example script running..");

    function errHandler(err) {
        console.log("API error", err);
    }

    async function onReady() {
        console.log("API ready..");

        try {
            const object = await vctrApi.getObjectByName("BicycleHelmet");

            const whiteTexture = { "name": "white", "map": "./white.jpg" }
            const darkRedTexture = { "name": "darkRed", "map": "./darkred.jpg" }
            const pinkTexture = { "name": "pink", "map": "./pink.jpg" }
            const greenTexture = { "name": "green", "map": "./green.jpg" }
            const blueTexture = { "name": "blue", "map": "./blue.jpg" }
            const orangeTexture = { "name": "orange", "map": "./orange.jpg" }
            const redTexture = { "name": "red", "map": "./red.jpg" }

            const whiteMaterial = await vctrApi.createMaterial(whiteTexture, object.material);
            const darkRedMaterial = await vctrApi.createMaterial(darkRedTexture, object.material);
            const pinkMaterial = await vctrApi.createMaterial(pinkTexture, object.material);
            const greenMaterial = await vctrApi.createMaterial(greenTexture, object.material);
            const blueMaterial = await vctrApi.createMaterial(blueTexture, object.material);
            const orangeMaterial = await vctrApi.createMaterial(orangeTexture, object.material);
            const redMaterial = await vctrApi.createMaterial(redTexture, object.material);

            console.log(await vctrApi.getObjects());
            document.getElementById("whiteColor").addEventListener("click", () => {
                vctrApi.setMaterial(object.name, whiteMaterial.name);
            });

            document.getElementById("darkRedColor").addEventListener("click", () => {
              vctrApi.setMaterial(object.name, darkRedMaterial.name);
            });

            document.getElementById("pinkColor").addEventListener("click", () => {
              vctrApi.setMaterial(object.name, pinkMaterial.name);
            });

            document.getElementById("greenColor").addEventListener("click", () => {
              vctrApi.setMaterial(object.name, greenMaterial.name);
            });

            document.getElementById("blueColor").addEventListener("click", () => {
                vctrApi.setMaterial(object.name, blueMaterial.name);
            });

            document.getElementById("orangeColor").addEventListener("click", () => {
              vctrApi.setMaterial(object.name, orangeMaterial.name);
            });

            document.getElementById("redColor").addEventListener("click", () => {
                vctrApi.setMaterial(object.name, redMaterial.name);
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