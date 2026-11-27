
import ExpenseList from "../components/ExpenseList";
import { useTheme } from "../context/ThemeContext";
import "../styles/HomePage.css"

function Homepage() {
  const {theme}=useTheme();
  return (
    <>
    <main className={`home-page ${theme}`}>
          <ExpenseList />
    </main>
    </>
  );
}
export default Homepage;
