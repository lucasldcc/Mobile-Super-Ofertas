# 📱  Aplicativo Super Ofertas

## 👨‍💻  Instalação
Pré-Requisitos
```bash
git, node, express, knex, sqlite, react, react-native, expo
  ```
Para instalar as dependências e executar o **Backend** (modo desenvolvimento), clone o projeto em seu computador  em seguida execute:
```bash
cd backend
yarn install
yarn dev
```
Para instalar o **Banco de Dados**, faça uma conta no [MongoDB](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_americas_brazil_search_brand_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&gclid=CjwKCAjw1ej5BRBhEiwAfHyh1GLXeEjEp9D5zfujzlOBAwOJehRLXqqQhIX0s_g8cCoEmOPqtjCgHBoCyaoQAvD_BwE) crie um novo Cluster e copie o link do banco de dados em (backend/src/server) onde indicado.

Para instalar as dependências e executar o **Mobile** (modo desenvolvimento) do React-Native, clone o projeto em seu computador e em seguida execute:
```bash
yarn global add install expo-cli
# NÃO é preciso executar a linha de cima caso ja tenha o Expo (CLI) instalado!
cd mobile
yarn install
yarn start
```


## ☕  Scripts disponiveis

No diretório do projeto **Mobile** , você pode executar:

```bash
yarn start
```
Executa o aplicativo no modo de desenvolvimento.
Após o carregamento abrira uma pagina com um QR code, escaneie o QR code com o aplicativo da EXPO e o aplicativo será carregado.
> Acesse  [Expo/Modo de Desenvolvimento e Produção](https://docs.expo.io/workflow/development-mode/) para saber mais.

```bash
yarn build
```
Compila o aplicativo para ser implantado nas lojas de aplicativos ou para Android, você pode optar por criar um arquivo APK.

> Acesse  [Expo/Criando aplicativos independentes](https://docs.expo.io/distribution/building-standalone-apps/) para saber mais.


## 📝 Licença

Distribuído sob a licença MIT. Consulte [LICENSE](LICENSE) para obter mais informações.
 
--- 

