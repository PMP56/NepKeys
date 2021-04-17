import React, { createRef, useRef, useEffect, useState, useContext, Fragment } from 'react';
import styles from '../styles/Analytics.module.css';

import { Line } from 'react-chartjs-2';
import { TextContext } from '../components/TextContext';

const Analytics = () => {
    const {
        lettersVsAcc,
        changeLetterVsAcc
    } = useContext(TextContext);

    const [vals, setVals] = useState([]);
    const [xval, setXVal] = useState([]);
    const [yval, setYVal] = useState([]);

    useEffect(() => {
        // setVals(Object.values(lettersVsAcc));
        setXVal(Object.values(lettersVsAcc)[0]);
        setYVal(Object.values(lettersVsAcc)[1]);
    }, [0, lettersVsAcc]);

    // useEffect(() => {
    //     setXVal(Object.values(lettersVsAcc)[0]);
    //     setYVal(Object.values(lettersVsAcc)[1]);
    // }, [0])

    const data = {
        labels: xval,
        datasets: [
            {
                label: 'Total letters vs Accuracy',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
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
        <div className={styles.analytics}>
            <Line
                data={data}
                width={200}
                height={100}
                options={options}
            />
            {(Object.values(lettersVsAcc)[0].length < 6) ? <h1 className={styles.noDataText}>Not Enough Data</h1> : <Fragment />}
        </div>
    );
}

export default Analytics;