

export function loginfunc(loginData)

{

  fetch('http://localhost:8090/api/auth/login', {

      method: 'POST',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(loginData)

  })
      .then(response => response.json())
      // .then(res => console.log(res));
      .then ( res => {

        localStorage.setItem('access_token', JSON.stringify(res.accessToken));
})
}