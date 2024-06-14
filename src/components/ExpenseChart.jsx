import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalContext";

function ExpenseChart() {
  const { transactions } = useGlobalState();
  const total = transactions.reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalIncome = transactions.filter(
    transactions =>
      transactions.amount > 0)
    .reduce((acc, transactions) => (acc += transactions.amount), 0);

    const totalExpenses = transactions.filter(
      transactions =>
        transactions.amount < 0)
      .reduce((acc, transactions) => (acc += transactions.amount), 0) * -1;


      const totalExpensesPercentage = Math.round((totalExpenses/totalIncome) * 100);

      const totalIncomePercentage = 100 - totalExpensesPercentage;

  return (
    <VictoryPie
      colorScale={[ " #7b241c ","#0e6251"]}
      data={[
        { x: "Expenses", y: totalExpensesPercentage },
        { x: "Incomes", y: totalIncomePercentage },
      ]}
      animate={{
        duration: 2000,
      }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={
        <VictoryLabel
          angle={45}
          style={{
            fill: "white",
          }}
        ></VictoryLabel>
      }
    />
  );
}

export default ExpenseChart;
