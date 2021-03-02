function adicionaTarefa(){
    const tarefaAdd = document.getElementById("tarefa")
    const diaAdd = document.getElementById("dias-semana")
    console.log(tarefaAdd.value)
    console.log(diaAdd.value)



    if(diaAdd.value == "domingo"){
      const diaDomingo = document.getElementById("domingo")  
      diaDomingo.innerHTML +=`<li>${tarefaAdd.value}`
    }
    else if(diaAdd.value == "segunda"){
        const diaSegunda = document.getElementById("segunda")  
        diaSegunda.innerHTML +=`<li>${tarefaAdd.value}`
      }

      else if(diaAdd.value == "terca"){
        const diaTerca = document.getElementById("terca")  
        diaTerca.innerHTML +=`<li>${tarefaAdd.value}`
      }

      else if(diaAdd.value == "quarta"){
        const diaQuarta = document.getElementById("quarta")  
        diaQuarta.innerHTML +=`<li>${tarefaAdd.value}`
      }


      else if(diaAdd.value == "quinta"){
        const diaQuinta = document.getElementById("quinta")  
        diaQuinta.innerHTML +=`<li>${tarefaAdd.value}`
      }

      else if(diaAdd.value == "sexta"){
        const diaSexta = document.getElementById("sexta")  
        diaSexta.innerHTML +=`<li>${tarefaAdd.value}`
      }

      else{
        const diaSabado = document.getElementById("sabado")  
        diaSabado.innerHTML +=`<li>${tarefaAdd.value}`
      }
  
      tarefaAdd.value = ""
   
    
}

