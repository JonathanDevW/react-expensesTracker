import { useGlobalState } from "../../context/GlobalContext";

export function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();

  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-sm">{transaction.description}</p>
      <div>
        <span className="p-3">${transaction.amount}</span>
        <button
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
          className="text-white bg-red-500 rounded-md py-1 p-1"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TransactionItem;
