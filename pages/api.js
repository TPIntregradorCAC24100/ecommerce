
let contenedorComentarios = document.getElementById("news-container");


fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
  .then((Response)=> Response.json())
  .then((datos)=>{
    console.log(datos)

    //console.log(datos.results)
    
    datos.forEach((elementos) => {
        let contador = 0;
        do{
            const contenedorCreado = document.createElement('div')

            contenedorCreado.innerHTML= `
            
            <h4>${elementos.name}</h4>
            <p id="comentario">${elementos.body}</p>
            
            `;

            contenedorComentarios.append(contenedorCreado);
            contador++;
    
        }while(contador<6);
    });

    

  })


  