function onSubmit(e) {
    e.preventDefault()

    let err = false

    const name          = document.getElementById("name").value
    const postalCode           = document.getElementById("CEP").value
    const address       = document.getElementById("address").value
    const phone  = document.getElementById("phone").value

    if (!validateStringSize(2, 30, name)) {
        alert('name deve ter entre 2 e 30 caracteres');
        err = true
    }

    if (!validateStringSize(2, 60, address)) {
        alert('Endereço deve ter entre 2 e 60 caracteres');
        err = true
    }

    if (!validateByRegex(/^\d{11}$/, phone)) {
        alert('O número de telefone deve ter 11 dígitos numéricos');
        err = true
    }

    let cepReg = postalCode.includes('-') ? /^\d{5}-\d{3}$/ : /^\d{8}$/;

    if (!validateByRegex(cepReg, postalCode)) {
        alert('CEP deve ter 8 dígitos numéricos ou seguir o padrão 00000-000');
        err = true
    }

    if (err) return

    fetch("/api/clientes", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            name, postalCode, address, phone
        })
    })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

document.getElementById("register-form").addEventListener("submit", onSubmit)

const validateByRegex = (regex, value) => {
    return regex.test(value);
}

const validateStringSize = (min, max, value) => {
    return value.length >= min && value.length <= max;
}