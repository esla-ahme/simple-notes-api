// connect and use memory storage
const memory = require('memorystorage')
const storage = new memory('notes-app')

/**
 * Returns an array of all the keys in the given storage object.
 *
 * @param {Object} storage - The storage object.
 * @return {Array} An array of strings representing the keys in the storage object.
 */
const getKeys = (storage) => {
  return Object.keys(storage);
}

const getValues = (storage) => Object.values(storage);

module.exports = {
    store: storage,
    getKeys,
    getValues
}
