import { fetchApi } from "./fetch.js";
import { addSkill } from "./skill.js";

document.getElementById("backend").addEventListener("click", (event) => {
    event.preventDefault();
    alert("Sorry, Backend Stamp Rally is under construction");
}, false);

// document.getElementById("add").addEventListener("click", addSkill(event), false);
document.getElementById("add").addEventListener("click", (event) => {
    event.preventDefault();
    addSkill();
}, false);

fetchApi();