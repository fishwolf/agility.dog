import { Component, OnInit } from '@angular/core';
import { StructApiBase } from '../app.interfaces';

import { environment } from '../../environments/environment';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

    Calendars:  any;
        
    TypeEnci:   boolean;
    TypeCsen:   boolean;
    TypeFidasc: boolean;
    TypeFisc:   boolean;
    Type:       any;
         
    constructor(private http: HttpClient)
    {
        
    }

    ngOnInit() 
    {
        
        if (localStorage.getItem("ad_TypeEnci") === null)
        {
            this.TypeEnci = true;
        }
        else
        {
            this.TypeEnci = JSON.parse( localStorage.getItem("ad_TypeEnci") );
        }
        
        if (localStorage.getItem("ad_TypeCsen") === null)
        {
            this.TypeCsen = true;
        }
        else
        {
            this.TypeCsen = JSON.parse( localStorage.getItem("ad_TypeCsen") );
        }
        
        if (localStorage.getItem("ad_TypeFisc") === null)
        {
            this.TypeFisc = true;
        }
        else
        {
            this.TypeFisc = JSON.parse( localStorage.getItem("ad_TypeFisc") );
        }
        
        if (localStorage.getItem("ad_TypeFidasc") === null)
        {
            this.TypeFidasc = true;
        }
        else
        {
            this.TypeFidasc = JSON.parse( localStorage.getItem("ad_TypeFidasc") );
        }    
       
        this.LoadCalendars();
        
    }
    
    LoadCalendars()
    {
        
        let Parameters: any = {};
        //this.getCurrentLocation();
        
        this.Type = 0;
        if (this.TypeEnci == true)
        {
            this.Type = this.Type + 8;
        }
                
        if (this.TypeCsen == true)
        {
            this.Type = this.Type + 4;
        }
                
        if (this.TypeFisc == true)
        {
            this.Type = this.Type + 2;
        }
                
        if (this.TypeFidasc == true)
        {
            this.Type = this.Type + 1;
        }
                
        console.log("Type=", this.Type);
        
        Parameters.type      = this.Type;
        Parameters.distance  = localStorage.getItem("ad_Distance");
        Parameters.latitude  = localStorage.getItem("ad_Latitude");
        Parameters.longitude = localStorage.getItem("ad_Longitude");
        
        console.log("Parameters=", Parameters);
        //.get(environment.ApiUrl + "/ad/events/nextetcalendars.php?Email=fishwolf%40gmail.com&Type=" + this.Type + "&Distanza=2&Longitudine=0&Latitudine=0")
        
       
  
        //const headers = new HttpHeaders()
        //    .set("type", "xx");
            
        //    headers.set("type", Parameters.type);
        //headers.set("latitude", Parameters.latitude);
        


        this.http
            .get(environment.ApiUrl + "/ad/events/next/0")
            .subscribe((json: StructApiBase)=>
            {
                console.log("json=", json);
                if(json.result.code == 0)
                {
                    this.Calendars = json.data;
                    console.log("Calendars=", this.Calendars);
                }    
            });
        
    }
    
    onChangeTypeEnci(Event)
    {
        console.log ("onChangeTypeEnci", Event);
        if (this.TypeEnci == false)
        {
            this.TypeEnci = true;
        }
        else
        {
            this.TypeEnci = false;
        }
        localStorage.setItem("ad_TypeEnci", String(this.TypeEnci) );
        
        this.LoadCalendars();
    }
    
    onChangeTypeCsen()
    {
        console.log ("onChangeTypeCsen");
        if (this.TypeCsen == false)
        {
            this.TypeCsen = true;
        }
        else
        {
            this.TypeCsen = false;
        }
        localStorage.setItem("ad_TypeCsen", String(this.TypeCsen) );
        
        this.LoadCalendars();
    }
    
    onChangeTypeFisc()
    {
        console.log ("onChangeTypeFisc");
        if (this.TypeFisc == false)
        {
            this.TypeFisc = true;
        }
        else
        {
            this.TypeFisc = false;
        }
        localStorage.setItem("ad_TypeFisc", String(this.TypeFisc) );
        
        this.LoadCalendars();
    }
    
    onChangeTypeFidasc()
    {
        console.log ("onChangeTypeFidasc");
        if (this.TypeFidasc == false)
        {
            this.TypeFidasc = true;
        }
        else
        {
            this.TypeFidasc = false;
        }
        localStorage.setItem("ad_TypeFidasc", String(this.TypeFidasc) );
        
        this.LoadCalendars();
    }
    
}
