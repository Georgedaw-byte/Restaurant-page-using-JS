import taco_image from "./images/taco.jpg"
import front_taco from "./images/front_taco.jpg"

export function load_menu() {
    const content_div = document.querySelector("#content")
    content_div.innerHTML = ""
    content_div.innerHTML = `
        <div class="taco">
            <h2>Taco</h2>
            <div class="imgs">
                <img class="menu" src=${taco_image} alt="">
                <img class="menu" src=${front_taco} alt="">
            </div>
        </div>
        <span></span>
        <div class="taco">
            <h2>Taco</h2>
            <div class="imgs">
                <img class="menu" src=${taco_image} alt="">
                <img class="menu" src=${front_taco} alt="">
            </div>
        </div>
        <span></span>
        <div class="taco">
            <h2>Taco</h2>
            <div class="imgs">
                <img class="menu" src=${taco_image} alt="">
                <img class="menu" src=${front_taco} alt="">
            </div>
        </div>
        <span></span>
        <div class="taco">
            <h2>Taco</h2>
            <div class="imgs">
                <img class="menu" src=${taco_image} alt="">
                <img class="menu" src=${front_taco} alt="">
            </div>
        </div>
        <span></span>
        <div class="taco">
            <h2>Taco</h2>
            <div class="imgs">
                <img class="menu" src=${taco_image} alt="">
                <img class="menu" src=${front_taco} alt="">
            </div>
        </div>
        <span></span>
        <div class="taco">
            <h2>Taco</h2>
            <div class="imgs">
                <img class="menu" src=${taco_image} alt="">
                <img class="menu" src=${front_taco} alt="">
            </div>
        </div>
        <span></span>
        <div class="taco">
            <h2>Taco</h2>
            <div class="imgs">
                <img class="menu" src=${taco_image} alt="">
                <img class="menu" src=${front_taco} alt="">
            </div>
        </div>
    `
}