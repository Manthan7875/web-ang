import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartOptions, ChartType, Color } from 'chart.js';
// import { Label } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // public doughnutChartOptions = {
  //   responsive: true,
  //   cutoutPercentage: 0,
  // } as ChartOptions;

  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    // cutoutPercentage: 80, // Adjust the cutoutPercentage to control the hole size
    elements: {
      arc: {
        borderWidth: 0, // Set borderWidth to 0 to remove the white gap
      },

    },
    plugins: {
      legend: {
        display: false,
        position:"right",
        align :"center",
        fullSize :true,
        labels: {
          boxWidth: 20, // Set the width of the legend box
          boxHeight: 20, // Set the height of the legend box
          padding: 10, // Set the padding within the legend box
          useBorderRadius:true,
          borderRadius: 20, // Set the border radius of the legend box
        },
      },
    },
  };




  //doghnut start
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['green', 'orange', 'black'] as Color[],
        borderWidth: 0,
      },
    ],
  };
  // public doughnutChartOptions: ChartOptions = {
  //   responsive: true,
  // };

  // Custom legend data
  /// Custom legend data
  public legendData: { label: string, value: number, color: string, visible: boolean }[] =
  this.doughnutChartLabels.map((label, index) => ({
    label,
    value: this.doughnutChartData.datasets[0].data[index],
    color: this.doughnutChartData.datasets[0].backgroundColor[index],
    visible: true, // Initially show all datasets
  }));

// Legend click event handler
public legendClick(index: number): void {
  this.legendData[index].visible = !this.legendData[index].visible;

  // Update the visibility of the dataset
  this.doughnutChartData.datasets[0].data[index] = this.legendData[index].visible ? this.legendData[index].value : 0;
}

 // Method to toggle dataset visibility
//  public toggleDatasetVisibility(index: number): void {
//   const dataset = this.doughnutChartData.datasets[0];
//   dataset.data[index] = dataset.data[index] === 0 ? this.calculateDatasetValue(index) : 0;
//   this.chart?.update()
// }

// toggleDatasetVisibility(index: number): void {
//   if (this.chart) {
//     // const isHidden = this.chart.isDatasetHidden(index);
//     this.chart.hideDataset(index, true);
//   }
// }

// toggleDatasetVisibility(index: number): void {
//   if (this.chart && this.chart.chart && this.chart.chart.data && this.chart.chart.data.datasets) {
//     const isHidden = !this.chart.chart.isDatasetVisible(index);
//     this.chart.chart.getDatasetMeta(index).hidden = isHidden;
//     this.chart.chart.data.datasets[index].hidden = isHidden;
//     this.chart.chart.update();
//   }
// }

toggleDatasetVisibility(index: number): void {
  if (this.chart && this.chart.chart) {
    const dataset = this.chart.chart.data.datasets[0];
    const activeElement = {
      datasetIndex: 0,
      index: 0
    };
    // this.chart.chart.tooltip.setActiveElements([activeElement])
    if (dataset && dataset.data && dataset.data.length > index) {
      dataset.data[index] = dataset.data[index] === 0 ? this.doughnutChartData[index] : 0;
      this.chart.chart.update();
    }
  }
}


// toggleDatasetVisibility(index: number): void {
//   if (this.chart && this.chart.chart) {
//     const dataset = this.chart.chart.data.datasets[0];

//     if (dataset && dataset.data && dataset.data.length > index) {
//       dataset.data[index] = dataset.data[index] === 0 ? this.doughnutChartData[index] : 0;

//       // Update the chart without recreating it
//       this.chart.chart.update();
//     }
//   }
// }
// Method to calculate the dataset value based on your logic
private calculateDatasetValue(index: number): number {
  // Replace this with your logic to determine the value based on the index
  return this.doughnutChartData.datasets[0].data[index];
}

  // Legend hover event handler
  public legendHover(index: number): void {
    // Add custom hover behavior if needed
  }
  public doughnutChartType: ChartType = 'doughnut';
  chartLegend =false;
  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }
  //doghnut end



  //bar chart start
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  // @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  public barChartOptions: ChartConfiguration['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    // scales: {
    //   x: {},
    //   y: {
    //     min: 10,
    //   },
    // },
    responsive:true,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 400], label: 'Series A' },

    ],
  };

  // events
  public chartClickedd({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHoveredd({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  // public randomize(): void {
  //   // Only Change 3 values
  //   this.barChartData.datasets[0].data = [
  //     Math.round(Math.random() * 100),
  //     59,
  //     80,
  //     Math.round(Math.random() * 100),
  //     56,
  //     Math.round(Math.random() * 100),
  //     40,
  //   ];

  //   this.chart?.update();
  // }
  // bar chart end
}

