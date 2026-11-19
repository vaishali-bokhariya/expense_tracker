import "../styles/ExpenseList.css";
function ExpenseList({expenses}) {
  return (
    <div className="ExpenseList">
      <div className="list-search">
        <div>
          <h1>your expense</h1>
          <p className="list-help">
            search,edits, or remove an expense below .
          </p>
        </div>
        <div>
          <select>
            <option>All categories</option>
            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Entertainment</option>
          </select>

          <input type="search" placeholder="Search expense..." />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
        {expenses.map((expense)=> (
        <tr>
            <td>{expense.Amount}</td>
            <td>{expense.shopping}</td>
            <td>{expense.date}</td>
            <td>{expense.category}</td>
            <td className="table-action">
              <butoon className="btn-delete">Delete</butoon>
              <butoon className="btn-edit">Edit</butoon>
              <butoon className="btn-readmore">View</butoon>
            </td>
          </tr>
          ))}
            

          <tr className="expense-total">
            <td colSpan={5}>Total:₹2,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;
