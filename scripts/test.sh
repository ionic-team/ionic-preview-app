#!/bin/bash

echo "##### "
echo "##### test.sh"
echo "#####"


# function init {
#
# }

function run {

  npm run build
}

source $(dirname $0)/utils.inc.sh
