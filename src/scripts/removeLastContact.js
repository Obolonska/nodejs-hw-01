import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('Contacts are empty');
      return;
    }

    const removedContact = contacts.pop();
    await writeContacts(contacts);

    console.log('Removed last contact:', removedContact);
    console.log('Total contacts now:', contacts.length);
  } catch (error) {
    console.error('Error removing contact:', error.message);
  }
};

removeLastContact();
