import { createContext, useContext, type ReactNode } from 'react';
import { DEFAULT_LOCALE, defaultMessages, type Messages } from './messages';

type I18nContextValue = {
  locale: string;
  messages: Messages;
};

const I18nContext = createContext<I18nContextValue>({
  locale: DEFAULT_LOCALE,
  messages: defaultMessages,
});

type TranslationProviderProps = {
  children: ReactNode;
  locale: string;
  messages: Messages;
};

export function TranslationProvider({ children, locale, messages }: TranslationProviderProps): JSX.Element {
  return <I18nContext.Provider value={{ locale, messages }}>{children}</I18nContext.Provider>;
}

type Namespace = keyof Messages;

export function useTranslations(): Messages;
export function useTranslations<K extends Namespace>(namespace: K): Messages[K];
export function useTranslations(namespace?: Namespace) {
  const { messages } = useContext(I18nContext);

  if (!namespace) {
    return messages;
  }

  return messages[namespace] ?? defaultMessages[namespace];
}

export function useLocale(): string {
  const { locale } = useContext(I18nContext);

  return locale;
}
