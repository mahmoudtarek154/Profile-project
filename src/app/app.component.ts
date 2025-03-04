import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, HomeComponent, AboutComponent, PortfolioComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstApp';
}
