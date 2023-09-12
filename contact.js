const inputBox = document.getElementById('mail','name','phone','quiry');
const btn = document.getElementById('submit');
const bttn = document.getElementById('cancel');
btn.addEventListener('click', addTask);
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something in required(*) section");
    }
    else{
        alert("Your quiry is successfully submitted");
    }
}
bttn.addEventListener('click', cancelTask);
function cancelTask(){
    if(inputBox.value === ''){
        alert("Cancel successful");
    }
    else{
        inputBox.value === '';
        alert("Cancel successful");
    }
}