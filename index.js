const contacts = require("./contacts");
// Зроби імпорт модуля contacts.js в файлі index.js та перевір працездатність функції для роботи з контактами.
// В файлі index.js імпортується пакет yargs для зручного парса аргументів командного рядка. Використовуй готову функцію invokeAction() яка отримує тип виконуваної дії і необхідні аргументи. Функція викликає відповідний метод з файлу contacts.js передаючи йому необхідні аргументи.

// index.js
const argv = require("yargs").argv;

// TODO: рефакторить
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.list();
      console.log(allContacts);
      break;
    case "get":
      const oneContact = await contacts.get(id);
      console.log(oneContact);
      break;
    case "add":
      const newContact = await contacts.add({ name, email, phone });
      console.log(newContact);
      break;
    case "remove":
      const removeContact = await contacts.remove(id);
      console.log(removeContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
