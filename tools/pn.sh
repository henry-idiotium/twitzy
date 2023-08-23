#!/bin/bash

# guard check secret manager tool
if ! command -v doppler &> /dev/null; then
  printf '\n Error: Doppler not found! Please install it to continue.\n\n'
fi

doppler run -- pnpm exec $@
