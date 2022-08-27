import React, { createRef, useRef, useEffect, useState, useContext, Fragment } from 'react';
import styles from '../styles/Analytics.module.css';

import { Line, Bar } from 'react-chartjs-2';
import { TextContext } from '../context/TextContext';

export const ProgressGraph = () => {
    const {
        lettersVsAcc,
    } = useContext(TextContext);
    const [vals, setVals] = useState([]);
    const [xval, setXVal] = useState([]);
    const [yval, setYVal] = useState([]);

    useEffect(() => {
        // setVals(Object.values(lettersVsAcc));
        setXVal(Object.values(lettersVsAcc)[0].slice(1));
        setYVal(Object.values(lettersVsAcc)[1].slice(1));
    }, [0, lettersVsAcc]);

    const data = {
        labels: xval,
        datasets: [
            {
                label: 'Total letters vs Accuracy',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgb(49, 211, 122)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'white',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 4,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                data: yval,

            }
        ]
    };

    const options = {
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Accuracy"
                },
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Total Letters"
                }
            }]
        }
    }
    return (
        <>
            <Line
                data={data}
                width={250}
                height={80}
                options={options}
            />
            {(Object.values(lettersVsAcc)[0].length < 3) ? <h1 className={styles.noDataText}>Not Enough Data</h1> : <Fragment />}
        </>
    )
}

const Analytics = () => {

    const globalData = {
        labels: [...Array(71).keys()].map(foo => foo + 20),
        datasets: [
            {
                label: 'Global WPM Score',
                lineTension: 0.1,
                backgroundColor: 'rgb(49, 211, 122)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                data: [425337, 453690, 483028, 506734, 528799, 551654, 568372, 584524, 596203, 606110, 609576, 607406, 598657, 591206, 574089, 561563, 545756, 525808, 508569, 489892, 476562, 455769, 434016, 414277, 393823, 377301, 360289, 341037, 323967, 308984, 297379, 282804, 267229, 250702, 240689, 229164, 216472, 205235, 194901, 185095, 174810, 167330, 159786, 146607, 139391, 129690, 121109, 114327, 106870, 101609, 93967, 88277, 81995, 76439, 70761, 66265, 61673, 56661, 53720, 48106, 45017, 42264, 38294, 35871, 32935, 30583, 28082, 25132, 25374, 21815, 20381],

            }
        ]
    }

    const globalOptions = {
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "No. of people"
                },
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "WPM"
                }
            }]
        }
    }

    return (
        <div className={styles.analytics}>
            <h2 style={{ color: 'var(--textColor)', fontFamily: 'Montserrat' }}>Your Progress Graph</h2>
            <ProgressGraph />
            <h2 style={{ color: 'var(--textColor)', fontFamily: 'Montserrat' }}>Global Score (WPM)</h2>
            <Bar
                data={globalData}
                width={1000}
                height={300}
                options={globalOptions}
            />
        </div>
    );
}

export default Analytics;