//variables
const resultado = document.querySelector('#resultado')
const year = document.querySelector('#year')

const max = new Date().getFullYear()
const min = max - 10


// console.log(max)
//Eventos
document.addEventListener('DOMContentLoaded',() =>{
    //Muestra los autos al cargar
    mostraAutos()


    //llena las opciones de años
    llenarSelect()
})

//funciones
function mostraAutos(){

    
    autos.forEach(auto => {
        const {marca,modelo,year,puerta,transmision,precio,color} =auto
        const autoHTML = document.createElement('p')

        autoHTML.textContent = `${marca}
                                ${modelo} - 
                                ${year} - 
                                ${puerta} 
                                Puertas -Transmision: 
                                ${transmision} - 
                                Precio: ${precio} -
                                Color: ${color}`

        resultado.appendChild(autoHTML)
    });
}

//Genera los años del select
function llenarSelect(){

    console.log('Holaa')
    for( let i = max; i >= min ; i-- ){
        const opcion = document.createElement('option')   
        opcion.value = i;
        opcion.textContent = i 

        year.appendChild(opcion)
    }
}