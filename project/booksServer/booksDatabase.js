var mysql = require("mysql2/promise")

var pool = mysql.createPool( {
    connectionLimit: 4,
    host: "localhost",
    user: "root",
    password: "root",
    database : "jun28"
})

async function getBooks() {
    let [rows, fields] = await pool.query("SELECT * FROM books")
    return rows
}

async function getBooksByAuthor(author) {
    let [rows, fields] = await pool.query("SELECT * FROM books WHERE author = ?", [author])
    return rows
}

async function getAuthorsBooksCount() {
    let [rows, fields] = await pool.query("SELECT author, count(*) as bookCount FROM BOOKS GROUP BY author ORDER BY author") 
    return rows
}

async function searchBooks(title) {
    let [rows, fields] = await pool.query("SELECT * FROM books WHERE title LIKE ?", [`%${title}%`])
    return rows 
}

async function getBookById(id) {
    let [rows, fields] = await pool.query("SELECT * FROM books WHERE id = ?", [id])
    return rows
}

async function addBook(title, author, price) {
    await pool.execute("INSERT INTO books(title, author, price) VALUES (?, ?, ?)", [title, author, price])
}

async function updateBook(id, book) {
    let [result, fields] = await pool.query("UPDATE books SET title = ?, author = ?, price = ? WHERE id = ?", 
                                             [book.title, book.author, book.price, id])
    if (result.affectedRows === 1) {
        return true
    }
    else {
        return false
    }
}

async function deleteBook(id) {
    let [result, fields] = await pool.execute("DELETE FROM books WHERE id = ?", [id])
    if (result.affectedRows === 1) {
        return true
    }
    else {
        return false
    }
}
 
module.exports = {
    getBooks,
    getBooksByAuthor,
    getAuthorsBooksCount,
    searchBooks,
    getBookById, 
    addBook,
    updateBook,
    deleteBook
}