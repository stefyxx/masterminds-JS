//////////////////////////////////  HTTP headers ////////////////////////////////////
/* new Headers():= 
Questa interfaccia API di recupero consente di eseguire varie azioni sulle intestazioni di richieste e risposte HTTP. 
Queste azioni includono il recupero, l'impostazione, l'aggiunta e la rimozione. 
Un oggetto Headers ha un ELENCO di intestazioni associato, inizialmente vuoto e composto da zero o più COPPIE di nomi (senza distinzione tra maiuscole e minuscole) e valori. 
Puoi aggiungere a questo usando metodi come append().
*/
/*
    Con HTTP headers posso:
- trasmettere info aggiuntive sia nella richiesta che nella RISPOSTA
- nome : valore 
    -> si scrive 'nome_key_desiderato INSENSIBILE al maiuscolo(ossia legge tutto in minuscolo)' : 'value (eventuali spazi bianchi all'inizio del valore sono IGNORATI'
- possono essere raggruppate secondo il loro CONTENUTO, si distinguono 4 gruppi:
    ° Request headers:  vengono aggiunte info che possono servire o a recuperare una specifica risposta(colore di una specifica linea di bus) o danno piu' info sul client (e quindi accesso a delle risposte)
    ° Response headers: conservano info aggiuntive sulla risposta, come la sua posizione o info sul server che la fornisce (es nome e versione del server, etc...)
    ° Representation headers(En-tête d'entité)(Intestazione dell'entità): contengono INFO/metadata sulla resource del {body} , ad es di che type MIME é, o encoding/compression applicati, o in che media-formato é il body.
    ° Payload headers: contengono INFO GENERALI sui dati (sia x la request che x le response), come la lunghezza del contenuto e la codifica utilizzata per il trasporto, senza alcun rapporto con i data contenuti nel {body}.

- possono essere raggruppate nella maniera in cui il proxy (server intermediario) le gestisce:
(il proxy sia invia la request del Client al server, sia invia la response del Server al Client aggiungendo/modificando delle info [credo tipo la lingua x default cambiando di frontiera])
    ° End-to-end headers (intestazioni da un capo all'altro) :QUESTE NON SONO MODIFICATE DAL Proxy (deve solo conservarle nella cache), ma in blocco sono trasmesse al destinatario (server o client a seconda)
    ° Hop-by-hop headers(salto dopo salto := da punto a punto): non sono trasmesse dal proxy e NEMMENO memorizzate nella cache, sono le Hop-by-hop headers che vengono utilizzate dalle Payload headers (info generali) Connection
*/
/*
Authorization. , per controllare la memorizzazione nella cache o per ottenere informazioni sull'agente utente o sul referrer, ecc.
*/
/*      SUNTO PERSONALE
con una richiesta e risposta HTTP o HTTPS ho sempre un HEADER che mi dona delle INFO aggiuntive:
Posso avere delle INFO GENERALI o delle INFO sul BODY (data recuperati/inviati)
    INFO BODY:
        -Representation header: metadata about the resource in the message body (e.g. encoding, media type, etc.).
        -Fetch metadata request header: Headers with metadata about the resource in the message body (e.g. encoding, media type, etc.).
        -Payload headers
    INFO GENERALI:
        -Request headers (mi permettono anche di affinare la risposta che voglio, es accetto solo risposta in pdf)
        -Response headers (es qui posso avere la versione del server)
        -Payload headers
Immagina che un server mi risponde solo se mi sono 'autenticato'; ecco i dati della mia autenticazione saranno nella key 'headers' della mia fetch() della mia REQUEST

    PROXY:= é semplicemente un server 'intermediario' questo puo' avere 2 azioni:
        o NON manipola gli headers(recupera nella cache in necessario e trasmette tutto in blocco, senza toccare niente -> so se sono sempre loggato..)-> End-to-end headers
        Altro es: il Client(browser) é in Francia e il server 'finale'(che recupera i dati dal DB e rende la risposta) é in America; il PROXY 'adatta' la risposta americana in francese
        o MANIPOLA gli headers e non memorizza nella cache -> il PROXY non entra in gioco e NIENTE é memorizzato nella cache (es la mia psw di login; nella cache avro' memorizzato solo lo stato, loggato o non)
*/
//////
//creo un obj new headres() con le proprietà che voglio aggiungere nel mio headers
export async function essaye(startDate, endDate) {
    const token = 'n° di token riservato';
    const myHeader = new Headers({
      'Authorization': '...autirizzaz che serve.......',
      //di solito non ho come in questa APIs che mi dice il nome della key da usare ('Ocp-Apim-Subscription-Key'), ma ho:
      //'Authorization': token,
      //'Content-Type': '',
      'Ocp-Apim-Subscription-Key': token,
    });
    const URL_APIs = "https://api.delijn.be/DLKernOpenData/api/v1/omleidingen?startDatum=" + startDate + "&eindDatum=" + endDate + "&taalCode=NEDERLANDS";
    return fetch(URL_APIs, {
        method: 'GET',
        headers: myHeader
    }).then(response => {
        if (response.status === 200) return response.json();
        else throw new Error('Something wrong :( ');
    }).then(response => {
        console.debug(response);
        return response;
    })
    //.then(response => response.json()).then(() => { alert("Successful");});
}
//creo un obj new headres() e con .append(key,value) aggiungo le proprietà che voglio nel mio headers
async function essaye2(startDate, endDate) {
    const token = 'n° di token riservato';
    const myHeader = new Headers();
    myHeader.append('Authorization', token);

    const URL_APIs = "https://api.delijn.be/DLKernOpenData/api/v1/omleidingen?startDatum=" + startDate + "&eindDatum=" + endDate + "&taalCode=NEDERLANDS";
    return fetch(URL_APIs, {
        method: 'GET',
        headers: myHeader,
    }).then(response => response.json()).then(data => {return data}).catch(error => console.debug(error));
}
//o DIRETTAMENTE:
async function essaye2(startDate, endDate) {
    const token = 'n° di token riservato';
    const URL_APIs = "https://api.delijn.be/DLKernOpenData/api/v1/omleidingen?startDatum=" + startDate + "&eindDatum=" + endDate + "&taalCode=NEDERLANDS";
    return fetch(URL_APIs, {
        method: 'GET',
        headers: new Headers({
            'Authorization': token,
        }),
    }).then(response => response.json()).then(data => {return data}).catch(error => console.debug(error));
}