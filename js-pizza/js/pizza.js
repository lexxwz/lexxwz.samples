let pizza = {};
window.onload = function(){
    pizza.alert = document.getElementById('alert');
    pizza.out = document.getElementById('price');
    pizza.print = function(el, i){el.innerHTML = i}
    pizza.check = function(e){
        pizza.valid = 1; pizza.message = '';
        pizza.telPattern = /^\+\d{11,12}$/;
        pizza.namePattern = /^[a-zA-Z]+ ?[a-zA-Z]+$/;
        if(!pizza.namePattern.test(document.forms[0].name.value)){pizza.valid = 0; pizza.message += 'Неправильное имя. '};
        if(!pizza.telPattern.test(document.forms[0].phone.value)){pizza.valid = 0; pizza.message += 'Неправильный номер телефона. '};
        if (!pizza.valid) {pizza.print(pizza.alert, pizza.message); e.preventDefault()}
    }
    pizza.change = function(){
        switch(document.forms[0].choose.value){
            case 'Peperoni': pizza.price = 89; break;
            case 'Julienne': pizza.price = 99; break;
            case 'Prosciutto': pizza.price = 89; break;
            case 'Hawaiian': pizza.price = 109; break;
        }
        if(document.forms[0].moz.checked){pizza.price += 10}
        if(document.forms[0].mush.checked){pizza.price += 5}
        if(document.forms[0].ham.checked){pizza.price += 10}
        if(document.forms[0].pep.checked){pizza.price += 10}
        if(document.forms[0].saus.checked){pizza.price += 10}
        if(document.forms[0].bac.checked){pizza.price += 10}
        if(document.forms[0].bl.checked){pizza.price += 5}
        if(document.forms[0].gr.checked){pizza.price += 5}

        if(document.forms[0].size[0].checked){pizza.price *= 1}
        if(document.forms[0].size[1].checked){pizza.price *= 1.5}
        if(document.forms[0].size[2].checked){pizza.price *= 2}

        pizza.price *= document.forms[0].number.value;
        // if(document.forms[0].number.value == 2){pizza.price *= 2}
        pizza.print(pizza.out, 'Price '+pizza.price+' UAH');
    }
    document.forms[0].addEventListener('submit', pizza.check);
    document.forms[0].addEventListener('change', pizza.change);
}