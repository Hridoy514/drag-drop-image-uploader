const DragArea = document.querySelector(".AppBody"),
DragText = DragArea.querySelector("h3"),
button = DragArea.querySelector("button"),
input = DragArea.querySelector("input");
let MyFile;

button.onclick = ()=>{
    input.click();
}
input.addEventListener('change', function(){
    MyFile = this.files[0];
    DragArea.classList.add("active");
    ShowMe();
})
DragArea.addEventListener("dragover", (event)=>{
    event.preventDefault();
    DragArea.classList.add("active");
    DragText.textContent = "Release To Upload File";
})
DragArea.addEventListener("dragleave", (event)=>{
    event.preventDefault();
    DragArea.classList.remove("active");
    DragText.textContent = "Drag & Drop";
})
DragArea.addEventListener("drop", (event)=>{ 
    event.preventDefault();
    MyFile = event.dataTransfer.files[0];
    ShowMe();
})
function ShowMe(){
    let filetype = MyFile.type; 
    let VaildEx =  ["image/jpeg", "image/jpg", "image/png"];
    if(VaildEx.includes(filetype)){
    let fileReader  = new FileReader(); 
    fileReader.onload = () => {
        let imgUrl = fileReader.result; 
        let img  = `<img src="${imgUrl}" alt="">`
        DragArea.innerHTML = img
    }
    fileReader.readAsDataURL(MyFile); 
    }
    else  {
        alert("This File Is Not Valid Choose A Valid File"); 
        DragArea.classList.remove("active"); 
        DragText.textContent = "Drag & Drop";
    }
}