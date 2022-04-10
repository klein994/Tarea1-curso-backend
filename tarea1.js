const products = [{id: 1, title: 'hola', price: 2500, thumbnail: 'imagen'},{id: 2, title: 'hola hola', price: 500, thumbnail: 'imagen de ejm'}]

class Contenedor {
    constructor(id, titleid, price, thumbnail) {
        this.id = id
        this.title = titleid
        this.price = price
        this.thumbnail = thumbnail
    }

    save() {
        console.log(`Agregado el id:${products.length + 1}`)
        products.push({
            id: `${products.length + 1}`,title: `${this.title}`,price: `${this.price}`,thumbnail: `${this.thumbnail}`
        });
        return console.log(products)
    }

    getById() {
        console.log(`filtrado por id:${this.id}`)
        let filtrado = products.filter(prd => prd.id === this.id)
        return console.log(filtrado)
    }

    getAll() {
        console.log('Muestra todos')
        return console.log(products)
    }

    deleteById() {
        console.log(`Borrado el id:${this.id}`)
        for (let i =0; i < products.length; i++){
            if (products[i].id === this.id) {
                products.splice(i,1);
            }
        }
        return console.log(products)
    }

    deleteAll() {
        console.log('Elimina todos los elementos ')
        products.splice(0, products.length);
        return console.log(products)
    }

}
console.log('Array inicial')
console.log(products)
let persona = new Contenedor(null, 'agregado', 3000, 'imagen agregada');
persona.save();
let getById = new Contenedor(1);
getById.getById();
let getAll = new Contenedor();
getAll.getAll();
let deleteById = new Contenedor(2);
deleteById.deleteById();
let deleteAll = new Contenedor();
deleteAll.deleteAll();


