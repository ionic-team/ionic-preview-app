#!/bin/bash

echo "##### "
echo "##### test.sh"
echo "#####"


# function init {
#
# }

function run {

  ../node_modules/.bin/ionic-app-scripts build --prod
}

source $(dirname $0)/utils.inc.sh
