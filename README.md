# Ionic 2 Preview App

This app accompanies the Ionic 2 component documentation. 

[[LIVE DEMO]](http://ionicframework.com/docs/v2/components/)

### Installation & Development

```bash
git clone git@github.com:driftyco/ionic-preview-app.git
cd ionic-preview-app
npm install
ionic serve
```

Note: [production mode](https://github.com/driftyco/ionic-preview-app/blob/master/app/app.ts#L13) should be false for local development


### Updating ionic-site

- Set [production mode](https://github.com/driftyco/ionic-preview-app/blob/master/app/app.ts#L13) to true
- Rebuild app
- Copy the contents of this entire repo to `ionic-site/dist/preview-app/` (`cp -R * ../path/to/ionic-site/dist/preview-app/`)
