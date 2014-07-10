#!/bin/bash

numbers=("503" "540" "641" "2435" "3027" "3282" "5615" "7277" "27826" "28096" "28314" "33547" "38208") 

for n in "${numbers[@]}"; do
  file="$n.txt.utf-8"
  newfile="$n.cropped.txt"
  tail -n +23 "$file" | head -n -359 | tr '\n\r' ' ' > "$newfile"
  cat "$n.cropped.txt" >> "onebigfile.txt"
done
