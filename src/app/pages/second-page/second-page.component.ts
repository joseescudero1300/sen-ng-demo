import { AuthService, BreadCrumb, Respuesta, RolesService } from '@aduana/an-core';
import { ICrearEmpleadoDto, IEmpleado, IRecuperarEmpleadoDto } from '@aduana/sen-onion-demo-rest-dom-itf';
import { Component, OnInit } from '@angular/core';
import { ObjRespuestaLista } from 'src/app/models/ObjetoRespuesta';
import { EmpleadoService } from 'src/app/services/empleado-service.service';
import { MiServicio } from 'src/app/services/mi-servicio.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {
  userInfo : any = {};
  roles : any = {};
  constructor (
    private rolesService:RolesService, 
    private authService: AuthService,
    private miServicio:MiServicio,
    private empleadoService:EmpleadoService
    ) {    
  }

  miDato:string= '';
  list?: IRecuperarEmpleadoDto [] = [];
  
  listBread:BreadCrumb[] = [
    {
      link: '/asdas',
      titulo: 'Sistema'
    },
    {
      link: '/subsistema',
      titulo: 'Sub-sistema'
    }
  ];

  ngOnInit(): void {
    this.rolesService.data$.subscribe( data=>
      this.roles = data
    );

    this.userInfo =  this.authService.getLoggedUser();
    this.miServicio.data$.subscribe ( data => this.miDato = data);
  }

  getLista () {
    this.empleadoService
      .listaEmpleados()
      .subscribe(data=>{
        this.list = data.respuesta?.empleados;
      });
  }

  guardarEmpleado () {
    let empleado: ICrearEmpleadoDto = {
      nombres: 'Juan',
      apellidos: 'Pinto P.',
      codigoEmpleado: '002'
    } as ICrearEmpleadoDto;

    this.empleadoService
    .guardarEmpleado(empleado)
    .subscribe(data=>{
      console.log(data);
    });
  }



}
