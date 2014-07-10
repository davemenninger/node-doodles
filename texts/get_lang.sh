#!/bin/bash

numbers=("503" "540" "641" "2435" "3027" "3282" "5615" "7277" "27826" "28096" "28314" "33547" "38208") 

for n in "${numbers[@]}"; do
  url="http://www.gutenberg.org/ebooks/$n.txt.utf-8"
  wget "$url"
done
