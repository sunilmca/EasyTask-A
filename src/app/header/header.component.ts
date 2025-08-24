import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class HeaderComponent{

}

function C(target: typeof HeaderComponent): void | typeof HeaderComponent {
    throw new Error("Function not implemented.");
}
