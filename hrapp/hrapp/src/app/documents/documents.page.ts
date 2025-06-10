import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class DocumentsPage {
  documents = [
    { title: 'Contrato de trabajo', date: '2023-08-15' },
    { title: 'Recibo de pago', date: '2023-07-20' },
    { title: 'Vacaciones aprobadas', date: '2023-06-25' },
    { title: 'Evaluación de desempeño', date: '2023-05-30' },
    { title: 'Certificado de ingresos', date: '2023-04-05' },
    { title: 'Política de la empresa', date: '2023-03-10' },
    { title: 'Beneficios del empleado', date: '2023-02-15' },
    { title: 'Formulario de impuestos', date: '2023-01-20' },
  ];

  constructor() {}
}
