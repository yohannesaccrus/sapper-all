import { register, init, getLocaleFromNavigator } from 'svelte-i18n'

register('en', () => import('../lang/en.json'))
register('ru', () => import('../lang/ru.json'))
register('id', () => import('../lang/id.json'))

init({
	fallbackLocale : 'en',
	initialLocale  : getLocaleFromNavigator()
})