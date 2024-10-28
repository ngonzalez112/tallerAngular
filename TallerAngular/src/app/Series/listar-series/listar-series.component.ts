import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../series.service';
import { Serie } from '../Serie';

@Component({
  selector: 'app-listar-series',
  templateUrl: './listar-series.component.html',
  styleUrls: ['./listar-series.component.css']
})
export class ListarSeriesComponent implements OnInit {
  series: Serie[] = [];
  promedioTemporadas: number = 0;

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe(data => {
      this.series = data;
      this.promedioTemporadas = this.calcularPromedioTemporadas();
    });
  }

  calcularPromedioTemporadas(): number {
    return this.series.reduce((sum, serie) => sum + serie.seasons, 0) / this.series.length;
  }
}
