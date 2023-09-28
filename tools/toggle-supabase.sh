#!/usr/bin/env bash

if ! command -v supabase &> /dev/null; then
    echo 'Missing "supabase" cli!!'
    exit 0
fi

supabase "$([ ! supabase status &> /dev/null ] && echo start || echo stop)"
