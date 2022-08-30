import React, { Component } from 'react';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default class ShareholdersEquityChart extends Component 
{
	chartRef = React.createRef();

	componentDidMount() {
		const ctx = this.chartRef.current.getContext("2d");
		
		var revenueChart = new Chart(ctx, {
			type: "bar",
			data: {
				labels: ["2018", "2019", "2020", "2021", "2022",],
				datasets: [{
					data: [0,0,0,0,0],
					label: 'Revenue',
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
		                    return value.toLocaleString().slice(0, -4)
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

		revenueChart.data.datasets[0].data[0] = 2107000;
		revenueChart.update();

		setTimeout(function()
		{
			revenueChart.data.datasets[0].data[1] = 2371000;
			revenueChart.update();
		}, 250);

		setTimeout(function()
		{
		revenueChart.data.datasets[0].data[2] = 2661000;
		revenueChart.update();
		}, 500);

		setTimeout(function()
		{
		revenueChart.data.datasets[0].data[3] = 2665000;
		revenueChart.update();
		}, 750);

		setTimeout(function()
		{
		revenueChart.data.datasets[0].data[4] = 3054000;
		revenueChart.update();
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