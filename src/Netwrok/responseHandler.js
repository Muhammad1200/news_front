export const responseError = (e) => {

    let data = [];
    if(e.response.data.statusCode === 401) {
        data.push({message : e.response.data.message , color : 'warning'});
        if(e.response.data.errors.length > 0 && e.response.data.message){
            data.push({ message : e.response.data.message , color : 'warning'});
        }
    }
    else if(e.response.data.statusCode === 409){
        e.response.data.errors.map((val)=>{
            data.push({ message : val , color : 'warning'});
        });
        if(e.response.data.errors.length === 0 && e.response.data.message){
            data.push({ message : e.response.data.message , color : 'warning'});
        }
    }
    else if(e.response.data.statusCode === 422 || e.response.data.statusCode === 405){
        data.push( { message: e.response.data.errors , color : 'warning' } );
    }
    else if(e.response.data.statusCode === 400 && e.response.data.errors){
        for (let key in e.response.data.errors){
            if(e.response.data.errors.hasOwnProperty(key)){
                data.push({
                    message : e.response.data.errors[key][0],
                    color : 'warning'
                });
            }
        }

        if(e.response.data.errors.length === 0 && e.response.data.message){
            data.push({ message : e.response.data.message , color : 'warning'});
        }
    }
    else if(e.response.data.statusCode === 404){
        data.push({message : e.response.data.message , color : 'info'});
    }
    else{
        data.push({message : e.message ,color : 'danger' });
    }
    return data;

}