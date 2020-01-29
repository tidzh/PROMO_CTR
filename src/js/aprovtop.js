import Chart from 'chart.js';

const Aprovtop = () => {
  const densityCanvas = document.getElementById('canvas').getContext('2d');

  return new Chart(densityCanvas, {
    type: 'bar',
    data: {
      labels: [
        'MONEY AMULET (FREE)',
        'TITAN GEL',
        'Black Latte',
        'MEN`SDEFENCE',
        'MARAL GEL',
        'MONEY AMULET (FREE)',
        'ПБК - 20',
        'ECO SLIM',
        '3DСветильник',
        'Loravit',
      ],
      datasets: [
        {
          label: '',
          data: [12, 90, 30, 5, 2, 43, 66, 21, 74, 10],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 100,
              min: 0,
              stepSize: 25,
              fontColor: '#548ca1',
              fontSize: 15,
            },
          },
        ],
        xAxes: [
          {
            maxBarThickness: 48,
            gridLines: {
              display: false,
            },
            ticks: {
              fontColor: '#ffff67',
              fontSize: 12,

            },
          },
        ],
      },
      legend: {
        display: false,
      },
    },
  });
};
export default Aprovtop;
