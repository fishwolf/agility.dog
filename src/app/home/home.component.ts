import { Component, OnInit } from '@angular/core';
import { StructApiBase } from '../app.interfaces';
//import { ApiNextEvents } from '../app.interfaces';

import { environment } from '../../environments/environment';
import { HttpClient, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit 
{
    NextEvents: any;
    LastEvents: any;
    
    constructor(private http: HttpClient)
    {
    }

    ngOnInit() 
    {
        this.getCurrentLocation();
        
        this.LoadNextWeek();
        
        this.LoadLastWeek();
    }
    
    private getCurrentLocation() 
    {
        if ('geolocation' in navigator) 
        {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log ("latitude", position.coords.latitude);
                console.log ("longitude", position.coords.longitude);
                
                localStorage.setItem("ad_Latitude", position.coords.latitude.toString(10) );
                localStorage.setItem("ad_Longitude", position.coords.longitude.toString(10) );
            });
        }
    }
    
    LoadNextWeek()
    {
        // Mode 1 - Chiamata http diretta
        this.http
            .get(environment.ApiUrl + "/ad/events/nextweek")
            .subscribe((json: StructApiBase)=>
            {
                console.log("json=", json);
                console.log("json.result=", json.result);
                console.log("json.result.code=", json.result.code);
                console.log("json.data=", json.data);

                if(json.result.code == 0)
                {
                    this.NextEvents = json.data;
                    console.log("NextEvents=", this.NextEvents);
                }    
            }
        );
        
        /*
         * MARCO
        
        this.http
            .get<ApiNextEvents>(environment.ApiUrl + '/ad/events/nextweek') 
            .subscribe(response => 
            {
                console.log('response', response);
                if (response.result.code === 0) 
                {
                    console.log("Data=", response.data);
                    this.NextEvents = response.data;
                }    
            });
        */          
        
    }
    
    
    LoadLastWeek()
    {
        // Mode 1 - Chiamata http diretta
        this.http
            .get(environment.ApiUrl + "/ad/events/lastweek")
            .subscribe((json: StructApiBase)=>
            {
                console.log("json=", json);
                if(json.result.code == 0)
                {
                    this.LastEvents = json.data;
                    console.log("LastEvents=", this.LastEvents);
                    /*
                    this.LastEvents = json.data.reduce((r, v, i) => 
                    {
                        const matrixIdx = Math.floor((i+2)/2) -1;
                        r[matrixIdx] = (r[matrixIdx] || []).concat(v);
                        return r;
                    }, [])
                    console.log("LastEvents=", this.LastEvents);
                    */
                }    
            }
        );       
    }

}
