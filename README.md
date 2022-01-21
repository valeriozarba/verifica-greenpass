# Verifica Green Pass

In riferimento progetto di verifica ufficiale [verificac19-sdk](https://github.com/italia/verificac19-sdk).

# Requisiti

[<img src="https://img.shields.io/npm/v/npm" />][npm]

- Node.js version >= 12.x
- MongoDB version >= 5.x (used to store CRL)


## Funzionalità
Progetto NodeJs + React che effettua il controllo della validità del green pass.

Per avviare il progeto occorre installare come primo strumento Docker, il servizio che verifica la validità del greenpass conserverà 
tutte le informazioni dei codici all'interno di un database mongo avviato localmente su un container docker.

Se si vuole gestire tale informazione su uno storage in memoria occorre leggere la documentazione relativa al al modulo *verificac19-sdk*

Avviamo il progetto con il comando per installare le dipendenze

Il progetto implementa un CLIENT in React presente nella cartella */client*


```sh 
npm install
```

Avviamo il container con mondodb per il salvataggio dei dati di validità dei codici
```sh 
docker-compose up -d
```

Avviamo il server in modalità development
```sh 
npm run dev
```

Avviamo il webpack watch per gestire la compilazione in realtime del frontent in React
```sh 
npm run webpack
```

Avvia il servizio node che implementa il server e legge la parte statica compilata su public
```sh 
npm run start
```


# Licenza 

MIT
