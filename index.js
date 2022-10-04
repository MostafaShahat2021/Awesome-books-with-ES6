import Library from './modules/functions.js';
import navigation from './modules/navigation.js';
import { DateTime } from './modules/luxon.js';

const dt = DateTime.fromObject({ day: 22, hour: 12 }, { zone: 'America/Los_Angeles', numberingSystem: 'beng' });
const datestring = dt.toLocaleString(DateTime.DATETIME_MED);
const date = document.querySelector('.our-date');
date.innerHTML = `${datestring}`;
const awesomeBooks = new Library();
awesomeBooks.addBook();
awesomeBooks.renderBooks();
navigation();