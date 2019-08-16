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
            const blackTexture = { "name": "black", "map": "./Black&Lable.jpg" }
            const blueTexture = { "name": "blue", "map": "./Blue&Lable.jpg" }
            const blackMaterial = await vctrApi.createMaterial(blackTexture, object.material);
            const blueMaterial = await vctrApi.createMaterial(blueTexture, object.material);

            console.log(await vctrApi.getObjects());
            document.getElementById("whiteColor").addEventListener("click", () => {
                vctrApi.setMaterial(object.name, blackMaterial.name);
            });

            document.getElementById("blueColor").addEventListener("click", () => {
                vctrApi.setMaterial(object.name, blueMaterial.name);
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