const form = document.getElementById('form')
const namee = document.getElementById('name')
const price = document.getElementById('price')
const description = document.getElementById('description')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    reset()

    axios.post('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4', {
        name: namee.value,
        price: price.value,
        description: description.value,
    })
    .then(res => {
        console.log(res.data);
    })
    setTimeout(() => {
        getProducts()
    }, 2000);
})




const product = document.getElementById('product')
const searchForm = document.getElementById('searchForm')
const searchName = document.getElementById('searchName')
const sortAZ = document.getElementById('sortAZ')
const sortZA = document.getElementById('sortZA')
const sortDefault = document.getElementById('sortDefault')





function getSortDefault() {
    product.innerHTML = ''
    axios.get('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4')
    .then(res => {
        db = res.data
        db.map(item => {
            const box = document.createElement('tr')
            box.className = 'boxToForm col-12'
            box.innerHTML = `
            <div class="boxes">
            <h1>${item.name}</h1>
            <div class="removeAndDescription">
            <p>${item.description}</p>
            <button class="add" onclick="remove(${item.id})">Delete</button>
        </div>
            <p style='color: green'>$ ${item.price}</p>
        </div>
            `
            product.appendChild(box)
        })
    })
}

sortDefault.addEventListener('click', (e) => {
    e.preventDefault()
    getSortDefault()
})





function getSortZA() {
    product.innerHTML = ''
    axios.get('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4')
    .then(res => {
        db = res.data
        const sortZA = db.sort((a, b) => b.name.localeCompare(a.name))
        sortZA.map(item => {
            const box = document.createElement('tr')
            box.className = 'boxToForm col-12'
            box.innerHTML = `
            <div class="boxes">
            <h1>${item.name}</h1>
            <div class="removeAndDescription">
            <p>${item.description}</p>
            <button class="add" onclick="remove(${item.id})">Delete</button>
        </div>
            <p style='color: green'>$ ${item.price}</p>
        </div>
            `
            product.appendChild(box)
        })
    })
}

sortZA.addEventListener('click', (e) => {
    e.preventDefault()
    getSortZA()
})







function getSortAZ() {
    product.innerHTML = ''
    axios.get('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4')
    .then(res => {
        db = res.data
        const sortAZ = db.sort((a, b) => a.name.localeCompare(b.name))
        sortAZ.map(item => {
            const box = document.createElement('tr')
            box.className = 'boxToForm col-12'
            box.innerHTML = `
            <div class="boxes">
            <h1>${item.name}</h1>
            <div class="removeAndDescription">
            <p>${item.description}</p>
            <button class="add" onclick="remove(${item.id})">Delete</button>
        </div>
            <p style='color: green'>$ ${item.price}</p>
        </div>
            `
            product.appendChild(box)
        })
    })
}

sortAZ.addEventListener('click', (e) => {
    e.preventDefault()
    getSortAZ()
})




function getProductsSearch() {
    product.innerHTML = ''
    axios.get('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4')
    .then(res => {
        db = res.data
        const filteredData = db.filter(item => item.name.toLowerCase().includes(searchName.value.toLowerCase()))
        filteredData.map(item => {
            const box = document.createElement('tr')
            box.className = 'boxToForm col-12'
            box.innerHTML = `
            <div class="boxes">
            <h1>${item.name}</h1>
            <div class="removeAndDescription">
            <p>${item.description}</p>
            <button class="add" onclick="remove(${item.id})">Delete</button>
        </div>
            <p style='color: green'>$ ${item.price}</p>
        </div>
            `
            product.appendChild(box)
        })
    })
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    getProductsSearch()
})


function getProducts() {
    product.innerHTML = ''
    axios.get('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4')
    .then(res => {
        db = res.data
        db.map(item => {
            const box = document.createElement('tr')
            box.className = 'boxToForm col-12'
            box.innerHTML = `
            <div class="boxes">
            <h1>${item.name}</h1>
            <div class="removeAndDescription">
            <p>${item.description}</p>
            <button class="add" onclick="remove(${item.id})">Delete</button>
        </div>
            <p style='color: green'>$ ${item.price}</p>
        </div>
            `
            product.appendChild(box)
        })
    })

}
getProducts()

function remove(id) {
    axios.delete(`https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4/${id}`)
    .then(res => {
        getProducts()
    })
}