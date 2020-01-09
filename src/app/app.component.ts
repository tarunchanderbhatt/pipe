import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "pipe";
  name: string = "Tarun Chander Bhatt";
  sudentnumber: number = 2.5;
  tarik = new Date();
  janamdin = new Date(1982, 10, 19);
  remark: string = "This is my remark value";
  reverStrin: string = "hi my name is tarun chander bhatt i am sr developer";
}
