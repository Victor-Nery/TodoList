const buttonAdd = document.getElementById('buttonAdd')
const input = document.getElementById('input');
const taskGroup = document.getElementById('task-Group');
const container = document.getElementById('container')
var i = 0;
var progressBar = document.getElementById('progress-bar')
var progressBarCounter = document.getElementById('progress-text')


buttonAdd.addEventListener('click',()=>{
       
    if(input.value.trim() != 0){
            
        var task = document.querySelectorAll(".task")
        console.log(task)
        let newTask = document.createElement('div');
        newTask.classList.add('task');
        newTask.innerHTML = `
   
        <div class="delete-div">
        <img class="delete" src="assets/delete-filled.png" alt="">
        </div>
        <span>${input.value}</span>
        <div  class="done-div" >
        <img  id="done-image" class = "hide" src="assets/done-filled.png" alt="">
        </div>
        `
        taskGroup.appendChild(newTask);
        input.value = '';
        
        if(task.length == 4 ){
            taskGroup.removeChild(newTask)
        }if(task.length >= 0 ){
            container.classList.add('container')
        }
        }else{
            ''
}})

taskGroup.addEventListener('click',(e) => {
    if(e.target.classList.contains('delete')){
    e.target.parentElement.parentElement.remove()}
})

taskGroup.addEventListener('click', (e) =>{
    if(e.target.classList.contains('task')){
    e.target.classList.toggle('task-completed')}
})
        

 
function move1() {
        progressBar.style.display = 'block'
      if (i == 0) {
        i = 1;
        var elem = document.getElementById("progress-bar");
        var width = 10;
        var id = setInterval(frame, 0);
        function frame() {
          if (width >= 30) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
        
      }
    }

function move2() {
        progressBar.style.display = 'block'
      if (i == 0) {
        i = 1;
        var elem = document.getElementById("progress-bar");
        var width = 10;
        var id = setInterval(frame, 0);
        function frame() {
          if (width >= 50) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
        
      }
}
    
function move3() {
        progressBar.style.display = 'block'
      if (i == 0) {
        i = 1;
        var elem = document.getElementById("progress-bar");
        var width = 10;
        var id = setInterval(frame, 0);
        function frame() {
          if (width >= 80) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
        
      }
}

function move4() {
    progressBar.style.display = 'block'
      if (i == 0) {
        i = 1;
        var elem = document.getElementById("progress-bar");
        var width = 10;
        var id = setInterval(frame, 0);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
        
}
}

function zero() {
    progressBar.style.display = 'none'
}
      
taskGroup.addEventListener('click',(e)=>{
    var taskCompleted = document.querySelectorAll('div.task.task-completed')
    if(taskCompleted.length == 1 ){
        move1()
        progressBarCounter.innerHTML = '1/4'
    }if(taskCompleted.length == 2){
        move2()
        progressBarCounter.innerHTML = '2/4'
    }if(taskCompleted.length == 3){
        move3()
        progressBarCounter.innerHTML = '3/4'
    }if(taskCompleted.length == 4){
        move4()
        progressBarCounter.innerHTML = '4/4'
    }if( taskCompleted.length == 0 ){
        zero()
        progressBarCounter.innerHTML = '0/4'
        
}})


// function progressBarCounter(){
//     var taskCompleted = document.querySelectorAll('div.task.task-completed')
//     if(taskCompleted.length == 1 ){

//     }
// }



