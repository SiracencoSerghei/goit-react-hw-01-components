import PropTypes from 'prop-types';
import getRandomColor from 'utils/getRandomColor';
import css from './Statistics.module.css';


export const Statistics = ({ title, stats }) => (
    <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statlist}>
            {stats.map(({ id, label, percentage }) => (
                <li
                    style={{ backgroundColor: getRandomColor() }}
                    className={css.item}
                    key={id}
                >
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}%</span>
                </li>
            ))}
        </ul>
    </section>
);

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        })
    ),
};