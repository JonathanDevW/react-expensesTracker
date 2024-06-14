import { GlobalProvider } from "./context/GlobalContext";
import Header from "./components/Header";
import TransactionForm from "./components/transaction/TransactionForm";
import Balance from "./components/Balance";
import TransactionList from "./components/transaction/TransactionList";
import IncomeExpenses from "./components/transaction/IncomeExpenses";
import ExpenseChart from './components/ExpenseChart'


function App() {
  return (
<GlobalProvider>
  <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
    <div className="container w-2/3 flex justify-center items-center">
      <div className="bg-gray-800 p-10 rounded-lg flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-center">Expenses Tracker</h1>
        <div className="flex flex-col gap-2">
          <IncomeExpenses />
          <Balance />
          <TransactionForm />
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-6">
          <div className="lg:w-1/2 flex-1">
            <TransactionList />
          </div>
          <div className="lg:w-1/2 flex-1">
            <ExpenseChart />
          </div>
        </div>
      </div>
    </div>
  </div>
</GlobalProvider>

  );
}

export default App;
