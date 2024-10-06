function checkAge(){

    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
  
    try{
        const age = parseInt(ageText);

        if(isNaN(age)){
            // console.log('age not found', age, ageText);
            throw "Please enter a number";
        }
        else if(age < 18){
            throw "Bccha kaccha not allowed";
        }
        errorTag.innerHTML = '';
        
    }
    catch(err){
        console.log('ERROR', err);
        errorTag.innerHTML = 'ERROR:' +err;
    }
    finally{
        console.log('all done');
    }
    console.log(111111);
}