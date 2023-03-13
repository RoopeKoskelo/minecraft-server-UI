# MineservuPOGOY

<details><summary>Roolit📋</summary>
<p>

#### Tiimin roolit

**Scrum Masterit:** Sisu, Roope

**Graphic Design:** Joona

**TBD:** Luca, Jeppe, Vilma


</p>
</details>

<details><summary>Vaatimukset/idea ✔💡</summary>
<p>

Ideana olisi tehä käyttöliittymä minecraft-serverille, josta voi käynnistää ja sammuttaa serverin, muokata configeja ja käyttää console terminaalia.
Käytetään Reactia, mahdollisesti erillisenä sovelluksena eikä vain nettisivuna.

Lisätään Reactin kylkeen Material UI: [linkki](https://mui.com/material-ui/getting-started/overview/)
</p>
</details>

## User Interface

(vaiheessa)

Vaaditut välilehdet:

- Profiilit
    - Vaihda palvelimien välillä

- Etusivu
    - Käynnistys & sammutus, pilvitallennus
    - Terminaali

- Systeemi asetukset
    - RAM
    - Peliversio
    - . . .
    - Plugins & modaus?

## Graafinen Ohjeisto

    Figma linkki: 
    
    [linkki](https://www.figma.com/file/NlAroBf94llBcbEIy2aRMo/Main?node-id=0-1&t=4V9glkCriVS3VKvS-0)

## Ohjeet kehitykseen

Projektin cloonauksen jälkeen. . .

1. git fetch

2. npm install

3. npm start

MUISTA KÄYTTÄÄ OMAA BRANCHIA!

## /server-files/

Väliaikaisesti kansioon on asetettu b1.7.3 versio minecraft, joka on tarpeeksi kevyt lokaaliseen testaukseen. Käytössä on craftbukkit server, jossa on enemmän configeja kuin vanillassa joita löytyy myös nyky versioissa joilla voimme testata.

Palvelinta ei ole muokattu muuten kuin .properties asetuksista `online-mode=false`, jotta sinne voi mahdollisesti yhdistää.

Tiedostot kuten `server.properties`, `start.bat`, `bukkit.yml` pitäisivät olla muokattavissa käyttöliittymästä, muut asetukset voi tehdä konsolikomennoilla. Tarkoitus oli näyttää asetus, sen jälkeen kenttä jossa sen voi asettaa.

Esimerkki server.properties pöytä mallissa.

Vasen sarake on asetus jota muokataan, oikea sarake on muutettava kenttä

| Asetukset | server.properties |
| --- | --- |
| level-name | world |
| allow-nether | true |
| view-distance | 10 |
| spawn-monsters | true |
| . . . | . . . |
