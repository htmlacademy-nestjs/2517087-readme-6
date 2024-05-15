export const DEFAULT_PORT = 3000;

export const ENVIRONMENTS = ['development', 'production'] as const;

export type EnvironmentType = typeof ENVIRONMENTS[number];
