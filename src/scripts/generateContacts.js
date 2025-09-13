import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {
  const contacts = await readContacts();
  const newContacts = faker.helpers.multiple(createFakeContact, {
    count: number,
  });
  await writeContacts([...contacts, ...newContacts]);
};

generateContacts(5);
