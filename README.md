# Ionic 2 Preview App

This app accompanies the Ionic 2 component documentation. 

[[LIVE DEMO]](http://ionicframework.com/docs/v2/components/)

### Installation & Development

1. clone this repo: `git clone git@github.com:driftyco/ionic-preview-app.git`
2. `cd ionic-preview-app`
3. `npm install`
4. run `ionic serve` from a terminal


### Running locally on the site

1. Clone `ionic-site` as a sibling directory to this app: `git clone git@github.com:driftyco/ionic-site.git`
2. Follow the steps for running `ionic-site` locally: [https://github.com/driftyco/ionic-site#local-build](https://github.com/driftyco/ionic-site#local-build)
3. Follow the steps for running this repo: [https://github.com/driftyco/ionic-preview-app#installation--development](https://github.com/driftyco/ionic-preview-app#installation--development)
4. Make any changes you want to this project and then build/serve it
5. Copy the www folder to `ionic-site/dist/preview-app/`: `cp -R www ../ionic-site/dist/preview-app`
6. If the site doesn't update you may need to restart `gulp watch`


### Updating ionic-site

`ionic-site` will automatically update on every commit to the master branch of this repo.
