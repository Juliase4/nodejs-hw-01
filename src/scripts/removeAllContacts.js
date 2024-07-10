import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    const contacts = [];
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('All contacts removed successfully.');
  } catch (error) {
    console.error('Error in removing all contacts:', error);
  }
};

removeAllContacts();
