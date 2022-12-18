import './RecentTransactions.css'

const RecentTransactions = ({ transactions }) => {
  console.log(transactions)

  return (
    <table>
      <tr>
        <th>Description</th>
        <th>Category</th>
        <th>Amount</th>
      </tr>
      {transactions.map(tx => (
        <tr>
          <td>{tx.name}</td>
          <td>{tx.category}</td>
          <td>${tx.cost.toFixed(2)}</td>
        </tr>
      ))}
    </table>
  )
}

export default RecentTransactions
