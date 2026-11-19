import "../styles/ExpenseForm.css";

export default function ExpenseForm(){
    return(
         <div className="expenseform">
                <form>
                    <h1>Expense Form</h1>

                    <input 
                          type="number"
                          name="amount"
                          placeholder="Enter amount.."
                    />

                    <input 
                          type="text"
                          name="description"
                          placeholder="Enter Description.."
                    />

                    <input 
                          type="date"
                          name="date"
                          placeholder="Enter Date.."
                    />

                    <lable htnlFor="category">Category:</lable>
                    <select id="category" name="category" defaultValue="">
                        <option value="">Select Category</option>
                        <option value="food">Food</option>
                        <option value="shopping">Shopping</option>
                        <option value="transportation">Transportation</option>
                        <option value="education">Education</option>
                        <option value="phoneBill">Phone Bill</option>
                        <option value="entertainment">Entertainment</option>
                    </select>

                    <div className="btn">
                        <button type="button">Add Expense</button>
                    </div>
                </form>
         </div>
    );
}