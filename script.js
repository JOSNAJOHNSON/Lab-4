const element = document.getElementById('options');

element.addEventListener('change', (event) => {
    const checkbox = document.getElementById("d-noneoption-2-special");
    if (event.target.value === "Option2") {
        checkbox.classList.add("d-noneoption-2-special");
    } else {
        checkbox.classList.remove("d-noneoption-2-special");
    }
}); 
document.getElementById("enterkey").addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        alert("Enter key is pressed");
    }
})

 


