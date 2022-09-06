///TRIM
const trimText = (value, number) => {
    return value.substring(0, number) + "..."

}


///API
async function getProducts() {
    let url = 'https://fakestoreapi.com/products'
    let res = await fetch(url)
    let data = await res.json()


    ///Array.map
    data.map(item => {
        let titles = trimText(item.title, 20)
        const html = document.createElement('div')

        html.classList.add('productContainer')
        //!output
        html.innerHTML += `
                        <img src="${item.image}" alt="">
                        <div class="textContainer">
                            <h6>${item.category}</h6>
                            <h3>${titles}</h3>
                            <h4>${item.price} TL</h4>
                        </div>
                        <div class="button">
                            <button>Satın Al</button>
                        </div>
             `
        const container = document.querySelector('.products')
        container.appendChild(html)
    })
}
getProducts()