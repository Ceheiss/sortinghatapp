/*Select a class and add the group size and then press input. If you are a teacher, feel free to fork it and tweak it at your convenience (for instance, populate the arrays with your students names)*/

const alumnos = document.querySelector("#alumn");
const button = document.querySelector("#btn");

// Trigger the function
button.addEventListener("click", sortAlumn);

// Function 
function addElement(content){
  const paragraph = document.createElement("p");
  const paraText = document.createTextNode(content);
  paragraph.appendChild(paraText);
  
  var groupsContainer = document.getElementById("alumn");
  groupsContainer.appendChild(paragraph);
}

function sortAlumn(){
  const numInput = document.querySelector("#iteration");
  const groupNumber = numInput.value;
  
  const classInput = document.querySelector("#dropdown")
  let selectedClass = classInput.value;
  // This snippet cleans after each search
  const container = document.getElementById("alumn");
  
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  } 
  // List with the different classes
  const alumnosKA = ["Camilo", "Stephan", "Jasmine", "Karl", "Pedro", "Emiliano", "Javiera", "Nikola", "Einstein"];
  
  const alumnosKB = ["Maria", "Manuel", "Goku", "Luisa", "Jose", "Natalia", "Alexandra", "Paco", "Nicolas", "Fernando", "Emilia", "Pedro", "Constanza"];
  
  const alumnos1A = ["Cell", "Martina", "Pablo", "Felix", "Tom", "Brooklyn", "JonSnow", "Vicky", "Jose", "Paquita", "Emilia", "Catalina", "Gabriela", "Samwise", "Majinbu", "Josefina", "Santa"];
  
  const alumnos1B = ["Cristobal","Felipe", "Manuel", "Federico", "Carla", "Luisa", "Donnar", "Natalia", "Alejandra", "Paco", "Taquito", "Fernando", "Emilia", "Ragnar", "Coni", "Gunnar", "Rollo", "Ruben"];
  
  const alumnos2A = ["Gambito", "Martina", "Riddle", "Fito", "Tom", "Marvolo", "Grindewald", "Vicky", "Jose", "Paquita", "Wya", "Emilia", "Catalina", "Gabriela", "Sauron", "Voldemort", "Josefina", "Knoxville"];
  
  const alumnos2B = ["Marcelo","Maria", "Manuel", "Ivan", "Carlos", "Luisa", "Lothar", "Natalia", "Paco", "Turing", "Fernando", "Emilia", "Pedro", "Juninho"];
  
  const alumnos3A = ["Emile","Martina", "Pablo", "Felix", "Tom", "Brook", "Aslan", "Vicky", "Jose", "Ron", "Hermione", "Emilia", "Catalina", "Gabriela", "Frodo", "Eddard", "Gotenks"];
  
  const alumnos3B = ["Plato","Maria", "Manuel", "Rimbaud", "Newton", "Luisa", "Locke", "Natalia", "Hobbes", "Baudelaire", "Taquito", "Fernando", "Emilia", "Pedro", "Constanza", "Nietzsche", "Heidegger", "Socrates"];
  
  const alumnos4A = ["Gabriel","Pablo", "Emiliano", "Messi", "Connor", "Anderson", "Silva", "Vicky", "Jose", "Zlatan", "Wya", "Emilia", "McGregor", "Gabriela", "S.T.", "Baratheon", "Josefina", "Nahuel"];
  
  const alumnos4B = ["Cuasimodo","Maria", "Manuel", "Burrito", "Caupolican", "Olaf", "Geronimo", "Natalia", "Cuatemoc", "Paco", "Tesla", "Fernando", "Emilia", "Vegeta", "Constanza", "Steve", "Piccolo", "Karen"];
  
  const alumnos5A = ["Mario","Peach", "Luigi", "Felix", "Tom", "Gerry", "Paco", "Vicky", "Waluigi", "Paquita", "Wya", "Emilia", "Catalina", "Gabriela", "Napoleon", "Wario", "Josefina", "Toad"];
  
  const alumnos5B = ["Otto","William", "Robin", "Burrito", "Carlos", "Luisa", "Aristoteles", "Natalia", "Gawain", "Paco", "Steve", "Frankfurt", "Emilia", "Pedro", "Constanza", "Arthur", "Bill", "Ruben"];
  
  let alumnos;
 
  if (selectedClass === "KA"){
    alumnos = alumnosKA;
  } else if (selectedClass === "KB"){
    alumnos = alumnosKB;
  } else if (selectedClass === "1A"){
    alumnos = alumnos1A;
  } else if (selectedClass === "1B"){
    alumnos = alumnos1B;
  } else if (selectedClass === "2A"){
    alumnos = alumnos2A;
  } else if (selectedClass === "2B"){
    alumnos = alumnos2B;
  } else if (selectedClass === "3A"){
    alumnos = alumnos3A;
  } else if (selectedClass === "3B"){
    alumnos = alumnos3B;
  } else if (selectedClass === "4A"){
    alumnos = alumnos4A;
  } else if (selectedClass === "4B"){
    alumnos = alumnos4B;
  } else if (selectedClass === "5A"){
    alumnos = alumnos5A;
  } else if (selectedClass === "5B"){
    alumnos = alumnos5B;
  } else {
    alert("Please Select Class and Class Size");
  }
  
  let groupSize = groupNumber;
 
  let j = 1;

  while (alumnos.length > 0) {
    // Creates the HR separator
    let sepa = document.createElement("hr");
    let groupsContainer = document.getElementById("alumn");
    groupsContainer.appendChild(sepa);
    // Adds the group number
    addElement("In group number " + j + ":");
	  console.log("========= En el grupo " + j + " ===========");
    // For loop to populate with the students
	  for (let i = 0; i < groupSize; i++){
      if (groupSize === undefined){
        break;
      }else {
        var rand = Math.floor(Math.random() * alumnos.length);
		    var alumnoSelec = alumnos[rand];
        addElement(alumnoSelec);
		    console.log(alumnoSelec);
		    alumnos.splice (rand, 1);
      }
	  }
	  j++;
  }
}