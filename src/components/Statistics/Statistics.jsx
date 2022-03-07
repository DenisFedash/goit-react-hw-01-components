import PropTypes from "prop-types";
import css from "./Statistic.module.css"

export const Statistics = ({ title, stats }) => {
    function randCol() {
    let r =
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase() +
      '80';
    return r;
  }
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.statList}>
                {stats.map(({id, label, percentage}) =>
                    <li style={{backgroundColor: randCol() }} className={css.item} key={id}>
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{percentage}%</span>
                    </li>
                )}
                
            </ul>
        </section>
    );
};

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
}