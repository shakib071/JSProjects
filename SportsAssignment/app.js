
const loadAllPlayer= ()=>{
    fetch('https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=A')
    .then(res=>res.json())
    .then(data=>{
        
        displayPlayer(data.player);
    })
};


const displayPlayer=(players)=>{
    const playerContainer=document.getElementById("player-container");
    // console.log(players.strRender);

    players.forEach(player=>{
        // console.log(player);
        console.log(player.strCutout);

        if(player.strCutout!=null){

        const div=document.createElement("div");
        div.classList.add("card");
        
        div.innerHTML=`
        <img class="img-card" src=${player.strCutout} alt=""/>
        <h3>Name: ${player.strPlayer}</h3>
        <h5>Team: ${player.strTeam} </h5>
        <h5>Sport: ${player.strSport}</h5>
        <h5>Gender: ${player.strGender} </h5>
        <h5>Nationality: ${player.strNationality} </h5>
        <h5>Status: ${player.strStatus} </h5>
        <a href=${player.strFacebook}><img class="social" src="fb.webp" alt="" /></a>
        <a href=${player.strInstagram}><img class="social" src="ins.avif" alt="" /></a>
        <a href=${player.strTwitter}><img class="social1" src="x2.jpeg" alt="" /></a>
        <br>
        
        <button onclick="detail('${player.idPlayer}','${player.idTeam}','${player.dateBorn}','${player.strEthnicity}')">Details</button>
        <button onclick="add('${player.strPlayer}')">Add</button>
        `;

        playerContainer.appendChild(div);
        }
    }
);
    
    
};

const detail =(playerid,teamid,dob,ethnicity)=>{

// console.log(data);

const modal = document.createElement('div');
      modal.id = 'myModal';
      modal.className = 'modal';
      const modalContent = document.createElement('div');
      modalContent.className = 'modal-content';

      const closeBtn = document.createElement('span');
      closeBtn.className = 'closeBtn';
      closeBtn.innerHTML = '&times;';

      const modalTitle = document.createElement('h2');
      modalTitle.textContent = 'Details';
      const modalText = document.createElement('div');
      modalText.innerHTML=`
      <h1>PlayerID: ${playerid}</h1>
      <h3>TeamID:${teamid} </h3>
      <h3>Date of Birth: ${dob} </h3>
      <h3>Ethnicity: ${ethnicity} </h3>
      <h3> </h3>
      `;

      modalContent.appendChild(closeBtn);
      modalContent.appendChild(modalTitle);
      modalContent.appendChild(modalText);
      modal.appendChild(modalContent);
      document.body.appendChild(modal);
      modal.style.display = 'block';
    
      closeBtn.onclick = function() {
        modal.style.display = 'none';
        document.body.removeChild(modal); // Remove the modal from the DOM
      }

      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = 'none';
          document.body.removeChild(modal); // Remove the modal from the DOM
        }
      }

};

const add =(name)=>{
    const cartCount=document.getElementById("count").innerText;

    let convertedCount=parseInt(cartCount);
    if(convertedCount<11){
        convertedCount=convertedCount+1;
        document.getElementById("count").innerText=convertedCount;
        
        // console.log(convertedCount);
    
    
        const container=document.getElementById("cart-main-container");
        const div=document.createElement("div");
    
        div.innerHTML=`
        <h3>${name} </h3>
    
        `;
    
        container.appendChild(div);
    }
    else{
        alert("You Can't selcet more than 11 player !");
    }
   
}


// const loadPlayerByName= (name)=>{
//     fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=Danny_Welbeck`)
//     .then(res=>res.json())
//     .then(data=>{
//         displayPlayer(data.player);
//         console.log(data.player);
//     })
// };



// function handleSearch(event) {
//     // Add your logic here
//     // console.log("Add button clicked or Enter pressed");
//     const inputValue=document.getElementById("input-value").value;
//     // console.log(inputValue);
//     loadPlayerByName(inputValue);
//     document.getElementById("input-value").value="";
// };

const loadPlayerByName = (name) => {
    fetch('www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=Danny_Welbeck')
    .then(res => res.json())
    .then(data => {
        // displayPlayer(data.player);
        console.log(data.player);
    })
    .catch(error => {
        console.error('Error fetching player data:', error);
    });
};

function handleSearch(event) {
   
    const inputValue = document.getElementById("input-value").value;
     console.log(inputValue);
    loadAllPlayer(inputValue);
};





loadAllPlayer();