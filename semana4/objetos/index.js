
function addPost(){
    const tituloPost = document.getElementById("titulo-post")
    const autorPost = document.getElementById("autor-post")
    const conteudoPost = document.getElementById("conteudo-post")
   

    const blog = {
        titulo: tituloPost.value,
        autor: autorPost.value,
        conteudo: conteudoPost.value,
       
    }
    console.log(blog)

    let postsBlog = []
    postsBlog.push(tituloPost.value, autorPost.value, conteudoPost.value); 

    console.log(postsBlog)

    const addTituloPost = document.getElementById("titulo-da-postagem")  
    addTituloPost.innerHTML += tituloPost.value

    const addAutorPost = document.getElementById("autor-da-postagem")  
    addAutorPost.innerHTML += autorPost.value

    const addConteudoPost = document.getElementById("conteudo-da-postagem")  
    addConteudoPost.innerHTML += conteudoPost.value


    tituloPost.value = ""
    autorPost.value = ""
    conteudoPost.value = ""

    
   


}

 
