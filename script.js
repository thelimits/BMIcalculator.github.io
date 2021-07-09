fetchJsonp('https://thelimits.github.io')
            .then(res => res.json())
            .then(json => console.log(json));