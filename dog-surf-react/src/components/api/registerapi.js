export function signOn(registerData) {

    
    return fetch(`http://localhost:8090/api/auth/register`, {

        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(registerData)

    })
        .then(response => response.json());
}