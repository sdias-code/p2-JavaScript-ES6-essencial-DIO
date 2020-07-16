const test = 'exemplo';
(() => {
    const test = 'valor da função';
    console.log(`Valor dentro da função "${test}"`);

    if(true){ //var sobe pois não respeita o escopo de bloco
        const test = 'valor if';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();