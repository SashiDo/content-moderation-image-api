import "regenerator-runtime/runtime.js";

// We are using this model in lots of functions
// it will be much easier that way :)
import nsfwModel from "./ml_models/nsfw_model";
global.nsfwModel = nsfwModel;

import app from "./app";

import "./functions";

export { app };
