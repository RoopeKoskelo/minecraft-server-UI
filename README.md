# MineservuPOGOY

<details><summary>ROOLIT📋</summary>
<p>

#### Tiimin roolit

**Scrum Masterit:** Sisu, Roope

**Graphic Design:** Joona

**TBD:** Luca, Jeppe, Vilma


</p>
</details>

## Vaatimukset/idea

Ideana olisi tehä käyttöliittymä minecraft-serverille, josta voi käynnistää ja sammuttaa serverin, muokata configeja ja käyttää console terminaalia.
Käytetään Reactia, mahdollisesti erillisenä sovelluksena eikä vain nettisivuna.

Lisätään Reactin kylkeen Material UI: [linkki](https://mui.com/material-ui/getting-started/overview/)

## User Interface

(vaiheessa)

Vaaditut välilehdet:

- Profiilit
@@ -37,7 +42,7 @@ Vaaditut välilehdet:
- Peli asetukset
    - Gamerules
    - Muita helppoja staattisia komentoja
    - Configien muokkaus, (~~cfg~~, yml, properties. . .)
    - Configien muokkaus, (cfg, yml. . .)

    ## Graafinen Ohjeisto

@@ -54,21 +59,3 @@ Projektin cloonauksen jälkeen. . .
2. npm install

3. npm start

## /server-files/

Väliaikaisesti kansioon on asetettu b1.7.3 versio minecraft, joka on tarpeeksi kevyt lokaaliseen testaukseen. Käytössä on craftbukkit server, jossa on enemmän configeja kuin vanillassa joita löytyy myös nyky versioissa joilla voimme testata.

Palvelinta ei ole muokattu muuten kuin .properties asetuksista `online-mode=false`, jotta sinne voi mahdollisesti yhdistää.

Tiedostot kuten `server.properties`, `start.bat`, `bukkit.yml` pitäisivät olla muokattavissa käyttöliittymästä, muut asetukset voi tehdä konsolikomennoilla. Tarkoitus oli näyttää asetus, sen jälkeen kenttä jossa sen voi asettaa.

Esimerkki server.properties pöytä mallissa.

| Asetukset | server.properties |
| --- | --- |
| level-name | world |
| allow-nether | true |
| view-distance | 10 |
| spawn-monsters | true |
| . . . | . . . |
