# Sorting Hat App


As a teacher, getting kids into groups was a struggle. I deviced thism app as a meanss to do that operation in a totally random way, plus adding some Harry Potter along the way.


Sample code:
```javascript
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
```

### Check it out [here](https://ceheiss.github.io/sortinghatapp/SortingHat/index.html)
