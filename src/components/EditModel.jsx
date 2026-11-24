import { useEffect, useState } from "react";
import "../styles/EditModel.css";

function EditModel({ editId, onClose, onUpdate }) {
  const [FormData, setFormData] = useState({
    id: editId,
    amount: null,
    description: "",
    category: "",
  });

  useEffect(() => {
    const expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
    const expense = expenses.find((item) => String(item.id) === String(editId));

    if (expense) setFormData(expense);
  }, [editId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "amount" && value !== "" ? Number(value) : value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
    const updatedExpenses = expenses.map((item) =>
      String(item.id) === String(editId) ? FormData : item
    );

    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
    onUpdate();
    onClose();
  };

  return (
    <div className="model">
      <div className="form-box">
        <form onSubmit={handleUpdate}>
          <h1>Edit Expense</h1>

          <input
            type="number"
            name="amount"
            placeholder="amount"
            value={FormData.amount || ''}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="description"
            placeholder="Description"
            value={FormData.description}
            onChange={handleChange}
            required
          />

          <input
            type="date" name="date" defaultValue=""
            value={FormData.date}
            onChange={handleChange}
            required
          />

          <label htmlFor="category">Category:</label>
          <select id="category" name="category"
            value={FormData.category}
            onChange={handleChange}
            defaultValue="">
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="shopping">shopping</option>
            <option value="transportation">Transportation</option>
            <option value="education">Education</option>
            <option value="phoneBill">Phone Bill</option>
            <option value="entertainment">Entertainment</option>
          </select>

          <div className="model-btn">
            <button className="edit">
              update
            </button>
            <button className="cancle">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModel;
