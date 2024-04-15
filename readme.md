# AVF WEB

## Como executar

- Execute `npm ci` para instalar as dependência
- Execute o comando `cp .template.env .env` e substitua o `MONGO_URL` pelo o seu próprio link
- Execue `npm run dev`

## Rotas

- `GET: http://localhost:8080/` página HTML padrão com o formulário
- `GET: http://localhost:8080/api/clientes` pega todos os clientes do banco
- `POST: http://localhost:8080/api/clientes` cria um novo cliente no banco se você enviar os dados no formato correto:

```js
{
    "name": "NOME", // deve ter entre 2 e 30 caracteres
	"address": "ENDEREÇO", // deve ter entre 2 e 30 caracteres
	"postalCode": "CEP", // deve ter 8 dígitos numéricos ou seguir o padrão 00000-000
	"phone": "NUMERO DE TELEFONE", // OPCIONAL: deve ter 11 dígitos numéricos
}
```

E é isso 🙂