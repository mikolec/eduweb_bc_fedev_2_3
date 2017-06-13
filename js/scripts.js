function fecz (url, success, failure) {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.send(null);

    xhr.onreadystatechange = function(e) {
        
        if( this.readyState === 4 && this.status === 200) {
            success(this.response);
        } else if( this.readyState === 4){
            failure(this.status);
        }
    };

    xhr.onerror = failure;


}

var url = "http://code.eduweb.pl/bootcamp/users/";

fecz(url, 
     function(data) {
        console.log("Sukces");
        console.log(data);
     }, 
     function(err) {
        console.log("Wystąpił błąd!");
        console.log(err);
     }
);
    
