const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito");

const productos = [
    {
        id: 1,
        nombre: "Vestido Amberi Black",
        precio: 111800,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/128/259/products/bcp_03261-aab3188601ab4b6e2b15426833880370-1024-1024.jpg",
        cantidad: 1,
    },
    {
        id: 2,
        nombre: "Vestido Solei",
        precio: 111900,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/128/259/products/10-13-22studio1_kj_ac_11-32-07_22_cd54951_mauve_2966_jb_468x2x1-9f963f15eb4a0c453716702836544150-1024-1024.jpg",
        cantidad: 1,
    },
    {
        id: 3,
        nombre: "Vestido West",
        precio: 108900,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/128/259/products/05002-2551_3_943721f2-284a-4434-9772-46e7fa8fa680_633x715_crop_center-11-3f96a9666bde9b49e116698223765694-1024-1024.jpg",
        cantidad: 1,
    },
    {
        id: 4,
        nombre: "Vestido April",
        precio: 107800,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/128/259/products/10-13-22studio1_kj_ac_10-30-24_6_cd54892_black_2673_jb_468x2x1-a2d4d3e6739101bdae16696809741446-1024-1024.jpg",
        cantidad: 1,
    },
    {
        id: 5,
        nombre: "Vestido Phant",
        precio: 111900,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/128/259/products/05002-2486_1_633x715_crop_center1-fb76fce7eb613a62d516661384132323-1024-1024.jpg",
        cantidad: 1,
    },
    {
        id: 6,
        nombre: "Vestido Kily Blue",
        precio: 104700,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/128/259/products/05002-1476_1_205dcda9-dc82-4327-a396-47aa7745c2ac_500x600_crop_center1-a71b79d76fb0dec90816388141521432-1024-1024.jpg",
        cantidad: 1,
    },
    {
        id: 7,
        nombre: "Vestido Gianni",
        precio: 120500,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/128/259/products/05002-1735_4_500x600_crop_center1-9db80ff4444dfbbb1616385779186597-1024-1024.jpg",
        cantidad: 1,
    },
    {
        id: 8,
        nombre: "Vestido Georgia",
        precio: 112500,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/128/259/products/05002-1422_1_500x600_crop_center1-1980ae0eccf0d90e8816385778568077-1024-1024.jpg",
        cantidad: 1,
    },
    {
        id: 9,
        nombre: "Vestido Mery",
        precio: 105800,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/128/259/products/16661401583971-2665bd256ed9639c5616661404163796-1024-1024.jpg",
        cantidad: 1,
    },
    {
        id: 10,
        nombre: "Vestido Faen",
        precio: 100500,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/128/259/products/05002-2453_1_afc081cc-96d9-47da-a048-2147095a8f20_633x715_crop_center1-16072393cd9555c20716642254682476-1024-1024.jpg",
        cantidad: 1,
    },
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((vestidos)=>{
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src= "${vestidos.img}">
    <h3>${vestidos.nombre}</h3>
    <p class="price">${vestidos.precio}$</p>
    `;

    shopContent.append(content);

    let shopping = document.createElement("button");
    shopping.innerText = "AGREGAR AL CARRITO";
    shopping.className = "comprar";

    content.append(shopping);

    shopping.addEventListener("click", () =>{
    
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === vestidos.id);
    
    if (repeat){
        carrito.map((prod) => {
            if (prod.id === vestidos.id){
                prod.cantidad++;
            }
        });
    } else {
        carrito.push({
            id: vestidos.id,
            img: vestidos.img,
            nombre: vestidos.nombre,
            precio: vestidos.precio,
            cantidad: vestidos.cantidad,
        });
    }
        console.log(carrito);
        carritoCounter();
        saveLocal();
    });
});

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}