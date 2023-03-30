import PropTypes from 'prop-types';
import css from './Transaction.module.css';

const TransactionHistory = ({items}) => { 
    // console.log(items);
    return (<table className={css.transactionHistory}>
        <thead className={css.thead}>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody className={css.tbody}>
            {items
                .sort((a, b) => a.type < b.type ? -1 : a.type > b.type ? 1 : 0)
                // .sort((a, b) => a.amount - b.amount) або 
                // .sort((a, b) => a.currency < b.currency ? -1 : a.currency > b.currency ? 1 : 0)
                .map(({ id, type, amount, currency }, index) => {
                return (
                    <tr key={id} style={{ backgroundColor: index % 2 === 0 ? 'white' : 'aliceblue' }} >
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
        )
        })}
        </tbody>
        
    </table>)
};

TransactionHistory.propTypes = {
    items: PropTypes.array
};

export default TransactionHistory;



