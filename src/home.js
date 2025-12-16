import Image from "./images/3394.jpg"

export function load_home() {
    const content_div = document.querySelector("#content")
    content_div.innerHTML = ""
    const h1 = document.createElement("h1")
    h1.textContent = "Taco Restaurant"
    content_div.appendChild(h1)
    const img = document.createElement("img")
    img.classList.add("home")
    img.src = Image
    content_div.appendChild(img)
    const first_p = document.createElement("p")
    first_p.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda maxime rerum hic porro? Aperiam officia rem, minus quisquam, autem eligendi, dolorem amet commodi recusandae velit doloremque deserunt in? Nesciunt, totam aut praesentium perspiciatis neque deleniti eveniet in. Est officiis veritatis qui id reprehenderit aspernatur, modi enim vel rerum numquam libero."
    content_div.appendChild(first_p)
    const h2 = document.createElement("h2")
    h2.textContent = "Welcome anytime"
    content_div.appendChild(h2)
    const second_p = document.createElement("p")
    second_p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit et delectus praesentium officiis optio aliquid! Reprehenderit nam quas, esse perspiciatis doloremque placeat impedit eos."
    content_div.appendChild(second_p)
}