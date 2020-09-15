import { Component, OnInit } from '@angular/core';
import { StructApiBase } from '../app.interfaces';
import { environment } from '../../environments/environment';
import { HttpClient, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-virtualcup',
  templateUrl: './virtualcup.component.html',
  styleUrls: ['./virtualcup.component.css']
})
export class VirtualcupComponent implements OnInit {

    //EditEmail:      string;
    //EditBinomial:   any;
    
    Subscription: any = {};
    
    
    
    FoundBinomials: any[];
    
    
    constructor(private http: HttpClient)
    {
    }

    ngOnInit() 
    {
        //this.EditEmail = localStorage.getItem("email");
        
        this.Subscription.email = localStorage.getItem("ad_email");
    }
    
    FindBinomials(event) 
    {
        let Keys = event.query;  
        console.log ("Keys:", Keys);
     
        this.http
            .get(environment.ApiUrl + "/ad/binomials/find/" + Keys)
            .subscribe((json: StructApiBase)=>
            {
                console.log("json=", json);
                if(json.result.code == 0)
                {
                    this.FoundBinomials = json.data;
                    console.log("FoundBinomials=", this.FoundBinomials);
                }    
            }
        );
    }
    
    SaveBinomial(event) 
    {
        let Keys = event.query;  
        
        console.log ("event:", event);
        //console.log ("EditEmail:", this.EditEmail);
        //console.log ("EditBinomial:", this.EditBinomial);
        
        console.log ("Subscription:", this.Subscription);
        
        localStorage.setItem("ad_email", this.Subscription.email);
        
        this.http
            .post(environment.ApiUrl + "/ad/binomials/virtualcup", this.Subscription)
            .subscribe((json: StructApiBase)=>
            {
                console.log("json=", json);
                if(json.result.code == 0)
                {
                    //this.FoundBinomials = json.data;
                    //console.log("FoundBinomials=", this.FoundBinomials);
                }    
            }
        );
    }

}
