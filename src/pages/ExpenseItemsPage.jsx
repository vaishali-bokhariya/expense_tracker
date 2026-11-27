import { useEffect, useState } from "react";
import "../styles/ExpenseItemsPage.css";

const API_URL = "https://dummyjson.com/products";
const ITEMS_PER_PAGE = 6;

function ExpenseItemsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchProducts = async () => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Could not load expense items");
      }

      const data = await response.json();
      setProducts(data.products);
    } catch (fetchError) {
      console.log(fetchError.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    //eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts();
  }, []);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  console.log(totalPages);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  console.log(startIndex);

  const visibleProducts = products.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );
  return (
    <main className="expense-items">
      <header className="items-header">
        <h1>Expense Items</h1>
        <span>Browse items and their prices from the API.</span>
      </header>

      {loading && <p className="items-message">Loading items...</p>}

      {!loading && (
        <section className="items-grid">
          {visibleProducts.map((products) => (
            <article className="item-card" key={products.id}>
              <div className="item-card-top">
                <span>{products.category}</span>
                <strong>${products.price}</strong>
              </div>
              <h2>{products.title}</h2>
              <p>{products.description}</p>
            </article>
          ))}
        </section>
      )}
       {!loading && totalPages > 1 && (
        <div className="pagination">
          <button
            type="button"
            onClick={() => setCurrentPage((page) => page - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setCurrentPage((page) => page + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
}

export default ExpenseItemsPage;
