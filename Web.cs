using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


    public class Web
    {
       string url{get; set;}
    }
    public Web(string url){
        this.url = "https://fastsolutions.mroadmin.com/APEX-Login/login.jsp";
    }
    public override string ToString() {
        return url;
}
