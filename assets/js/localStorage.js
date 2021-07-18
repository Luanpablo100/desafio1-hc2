let form = document.querySelector('#form-news form');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    
    const data = {
        name,
        email
    }

    const dataConverted = JSON.stringify(data)

    localStorage.setItem('userRegister', dataConverted);

    alert(`Cadastro realizado ${name}!`)


})