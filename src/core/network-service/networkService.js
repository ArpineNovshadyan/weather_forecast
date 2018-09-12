
class NetworkService {
    
        generateError = (response) => {
            let resp = response.json();
            return {
                status: response.status,
                http_error: response.statusText,
                server_error: resp.more_info.code,
                server_message: resp.more_info.message
            }
        }
    
        makeAPIRequest = (url, options) => {
            return new Promise((resolve, reject) => {
                options = options || {};
                if (!url) {
                    return reject('INVALID_REQUEST_PARAMS');
                }
                if (options.query_params) {
                    url += '?';
                    Object.keys(options.query_params).forEach(el => {
                        let val = options.query_params[el] || '';
                        url += (el + '=' + val + '&');
                    });
                }
    
                if (!options.method) {
                    options.method = 'get';
                }
                let fetch_options = {
                    method: options.method,
                    headers: options.headers || {
                        //'Accept': 'application/json',
                        //'Content-Type': 'application/json',
                    }
                };
                try {
                    if (options.body) {
                        fetch_options.body = JSON.stringify(options.body);
                    }
                } catch (ex) {
                    console.log(ex);
                    return reject('INVALID_REQUEST_PARAMS');
                }
                console.log('URL == ', url);
                console.log('body == ', fetch_options.body);
                fetch(url, fetch_options)
                    .then(response => {
                        return response.json();
                    }).then(response => {
                        if (response.error) {
                            return reject(response.more_info);
                        }
                        return resolve(response);
                    }).catch(err => {
                        console.log('ERR == ', err);
                        return reject(err);
                    })
            });
        }
    
        uploadImage = (url, file, options) => {
            options = options || {};
    
            return new Promise((resolve, reject) => {
                let form_data = new FormData();
                form_data.append('avatar', file);
                let keys_arr = options
                options.map(item => {
                    return form_data.append(item.key, item.value)
                })
                fetch(url, {
                    method: 'POST',
                    name: 'photo',
                    body: form_data,
                }).then(response => {
    
                    return response.json();
                }).then(photo => {
                    if (photo._id == 'undefined') {
                        return resolve(photo._id);
                    }
                    return resolve(photo);
                }).catch(err => {
                    return reject(err);
                });
            });
        }
    
        makeAPIGetRequest = (url, options = {}) => {
            options.method = 'get';
            return this.makeAPIRequest(url, options);
        }
    
        makeAPIPostRequest = (url, options = {}) => {
            options.method = 'post';
            return this.makeAPIRequest(url, options);
        }
    
        makeAPIPutRequest = (url, options = {}) => {
            options.method = 'put';
            return this.makeAPIRequest(url, options);
        }
    
        makeAPIDeleteRequest = (url, options = {}) => {
            options.method = 'delete';
            return this.makeAPIRequest(url, options);
        }
    }
    
    module.exports = new NetworkService();
    