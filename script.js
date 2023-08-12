const chname = document.querySelector("#cname");
const chdes = document.querySelector("#cdescription");
const chprice = document.querySelector("#price");
const chqtity = document.querySelector("#qtity");
const chadd = document.querySelector("button");
const pelmt = document.querySelector("p");

chadd.addEventListener("click", addch);

function addch(e) {
  e.preventDefault();
  const chclname = chname.value;
  const chcldes = chdes.value;
  const chclprice = chprice.value;
  const chclqtity = chqtity.value;
  console.log(chclname, chcldes, chclprice, chclqtity);

  const obj = {
    chclname,
    chcldes,
    chclprice,
    chclqtity,
  };

  // const axios = requires("axios");
  // window.axios = require("axios");
  axios
    .post(
      "https://crudcrud.com/api/80e7fe93504e4416b9e2def8d0934f3b/chcldetails",
      obj
    )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });

  const para = document.createElement("p");
  para.innerHTML = `${chclname} ${chcldes} ${chclprice} ${chclqtity} <button type="submit" value="Submit">Buy 1</button> <button type="submit" value="Submit">Buy 2</button> <button type="submit" value="Submit">Buy 3</button><br>`;
  // const html = `${chclname} ${chcldes} ${chclprice} ${chclqtity}<br>`;
  document.body.appendChild(para);
}
