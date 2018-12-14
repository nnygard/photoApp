import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Chart from 'react-google-charts';

class LenghtChart extends Component {
    render(){
        return(
            <div className='photoCard'>
            <Paper elevation={1} square={true}>
            <Chart
            height={'400px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[
                [
                    { type: 'date', label: 'Datum' },
                    'kg'
                ],
                [new Date('2018-09-24'), 52],
                [new Date('2018-10-08'), 52.5],
                [new Date('2018-10-22'), 54.5],
                [new Date('2018-10-31'), 55.5],
                [new Date('2018-11-05'), 56.1],
                [new Date('2018-11-23'), 57.5],
            ]}
            options={{
                pointSize: 5,
                legend: 'none',
                hAxis: {
                    title: 'Datum',
                    format:'yyyy-MM-dd',
                },
                vAxis: {
                    title: 'Längd (cm)',
                },
            }}
            rootProps={{ 'data-testid': '2' }}
            />
            </Paper>
            </div>
        );
    }
}

export default LenghtChart;
