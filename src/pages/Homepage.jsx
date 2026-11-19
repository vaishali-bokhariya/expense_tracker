import Navbar from "../components/Navbar";
import ExpenseList from "../components/ExpenseList";    

 function Homepage(){
    const expense=[
    {
      Amount:"₹2,000",
      shopping:"Grocery shopping", 
      date:"17 nov 2026",
      category :"grocery"
    },
    {
      Amount:"₹1,500" ,
      shopping:"Cloths shopping",
      date:"16 nov 2026",
      category:"shopping"
    },
    {
      Amount:"₹800",
      shopping:"Vegetable shopping",
      date:"15 nov 2026",
      category:"Food"
    },
    {
      Amount:"₹1500",
      shopping:"shoes shopping",
      date:"14 nov 2026",
      category:"shoes"
    },
  ]
    return(
        <>
        <Navbar/>
        <ExpenseList expenses={expense}/>
        </>
    )
  
}
export default Homepage;