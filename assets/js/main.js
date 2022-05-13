products = document.getElementById("products")
tbody = document.getElementById("tbody")
var elements = []

class Phone {
    constructor(id, name, price, imgurl, desc, count) {
        this.id = id
        this.name = name;
        this.price = price;
        this.imgurl = imgurl
        this.desc = desc;
        this.count = count;
        this.total = this.count * this.price
    }

}


phones = [
    new Phone(0, "iphone1", 1999, "./assets/img/iphone-12-5g-64gb-purple-desktop-detail-2-Format-976.png", "just phone1", 0),
    new Phone(1, "iphone2", 2000, "./assets/img/iphone-12-5g-64gb-purple-desktop-detail-2-Format-976.png", "just phone2", 0),
    new Phone(2, "iphone3", 2001, "./assets/img/iphone-12-5g-64gb-purple-desktop-detail-2-Format-976.png", "just phone2", 0)
]

phones.forEach(element => {

    div = document.createElement('div')
    subdiv = document.createElement('div')
    btn = document.createElement('button')

    subdiv.classList.add("card")
    subdiv.style.width = "18rem"

    btn.classList.add("btn", "btn-primary")
    btn.innerHTML = "fsdgfsdg"

    div.classList.add("col")

    btn.addEventListener("click", function () {
        
        tr = tbody.insertRow()
        tr.insertCell().innerHTML = `<img class="tableimg" src="${element.imgurl}" alt="">`
        tr.insertCell().innerHTML = element.name
        tr.insertCell().innerHTML = element.price
        tr.insertCell().innerHTML = ++element.count
        tr.insertCell().innerHTML = element.total

        dtd = document.createElement('td')
        dtd.innerHTML = "Remove"
        dtd.addEventListener('click', function () {
            if (element.count == 1)
                this.parentElement.remove();
        
            element.count--;
            remove(element)
        })
        tr.appendChild(dtd)
        save(element)
    })


    subdiv.innerHTML = `
    
                    <img src="${element.imgurl}"  class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-text">${element.desc}</p>`
    subdiv.innerHTML += (`<span>${element.price}$</span>
                        </div>`)



    subdiv.appendChild(btn)
    div.appendChild(subdiv)
    products.appendChild(div)


});

function save(element) {
    if (elements.find(e => e.id == element.id) == undefined)
        elements.push(element)

    else {
        elements.find(e => e.id == element.id).count = element.count;
    }
    localStorage.setItem("basket", JSON.stringify(elements))
}

function remove(element) {
    elements.slice(elements.find(e => e.id == element.id).id)

    localStorage.setItem("basket", JSON.stringify(elements))
}


