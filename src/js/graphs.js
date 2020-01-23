import Chart from 'chart.js';

const ChartConstructor = {
  getSelectorsChart(selector) {
    const charts = document.querySelectorAll(selector);
    charts.forEach(chart => {
      if (selector === '.genderChart') {
        this.createChartGender(chart);
      } else {
        this.createChartTrafic(chart);
      }
    });
  },
  getDataSeries(dataSeries) {
    return JSON.parse(dataSeries);
  },

  createChartGender(charts) {
    return new Chart(charts, {
      type: 'pie',
      data: {
        labels: ['Мужчины', 'Женщины', 'Неопределено'],
        datasets: [
          {
            backgroundColor: ['#ffff67', '#f9d361', '#ffffff'],
            borderColor: '#1c5c78',
            data: this.getDataSeries(charts.getAttribute('data-series')),
          },
        ],
      },
      options: {
        responsive: false,
        legend: {
          position: 'right',
          labels: {
            boxWidth: 14,
            boxHeight: 14,
            fontColor: '#8898AE',
            fontSize: 14,
          },
        },
        tooltips: {
          backgroundColor: '#FFF',
          bodyFontColor: '#8898AE',
          bodyFontSize: 14,
          displayColors: false,
        },
      },
    });
  },
  createChartTrafic(charts) {
    return new Chart(charts, {
      type: 'bar',
      data: {
        datasets: [
          {
            label: 'Мобильный',
            backgroundColor: ['#ffff67'],
            borderColor: 'rgb(255, 255, 255)',
            data: [this.getDataSeries(charts.getAttribute('data-series'))[0]],
          },
          {
            label: 'Десктоп',
            backgroundColor: ['#f9d361'],
            borderColor: 'rgb(255, 255, 255)',
            data: [this.getDataSeries(charts.getAttribute('data-series'))[1]],
          },
        ],
      },
      options: {
        showAllTooltips: true,
        responsive: false,
        legend: {
          position: 'right',
          labels: {
            boxWidth: 14,
            boxHeight: 14,
            fontColor: '#8898AE',
            fontSize: 14,
          },
        },
        tooltips: {
          displayColors: false,
          backgroundColor: '#FFF',
          bodyFontColor: '#8898AE',
          bodyFontSize: 14,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                display: false,
              },
            },
          ],
        },
      },
    });
  },

  initialization() {
    ChartConstructor.getSelectorsChart('.genderChart');
    ChartConstructor.getSelectorsChart('.traficChart');
  },
};

export default ChartConstructor;
