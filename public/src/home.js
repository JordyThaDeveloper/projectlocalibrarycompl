

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => {
    if (!book.borrows[0].returned) {
      acc++;
    }
    return acc;
  }, 0);
}

function getMostCommonGenres(books) {
  const genreCounts = books.reduce((acc, book) => {
    const genre = book.genre;
    acc[genre] = (acc[genre] || 0) + 1;
    return acc;
  }, {});

  const sortedGenres = _sortObjectByValues(genreCounts);
  return sortedGenres.slice(0, 5).map(genre => ({ name: genre, count: genreCounts[genre] }));
}

function getMostPopularBooks(books) {
  const sortedBooks = books.sort((bookA, bookB) => bookB.borrows.length - bookA.borrows.length);
  return sortedBooks.slice(0, 5).map(book => ({ name: book.title, count: book.borrows.length }));
}

function getMostPopularAuthors(books, authors) {
  const authorCounts = books.reduce((acc, book) => {
    const author = authors.find(author => author.id === book.authorId);
    const authorName = `${author.name.first} ${author.name.last}`;
    acc[authorName] = (acc[authorName] || 0) + book.borrows.length;
    return acc;
  }, {});

  const sortedAuthors = _sortObjectByValues(authorCounts);
  return sortedAuthors.slice(0, 5).map(author => ({ name: author, count: authorCounts[author] }));
}

// Helper function
function _sortObjectByValues(obj) {
  const keys = Object.keys(obj);
  return keys.sort((keyA, keyB) => obj[keyB] - obj[keyA]);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};