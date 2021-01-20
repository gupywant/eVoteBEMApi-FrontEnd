<script>
  import { Bar } from 'vue-chartjs'

  export default {
    extends: Bar,
    data () {
      return {
        chartData: {
          labels: ['Kandidat 1', 'Kandidat 2'],
          datasets: [
            {
              borderWidth: 1,
              backgroundColor: ['#f87979', '#00D8FF'],
              borderColor: ['#f87979', '#00D8FF'],
              data: [70, 30],
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  suggestedMax: 200,
                },
                gridLines: {
                  display: true,
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          responsive: true,
          maintainAspectRatio: false,
        },
      }
    },
    mounted () {
      this.renderChart(this.chartData, this.options)
    },
  }
</script>
