import { Component, OnInit } from '@angular/core';
import { Match } from '../view-match-by-date/match';
import { MatchesService } from '../../services/matches.service';

@Component({
  selector: 'app-view-all-match',
  templateUrl: './view-all-match.component.html',
  styleUrls: ['./view-all-match.component.css']
})
export class ViewAllMatchComponent implements OnInit {

  matchList : Match[];

  constructor(private matchService:MatchesService) { }

  ngOnInit(): void {
    this.matchService.viewMatch().subscribe(data => {
      this.matchList = data;
    })
  }

}
