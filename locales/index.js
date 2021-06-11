import en from './en.json'
import es from './es.json'
import jp from './jp.json'
import kr from './kr.json'
import ru from './ru.json'

export default {
  locales: ['en', 'jp', 'kr', 'ru', 'es'],
  defaultLocale: 'en',
  vueI18n: {
    fallbackLocale: 'en',
    messages: {
      en,
      jp,
      kr,
      ru,
      es
    }
  }
}
