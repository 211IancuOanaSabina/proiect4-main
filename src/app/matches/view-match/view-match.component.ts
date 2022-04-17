import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-view-match",
  templateUrl: "./view-match.component.html",
  styleUrls: ['./view-match.component.css']
})

export class ViewMatchComponent implements OnInit {

  matchID = 0;
  team1 = "team 1"
  team2 = "team 2"
  img1 = ""
  img2 = ""
  date = ""
  time = ""
  score = ""

  constructor(private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.matchID = data['id'];
      this.team1 = data['team1'];
      this.team2 = data['team2'];
      this.img1 = data['img1'];
      this.img2 = data['img2'];
      this.date = data['date'];
      this.time = data['time'];
      this.score = data['score'];

    })
  }

}