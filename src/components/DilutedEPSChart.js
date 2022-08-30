import React, { Component } from 'react';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default class DilutedEPSChart extends Component 
{
	chartRef = React.createRef();

	componentDidMount() {
		const ctx = this.chartRef.current.getContext("2d");
		
		var netIncomeChart = new Chart(ctx, {
			type: "bar",
			data: {
				labels: ["2018", "2019", "2020", "2021", "2022",],
				datasets: [{
					data: [0,0,0,0,0],
					label: 'Net Income',
					backgroundColor: [
					"#fff",
					"#fff",
					"#fff",
					"#fff",
					"gold"
					],
					borderColor: [
				      'grey',
				      'grey',
				      'grey',
				      'grey',
				      '#000',
				    ],
				    borderWidth: {
				    	left: 5,
				    	top: 1
				    }
				}
				]
			},
			plugins: [ChartDataLabels],
			options: {
				animation: {
					duration: 500,
					easing: 'easeOut'
				},
				layout: {
		            padding: 20
		        },
				events: [],
				responsive: true,
    			maintainAspectRatio: false,
			    plugins: {
			        legend: {
			            display: false
			        },
			        datalabels: {
				        color: [
							"grey",
							"grey",
							"grey",
							"grey",
							"#000"
							],
						opacity: [
							0.5,
							0.5,
							0.5,
							0.5,
							1],
				        anchor: 'end',
			            align: 'top',
			            font: {
			                weight: 'bold',
							size: '16',
							family: "'Encode Sans', sans-serif"
			            },
			            formatter: function(value, context) 
			            {
		                    return value.toFixed(2);
		                }
				      }
					},
			    scales: {
					x: {
					    grid: {
					      display: false
					    },
					    ticks: {
                    		font: 
                    		{
                        		family: "'Encode Sans', sans-serif"
                    		},
                		},
					},
					y: {
					      display: false
					}
				},
			}
		});

		netIncomeChart.data.datasets[0].data[0] = 11.93;
		netIncomeChart.update();

		setTimeout(function()
		{
			netIncomeChart.data.datasets[0].data[1] = 10.46;
			netIncomeChart.update();
		}, 250);

		setTimeout(function()
		{
		netIncomeChart.data.datasets[0].data[2] = 12.61;
		netIncomeChart.update();
		}, 500);

		setTimeout(function()
		{
		netIncomeChart.data.datasets[0].data[3] = 18.30;
		netIncomeChart.update();
		}, 750);

		setTimeout(function()
		{
		netIncomeChart.data.datasets[0].data[4] = 15.49;
		netIncomeChart.update();
		}, 1000);
	}
	render() {
		return (
			<div className='chartRow'>
				<canvas
				id="myChart"
				ref={this.chartRef}
				/>
			</div>
			)
	}
}