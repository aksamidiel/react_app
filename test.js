class Auto{
    #caption;
    #number;
    #price;
    constructor(caption, number, price){
        this.#caption = caption;
        this.#price = price;
        this.#number = number;
    }

    print(){
        console.log(`Caption: ${this.#caption} Age: ${this.#number} Price: ${this.#price}`)
    }
}


const audi = new Auto('Q7', 123, 12345)
//audi.#caption = 'mers'

audi.print();


function loadScript(src) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script');
      script.src = src;
  
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));
  
      document.head.append(script);
    });
  }


let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js")

promise.then(
    script => console.log(`${script.src} download`),
    error => console.log(`Error: ${error.message}`)
)


promise.then(
    result => console.log(result),
    error => console.log(error)
)

let cache = new Map()

function loadCached(url){
    if(cache.has(url)){
        return Promise.resolve(cache.get(url))
    }
    return fetch(url).then(response =>response.text()).then(text=>{
        cache.set(url, text)
        return text
    })
}


let loadScriptPromise = (src)=>{
    return new Promise((res, rej)=>{
        loadScript(src, (err, script)=>{
            if(err) rej(err)
            else res(script)
        })
    })
}


async function showAwait(){
    let response = await fetch('/article/promise-chaining/user.json')
    let user = await response.json()

    let gitHubResponse = await fetch(`https://api.github.com/users/${user.name}`)
    let gitHubUser = await gitHubResponse.json()

    let img = document.createElement('img')
    img.src = gitHubUser.avatar_url
    img.className = 'promise-avatar-example'
    document.body.append(img)

    await new Promise((res, rej) => setTimeout(res, 5000))
    img.remove()
    return gitHubUser
}

showAwait()