window.onload = function(){
    const inputVer = document.querySelectorAll('.selection-box-item');
    const buscar = document.querySelector("#buscar");

    buscar.addEventListener('click', function(){
        const opcoes = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }

        fetch('https://economia.awesomeapi.com.br/${inputVer.value}last/USD-BRL,EUR-BRL,BTC-BRL', opcoes)
        .then(
            response => { responde.json()
            .then(data => {
                document.querySelector("#compra").textContent = data['high'];
                document.querySelector("#venda").textContent = data['low'];
                document.querySelector("#var").textContent = data['varBid'];
                document.querySelector("#max").textContent = data['bid'];
                document.querySelector("#min").textContent = data['ask'];
            })
            
        }
        )
    });
}