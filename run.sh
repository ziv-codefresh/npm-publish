#!/bin/bash

tmpdir=$PWD
DIR=${1:-$tmpdir}
cd $DIR
node bin/npm-publish.js