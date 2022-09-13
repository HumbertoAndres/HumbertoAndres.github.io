const button = document.getElementById("button");
button.addEventListener("click", () => {
        setDatosPost();
});

setDatosPost = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type","application/json");

    var raw = JSON.stringify({
        "action": "DATOSACTUALES",
        "user": "algarrobales",
        "pwd": "2022"
    });
    
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
     fetch("https://gps.trailingsat.com.ar/api/WService.js", requestOptions)
       
        .then((result) => result.json())
        .catch(error => console.log('error', error))
        .then((result) => {
            //console.log(result);
            const list = document.getElementById('Lista');
            const fragment= document.createDocumentFragment()
            for (const userInfo of result) {
                const itemList = document.createElement('li');
                itemList.textContent= `${userInfo.patente} - ${userInfo.id} ${userInfo.latitud} ${userInfo.longitud} -  ${userInfo.fecha}`;
                fragment.appendChild(itemList);
            }
            list.appendChild(fragment);
        }); 
};
