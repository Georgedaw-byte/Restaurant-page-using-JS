import "./style.css"
import './home.js';
import {load_home} from "./home.js"
import {load_menu} from "./menu.js"
import {load_contact} from "./contact.js"

const home_button = document.querySelector("button:first-of-type")
const menu_button = document.querySelector("button:nth-of-type(2)")
const contact_button = document.querySelector("button:last-of-type")
home_button.addEventListener("click", (event) => {
    event.preventDefault()
    home_button.style.backgroundColor = "black" 
    menu_button.style.backgroundColor = "transparent"
    contact_button.style.backgroundColor = "transparent"
    load_home()
})


menu_button.addEventListener("click", (event) => {
    event.preventDefault()
    menu_button.style.backgroundColor = "black"
    home_button.style.backgroundColor = "transparent"
    contact_button.style.backgroundColor = "transparent"
    load_menu()
})
contact_button.addEventListener("click", (event) => {
    event.preventDefault()
    contact_button.style.backgroundColor = "black"
    home_button.style.backgroundColor = "transparent"
    menu_button.style.backgroundColor = "transparent"
    load_contact()
})

home_button.click()