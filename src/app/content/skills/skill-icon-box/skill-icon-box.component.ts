import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Input } from '@angular/core';


interface Skill {
  icon: string;
  name: string;
}

@Component({
  selector: 'app-skill-icon-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-icon-box.component.html',
  styleUrl: './skill-icon-box.component.scss'
})
export class SkillIconBoxComponent {
  skills = [
    { icon: '../../../assets/skillIcons/Api.png', name: 'API' },
    { icon: '../../../assets/skillIcons/RxJs.png', name: 'RxJS' },
    { icon: '../../../assets/skillIcons/Cloud.png', name: 'Cloud' },
    { icon: '../../../assets/skillIcons/Docker.png', name: 'Docker' },
    { icon: '../../../assets/skillIcons/SQL.png', name: 'SQL' },
    { icon: '../../../assets/skillIcons/Heroku.png', name: 'Heroku' },
    { icon: '../../../assets/skillIcons/PostgreSQL.png', name: 'PostgreSQL' },
    { icon: '../../../assets/skillIcons/Flask.png', name: 'Flask' },
    { icon: '../../../assets/skillIcons/Redis.png', name: 'Redis' },
    { icon: '../../../assets/skillIcons/Linux.png', name: 'Linux' },
    { icon: '../../../assets/skillIcons/Django.png', name: 'Django' },
    { icon: '../../../assets/skillIcons/Ebene_1.png', name: 'Ebene 1' },
    { icon: '../../../assets/skillIcons/Vue Js.png', name: 'Vue.js' },
    { icon: '../../../assets/skillIcons/Continually learning.png', name: 'Continually Learning' },
    { icon: '../../../assets/skillIcons/Material Design.png', name: 'Material Design' },
    { icon: '../../../assets/skillIcons/Angular.png', name: 'Angular' },
    { icon: '../../../assets/skillIcons/JavaScript.png', name: 'JavaScript' },
    { icon: '../../../assets/skillIcons/Firebase.png', name: 'Firebase' },
    { icon: '../../../assets/skillIcons/Typescript.png', name: 'TypeScript' },
    { icon: '../../../assets/skillIcons/Scrum.png', name: 'Scrum' },
    { icon: '../../../assets/skillIcons/Wordpress.png', name: 'WordPress' },
    { icon: '../../../assets/skillIcons/html.png', name: 'HTML' },
    { icon: '../../../assets/skillIcons/css.png', name: 'CSS' },
    { icon: '../../../assets/skillIcons/Git.png', name: 'Git' }

  ];
}
