# MineservuPOGOY

## Roolit

**Scrum Masterit:** Sisu, Roope

**Graphic Design:** Joona

**TBD:** Luca, Jeppe, Vilma

## Vaatimukset/idea

Ideana olisi tehä käyttöliittymä minecraft-serverille, josta voi käynnistää ja sammuttaa serverin, muokata configeja ja käyttää console terminaalia.
Käytetään Reactia, mahdollisesti erillisenä sovelluksena eikä vain nettisivuna.

Lisätään Reactin kylkeen Material UI: [linkki](https://mui.com/material-ui/getting-started/overview/)

## User Interface

(vaiheessa)

Vaaditut välilehdet:

- Profiilit
    - Vaihda palvelimien välillä

- Terminaali
    - Käynnistys & sammutus, pilvitallennus
    - (mahdollisesti sis. terminaalin)

- Systeemi asetukset
    - RAM
    - Peliversio
    - . . .
    - Plugins & modaus?

- Peli asetukset
    - Gamerules
    - Muita helppoja staattisia komentoja
    - Configien muokkaus, (cfg, yml, properties. . .)
    
    ## Graafinen Ohjeisto
    
    Figma linkki: [linkki](https://www.figma.com/file/NlAroBf94llBcbEIy2aRMo/Main?node-id=0-1&t=4V9glkCriVS3VKvS-0)

##

Ohjeet kehitykseen

Projektin cloonauksen jälkeen. . .

1. git fetch

2. npm install

3. npm start

## /server-files/

Väliaikaisesti kansioon on asetettu b1.7.3 versio minecraft, joka on tarpeeksi kevyt lokaaliseen testaukseen. Käytössä on craftbukkit server, jossa on enemmän configeja kuin vanillassa joilla voimme testata. Muuten toimii samoin kuin uudetkin versiot.

Palvelinta ei ole muokattu muuten kuin .properties asetuksista `online-mode=false`, jotta sinne voi mahdollisesti yhdistää.