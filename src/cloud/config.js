const config = {
  env: {
    nsfw_model_url: process.env.TF_MODEL_URL,
    nsfw_model_shape_size: process.env.TF_MODEL_INPUT_SHAPE_SIZE
  },
}

export default config;
