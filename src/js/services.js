export default function getNameDay(data) {
    return new Promise((resolve, reject) => {
        nanoajax.ajax({url: `https://api.abalin.net/get/namedays?day=${data.day}&month=${data.month}&country=es`},
            function(code, responseText, request) {
                if (code >= 200 && code < 400) {
                    resolve(JSON.parse(responseText));
                } else {
                    reject(request);
                }
            });
    });
};
