
async function asyncLoadModel() {
    model_url = "https://raw.githubusercontent.com/ultramenlev1/tensorflow-fire-detec/main/model.json";
model = await tf.loadGraphModel(model_url);
return model
}