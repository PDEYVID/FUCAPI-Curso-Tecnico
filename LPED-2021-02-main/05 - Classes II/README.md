# Orientação a objetos
- Vamos continuar o estudo de classes em javascript. Crie uma nova classe chamada ``Pessoa.js``, inicialmente com atributos:
    - Nome
    - CPF:
    ```javascript
    class Pessoa{
        /* atributos privados */
        _nome;
        _cpf;

        constructor(nome,cpf){
            this._nome = nome;
            this._cpf = cpf;
        }
    }
    ```
    - No código acima, perceba que os atributos ``nome`` e ``cpf`` estão com _.   