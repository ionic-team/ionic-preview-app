#!/bin/bash

echo "##### "
echo "##### test.sh"
echo "#####"


# function init {
#
# }

function run {
  npm run ionic:build --prod
}

source $(dirname $0)/utils.inc.sh
