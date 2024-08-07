#!/bin/bash

# Define the directory to start the search from
BASE_DIR="${1:-.}"
echo "Starting search from $BASE_DIR"

# Check if ./gsed is installed
if ! command -v ./gsed &> /dev/null
then
    echo "./gsed could not be found, please install it first."
    exit 1
fi

# Find all files in the specified directory and subdirectories
find "$BASE_DIR" -type f | while read -r file; do
    # Use ./gsed to replace '../images' and '../styles' with an empty string
    # if file is not html, skip
    if ! [[ "$file" == *.html ]]; then
        continue
    fi
    ./gsed -i 's|\.\./images||g' "$file"
    ./gsed -i 's|\.\./styles||g' "$file"
    echo "Processed $file"
done

echo "Done processing all files."

