import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './application.component.html',
  styleUrl: './application.component.scss'
})
export class ApplicationComponent {

  // Hier jetzt ein array erstellen welches details links und Bilder zu den Projekten beinhaltet
  projects = [
    {
      title: 'JOIN',
      technologies: 'JavaScript, HTML, CSS',
      description: 'This is a description of Project JOIN.',
      image: '../../../../assets/img/platzhalter.png',
      link: 'https://join.david-wilke.com',
      gitlink: 'https://github.com/ChristianBockshorn/JOIN-46#'
    },
    {
      title: 'Portfolio',
      technologies: 'Angular, JavaScript, HTML, CSS, PHP',
      description: 'This is a description of Project JOIN.',
      image: '../../../../assets/img/platzhalter.png',
      link: '#start',
      gitlink: 'https://github.com/Davidekliw/portfolio'
    },
    {
      title: 'El Pollo Loco',
      technologies: 'JavaScript, Canvas, HTML, CSS',
      description: 'This is a description of Project El Pollo Loco.',
      image: '../../../../assets/img/platzhalter.png',
      link: 'https://epl.david-wilke.com',
      gitlink: 'https://github.com/Davidekliw/El-Pollo-Loco'
    },
    {
      title: 'Pokedex',
      technologies: 'JavaScript, API, HTML, CSS',
      description: 'This is a description Pokedex.',
      image: '../../../../assets/img/platzhalter.png',
      link: 'https://pokedex.david-wilke.com',
      gitlink: ''
    },
    {
      title: 'Gasthaus zur Talsperre',
      technologies: 'JavaScript, HTML, CSS',
      description: 'This is a description of Website.',
      image: '../../../../assets/img/platzhalter.png',
      link: 'https://gasthaus-zur-talsperre.de',
      gitlink: ''
    }
  ];
}
