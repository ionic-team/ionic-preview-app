# Ionic 2 Preview App

This app accompanies the Ionic 2 component documentation. 

[[LIVE DEMO]](http://ionicframework.com/docs/v2/components/)

### Installation & Development

1. clone this repo: `git clone git@github.com:driftyco/ionic-preview-app.git`
2. `cd ionic-preview-app`
3. `npm install`
4. make sure [production mode](https://github.com/driftyco/ionic-preview-app/blob/master/app/app.ts#L13) is set to false
5. run `ionic serve` from a terminal


### Updating ionic-site

- Set [production mode](https://github.com/driftyco/ionic-preview-app/blob/master/app/app.ts#L13) to true
- Rebuild app
- Copy the contents of this entire repo to `ionic-site/dist/preview-app/` (`cp -R * ../path/to/ionic-site/dist/preview-app/`)
