const pintarCarrito = () =>{
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "X";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", () =>{ 
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalButton);

    carrito.forEach((vestidos)=>{
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <img src="${vestidos.img}">
        <h3>${vestidos.nombre}</h3>
        <p>${vestidos.precio}$</p>
        <span class="restar"> - </span>
        <p>Cantidad: ${vestidos.cantidad}</p>
        <span class="sumar"> + </span>
        <p>Total: ${vestidos.cantidad * vestidos.precio}$</p>
        <span class="delete-product"> Eliminar </span>
        `;

        modalContainer.append(carritoContent);

        let restar = carritoContent.querySelector(".restar");
        restar.addEventListener("click", () => {
            if(vestidos.cantidad !== 1){
                vestidos.cantidad--;
            }
            saveLocal();
            pintarCarrito();
            });

        let sumar = carritoContent.querySelector(".sumar");
        sumar.addEventListener("click", () => {
            vestidos.cantidad++;
            saveLocal();
            pintarCarrito();
        });

        let eliminar = carritoContent.querySelector(".delete-product");
        eliminar.addEventListener("click", () => {
            eliminarProducto(vestidos.id);
        })
    });

    const total = carrito.reduce ((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalShop = document.createElement("div");
    totalShop.className = "total-content";
    totalShop.innerHTML = `Total a pagar: ${total}$`;
    modalContainer.append(totalShop);
};
verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoCounter();
    saveLocal();
    pintarCarrito();
};

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
}

carritoCounter();