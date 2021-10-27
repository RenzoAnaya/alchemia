class Cafe{
    constructor(id,nombre,origen,precio,URLimagen,stock){
        this.id=id;
        this.nombre=nombre;
        this.origen=origen;
        this.precio=precio;
        this.URLimagen=URLimagen
        this.stock=stock;
    }
}

const cafe1 = new Cafe(1,"Zeus","Cuzco",40,"https://cosasbucket.s3.amazonaws.com/wp-content/uploads/2020/05/09173832/unnamed-6-300x300.jpg",10)
const cafe2 = new Cafe(2,"Hefesto","Villarica",45,"https://4.bp.blogspot.com/-tXCc9h4povY/W9oEORtOUpI/AAAAAAAAMt4/Lf8HbGkdL38IHnniXJgC20zdTjz7JCxUACLcBGAs/s1600/Cafe-Tunki.jpg",15)
const cafe3 = new Cafe(3,"Ulises","Puno",35,"https://cafesperuanos.com/wp-content/uploads/2020/06/Dwight-Coffeee-grano-entero.png",5)
const cafe4 = new Cafe(4,"Hércules","Villarica",40,"https://wongfood.vteximg.com.br/arquivos/ids/161157-512-512/Cafe-Molido-Leyenda-Mocca-Bolsa-250-g-479428003.jpg?v=636104988783900000",5)
const cafe5 = new Cafe(1,"Zeus","Cuzco",40,"https://cosasbucket.s3.amazonaws.com/wp-content/uploads/2020/05/09173832/unnamed-6-300x300.jpg",10)
const cafe6 = new Cafe(2,"Hefesto","Villarica",45,"https://4.bp.blogspot.com/-tXCc9h4povY/W9oEORtOUpI/AAAAAAAAMt4/Lf8HbGkdL38IHnniXJgC20zdTjz7JCxUACLcBGAs/s1600/Cafe-Tunki.jpg",15)
const cafe7 = new Cafe(3,"Ulises","Puno",35,"https://cafesperuanos.com/wp-content/uploads/2020/06/Dwight-Coffeee-grano-entero.png",5)
const cafe8 = new Cafe(4,"Hércules","Villarica",40,"https://wongfood.vteximg.com.br/arquivos/ids/161157-512-512/Cafe-Molido-Leyenda-Mocca-Bolsa-250-g-479428003.jpg?v=636104988783900000",5)

const cafes = [cafe1,cafe2,cafe3,cafe4,cafe5,cafe6,cafe7,cafe8]

let acumulador = ""
cafes.forEach(item =>{
    acumulador += `
                    <div class="col card h-100">
                        <div class="card main_card BgProductos contenedorDeImagenes">
                            <img class="main__card__img" src="${item.URLimagen}" class="card-img-top" alt="cafe">
                            <div class="card-body ">
                                <h5 class="main__card__textoprincipal">${item.nombre}</h5>
                                <p class="main__card__textosecundario">Precio: ${item.precio}</p>
                                <p class="main__card__textosecundario">Origen: ${item.origen}</p>
                                <p class="main__card__textosecundario">Stock: ${item.stock}</p>
                                <a href="#" class="btn btn-primary main__card__boton">Añadir al carrito</a>
                            </div>
                        </div>
                    </div>`
})

document.getElementById("container").innerHTML = acumulador

