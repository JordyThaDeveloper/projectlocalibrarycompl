
function findAccountById(accounts, id) {
    // Use the find method to search for the account with the matching ID
    return accounts.find(account => account.id === id);
}

module.exports = { findAccountById };


function sortAccountsByLastName(accounts) {
    // Use the sort method to sort the accounts array by last name
    return accounts.sort((accountA, accountB) => accountA.name.last.localeCompare(accountB.name.last));
}

module.exports = { sortAccountsByLastName };


function getAccountFullNames(accounts) {
    // Use the map method to create an array of full names
    return accounts.map(account => `${account.name.first} ${account.name.last}`);
}

module.exports = { getAccountFullNames };



    // Step 5:



// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};