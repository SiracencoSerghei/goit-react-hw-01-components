import PropsTypes from 'prop-types';
import css from './Statistics.module.css';

export function Statistics(props) { 
    return (
        <section Name="statistics">
            <h2 Name="title">Upload stats</h2>

            <ul Name="stat-list">
                <li Name="item">
                    <span Name="label">.docx</span>
                    <span Name="percentage">4%</span>
                </li>
                <li Name="item">
                    <span Name="label">.mp3</span>
                    <span Name="percentage">14%</span>
                </li>
                <li Name="item">
                    <span Name="label">.pdf</span>
                    <span Name="percentage">41%</span>
                </li>
                <li Name="item">
                    <span Name="label">.mp4</span>
                    <span Name="percentage">12%</span>
                </li>
            </ul>
        </section>
    );
};