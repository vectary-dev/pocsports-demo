import { VctrApi } from "https://www.vectary.com/embed/viewer/v1/scripts/api/api.js";

async function run() {
    console.log("Example script running..");

    function errHandler(err) {
        console.log("API error", err);
    }

    async function onReady() {
        console.log("API ready..");

        try {            
            const changeTexture = async (texture) => {
                const object = await vctrApi.getObjectByName("BicycleHelmet");
                await vctrApi.updateMaterial(object.material, texture);
            }

            console.log(await vctrApi.getObjects());
            document.getElementById("whiteColor").addEventListener("click", () => {
                const texture = { "map": "./Black&Lable.jpg" }
                changeTexture(texture);
            });

            document.getElementById("blueColor").addEventListener("click", () => {
                const texture = { "map": "./Blue&Lable.jpg" }
                changeTexture(texture);
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