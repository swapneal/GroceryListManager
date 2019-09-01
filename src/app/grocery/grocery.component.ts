import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-grocery",
  templateUrl: "./grocery.component.html",
  styleUrls: ["../../assets/css/all.min.css", "./grocery.component.css"]
})
export class GroceryComponent implements OnInit {
  isListPresent = false;
  tasks = [];

  task = {
    name: "",
    id: 0
  };

  addItem() {
    if (this.task.id == 0) {
      this.isListPresent = true;
      this.tasks.push({
        id: new Date().getTime(),
        name: this.task.name,
        strike: false
      });
    }

    this.task = {
      name: "",
      id: 0
    };
  }

  editItem(item) {
    this.task = item;
  }

  deleteItem(item) {
    for (var i = 0; i < this.tasks.length; i++) {
      if (item.id == this.tasks[i].id) {
        this.tasks.splice(i, 1);
        break;
      }
    }
  }

  purchaseItem(item) {
    for (var i = 0; i < this.tasks.length; i++) {
      if (item.id == this.tasks[i].id) {
        if (this.tasks[i].strike) {
          this.tasks[i].strike = false;
        } else {
          this.tasks[i].strike = true;
        }
        break;
      }
    }
  }
  constructor() {}

  ngOnInit() {}
}
