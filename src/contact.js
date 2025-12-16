export function load_contact() {
    const content_div = document.querySelector("#content")
    content_div.innerHTML = `     <form action="">
            <fieldset>
                <legend>Contact Us</legend>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Elliot">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="elliot_02@gmail.com">
                <label for="reason">My Problem</label>
                <textarea name="reason" id="reason" placeholder="I hate this Restaurant"></textarea>
                <button>Send</button>
            </fieldset>
        </form>
        ` 
}