const login = (event) => {
    const body = {
      email: email,
      password: password
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login ",
        body
      )
      .then((res) => {
        console.log(res.data);
        window.localStorage.setItem('token', res.data.token)
        history.push('/userPage')
      })
      .catch((err) => {
        console.log(window.alert("Dados incorretos"));
      });
  
      event.preventDefault()
      };