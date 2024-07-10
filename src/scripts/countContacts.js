import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const contactsData = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(contactsData);
    return contacts.length;
  } catch (error) {
    console.error('Error reading contacts data:', error);
    return 0;
  }
};

const testCountContacts = async () => {
  console.log(await countContacts());
};

testCountContacts();
