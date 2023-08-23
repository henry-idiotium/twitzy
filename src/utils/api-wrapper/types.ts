/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextRequest } from 'next/server';
import { SupabaseClient } from '@supabase/supabase-js';

import { Database } from '@/types';

type CallbackResponse = Response | void;
type LooselyPromise = Promise<CallbackResponse> | CallbackResponse;

type BaseApiWrapperFunc<
  AdditionalLogicArg extends unknown[] = [],
  _BaseLogicArgs extends unknown[] = [request: Request | NextRequest, body?: any],
  _LogicArg extends unknown[] = [..._BaseLogicArgs, ...AdditionalLogicArg],
> =
  //prettier-ignore
  (...args: [callback: (...args: _LogicArg) => LooselyPromise])
  => (...args: _LogicArg)
  => LooselyPromise;

export type ApiWrapperFunc = BaseApiWrapperFunc;
export type AuthApiWrapperFunc = BaseApiWrapperFunc<[supabase: SupabaseClient<Database>]>;
