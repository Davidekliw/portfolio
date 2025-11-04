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
      gitlink: 'https://github.com/Davidekliw/El-Pollo-Loco.git'
    },
    {
      title: 'El Pollo Loco',
      technologies: 'JavaScript, Canvas, HTML, CSS',
      description: 'This is a description of Project El Pollo Loco.',
      image: '../../../../assets/img/platzhalter.png',
      link: 'https://epl.david-wilke.com',
      gitlink: 'https://github.com/Davidekliw/El-Pollo-Loco.git'
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
