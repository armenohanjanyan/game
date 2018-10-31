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
    win: boolean;
    start = false;
    cpuFirst: boolean;
    playerTurn = true;
    butt = true;


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
     }, 1000);
     this.playerTurn = false;
  }

  cpuStep() {
      let m = Math.floor(Math.random() * 9);
      if (this.fields[m].val === "" && this.winner === "") {
        this.fields[m].val = "O";
        this.fields[m].sum = 4

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
        this.fields[2].sum + this.fields[5].sum + this.fields[8].sum == 3 ||
        this.fields[2].sum + this.fields[4].sum + this.fields[6].sum == 3

      ) {
        clearTimeout(this.t);
        this.butt = false;
        this.winner = "YOU WIN";
        this.win = true;
        this.fields.map(el => {
        el.val = "";
        el.sum = 0
      });
    }
    if (this.fields[0].sum + this.fields[1].sum + this.fields[2].sum == 12 ||
        this.fields[3].sum + this.fields[4].sum + this.fields[5].sum == 12 ||
        this.fields[6].sum + this.fields[7].sum + this.fields[8].sum == 12 ||
        this.fields[0].sum + this.fields[4].sum + this.fields[8].sum == 12 ||
        this.fields[0].sum + this.fields[3].sum + this.fields[6].sum == 12 ||
        this.fields[1].sum + this.fields[4].sum + this.fields[7].sum == 12 ||
        this.fields[2].sum + this.fields[5].sum + this.fields[8].sum == 12 ||
        this.fields[2].sum + this.fields[4].sum + this.fields[6].sum == 12
      ) {
        this.butt = false;
        this.winner = "GAME OVER";
        this.fields.map(el => {
          el.val = "";
          el.sum = 0
        })
        clearTimeout(this.t)
        this.win = false;
      }

  }

  playerStart() {
    this.butt = false;
    this.winner = "";
    this.start = true;
  }

  cpuStart() {
    this.butt = false;
    this.winner = "";
    this.start = true;
    this.cpuStep()
  }

  rematch() {
    this.playerTurn = true;
    this.start = false;
    this.fields.map(el => {
      el.val = "";
      el.sum = 0
      console.log(el.sum)
    })
    this.winner = ".";
    this.butt = true;
  }


}
