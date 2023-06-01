# python-bdd 

Para criar um container:
`docker build -t nome .`

Para rodar o container:
`docker run -p 8888:8888 nome`
ou utilize o meu container que está no Docker Hub:
`docker run --rm -d --name app0 -p 8888:8888 michelleamesquita/python-cypress:latest `

Para rodar o teste bdd:
- acesse a pasta /bdd

`npm run test`
