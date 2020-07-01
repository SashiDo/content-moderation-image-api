/*
 * Simple Cloud Code Example
 * More information how to use it directly via the Parse SDKs or cURL
 * - https://docs.parseplatform.org/cloudcode/guide/#cloud-functions
 *
 * You can test this easly with the API Console in the SashiDo Dashboard
 *
 * Tutorial how:
 * - https://blog.sashido.io/introducing-the-api-console/#callyourcloudcodefunctions
 */

Parse.Cloud.define("nsfwImageClassify", async (req) => {
  try {
    // url of the image we want to classify
    const { url } = req.params;

    const result = await nsfwModel.classify(url);
    return result;
  } catch (err) {
    console.error(err);
    return { error: "Something went wrong" };
  }
});
