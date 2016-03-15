#!/bin/bash

echo "##### "
echo "##### test.sh"
echo "#####"


# function init {
#
# }

function run {
  ../node_modules/.bin/gulp build
}

source $(dirname $0)/utils.inc.sh
