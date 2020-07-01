import express from "express";
const router = express.Router();

/* TODO
 * Add more classifications options
 * - /gif/classify
 * - /video/classify
 * - /text/classify
*/

router.get("/image/classify", async (req, res) => {
  try {
    const { url } = req.query;
    const result = await nsfwModel.classify(url);
    res.json(result)
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Ups... Something went wrong! Please contact the app administrator or see at the server logs for the error."
    });
  }
});

export default router;
