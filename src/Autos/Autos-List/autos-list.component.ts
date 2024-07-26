import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: "autos-list",
  templateUrl: "./autos-list.component.html"
})
export class AutoslistComponent implements OnInit {
  titleAutosList: string = "Autos-List";
  ShowImage: boolean = false;
  
  Autosarray = [
    {
      Code: 'M45',
      Brand: 'Ferrari',
      Model: '488 GTB',
      Year: 2015,
      Color: 'Red',
      Km: 10000,
      Price: 250000,
      Rating: 4.5,
      id: 1
    },
    {
      Code:'M36',
      Brand: 'Porsche',
      Model: '911 Carrera',
      Year: 2018,
      Color: 'Black',
      Km: 5000,
      Price: 180000,
      Rating: 4.8,
      id: 2
    },
    {
      Code: 'M37',
      Brand: 'Mercedes-Benz',
      Model: 'AMG GT',
      Year: 2016,
      Color: 'Silver',
      Km: 20000,
      Price: 150000,
      Rating: 4.2,
      id: 3
    },
    {
      Code: 'M38',
      Brand: 'BMW',
      Model: 'M4',
      Year: 2014,
      Color: 'White',
      Km: 30000,
      Price: 120000,
      Rating: 4.6,
      id: 4
    },
    {
      Code: 'M39',
      Brand: 'Audi',
      Model: 'R8',
      Year: 2017,
      Color: 'Blue',
      Km: 15000,
      Price: 200000,
      Rating: 4.9,
      id: 5
    },
  ];

  filteredautos: { Brand: string, Model: string, Year: number, Color: string, Km: number, Price: number, Rating: number, id: number }[] = [];
  private _filtro: string = "";

  get filtro(): string {
    return this._filtro;
  }

  set filtro(value: string) {
    this._filtro = value.trim().toLowerCase(); // Ensure to lowercase and trim input
    this.filteredautos = this.Autosarray.filter((auto) =>
      auto.Brand.toLowerCase().includes(this._filtro) || auto.Model.toLowerCase().includes(this._filtro)
    );
  }

  // New properties for user data
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.filteredautos = [...this.Autosarray]; 
  }

  toggleImage(): void {
    this.ShowImage = !this.ShowImage;
  }

  registerVehicle(): void {
    const apiUrl = 'https://epico.gob.ec/vehiculo/';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const vehicleData = this.Autosarray[0]; 
    const userData = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    const requestBody = {
      vehicle: vehicleData,
      user: userData
    };

    this.http.post(apiUrl, requestBody, { headers: headers })
     .subscribe(response => {
        console.log(response);
        // Handle successful response
        this.router.navigate(['/autos-list']); // Navigate back to autos list
      }, error => {
        console.error(error);
        // Handle error response
      });
  }

  updateVehicle(vehicleId: number): void {
    const apiUrl = `https://epico.gob.ec/vehiculo/${vehicleId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const vehicleData = this.Autosarray.find((auto) => auto.id === vehicleId);
    const userData = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    const requestBody = {
      vehicle: vehicleData,
      user: userData
    };

    this.http.put(apiUrl, requestBody, { headers: headers })
     .subscribe(response => {
        console.log(response);
     
        this.router.navigate(['/autos-list']); 
      }, error => {
        console.error(error);
      });
  }

  deleteVehicle(vehicleId: number): void {
    const apiUrl = `https://epico.gob.ec/vehiculo/${vehicleId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    this.http.delete(apiUrl, { headers: headers })
     .subscribe(response => {
        console.log(response);
        this.router.navigate(['/autos-list']); 
      }, error => {
        console.error(error);
        
      });
  }
} 
