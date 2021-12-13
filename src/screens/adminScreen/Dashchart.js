import React from 'react';
import { getColor } from '../../assets/colors';
import { randomNum } from '../../assets/demos';

import { Row, Col, Card, } from 'react-bootstrap';

import { Line, Pie, Doughnut, Bar, Radar } from 'react-chartjs-2';



const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const genLineData = (moreData = {}, moreData2 = {}) => {
  return {
    labels: MONTHS,
    datasets: [
      {
        label: 'Dataset 1',
        backgroundColor: getColor('primary'),
        borderColor: getColor('primary'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData,
      },
      {
        label: 'Dataset 2',
        backgroundColor: getColor('secondary'),
        borderColor: getColor('secondary'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData2,
      },
    ],
  };
};

const genPieData = () => {
  return {
    datasets: [
      {
        data: [randomNum(), randomNum(), randomNum(), randomNum(), randomNum()],
        backgroundColor: [
          getColor('primary'),
          getColor('secondary'),
          getColor('success'),
          getColor('info'),
          getColor('danger'),
        ],
        label: 'Dataset 1',
      },
    ],
    labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'],
  };
};

const ChartPage = () => {
  return (
    <div title="Charts" breadcrumbs={[{ name: 'Charts', active: true }]}>
      <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <Card.Header>Bar</Card.Header>
            <Card.Body>
              <Bar data={genLineData()} />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6} lg={12} md={12}>
          <Card>
            <Card.Header>Line</Card.Header>
            <Card.Body>
              <Line data={genLineData({ fill: false }, { fill: false })} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <Card.Header>Stacked Line</Card.Header>
            <Card.Body>
              <Line
                data={genLineData()}
                options={{
                  scales: {
                    xAxes: [
                      {
                        scaleLabel: {
                          display: true,
                          labelString: 'Month',
                        },
                      },
                    ],
                    yAxes: [
                      {
                        stacked: true,
                        scaleLabel: {
                          display: true,
                          labelString: 'Value',
                        },
                      },
                    ],
                  },
                }}
              />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6} lg={12} md={12}>
          <Card>
            <Card.Header>Combo Bar / Line</Card.Header>
            <Card.Body>
              <Bar data={genLineData({ type: 'line', fill: false })} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      
    
    </div>
  );
};

export default ChartPage;
