import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    // Зчитування існуючих контактів з файлу
    let contacts = [];
    try {
      const data = await fs.readFile(PATH_DB, 'utf-8');
      contacts = JSON.parse(data);
    } catch (err) {
      if (err.code !== 'ENOENT') throw err;
    }

    // Генерація нового контакту
    const newContact = createFakeContact();
    contacts.push(newContact);

    // Запис оновленого масиву контактів у файл
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log('Added one new contact and updated the database.');
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

// Виклик функції для додавання одного контакту
addOneContact();
