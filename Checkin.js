function CheckWhoIsIn() {
  let MaxOut = document.getElementById("GOM");
  let MaxIn = document.getElementById("CIM");
  let BreannaOut = document.getElementById("GOB");
  let BreannaIn = document.getElementById("CIB");
  let ZeckOut = document.getElementById("GOZ");
  let ZeckIn = document.getElementById("CIZ");

  // Max out button click
  MaxOut.onclick = function () {
    let Max = {
      name: "Max",
      out: true,
    };
    firebase
      .database()
      .ref("/users/" + Max.name)
      .set(Max);
  };

  // Max in button click
  MaxIn.onclick = function () {
    let Max = {
      name: "Max",
      out: false,
    };
    firebase
      .database()
      .ref("/users/" + Max.name)
      .set(Max);
  };

  // Bob out button click
  BreannaOut.onclick = function () {
    let Breanna = {
      name: "Breanna",
      out: true,
    };
    firebase
      .database()
      .ref("/users/" + Breanna.name)
      .set(Breanna);
  };

  // Bob in button click
  BreannaIn.onclick = function () {
    let Breanna = {
      name: "Breanna",
      out: false,
    };
    firebase
      .database()
      .ref("/users/" + Breanna.name)
      .set(Breanna);
  };

  // Zeck out button click
  ZeckOut.onclick = function () {
    let Zeck = {
      name: "Zeck",
      out: true,
    };
    firebase
      .database()
      .ref("/users/" + Zeck.name)
      .set(Zeck);
  };

  // Zeck in button click
  ZeckIn.onclick = function () {
    let Zeck = {
      name: "Zeck",
      out: false,
    };
    firebase
      .database()
      .ref("/users/" + Zeck.name)
      .set(Zeck);
  };
}

// Call the function to enable button click functionality
// CheckWhoIsIn();

function FetchTheInformation() {
  let listOfPeople = document.getElementById("list");
  firebase
    .database()
    .ref("/users/")
    .on("value", function (snapshot) {
      // Clear the list before updating it
      listOfPeople.innerHTML = "";

      snapshot.forEach(function (childSnapshot) {
        const childData = childSnapshot.val();

        // Create a new list item and append it to the list
        const li = document.createElement("li");
        li.textContent = `${childData.name}: `;

        // Create a span element for the "In" or "Out" text
        const statusSpan = document.createElement("span");
        statusSpan.textContent = childData.out ? "Out" : "In";

        // Set the text color based on the user's status
        statusSpan.style.color = childData.out ? "#f25454f4" : "#00bd6eeb";

        // Append the status span to the list item
        li.appendChild(statusSpan);
        listOfPeople.appendChild(li);
      });
    });
}

window.onload = FetchTheInformation();
