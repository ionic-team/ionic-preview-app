#!/bin/bash

echo "##### "
echo "##### test.sh"
echo "#####"


# function init {
#
# }

function run {

  npm run build --dev
}

source $(dirname $0)/utils.inc.sh
