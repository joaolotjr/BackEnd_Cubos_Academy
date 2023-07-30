![](https://i.imgur.com/xG74tOh.png)

# Exercício Resolvido 2

De acordo com o servidor HTTP implementado no exercício resolvido 1, implemente um intermediário (middleware) independente para validar se ao acessar qualquer rota, é informado a senha do sistema `carros123`. A senha deve ser informada como parametro de consulta (query params) em ambas as rotas.

```javascript
// exemplo
// http://localhost:3000/carros?senha=123
```