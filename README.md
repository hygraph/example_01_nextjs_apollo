# Server-side rendered App with Next.js, Apollo and GraphCMS

🚀 **[Live Demo](https://vinylbase.now.sh)**

This example shows how to build a small music blog with [Next.js](https://github.com/zeit/next.js/), [Apollo](http://www.apollodata.com/) and [GraphCMS](https://graphcms.com).

To connect your app you have to setup a new GraphCMS project and create the required content models as described [here](https://graphcms.com/docs/examples/Server-side_rendered_app_with_nextjs_and_apollo/).

To get this information, log into GraphCMS and go to your project settings.

![Screenshot](docs/settings.png)

Copy the Endpoint URL for the `Simple Endpoint` from the `ENDPOINTS` section. Insert the URL into the variable `GRAPHCMS_API` in the file `lib/initClient`.

## Installation

`npm install`

## Starting

`npm run start`

## Deployment

Install now:

`npm install -g now`

Deploy the app:

`now`
