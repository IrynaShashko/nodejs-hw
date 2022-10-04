const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.table(contacts);
      break;
    case "get":
      const contact = await getContactById(id);
      console.log(contact);
      break;
    case "add":
      const lastContact = await addContact(name, email, phone);
      console.log(lastContact);
      break;

    case "remove":
      const deleteContact = await removeContact(id);
      console.log(deleteContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);
