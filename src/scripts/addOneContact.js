import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const contacts = await readContacts();
  const newContacts = faker.helpers.multiple(createFakeContact, { count: 1 });
  await writeContacts([...contacts, ...newContacts]);
};

addOneContact();
