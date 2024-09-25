import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-new-match-form',
  standalone: true,
  imports: [],
  templateUrl: './new-match-form.component.html',
  styleUrl: './new-match-form.component.css',
})
export class NewMatchFormComponent {
  matchForm!: FormGroup;
  teams: any = [];

  constructor(public fb: FormBuilder, public teamsService: TeamsService) {}

  ngOnInit() {
    this.matchForm = this.fb.group({
      homeTeam: [''],
      awayTeam: [''],
      homeGoals: [0],
      awayGoals: [0],
    });

    this.teamsService.getAllTeams().subscribe((teams: any) => {
      // Ordenar los equipos por ID de menor a mayor
      this.teams = teams.sort((a: any, b: any) => a.id - b.id);
      console.log(this.teams);
    });
  }
}
