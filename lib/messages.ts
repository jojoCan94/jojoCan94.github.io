import enMessages from '../messages/en.json';

export const SUPPORTED_LOCALES = ['en', 'it'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export type Messages = typeof enMessages;

export const defaultMessages: Messages = enMessages;

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Array<infer U>
    ? Array<U>
    : T[K] extends Record<string, unknown>
      ? DeepPartial<T[K]>
      : T[K];
};

function mergeMessages(base: Messages, overrides?: DeepPartial<Messages>): Messages {
  if (!overrides) {
    return base;
  }

  const merge = (baseValue: unknown, overrideValue: unknown): unknown => {
    if (overrideValue === undefined) {
      return baseValue;
    }

    if (Array.isArray(baseValue)) {
      return Array.isArray(overrideValue) ? overrideValue : baseValue;
    }

    if (
      baseValue !== null &&
      typeof baseValue === 'object' &&
      !Array.isArray(baseValue) &&
      overrideValue !== null &&
      typeof overrideValue === 'object' &&
      !Array.isArray(overrideValue)
    ) {
      const result: Record<string, unknown> = { ...baseValue };

      for (const [key, value] of Object.entries(overrideValue as Record<string, unknown>)) {
        result[key] = merge((baseValue as Record<string, unknown>)[key], value);
      }

      return result;
    }

    return overrideValue;
  };

  return merge(base, overrides) as Messages;
}

export async function loadMessages(locale: string): Promise<Messages> {
  if (!SUPPORTED_LOCALES.includes(locale as Locale)) {
    return defaultMessages;
  }

  if (locale === DEFAULT_LOCALE) {
    return defaultMessages;
  }

  try {
    const { default: localeMessages } = await import(`../messages/${locale}.json`);

    return mergeMessages(defaultMessages, localeMessages as DeepPartial<Messages>);
  } catch (error) {
    return defaultMessages;
  }
}
