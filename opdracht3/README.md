# frontend voor designers - opdracht 3

JSON van de movies data staat ook hier:
deze uri kun je gebruiken voor een van de use case voor opdracht 3.
[https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json](https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json)

De JSON data is ook los, per film of genre of actors te gebruiken. Check die [hier](https://github.com/KoopReynders/frontendvoordesigners/tree/master/opdracht3/json).

https://anouk95.github.io/frontendvoordesigners/opdracht3


Hallo,

Mijn naam is Anouk Meijer. Ik heb de website Attracties in Amsterdam gemaakt voor mensen die graag een dagje uit in Amsterdam zoude willen. De website laat diverse atrracties zien, met een beschrijving waar de attracties over gaan en waar zij zich bevinden in Amsterdam. 

Deze website is gemaakt doormiddel van gratis vrijgegeven data van Amsterdam die wordt opgehaald doormiddel van een JSON file. De data zal zich daarbij dus blijven updaten. De kleuren die ik heb gekozen staan voor Amsterdam zodat de website gelijk herkenbaar wordt voor de gebruikers. De website is gebruiksvriendelijk en kan door iedereen worden gebruikt. 

Techniek.

Bij het ophalen van de data heb ik ervoor gezorgt een section te zetten in mijn html. Daarna heb ik de data opgehaald doormiddel van de functie showData. Hierna moest ik de data uitpakken vanuit de objects. Dat heb ik gedaan door het crearen van elementen. Daarna heb ik met textContent en een variable de items zoals beschrijvingen opgehaald. Je kunt in de console de objects openen waarin je de benamingen kan zien waar vanuit je ze kan aanroepen. Zo kan je de elementen creeren en ze een waarde meegeven om ze in css te kunnen bewerken. Je kunt ze een p meegeven of een h1 etc.


Ik heb een button die beschrijvingen toevoegt als je er op klikt. Ik heb daar heel lang over gedaan.
Wat ik heb gedaan om dit probleem op te lossen is het creeren van twee containers.
Nummer 1 heet container en nummer 2 heeft beschrijvingscontainer. 
Ik heb in de ene container de titel de foto en de button gezet. Deze is gelijk zichtbaar.
In de andere container (bescrijvingsContainer) heb ik de verborgen elementen geplaatst zoals:
details, adres, beschrijving en een updates.

Daarna heb ik een function aangemaakt waar ik de button aanroep met een click functie. De var parent zorgt ervoor dat hij de container waarin de beschrijvingscontainer zit aanroept en deze verder in de functie op active zet, waardoor alleen die button ervoor zorgt dat hij opent. Hij opent omdat de CSS op container .active komt te staan wat een display block meegeeft. 

