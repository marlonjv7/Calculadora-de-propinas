let cuenta = 0;
let porcentaje = 0;
let propina = 0;
let borrar = 0;

let but = document.querySelector('.btn');
but.addEventListener('click', porcen);
let resultado = document.getElementById('Resultado');
resultado.addEventListener('click', remove);

borrar = resultado;

function porcen() {
    cuenta = Number(document.getElementById('T_Cuenta').value);
    porcentaje = Number(document.getElementById('P_Propina').value);

    propina = (cuenta * porcentaje) / 100;
    const TOTAL = cuenta + propina;

    resultado.classList.add('resul', 'resul-2');

    if (cuenta == 0 || porcentaje == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'llene todos los campos'
          })
    }else{
        resultado.innerHTML = `
            <div>
                <h2>El Resumen de su Cuenta es: </h2>
                   <p>Valor de cuenta: ${cuenta}</p>
                   <p>Valor de propina: ${porcentaje}%</p>
                   <p>Total a pagar: ${TOTAL}</p>
                   <button>Limpiar</button>
            </div>
        `; 
    }
}

function remove(){
    resultado.classList.remove('resul-2');
    window.location.reload();
}










