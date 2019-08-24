import React from 'react'
import '../styles/History.scss'
import data from '../data'
import { ResponsiveLine } from '@nivo/line'

const History = () => {


    const data = [
        {
            id: 'Bench Press',
            color: '#c4d4e0',
            data: [
                {
                    x: '2019-06-01',
                    y: 60
                },
                {
                    x: '2019-06-03',
                    y: 65
                },
                {
                    x: '2019-06-05',
                    y: 75
                },
                {
                    x: '2019-06-07',
                    y: 80
                },
                {
                    x: '2019-06-09',
                    y: 90
                }

            ]
        },
        {
            id: 'Squat',
            color: '#c4d4e0',
            data: [
                {
                    x: '2019-06-01',
                    y: 135
                },
                {
                    x: '2019-06-03',
                    y: 140
                },
                {
                    x: '2019-06-05',
                    y: 145
                },
                {
                    x: '2019-06-07',
                    y: 155
                },
                {
                    x: '2019-06-09',
                    y: 160
                }
            ]
        },
        {
            id: 'Barabell Row',
            color: '#e9c77b',
            data: [
                {
                    x: '2019-06-01',
                    y: 80
                },
                {
                    x: '2019-06-03',
                    y: 80
                },
                {
                    x: '2019-06-05',
                    y: 85
                },
                {
                    x: '2019-06-07',
                    y: 85
                },
                {
                    x: '2019-06-09',
                    y: 90
                }
            ]
        },
        {
            id: 'OH Press',
            color: '#e9c77b',
            data: [
                {
                    x: '2019-06-01',
                    y: 45
                },
                {
                    x: '2019-06-03',
                    y: 50
                },
                {
                    x: '2019-06-05',
                    y: 55
                },
                {
                    x: '2019-06-07',
                    y: 60
                },
                {
                    x: '2019-06-09',
                    y: 60
                }
            ]
        },
        {
            id: 'Deadlift',
            color: '#e9c77b',
            data: [
                {
                    x: '2019-06-01',
                    y: 95
                },
                {
                    x: '2019-06-03',
                    y: 100
                },
                {
                    x: '2019-06-05',
                    y: 105
                },
                {
                    x: '2019-06-07',
                    y: 110
                },
                {
                    x: '2019-06-09',
                    y: 115
                }
            ]
        },
    ]

    return (
        <section className="History">
            <ResponsiveLine
                className='History-chart'
                data={data}
                margin={{ top: 5, right: 5, bottom: 60, left: 30 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', stacked: false, min: 40, max: 170 }}
                axisTop={null}
                axisRight={null}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    tickValues:[50, 100, 150, 200]
                }}
                curve='natural'
                colors={{ scheme: 'nivo' }}
                enableGridX={true}
                enableGridY={true}
                enableSlices='x'
                gridYValues={[50, 75, 100, 175, 200]}
                lineWidth='2'
                pointSize={5}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={1}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabel="y"
                pointLabelYOffset={-12}
                theme={{
                    axis: {
                      ticks: {
                        text: {
                          fill: "white"
                        }
                      }
                    },
                    grid: {
                      line: {
                        stroke: "white",
                        strokeWidth: .2
                      }
                    }
                  }}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: -20,
                        translateY: 50,
                        itemsSpacing: 0,
                        itemDirection: 'top-to-bottom',
                        itemWidth: 70,
                        itemHeight: 20,
                        itemOpacity: 1,
                        itemTextColor: 'white',
                        symbolSize: 10,
                        symbolShape: 'circle'
                    }
                ]}
                motionStiffness={85}
            />
        </section>
    )
}

export default History