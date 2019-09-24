

constructor() {
    super()
    this.state = {
        user: {},
        token: ""
    }
}

// `userInfo` will be an object with `username` and `password` fields
signup = (userInfo) => {
    return axios.post("/user/signup", userInfo)
        .then(response => {
            const { user, token } = response.data
            this.setState({
                user,
                token
            });
            // forward the response, just in case
            // it's needed down the promise chain
            return response;
        })
}
