import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
  })

export class AuthService {

    private loginURL = 'https://edmission-service-authenticator.azuremicroservices.io/api/v1'; 
    private studURL = 'https://edmission-service-studentprofile.azuremicroservices.io/api/v1';

    constructor(private http: HttpClient, private router: Router) {
    }

    abc: any;
    studentId: any;

    loginStudent(userName: string, password: string) {
        console.log("logging in user", userName)
        this.http.post<any>(`${this.loginURL}/user/login`, { userName, password })
            .pipe(map(response => {
            
            this.studentId = response.studentId;
            console.log("ID is: "+ this.studentId);
              // check if the login request was successful
              if (response && response.token) {
                  // save the token in the session
                  sessionStorage.setItem('student-id', response.studentId);
                  sessionStorage.setItem('token', response.token);
                  this.abc =sessionStorage.getItem('token');
                  console.log('token is:>>> '+this.abc);
              }
              if (response.studentId == null){ // null will be replaced by the list which came from backend with studentID's
                alert("Invalid Login credentals");
              }
              else{
                this.router.navigate(['/student/profile', response.studentId]);
              }

          }),

          catchError(this.handleError)

          )
          .subscribe();
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.status == 409){ 
      alert("Invalid ID and password");
    }
    else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
      // alert("Invalid ID and password");
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  
  isloggedIn(){

    let token = sessionStorage.getItem("token");

    if(token == undefined || token =='' || token == null){
      return false;
    }else{
      return true;
    }
  }

    register(firstName: string, lastName: string, userName: string, mobile: string, 
        password: string, country: string, userType: string) {
        console.log("registering in user", firstName)
        this.http.post<any>(`${this.loginURL}/user/register`, { firstName, lastName, userName,
             country, mobile, password, userType })
            .pipe(map(response => {
                // check if the login request was successful
                if (response && response.token) {
                    // save the token in the session
                    sessionStorage.setItem('student-id', response.studentId);
                    sessionStorage.setItem('token', response.token);
                }
            }))
            .subscribe();
    }

    
  getStudentDetails():  Observable <any>{    
    console.log("fetching student data in service method, TOKEN IS " + this.abc);
    var a = sessionStorage.getItem('token');
    console.log('token in service: '+a);

    const headers = {
  'Authorization': `Bearer ${a}`
  };

    return this.http.get(`${this.studURL}/student`, { headers })
   
  }

  getstudentpersonalInfo():  Observable <any>{

    // console.log("fetching student data in service method, TOKEN IS " + this.abc);
    var a = sessionStorage.getItem('token');
    console.log('token in service: '+a);

    const headers = {
  'Authorization': `Bearer ${a}`
  };

    return this.http.get(`${this.studURL}/student/personalInfo`, { headers })

  }
  
  getstudenteducation():  Observable <any>{

    // console.log("fetching student data in service method, TOKEN IS " + this.abc);
    var a = sessionStorage.getItem('token');
    console.log('token in service: '+a);

    const headers = {
  'Authorization': `Bearer ${a}`
  };

    return this.http.get(`${this.studURL}/student/educationSummary`, { headers })

  }

}