export type RaiseAgs<CustomError extends Error> =
  | [message?: string, options?: ErrorOptions]
  | [callback: () => CustomError];
