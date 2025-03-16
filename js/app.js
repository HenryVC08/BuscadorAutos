//variables
const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')


const resultado = document.querySelector('#resultado')


const max = new Date().getFullYear()
const min = max - 10

//Generar objetos con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}


// console.log(max)
//Eventos
document.addEventListener('DOMContentLoaded',() =>{
    //Muestra los autos al cargar
    mostraAutos()


    //llena las opciones de años
    llenarSelect()
})

//Event Lisener para los select de busqueda
marca.addEventListener('change', (e)=>{
    datosBusqueda.marca = e.target.value

    filtrarAuto()
})

year.addEventListener('change', (e)=>{
    datosBusqueda.year = e.target.value
})

minimo.addEventListener('change', (e)=>{
    datosBusqueda.minimo = e.target.value
})

maximo.addEventListener('change', (e)=>{
    datosBusqueda.maximo = e.target.value
})

puertas.addEventListener('change', (e)=>{
    datosBusqueda.puertas = e.target.value
})

transmision.addEventListener('change', (e)=>{
    datosBusqueda.transmision = e.target.value
})

color.addEventListener('change', (e)=>{
    datosBusqueda.color = e.target.value
    console.log(datosBusqueda)
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

    for( let i = max; i >= min ; i-- ){
        const opcion = document.createElement('option')   
        opcion.value = i;
        opcion.textContent = i 

        year.appendChild(opcion)
    }
}

function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca)
    console.log(resultado)
}

function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca
    }
    return auto
}