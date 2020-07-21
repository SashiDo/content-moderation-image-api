## Ready-to-use Node.JS REST API for classification of indecent images.

Machine Learning has already matured to the point where it should be a vital part of projects of all sizes. Advances in computer processing power, storage, data tools, web, etc made machine learning technologies to become more and more affordable. This and the constant strive for innovation, led SashiDo's team to create a **fully-functional Content Moderation Service with React based Admin Panel** built with Open-Source tools and libraries only. The result is a simple and elegant product, which is easy to maintain, can be integrated into any Node.JS project and hosted anywhere. One at a time, we will share all three layers of the Content moderation service - API, Automation Engine and beautiful Admin Panel. The content moderation REST API is just the first chunk.
<br />

## Examples & Demos

These are the examples and the demos of what you'll have in your tools set after you deploy and integrate this repo in your projects. We've prepared examples only for some of the classes. For the other classes we think you should experiment by yourself ... `you know what I mean ;)`.

<table align="center">
  <tbody>
    <tr>
      <th align="center">Image Source</th>
      <th align="center">Image Source</th>
      <th align="center">Image Source</th>
    </tr>
    <tr>
      <td align="center">
        <a
          href="https://nsfw-demo.sashido.io/api/image/classify?url=https://nsfw-demo.sashido.io/neutral.png">
          <image
            src="https://nsfw-demo.sashido.io/neutral.png" />
        </a>
      </td>
      <td align="center">
        <a
          href="https://nsfw-demo.sashido.io/api/image/classify?url=https://nsfw-demo.sashido.io/sexy.png">
          <image
            src="https://nsfw-demo.sashido.io/sexy.png" />
        </a>
      </td>
      <td align="center">
        <a
          href="https://nsfw-demo.sashido.io/api/image/classify?url=https://nsfw-demo.sashido.io/drawing.png">
          <image
            src="https://nsfw-demo.sashido.io/drawing.png" />
        </a>
      </td>
    </tr>
    <tr>
      <th align="center">Classification Result</th>
      <th align="center">Classification Result</th>
      <th align="center">Classification Result</th>
    </tr>
    <tr>
      <td>
<pre>[{
  "className": "Neutral",
  "probability": 0.93821
}, {
  "className": "Drawing",
  "probability": 0.05473
}, {
  "className": "Sexy",
  "probability": 0.00532
}, {
  "className": "Hentai",
  "probability": 0.00087
}, {
  "className": "Porn",
  "probability": 0.00085
}]</pre>
      </td>
      <td>
<pre>[{
  "className": "Sexy",
  "probability": 0.99394
}, {
  "className": "Neutral",
  "probability": 0.00432
}, {
  "className": "Porn",
  "probability": 0.00164
}, {
  "className": "Drawing",
  "probability": 0.00006
}, {
  "className": "Hentai",
  "probability": 0.00001
}]</pre>
      </td>
      <td>
<pre>[{
  "className": "Drawing",
  "probability": 0.96063
}, {
  "className": "Neutral",
  "probability": 0.03902
}, {
  "className": "Hentai",
  "probability": 0.00032
}, {
  "className": "Sexy",
  "probability": 0.00001
}, {
  "className": "Porn",
  "probability": 0.00005
}]</pre>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://nsfw-demo.sashido.io/api/image/classify?url=https://nsfw-demo.sashido.io/neutral.png">Neutral Demo</>
      </td>
      <td align="center"><a href="https://nsfw-demo.sashido.io/api/image/classify?url=https://nsfw-demo.sashido.io/sexy.png">Sexy Demo</>
      </td>
      <td align="center"><a href="https://nsfw-demo.sashido.io/api/image/classify?url=https://nsfw-demo.sashido.io/drawing.png">Drawing Demo</>
      </td>
    </tr>
  </tbody>
</table>
<br />

## How it works
This REST API is built in Node.JS with Mongo DB and Parse Server. Classifying images may be invoked from an Express route or a Cloud Code function ( Parse Server lovers, you're welcome :) )

We have implemented [NSFW.JS](https://github.com/infinitered/nsfwjs) classification, which uses [TensorFlowJS](https://www.tensorflow.org/js) pretrained models.

## Classification map

Pass the API an image and receive a JSON response, which holds the predictions on how likely this image falls into each of the following classes:

   *Drawing* - Harmless art, or picture of art<br/>
   *Hentai* - Pornographic art, unsuitable for most work environments<br/>
   *Neutral* - General, inoffensive content<br/>
   *Porn* - Indecent content and actions, often involving genitalia<br/>
   *Sexy* - Unseemly provocative content, can include nipples<br/>


# File Structure

   The REST API is built on top of Parse Server. You can use it in a standard Express app, but keep in mind that the file structure of the repo is Parse specific. The code is organized in a ```src``` folder and ```src/cloud/main.js``` is the root file for the service. For more information about how the project is building on the Local env and in Production, take a look at the [package.json](https://github.com/SashiDo/content-moderation-image-api/blob/master/package.json#L14-L20)

# Installation & Configuration

### Requirements:

- Node.JS >= 10.2.1

- Mongo DB

### Download the project

Clone the repo:

```
git clone https://github.com/SashiDo/content-moderation-image-api.git
cd content-moderation-image-api
```

### Set Environment Variables

Copy the env.example to .env file and set the environment variables for your local environment with your favorite editor:

```
cp env.example .env
```

Place your MongoDB URI. If your app is hosted at SashiDo, you can use the database URI of your SashiDo project. Find the connection string from the app's `Dashboard -> App -> App Settings -> Security & Keys`

### Install Dependencies

As this is a full-featured example, all dependencies are present to the packege.json. You only need to run:
```
npm install
```

### Start the project

```
npm run dev
```

**If everything is okay you should see an output similar to this one**:

```
[nodemon] 2.0.4
...
[nodemon] starting `node index index.js`
✨  Built in 2.55s.
node-pre-gyp ...
...
Running on http://localhost:1337
⠙ Building index.js...The NSFW Model was loaded successfuly!
✨  Built in 16.41s.
```

If you see the output above, you are ready to play with the API :)

# API Usage Examples

The project contains two approaches for classifying images - for direct communication through the Parse SDK using Cloud Code and from an Express route.

## Classify from the Express endpoint

```bash
curl http://localhost:1337/api/image/classify?url=https://nsfw-demo.sashido.io/sexy.png
```

## Classify from a Cloud Code function via Parse SDKs

You can invoke the **nsfwImageClassify function** from the client-side or using the Parse Server REST API:

### Android SDK Example

```Java
HashMap<String, String> params = new HashMap<String, String>();
params.put("url", "https://nsfw-demo.sashido.io/sexy.png");
ParseCloud.callFunctionInBackground("nsfwImageClassify", params, new FunctionCallback<Object>() {
  void done(Object predictions, ParseException e) {
    if (e == null) {
      // prediction
    }
  }
});
```

More information about how to work with the Android SDK can be found in the [official docs](https://docs.parseplatform.org/android/guide/#use-cloud-code).



### iOS SDK Example

```Swift
PFCloud.callFunctionInBackground("nsfwImageClassify", withParameters: ["url":"https://nsfw-demo.sashido.io/sexy.png"]) {
  (predictions, error) in
  if !error {
    // prediction
  }
}
```

More information about how to work with the Parse iOS SDK can be found in the [official docs](https://docs.parseplatform.org/ios/guide/#use-cloud-code).


### REST API Example

```
curl -X POST \
  -H "X-Parse-Application-Id: myAppId" \
  -H "X-Parse-REST-API-Key: myRestKey" \
  -H "Content-Type: application/json" \
  -d '{ "url": "https://nsfw-demo.sashido.io/sexy.png" }' \
  http://localhost:1337/1/functions/nsfwImageClassify
```

More information about how to work with the Parse REST API can be found in the [official docs](http://docs.parseplatform.org/rest/guide/#cloud-code).


   SashiDo users can test all Cloud Code functions from our super-friendly [API Console](https://blog.sashido.io/introducing-the-api-console/) that’s built in the Dashboard. Moreover, it gives you the option to      export ay request to cURL.


# Deployment on Production

## 1. Environment Variables Setup

For production, you need to set the **NSFW model URL** and the **NSFW Model Shape size**. SashiDo stores three NSFW models, each one you can set easily using the following URLs:


| Model URL                                                   | Size   | Shape Size | Accuracy |
| :---------------------------------------------------------- | :----: | :--------: | :------: |
| https://ml.files-sashido.cloud/models/nsfw_inception_v3/    | Huge   | 299        | 93%      |
| https://ml.files-sashido.cloud/models/nsfw_mobilenet_v2/90/ | 2.6 MB | 224        | 90%      |
| https://ml.files-sashido.cloud/models/nsfw_mobilenet_v2/93/ | 4.2 MB | 224        | 93%      |

**Please note** *the Inception_v3 model used for this projects has high RAM/CPU consumption. While the two mobilenet models are far more lightweight.*

### Choose the model and set the following environment variables for your live server:

```sh
TF_MODEL_URL = MODEL_URL
TF_MODEL_INPUT_SHAPE_SIZE = MODEL_SHAPE_SIZE

# Example
TF_MODEL_URL="https://ml.files-sashido.cloud/models/nsfw_mobilenet_v2/93/"
TF_MODEL_INPUT_SHAPE_SIZE=224
```

## 2. Code Deployment

### Deployment on SashiDo

This is probably the simplest way to deploy the code in production. At SashiDo we have implemented an automatic git deployment process following the [The Twelve Factor App](https://12factor.net/) principle.

Connect your SashiDo app with GitHub, check [here](https://blog.sashido.io/how-to-start-using-github-with-sashido-for-beginners/) for more details how to start using GitHub with SashiDo.

Next, the code can be easily deployed with two simple commands for adding a remote branch and pushing the code.

```sh
git remote add production git@github.com:parsegroundapps/<your-pg-app-your-app-repo>.git
git push -f production master
```

### Deployment on other providers

Basically, you need to follow the same steps as for SashiDo Deployment. Simply follow the requirements of your hosting provider when setting environment variables for production and deploying the code.

# What's next?

   To get a further insight into the project and what inspired us to build this service, check out our blog post on the topic here.

   The REST API is a part of the Content Moderation service, which also offers:

   - [**Automation Engine**](https://github.com/SashiDo/content-moderation-automations) that will automatically delete inappropriate images. Set the params and reduce manual work to the    bare minimum. - Coming Soon!

   - [**Admin Panel**](https://github.com/SashiDo/content-moderation-application) where all images in need of moderation are stacked up in a beautiful interface, which allows you to make decisions with just a click. - Coming Soon!
# Contribution

   Thanks for looking at this section. We’re open to any cool ideas, so if you have one and are willing to share - fork the repo, apply changes and open a pull request. :)

# License

Copyright © 2020, CloudStrap AD. See [LICENSE](https://github.com/SashiDo/content-moderation-image-api/blob/master/LICENSE) for further details.
