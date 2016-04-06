#!/bin/bash

echo "##### "
echo "##### ci/deploy.sh"
echo "#####"


function init {
  SITE_PATH=$(readJsonProp "config.json" "sitePath")
  DEMO_DEST=$(readJsonProp "config.json" "demoDest")
  cd ..
  export BASE_DIR=$PWD
  SITE_DIR=$BASE_DIR/$SITE_PATH
}

function run {

  cd ./scripts
  ./git/clone.sh --repository="driftyco/ionic-site" \
    --directory="$SITE_DIR" \
    --branch="master"
  cd ..
  VERSION=$(readJsonProp "package.json" "version")

  # process new docs
  echo "Copying www to $DEMO_DEST"
  rm -R $DEMO_DEST/www
  cp -R www $DEMO_DEST

  # CD in to the site dir to commit updated docs
  cd $SITE_DIR

  CHANGES=$(git status --porcelain)

  # if no changes, don't commit
  if [[ "$CHANGES" == "" ]]; then
  #if [[ true ]]; then
    echo "-- No changes detected for the following commit, docs not updated."
    echo "https://github.com/driftyco/$CIRCLE_PROJECT_REPONAME/commit/$CIRCLE_SHA1"
  else
    git config --global user.email "hi@ionicframework.com"
    git config --global user.name "Ionitron"
    git add -A
    git commit -am "Automated build of driftyco/$CIRCLE_PROJECT_REPONAME@$CIRCLE_SHA1"
    git push origin master

    echo "-- Updated docs for $VERSION_NAME succesfully!"
  fi
}

source $(dirname $0)/utils.inc.sh
