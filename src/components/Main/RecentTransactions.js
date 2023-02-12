import './RecentTransactions.css'

const RecentTransactions = ({ transactions }) => {
  console.log(transactions)

  return (
    <div className='recentTransactions'>
      <table>
        <thead>
          <tr>
            <td>Description</td>
            <td>Category</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index}>
              <td>{tx.name}</td>
              <td>{tx.category}</td>
              <td>${tx.cost.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RecentTransactions
