type StringifyOptions = { fallback?: string | null };
type ParseOptions<T> = { fallback?: T };

function stringifyJSON(value: unknown, options: StringifyOptions = {}): string | null {
  const { fallback = null } = options;

  try {
    return JSON.stringify(value);
  } catch (error) {
    return fallback;
  }
}

function parseJSON<T = unknown>(value: string, options: ParseOptions<T> = {}): T {
  const { fallback = null as unknown as T } = options;

  try {
    return JSON.parse(value) as T;
  } catch (error) {
    return fallback;
  }
}

export const safeJSON = {
  stringify: stringifyJSON,
  parse: parseJSON
};
