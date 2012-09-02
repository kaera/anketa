#!/usr/bin/env bash

usage() {
cat << EOF
Usage: printargs.sh [OPTIONS] [ARGUMENTS]
  Print the number of arguments.

OPTIONS:
  -h      print help message
  -m MSG  custom message
  -v      verbose mode

Examples:
  printargs.sh a b c
  printargs.sh -m 'Arguments count: ' a b c
  printargs.sh -v -m 'Arguments count: ' a b c
  printargs.sh -h

EOF
}

while getopts 'hm:v' OPTION
do
    case $OPTION in
        h)
            usage
            exit 1;;
        m)
            MESSAGE=$OPTARG;;
        v)
            VERBOSE=1;;
    esac
done

COUNT=0

[ $VERBOSE ] && shift
[ $MESSAGE ] && shift 2

for ARG in $@; do
    [ $VERBOSE ] && echo $ARG
    let COUNT+=1
done

if [[ $MESSAGE != '' ]]; then
    echo $MESSAGE
fi

echo $COUNT
