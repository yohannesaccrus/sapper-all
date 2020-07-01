import * as sapper from '@sapper/app';
import './services/i18n';

sapper.start({
	target: document.querySelector('#sapper')
});