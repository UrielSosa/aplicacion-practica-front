const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);
const cart = JSON.parse(localStorage.getItem('cart')) || [];


fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(characters => {
        qs('.spinner').classList.add('hide');
        for(let i = 0; i < characters.results.length; i++){
            qs('main').innerHTML += `
            <div class="card col-3">
                <img src="${characters.results[i].image}" class="card-img-top pt-3" alt="">
                <div class="card-body">
                    <h5 class="card-title">${characters.results[i].name}</h5>
                    <a href="" class="btn btn-primary" id="addToCart">Añadir al carrito</a>
                </div>
            </div>
            `;
        }

        let buttons = qsa('#addToCart')
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', (e) => {
                e.preventDefault();
                cart.push({id: characters.results[i].id});

                localStorage.setItem('cart', JSON.stringify(cart));
            })
        }
    })
    .catch(e => console.log(e))

