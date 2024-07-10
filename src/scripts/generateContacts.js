import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    // Зчитування існуючих контактів з файлу
    let contacts = [];
    try {
      const data = await fs.readFile(PATH_DB, 'utf-8');
      contacts = JSON.parse(data);
    } catch (err) {
      if (err.code !== 'ENOENT') throw err;
    }

    // Генерація нових контактів
    for (let i = 0; i < number; i++) {
      const newContact = createFakeContact();
      contacts.push(newContact);
    }

    // Запис оновленого масиву контактів у файл
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log(`Generated ${number} new contacts and added to the database.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

// Виклик функції для генерації контактів
generateContacts(4);
