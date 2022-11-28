import React from 'react'
import CardByDayComponent from './chart-component/card-by-day'
import ChartByMonthComponent from './chart-component/chart-by-month'
import ChartByWeekComponent from './chart-component/chart-by-week'
import PieChartForTotalAssessmentsComponent from './pie-charts/pie-chart-total-assessments'

import { toRangeFromDay, toRangeFromMonth, toRangeFromWeek } from '../../lib/time-util'
import './dashboard-chart.css'

export default function DashboardChartsComponent({ payload,
    onChange,
    chartCategory,
    onChangeChartCategory,
    inputValues,
    onChangeInputValues
}) {
    return (
        <div className='dashboard-chart-row'>
            <div className='dashboard-chart-columns' style={{ width: "72%" }}>
                <div className='dashboard-chart-cards'>
                    <div className='chart-toggle-header'>
                        <h3 id="charts-card-header" style={{ fontSize: "2rem" }}>New Users</h3>
                        <div className='chart-toggle-area'>
                            <button id='user-day-button' onClick={(e) => {
                                e.preventDefault();
                                onChangeChartCategory(0);
                            }} className='chart-toggle-button'>Day</button>
                            <button id='user-week-button' onClick={(e) => {
                                e.preventDefault();
                                onChangeChartCategory(1);
                            }} className='chart-toggle-button'>Week</button>
                            <button id='user-month-button' onClick={(e) => {
                                e.preventDefault();
                                onChangeChartCategory(2);
                            }} className='chart-toggle-button'>Month</button>
                        </div>
                    </div>

                    {chartCategory === 0 && <div id='users-by-day'>
                        <h2 id='chart-by-month-heading'>New Users by Day</h2>
                        <div>
                            <div className='tooltip'>
                                <input type="date"
                                    id='monthYear'
                                    name='monthYear'
                                    min='2022-07-01'
                                    className='month-selector'
                                    onChange={(e) => {
                                        e.preventDefault();
                                        const [startDate, endDate] = toRangeFromDay(e.target.value);
                                        onChangeInputValues(0, e.target.value);
                                        onChange(startDate, endDate);
                                    }}
                                    value={inputValues[0]}
                                >
                                </input>
                                <span className="tooltiptext">Day, Month, Year</span>
                            </div>
                        </div>
                        <CardByDayComponent payload={payload} />
                    </div>}

                    {chartCategory === 1 && <div id='users-by-week'>
                        <h2 id='chart-by-month-heading '>New Users by Week</h2>
                        <div className='tooltip'>
                            <input type="week"
                                id='monthWeekYear'
                                name='monthWeekYear'
                                min='2022-W32'
                                className='month-selector'
                                onChange={(e) => {
                                    e.preventDefault();
                                    const [startDate, endDate] = toRangeFromWeek(e.target.value);
                                    onChangeInputValues(1, e.target.value);
                                    onChange(startDate, endDate);
                                }}
                                value={inputValues[1]}
                            />
                            <span className="tooltiptext">Month Week, Year</span>
                        </div>

                        <ChartByWeekComponent payload={payload} />
                    </div>}

                    {chartCategory === 2 && <div id='users-by-month'>
                        <h2 id='chart-by-month-heading'>New Users by Month</h2>
                        <div>
                            <div className='tooltip'>
                                <input type="month"
                                    id='monthYear'
                                    name='monthYear'
                                    min='2022-07'
                                    className='month-selector'
                                    value={inputValues[2]}
                                    onChange={(e) => {
                                        e.preventDefault();
                                        const [firstDay, lastDay] = toRangeFromMonth(e.target.value);
                                        onChangeInputValues(2, e.target.value);
                                        onChange(firstDay, lastDay);
                                    }}
                                >
                                </input>
                                <span className="tooltiptext">Month Year</span>
                            </div>
                        </div>
                        <ChartByMonthComponent payload={payload} />
                    </div>}
                </div>
            </div>

            <div className='dashboard-chart-columns' style={{ width: "19%" }}>
                <div className='dashboard-chart-cards right-piechart-card'>
                    <h3 id="pie-chart-card-header" style={{ fontSize: "2rem", marginBottom: "3rem" }}>Assessments over Users</h3>
                    <PieChartForTotalAssessmentsComponent
                        payload={payload}
                        style={{ width: "400px" }}
                    />
                </div>
            </div>
        </div>
    )
}