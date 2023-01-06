import {
  deleteTask, getTask, onGetTasks, saveTask, updateTask,
} from './firebase.js';

export const homeE = () => {
  const taskContainer = document.getElementById('task-container');
  const taskForm = document.getElementById('task-form');
  let editando = false;
  let id = '';

  window.addEventListener('DOMContentLoaded', async () => {
  // const querySnapshot = await getTasks();

    onGetTasks((querySnapshot) => {
      let divContain = '';
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        divContain += `
        <section class="post">
        <div class="cabezaDePost">
        <img class="fotoDePerfil" src="imagenes/pug.jpg" alt='foto del usuario'>
        <p class="nombreDeUsuario">Manchitas</p>
        <img src="imagenes/mas.png" width=30px height=30px>
        <button class='delete' data-id='${doc.id}'> Eliminar </button>
        <button class='editar' data-id='${doc.id}'> Editar </button>
        </div>
        <div class="cuerpoDePost" >
        <p class="contenidoP"> ${task.description} </p> 
        </div>
        <div  class="linea"></div>
        <div class="footerDePost">
        <img src="imagenes/huella.png" width=30px>
        <p>1 Me encanta</p>
        </div>
        </section>  
        `;
      });
      taskContainer.innerHTML = divContain;

      const btnEliminar = taskContainer.querySelectorAll('.delete');

      btnEliminar.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          deleteTask(e.target.dataset.id);
        });
      });

      const btnEditar = taskContainer.querySelectorAll('.editar');

      btnEditar.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          const doc = await getTask(e.target.dataset.id);
          const task = doc.data();

          taskForm.description.value = task.description;
          id = e.target.dataset.id;
          editando = true;

          taskForm.guardar.innerText = 'Editar y publicar';
        });
      });
    });
  });

  taskForm.addEventListener('submit', (e) => {
  // para no recargar la pag
    e.preventDefault();

    const description = taskForm.description;

    if (!editando) {
      saveTask(description.value);
    } else {
      updateTask(
        id,
        { description: description.value },
      );
      editando = false;
      taskForm.guardar.innerText = 'Publicar';
    }

    taskForm.reset();
  });
};
