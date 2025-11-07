#!/bin/bash

BRANCH_NAME="chore/refactor-project-structure"

git checkout -b "$BRANCH_NAME" 2>/dev/null || git checkout "$BRANCH_NAME"
git add .
git commit -m "chore: add docs, docker-compose and CI workflows; propose project structure"
git push -u origin "$BRANCH_NAME"

echo "✅ Branch '$BRANCH_NAME' criada e enviada com sucesso"