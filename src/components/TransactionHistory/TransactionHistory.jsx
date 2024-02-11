import css from './TransactionHistory.module.css';
import clsx from 'clsx';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionTable}>
      <thead className={css.headerTable}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, idx) => {
          const classCell = clsx(
            css.cell,
            idx % 2 !== 0 ? css.secondaryВg : null,
          );
          return (
            <tr key={id} className={classCell}>
              <td className={css.columnType}>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
