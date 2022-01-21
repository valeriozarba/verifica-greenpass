# Verifica Green Pass

  <img  src="https://img.shields.io/npm/v/npm" />  

Questo progetto utilizza lo strumento di verifica ufficiale [verificac19-sdk](https://github.com/italia/verificac19-sdk) per verificare la validità del greenpass.

# Requisiti

- Npm 
- Node.js version >= 12.x
- MongoDB version >= 5.x (used to store CRL)

  
## Funzionalità
Progetto NodeJs + React per verificare la validità del green pass.
Per avviare il progeto occorre installare come primo strumento Docker, il servizio che verifica la validità del greenpass conserverà tutte le informazioni dei codici all'interno di un database mongo avviato localmente su un container docker.

 Se si vuole gestire tale informazione su uno storage in memoria occorre leggere la documentazione relativa al al modulo *verificac19-sdk*

## Avvio del progetto

Avviamo il container con mondodb per il salvataggio dei dati di validità dei codici
```sh 
docker-compose up -d 
```

Installiamo tutte le dipendeze del progetto 
```sh
npm install
```
Avviamo il server node in ascolto sulla porta 3000
```sh
npm run start
```

## Modalità Sviluppo
Avviamo il server in modalità development si metterà in ascolto sulla porta 9999
```sh
npm run dev
```  
Avviamo il webpack watch per gestire la compilazione in realtime del frontend in React nel caso si voglia modificare il comporta.
```sh
npm run webpack
```

# Licenza
MIT