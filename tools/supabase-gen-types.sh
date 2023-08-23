#!/bin/bash

# NOTE: Should get types from dev

out_path=src/types/database/database.ts
omit_non_ts_lines="/ ! | grep -v '> '"
pnpm __ supabase gen types typescript --local --debug $omit_non_ts_lines > $out_path
