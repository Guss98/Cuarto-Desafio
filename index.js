let Pizzas = [
    {
    id: '1',
    nombre: 'Muzza', 
    ingredientes : ['Salsa de tomate, Muzzarella y Oregano'], 
    precio: 'Su precio es: $500',
    imagen: "https://quem.com.ar/wp-content/uploads/2018/05/Pizza-e1584547627773.jpg",
    },
    
    {
    id: '2',
    nombre: 'Especial', 
    ingredientes: ['Salsa de tomate, Muzzarella, Jamon Cocido y Oregano'], 
    precio: 'Su precio es: $800',
    imagen: "https://images.deliveryhero.io/image/pedidosya/products/4129e125-9c4e-4c25-9f01-14ebacaf6e13.jpg?quality=90&width=248",
    },
    
    {
    id: '3', 
    nombre: 'Caprese',
    ingredientes: ["Salsa de tomate, Muzzarella, Tomate en Rodajas y Albahaca"],
    precio: 'Su precio es: $700',
    imagen: "https://matera.cl/wp-content/uploads/2019/10/DSC_2483-1-500x500.jpg",
    },
    
    { id: '4', 
    nombre: 'Americana',  
    ingredientes: ['Salsa de tomate, Muzzarella, Panceta y Huevo Frito'], 
    precio: 'Su precio es: $900',
    imagen: "https://safariresto.com.ar/wp-content/uploads/2020/10/pizza-americana.jpg",
    },
    
    {
    id: '5', 
    nombre: 'Provolone', 
    ingredientes: ['Salsa de tomate, Muzzarella, Queso Provolone'], 
    precio: 'Su precio es: $850',
    imagen: "https://media-cdn.tripadvisor.com/media/photo-s/19/72/d5/f6/provolone.jpg",
    },
    
    {
    id: '6', 
    nombre: 'Rucula y crudo', 
    ingredientes: ['Salsa de tomate, Muzzarella, Rucula Fresca y Jamon Crudo'], 
    precio: 'Su precio es: $1000',
    imagen: "https://www.recetasnatura.com.ar/sites/default/files/styles/receta_cuerpo/public/pizza-de-jamon-crudo-rucula-y-tomates-secos.jpg?itok=jdGKX1y9"
    },

]

document.addEventListener('DOMContentLoaded', ()=>{
    const PizzasLocal= localStorage.setItem('Pizzas', JSON.stringify(Pizzas));
})


const descripcion = document.getElementById ('descripcion');    
const boton = document.getElementById ('boton');
const input = document.getElementById ('input');
const titulo = document.getElementById ('titulo');
const precio = document.getElementById ('precio');
const error = document.getElementById ('error');
const imagen = document.getElementById ('imagen');
const contIng = document.getElementById ('contIng');
const ing = document.getElementById ('ing');

        



 boton.addEventListener ('click', () => {  
     let existe = Pizzas.find(elemento => elemento.id == input.value);  

     while(imagen.firstChild ){
        imagen.removeChild(imagen.firstChild);

    }
          if (existe == null) {          
             error.style.display= 'block';
             descripcion.style.display= 'none';
             precio.style.display= 'none'; 
             ing.style.display = 'none';   
             img.style.display = 'none';      
         }  
         else { titulo.style.display= 'block';
                 precio.style.display= 'block';
                 ing.style.display = 'block';
                 imagen.style.display = 'block';    

                  titulo.innerText=existe.nombre;
                  precio.innerText= existe.precio;
                  ing.innerText = existe.ingredientes;  
                  error.style.display= 'none';
                  descripcion.style.display ='none';

                  const foto = document.createElement ('img');
                  foto.setAttribute('src', existe.imagen);
                  imagen.appendChild (foto);   
                  
         } 
       input.value = '';
          
     });