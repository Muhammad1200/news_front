export const headers = (token = null, file = false) => {
    let x = {
        headers: {
            'Accept': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
            'X-Api-Key': '2681991ddfdb4111bddb9db0a7257e33',
            // 'credentials': 'same-origin'
        }
    }
    if (token) {
        x = {
            ...x,
            headers: {
                ...x.headers,
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${token}`,
            }
        }
    }
    if (file) {
        x = {
            ...x,
            headers: {
                ...x.headers,
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'multipart/form-data',
            }
        }
    }
    return x;
}