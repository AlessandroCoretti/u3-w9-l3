const SingleBook = (props) => {
  const { books } = props;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
      {books.map((book) => (
        <div key={book.asin} style={{ textAlign: "center" }}>
          {/* Immagine del libro */}
          <img src={book.img} alt={book.title} style={{ width: "150px", height: "200px", objectFit: "cover" }} />
          {/* Titolo del libro */}
          <p>{book.title}</p>
        </div>
      ))}
    </div>
  );
};
export default SingleBook;
