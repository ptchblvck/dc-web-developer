async function loadZoos() {
  const response = await fetch("http://127.0.0.1:3000/zookeeper/");
  const json = await response.json();
  updateTable(json);
}

function addZooKeeper(secnr, name, address, zooId) {
  zooKeeper.socialsecuritynr = document.getElementById("socialsecurity").value;
  zooKeeper.name = document.getElementById("name").value;
  zooKeeper.address = document.getElementById("address").value;
  zooKeeper.zooID_fk = document.getElementById("zooIDfk").value;
}

async function addZooKeeperToSql() {
  const response = await fetch("http://127.0.0.1:3000/addkeeper/");
  const json = await response.json();
  updateTable(json);
}

async function updateTable(json) {
  let tableE = document.createElement("table");
  tableE.classList.add("zookeeper-table");
  {
    let trE = document.createElement("tr");
    json.cells.forEach((element) => {
      let thE = document.createElement("th");
      thE.innerText = element.name;
      trE.appendChild(thE);
    });
    tableE.appendChild(trE);
  }

  json.results.forEach((element) => {
    let trE = document.createElement("tr");
    for (const property in element) {
      let thE = document.createElement("th");
      thE.innerText = element[property];
      trE.appendChild(thE);
    }
    tableE.appendChild(trE);
  });

  let dataRoot = document.getElementById("data");
  dataRoot.innerHTML = "";
  dataRoot.appendChild(tableE);
}
