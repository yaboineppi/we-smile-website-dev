#!/bin/bash

# Specify the GitHub repository URL
repo_url="https://github.com/ndiams21/we-smile-website-dev"

# Specify the files you want to download
files=("admin.html" "register.html" "script_register.html" "style_register.css")

# Specify the destination directory where files will be saved
destination_dir="C:/Users/User/Downloads"

# Create the destination directory if it doesn't exist
mkdir -p "$destination_dir"

# Loop through the files and download each one
for file in "${files[@]}"; do
    file_url="$repo_url/$file"
    output_path="$destination_dir/$file"
    echo "Downloading $file..."
    curl -LJO "$file_url" -o "$output_path"
done

echo "Download complete!"
