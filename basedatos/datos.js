//definimos la lista para alacenar los daros del carrusel
const elementos_carrusel = [
    {
        nombre: "productos de aseo marca ",
        descripcion: "Producto de aseo",
        imagen: "image/foto1.jpg"
    },
    {
        nombre: "productos en oferta",
        descripcion: "Productos con descuentos",
        imagen: "image/fotopromo.jpg"
    },
    {
        nombre: "Frutas frescas",
        descripcion: "Las mejores frutas de temporada, directo del campo.",
        imagen: "image/foto3.jpg"
    },
    {
        nombre: "Verduras saludables",
        descripcion: "Alimentos verdes para una vida sana.",
        imagen: "image/foto4.jpg"
    },
    {
        nombre: "Lácteos y quesos",
        descripcion: "Variedad en leche, yogurt y quesos artesanales.",
        imagen: "image/foto5.jpg"
    }
]
const lista_categorias =[
    {   
    
    nombre: "Granos y Cereales",
    codigo: 1,
    descripcion: "Arroz, lentejas, fríjoles, avena, maíz",
    imagen:"image/categoria1.jpg"
    },
    {
    nombre: "Lácteos y Derivados",
    codigo: 2,
    descripcion: "Leche, yogures, quesos, mantequilla, crema.",
    imagen:"https://placehold.co/400x400?text=Lácteos"
    },
    {   
    nombre: "Carnes y Pescados",
    codigo: 3,
    descripcion: "Res, cerdo, pollo, pescado, embutidos.",
    imagen:"image/categoria.jpg1"
    },
    {
    nombre: "Frutas y Verduras",
    codigo: 4,
    descripcion: "Frescas, congeladas, hierbas y hortalizas.",
    imagen:"https://placehold.co/400x400?text=Frutas"
    },
    {   
    nombre: "Panadería y Pastelería",
    codigo: 5,
    descripcion: "Pan, tortas, galletas, arepas",
    imagen:"image/categoria1.jpg"
    },
    {
    nombre: "Bebidas",
    codigo: 6,
    descripcion: "Gaseosas, jugos, agua, energizantes, café, té.",
    imagen:"image/categoria1.jpg"
    },
    {   
    nombre: "Aseo del Hogar",
    codigo: 7,
    descripcion: "Detergentes, jabones, limpiadores, desinfectantes",
    imagen:"image/categoria1.jpg"
    },
    {
    nombre: "Cuidado Personal",
    codigo: 8,
    descripcion: "Shampoo, jabón corporal, cremas, desodorantes.",
    imagen:"image/categoria1.jpg"
    },
    {   
    nombre: "Enlatados y Conservas",
    codigo: 9,
    descripcion: "Atún, maíz dulce, salsas, sopas, conservas de frutas.",
    imagen:"image/categoria1.jpg"
    },
    {
    nombre: "Aceites y Condimentos",
    codigo: 10,
    descripcion: "Aceites, sal, azúcar, especias, salsas.",
    imagen:"image/categoria1.jpg"
    },
    {   
    nombre: "Snacks y Golosinas",
    codigo: 11,
    descripcion: "Papas fritas, chocolates, caramelos, galletas.",
    imagen:"image/categoria1.jpg"
    },
    {
    nombre: "Productos de Limpieza y Desinfección",
    codigo: 12,
    descripcion: "Limpiadores multiusos, desinfectantes, esponjas, guantes.",
    imagen:"image/categoria1.jpg"
    }
]
console.log("✅ datos.js cargado correctamente");

const lista_productos =[
    {   
    codigo: 101,
    nombre: "Arroz Diana",
    descripcion: "Arroz blanco de grano largo, 1kg",
    categoria: 1,
    imagen:"image/arrozdiana.jpg",
    precio: 2300,
    clasificacion: 3.0
    },
    {
    codigo: 102,
    nombre: "Leche Alpina Entera",
    descripcion: "Leche entera pasteurizada, 1 litro",
    categoria: 2,
    imagen:"image/lechealpina.jpg",
    precio: 5500,
    clasificacion: 4.0
    },
    {   
    codigo: 103,
    nombre: "Pollo Bandeja ",
    descripcion: "Pollo entero fresco, 1.5kg aprox",
    categoria: 3,
    imagen:"image/pollobandeja.jpg",
    precio: 24000,
    clasificacion: 4.5
    },
    {
    codigo: 110,
    nombre: "Carne Molida",
    descripcion: "Carne molida de res, 500g",
    categoria: 3,
    imagen:"image/carnemolida.jpg",
    precio: 16000,
    clasificacion: 5.0
    },
    {   
    codigo: 104,
    nombre: "papa criolla",
    descripcion: "papa criolla x kilo",
    categoria: 4,
    imagen:"image/papacriolla.jpg",
    precio: 4000,
    clasificacion: 5.0
    },
    {
     codigo: 105,
    nombre: "pan tajado",
    descripcion: "pan tajado familiar y fresco",
    categoria: 5,
    imagen:"image/pantajado.jpg",
    precio: 4500,
    clasificacion: 5.0
    },
    {   
    codigo: 106,
    nombre: "Gaseosa Coca Cola",
    descripcion: " Gaseosa Coca Cola 1.5 litros",
    categoria: 6,
    imagen:"image/gaseosa.jpg",
    precio: 7000,
    clasificacion: 5.0
    },
    {
    codigo: 107,
    nombre: "gaseosa pepsi",
    descripcion: " Gaseosa pepsi 1.5 litros",
    categoria: 6,
    imagen:"image/gaseosa.jpg",
    precio: 7000,
    clasificacion: 5.0
    },
    {   
    codigo: 108,
    nombre: "shampoo head & shoulders",
    descripcion: " shampoo head & shoulders 400ml",
    categoria: 8,
    imagen:"image/shampoo.jpg",
    precio: 25000,
    clasificacion: 3.7
    }
]
