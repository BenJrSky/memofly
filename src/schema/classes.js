class Azienda{
    constructor(
        id,
        nome, 
        indirizzo, 
        pec, 
        inizioFerie, 
        fineFerie, 
        calendari, 
        clienti, 
        orari, 
        codiceDestinatio,
        PartitaIva,
        numeroMittente,
        codiceFiscale,
        collaboratori,
        servizi
        ) {
        this.id = id;
        this.nome = nome;
        this.indirizzo = indirizzo;
        this.pec = pec;
        this.inizioFerie = inizioFerie;
        this.fineFerie = fineFerie;
        this.calendari = calendari;
        this.clienti = clienti;
        this.orari = orari; 
        this.codiceDestinatio = codiceDestinatio;
        this.PartitaIva = PartitaIva
        this.numeroMittente = numeroMittente;
        this.codiceFiscale = codiceFiscale;
        this.collaboratori = collaboratori;
        this.servizi = servizi;
    }
}
class Utente{
    constructor(
        id,
        nome,
        cognome,
        email,
        nomeVisualizzato,
        sottoscrizione,
        azienda
    ){
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.nomeVisualizzato = nomeVisualizzato;
        this.sottoscrizione = sottoscrizione;
        this.azienda = azienda;
    }
}
class Cliente {
    constructor(
        id,
        nome,
        cognome,
        indirizzo,
        professione,
        città,
        facebook,
        linkedin,
        instagram,
        peso,
        altezza,
        dataNascita,
        dataInserimento,
        ultimoAppuntamento,
        sesso,
        telefono,
        email,
        note,
        predizioneAcquisti,
        fidelizzazione,
        codiceFiscale,
        cqp
    ){
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
        this.indirizzo = indirizzo;
        this.professione = professione;
        this.città = città;
        this.facebook = facebook;
        this.linkedin = linkedin;
        this.instagram = instagram;
        this.peso = peso;
        this.altezza = altezza;
        this.dataNascita = dataNascita;
        this.dataInserimento = dataInserimento;
        this. ultimoAppuntamento = ultimoAppuntamento;
        this.sesso = sesso;
        this.telefono = telefono;
        this.email = email;
        this.note = note;
        this.predizioneAcquisti = predizioneAcquisti;
        this.fidelizzazione = fidelizzazione;
        this.codiceFiscale = codiceFiscale;
        this.cqp = cqp;
    }
}
class Giorno{
    constructor(
        id,
        apertura,
        chiusura,
        inizioPausa,
        finePausa
    ){
        this.id = id;
        this.apertura = apertura;
        this.chiusura = chiusura;
        this.inizioPausa = inizioPausa;
        this.finePausa = finePausa;
    }
}
class Calendario{
    constructor(
        id,
        appuntamenti,
        link
    ){
        this.id = id;
        this.appuntamenti = appuntamenti;
        this.link = link;
    }
}
class Servizio{
    constructor(
        id,
        nome,
        prezzo,
        durata,
        collaboratori,
        colore,
        descrizione,
        prenotabileViaWeb,
        messaggio
    ){
        this.id = id;
        this.nome = nome;
        this.prezzo = prezzo;
        this.durata = durata;
        this.collaboratori = collaboratori;
        this.colore = colore;
        this.descrizione = descrizione;
        this.prenotabileViaWeb = prenotabileViaWeb;
        this.messaggio = messaggio;
    }
}
class Collaboratore{
    constructor(
        id,
        nome,
        cognome,
        numero,
        email,
        città,
        ruolo,
        descrizione
    ){
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
        this.numero = numero;
        this.email = email;
        this.città = città;
        this.ruolo = ruolo;
        this.descrizione = descrizione;
    }
}
class Appuntamento{
    constructor(
        id,
        servizio,
        inizio,
        collaboratore,
        utente,
        cliente,
        notificato,
        prenotabileViaWeb
    ){
        this.id = id;
        this.servizio = servizio;
        this.inizio = inizio;
        this.collaboratore = collaboratore;
        this.utente = utente;
        this.cliente = cliente;
        this.notificato = notificato;
        this.prenotabileViaWeb = prenotabileViaWeb;
    }
}
class Messaggio{
    constructor(
        id,
        tipo,
        quando,
        fidelizzazione,
        testo
    ){
        this.id = id;
        this.tipo = tipo;
        this.quando = quando;
        this.fidelizzazione = fidelizzazione;
        this.testo = testo;
    }
}

class Profilo {
    constructor(
        id,
        nome,
        cognome,
        indirizzo,
        professione,
        città,
        facebook,
        linkedin,
        instagram,
        peso,
        altezza,
        dataNascita,
        dataInserimento,
        ultimoAppuntamento,
        sesso,
        telefono,
        email,
        note,
        predizioneAcquisti,
        fidelizzazione,
        codiceFiscale,
        cqp,
        fatturato,
        ultimiAppuntamenti,
        serviziRichiesti,
        lastTrend,
        appuntamentiMancati,
        trendings,
        graficoAppuntamenti,
        appuntamentiCancellati,
        appuntamentiAnno,

    ){
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
        this.indirizzo = indirizzo;
        this.professione = professione;
        this.città = città;
        this.facebook = facebook;
        this.linkedin = linkedin;
        this.instagram = instagram;
        this.peso = peso;
        this.altezza = altezza;
        this.dataNascita = dataNascita;
        this.dataInserimento = dataInserimento;
        this. ultimoAppuntamento = ultimoAppuntamento;
        this.sesso = sesso;
        this.telefono = telefono;
        this.email = email;
        this.note = note;
        this.predizioneAcquisti = predizioneAcquisti;
        this.fidelizzazione = fidelizzazione;
        this.codiceFiscale = codiceFiscale;
        this.cqp = cqp;
        this.fatturato = fatturato;
        this.ultimiAppuntamenti = ultimiAppuntamenti;
        this.serviziRichiesti = serviziRichiesti;
        this.lastTrend = lastTrend;
        this.appuntamentiMancati = appuntamentiMancati;
        this.trendings = trendings;
        this.graficoAppuntamenti = graficoAppuntamenti;
        this.appuntamentiCancellati = appuntamentiCancellati;
        this.appuntamentiAnno = appuntamentiAnno;
    }
}

module.exports = {
    Company: Azienda,
    User: Utente,
    Client: Cliente,
    Day: Giorno,
    Calendar: Calendario,
    Service: Servizio,
    Coworker: Collaboratore,
    Date: Appuntamento,
    Message: Messaggio,
    Profilo: Profilo
}