let robarPlanos=(id,despegarNave)=>{

    if(id>0 && id <=10){
        console.log(`Accedimos a el plano${id}`)
        despegarNave(null);
    }else{
        console.log(`Accedimos a el plano falso`)
        despegarNave("error");
    }

}

robarPlanos(15,error=>{
    if(error){

        console.log("devolvete papa");

    }else{

    }
    console.log("arrancando la nave...");
});