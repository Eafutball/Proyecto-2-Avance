productos = async () => {
    try {
        let response = await fetch('Productos.json'); // Fetching the JSON file
        let data = await response.json(); // Parsing JSON data
        
        let lista = data.productos

        let PrecioProductos = lista.map(element => element.imagenDestacada)
        console.log(PrecioProductos)
       
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
};

productos();
