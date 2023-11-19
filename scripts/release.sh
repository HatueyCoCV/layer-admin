#!/bin/bash

# This script is used to release a new version of the project.
# It will update the version number in the package.json file,
# commit the change, create a new tag, push the changes to the
# remote repository, and publish the new version to npm.

# Get the current version number from package.json
git add .

# Commit the change with the new version number
git commit -m "Bump version number"

npm version patch

# Create a new tag using the new version number
# shellcheck disable=SC2046
git tag v$(node -p -e "require('./package.json').version")

# Push the new version to the remote repository
git push

# Publish the new version to npm
npm publish

