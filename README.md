# Verifica Green Pass

## Funzionalità
Progetto NodeJs + React che effettua il controllo della validità del green pass.

Per avviare il progeto occorre installare come primo strumento Docker, il servizio che verifica la validità del greenpass conserverà 
tutte le informazioni dei codici all'interno di un database mongo avviato localmente su un container docker.

Se si vuole gestire tale informazione su uno storage in memoria occorre leggere la documentazione relativa al al modulo *verificac19-sdk*

Avviamo il progetto con il comando per installare le dipendenze


```sh 
npm install
```

Avviamo il container con mondodb per il salvataggio dei dati di validità dei codici
```sh 
docker-compose up -d
```

