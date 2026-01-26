import { Component, ElementRef, QueryList, ViewChildren, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../service/language.service';

interface Project {
  title: string;
  technologies: string;
  descriptionDE: string;
  descriptionEN: string;
  image: string;
  link: string;
  gitlink: string;
}

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './application.component.html',
  styleUrl: './application.component.scss'
})

/**
 * Applications/projects section component.
 * Renders project cards and animates them when they enter the viewport.
 */
export class ApplicationComponent implements AfterViewInit, OnDestroy {

  private observer?: IntersectionObserver;

  /** Project card elements observed for "enter viewport" animations. */
  @ViewChildren('laptopEl') laptops!: QueryList<ElementRef<HTMLElement>>;

  constructor(public lang: LanguageService) { }

  /**
   * Sets up an IntersectionObserver to toggle the "open" CSS class
   * when project elements enter/leave the viewport.
   */
  ngAfterViewInit(): void {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => e.target.classList.toggle('open', e.isIntersecting));
    }, {
      rootMargin: '-350px 0px -200px 0px',
      threshold: 0.1
    });
    this.laptops.forEach(l => io.observe(l.nativeElement));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  /* true if the current language is English */
  get isEN(): boolean {
    return this.lang.getStorageInformation().key === 'en';
  }

  /** List of projects to be displayed in the application section. */
  readonly projects: Project[] = [
    {
      title: 'JOIN',
      technologies: 'JavaScript, HTML, CSS',
      descriptionDE: 'JOIN ist ein Kanban-Board und wurde als Gruppenarbeit erstellt. Aufgaben können erstellt, zugewiesen und per Drag & Drop zwischen Status-Spalten verschoben werden.',
      descriptionEN: 'JOIN is a Kanban board built as a group project. Tasks can be created, assigned and moved between status columns using drag & drop.',
      image: 'assets/img/join.png',
      link: 'https://join.david-wilke.com',
      gitlink: 'https://github.com/ChristianBockshorn/JOIN-46#'
    },
    {
      title: 'Portfolio',
      technologies: 'Angular, JavaScript, HTML, CSS, PHP',
      descriptionDE: 'Mein persönliches Portfolio zur Präsentation meiner Projekte. Fokus auf modernes UI, Responsive Design, Mehrsprachigkeit und ein Kontaktformular.',
      descriptionEN: 'My personal portfolio website showcasing my projects. Focused on modern UI, responsive design, multi-language support and a contact form.',
      image: 'assets/img/platzhalter.png',
      link: '#start',
      gitlink: 'https://github.com/Davidekliw/portfolio'
    },
    {
      title: 'El Pollo Loco',
      technologies: 'JavaScript, Canvas, HTML, CSS',
      descriptionDE: 'Ein kleines Jump’n’Run-Game mit Canvas. Enthält Animationen, Gegner-Logik, Kollisionen und ein simples Game-Loop-System.',
      descriptionEN: 'A small jump’n’run game built with Canvas. Includes animations, enemy logic, collisions and a simple game loop system.',
      image: 'assets/img/epl.png',
      link: 'https://el-pollo-loko.david-wilke.com',
      gitlink: 'https://github.com/Davidekliw/El-Pollo-Loco'
    },
    {
      title: 'Pokedex',
      technologies: 'JavaScript, API, HTML, CSS',
      descriptionDE: 'Ein Pokédex mit Live-Daten aus einer API. Pokémon können gesucht und angezeigt werden – inklusive Details wie Typen und Basiswerte.',
      descriptionEN: 'A Pokédex using live data from an API. Search and display Pokémon including details like types and base stats.',
      image: 'assets/img/pokedex.png',
      link: 'https://pokedex.david-wilke.com',
      gitlink: ''
    },
    {
      title: 'Gasthaus zur Talsperre',
      technologies: 'JavaScript, HTML, CSS',
      descriptionDE: 'Moderne Restaurant-Website mit integriertem Menü-Generator: Der Betreiber kann Speisekarteninhalte selbst zusammenstellen, die als JSON gespeichert und dynamisch auf der Website angezeigt werden. Zusätzlich lässt sich ein Urlaubszeitraum pflegen, der an stelle der Speisekarte angezeigt wird.',
      descriptionEN: 'Modern restaurant website with a built-in menu generator: The owner can create and update the menu, which is stored as JSON and displayed dynamically on the website. In addition, a vacation period can be set and will be shown instead of the menu.',
      image: 'assets/img/gasthaus.png',
      link: 'https://gasthaus-zur-talsperre.de',
      gitlink: ''
    },
    {
      title: 'Praxis Leben Gestalten',
      technologies: 'JavaScript, HTML, CSS',
      descriptionDE: 'Eine professionelle Website für eine Praxis mit Fokus auf ruhiges Design, responsiven Aufbau und einer schnellen Orientierung für Besucher.',
      descriptionEN: 'A professional website for a practice with a calm design, responsive layout and easy navigation for visitors.',
      image: 'assets/img/lebengestalten.png',
      link: 'https://praxis-lebengestalten.com/',
      gitlink: ''
    }
  ];
}