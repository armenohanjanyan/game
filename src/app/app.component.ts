import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

   fields = [
      {val: '', sum: 0},
      {val: '', sum: 0},
      {val: '', sum: 0},
      {val: '', sum: 0},
      {val: '', sum: 0},
      {val: '', sum: 0},
      {val: '', sum: 0},
      {val: '', sum: 0},
      {val: '', sum: 0},
    ];
    winner = "";
    t;
    win = true;
    start = false;
    cpuFirst: boolean;
    playerTurn = true;


  ngOnInit() {

  }

  fillField(fieldId) {
    if (!this.playerTurn || this.fields[fieldId].val) return;
    this.fields[fieldId].val = "x";
    this.fields[fieldId].sum = 1;
       this.checkWinner()
      this.t = setTimeout(() => {
       this.cpuStep()
        this.checkWinner()
     }, 2000);
     this.playerTurn = false;
  }

  cpuStep() {
      let m = Math.floor(Math.random() * 9);
      if (this.fields[m].val === "") {
        this.fields[m].val = "O";
        this.fields[m].sum = 4
        console.log(m);

      } else {this.cpuStep()}
      this.playerTurn = true;
  }

  checkWinner() {
    if (this.fields[0].sum + this.fields[1].sum + this.fields[2].sum == 3 ||
        this.fields[3].sum + this.fields[4].sum + this.fields[5].sum == 3 ||
        this.fields[6].sum + this.fields[7].sum + this.fields[8].sum == 3 ||
        this.fields[0].sum + this.fields[4].sum + this.fields[8].sum == 3 ||
        this.fields[0].sum + this.fields[3].sum + this.fields[6].sum == 3 ||
        this.fields[1].sum + this.fields[4].sum + this.fields[7].sum == 3 ||
        this.fields[2].sum + this.fields[5].sum + this.fields[8].sum == 3

      ) {
      this.winner = "Player Wins";
      this.fields.map(el => el.val = "");
      clearTimeout(this.t)
    }
    if (this.fields[0].sum + this.fields[1].sum + this.fields[2].sum == 12 ||
        this.fields[3].sum + this.fields[4].sum + this.fields[5].sum == 12 ||
        this.fields[6].sum + this.fields[7].sum + this.fields[8].sum == 12 ||
        this.fields[0].sum + this.fields[4].sum + this.fields[8].sum == 12 ||
        this.fields[0].sum + this.fields[3].sum + this.fields[6].sum == 12 ||
        this.fields[1].sum + this.fields[4].sum + this.fields[7].sum == 12 ||
        this.fields[2].sum + this.fields[5].sum + this.fields[8].sum == 12
      ) {
        this.winner = "GAME OVER";
        this.fields.map(el => el.val = "")
        clearTimeout(this.t)
        this.win = false;
      }
  }

  playerStart() {
    this.start = true;
  }

  cpuStart() {
    this.start = true;
    this.cpuStep()
  }

}
