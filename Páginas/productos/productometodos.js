class Metodo{
    constructor(id,nombre,molienda,precio,URLimagen,stock){
        this.id=id;
        this.nombre=nombre;
        this.molienda=molienda;
        this.precio=precio;
        this.URLimagen=URLimagen
        this.stock=stock;
    }
}

const metodo1 = new Metodo(1,"Aeropress","Todas",180,"https://cdn.shopify.com/s/files/1/0286/1308/3188/products/MetodosNuevoRatio-15-19_590x.png?v=1589677656",3)
const metodo2 = new Metodo(2,"V60","Media-fina",150,"https://sc04.alicdn.com/kf/H3f35fa0b264f41bf96cd461552ad897fb.jpg",15)
const metodo3 = new Metodo(3,"Kalita","Media-fina",180,"https://ae01.alicdn.com/kf/H9827de1aacdc47638e6f0f95fa867fd7h/Japan-Kalita-Hand-Made-Coffee-Pot-Set-Fan-shaped-Drip-Filter-Coffee-Glass-Pot-Three-Hole.jpg",5)
const metodo4 = new Metodo(4,"Chemex","Media",250,"https://falabella.scene7.com/is/image/FalabellaPE/770682279_1?wid=800&hei=800&qlt=70",5)

const metodos = [metodo1,metodo2,metodo3,metodo4]

let acumulador = ""
metodos.forEach(item =>{
    acumulador += `
                    <div class="card main__card" style="width: 18rem;">
                        <img class="main__card__img" src="${item.URLimagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="main__card__textoprincipal">${item.nombre}</h5>
                            <p class="main__card__textosecundario">Precio: ${item.precio}</p>
                            <p class="main__card__textosecundario">Molienda usada: ${item.molienda}</p>
                            <p class="main__card__textosecundario">Stock: ${item.stock}</p>
                            <a href="#" class="btn btn-primary main__card__boton">Añadir al carrito</a>
                        </div>
                    </div>`
})

document.getElementById("container").innerHTML = acumulador


