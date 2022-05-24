# Controle de Serviços
Aplicação para gestão de prestadores de serviços.

## Design
O design da aplicação foi criado no Figma, [clique aqui](https://www.figma.com/file/SD2YOurqkRvFOIv3wUGQYU/Controle-de-Servi%C3%A7os?node-id=0%3A1) para acessá-lo.

![Cover](https://user-images.githubusercontent.com/63798776/169921243-64dba074-5ab3-4392-9a7c-1fcf4fd3743e.png)

## Tecnologias
- **ReactJS:** interface do usuário (UI)
- **Styled-Components:** estilização
- **Axios:** consultas à API
- **Firebase:** armazenamento de imagens
- **Papaparse:** conversão de arquivos `.csv`
- **React Feather:** ícones
- **React Router:** roteamento

## Como executar
> Confira se você possui o Git e o NodeJS intalados na sua máquina! ;)

1. Clone e execute o backend da aplicação ([clique aqui para acessar](https://github.com/filipealvess/controle-servicos-backend))

2. Clone este repositório
```
git clone https://github.com/filipealvess/controle-servicos.git
```

3. Entre na pasta do projeto
```
cd controle-servicos
```

4. Crie um arquivo `.env` com os seguintes dados
```env
# link da api (ex.: http://localhost:3333)
REACT_APP_API_BASE_URL = 

# chaves de acesso do firebase
REACT_APP_FIREBASE_API_KEY = 
REACT_APP_FIREBASE_AUTH_DOMAIN = 
REACT_APP_FIREBASE_PROJECT_ID = 
REACT_APP_FIREBASE_STORAGE_BUCKET = 
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = 
REACT_APP_FIREBASE_APP_ID = 
```

5. Instale as dependências
```
npm install
```

6. Execute a aplicação
```
npm start
```

---

Espero que goste ❤️
