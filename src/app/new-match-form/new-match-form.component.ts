import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatchService } from '../services/match/match.service';
import { TeamService } from '../services/team/team.service';

@Component({
  selector: 'app-new-match-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-match-form.component.html',
  styleUrl: './new-match-form.component.css',
})
export class NewMatchFormComponent {
  matchForm: FormGroup;
  teams: any[] = [];
  matches: any[] = [];

  constructor(
    private fb: FormBuilder,
    private matchService: MatchService,
    private teamService: TeamService
  ) {
    // Inicialización del formulario
    this.matchForm = this.fb.group({
      localTeamId: ['', Validators.required],
      awayTeamId: ['', Validators.required],
      localGoals: [0, [Validators.required, Validators.min(0)]],
      awayGoals: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    // Obtener los equipos cuando el componente se inicializa
    this.teamService.getAllTeams().subscribe((data: any[]) => {
      this.teams = data;
    });
    this.loadMatches();
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit(): void {
    if (this.matchForm.valid) {
      this.matchService.createMatch(this.matchForm.value).subscribe(
        (response) => {
          console.log('Partido guardado:', response);
          this.matchForm.reset();
        },
        (error) => {
          console.error('Error al guardar el partido:', error);
        }
      );
    }
  }

  loadMatches(): void {
    this.matchService.getAllMatches().subscribe((data: any[]) => {
      this.matches = data;
    });
  }
}
