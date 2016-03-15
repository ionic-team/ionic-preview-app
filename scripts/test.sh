#!/bin/bash

echo "##### "
echo "##### test.sh"
echo "#####"


function init {

}

function run {
  gulp build
}

source $(dirname $0)/../utils.sh.inc
