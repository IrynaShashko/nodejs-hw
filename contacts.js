const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");
const updateContacts = async (contacts) =>
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

const listContacts = async () => {
  const result = await fs.readFile(contactsPath);
  return JSON.parse(result);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contactId = String(id);
  const result = contacts.find((item) => item.id === id);
  return result || null;
};

const removeContact = async (contactId) => {
  const contacts = await getAll();
  const contactId = String(id);
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await updateContacts(contacts);
  return result;
};

const addContact = async (name, email, phone) => {
  const contacts = await getAll();

  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };

  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

// Зроби імпорт модулів fs і path для роботи з файловою системою
// Створи змінну contactsPath і запиши в неї шлях до файлі contacts.json. Для складання шляху використовуй методи модуля path.
// Додай функції для роботи з колекцією контактів. У функціях використовуй модуль fs та його методи readFile() і writeFile()
// Зроби експорт створених функцій через module.exports
