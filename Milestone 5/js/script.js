// Milestone 5
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
// Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti.

Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',

        data: {
            nameFilterText: "",
            activeContact: 0,
            activeMessage: null,
            newMessage: "",
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luigi',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ]
        },

        methods: {
            // Selezionare il contatto
            selectContact: function(index) {
                this.activeContact = index;

                // Se cambio finestra di chat...
                this.activeMessage = null;
            },
            // Riposta del computer
            respond: function(){
                setTimeout(()=>{
                    this.contacts[this.activeContact].messages.push({
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text: 'ok',
                        status: 'received'
                    });
                }, 1000)
            },
            // Aggiungere un nuovo messaggio
            addNewMessage: function() {
                if (this.newMessage.length > 0) {
                    this.contacts[this.activeContact].messages.push({
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text: this.newMessage,
                        status: 'sent'
                    });
                    this.newMessage="";
                    this.respond();
                }else {
                    alert('Non puoi inviare del testo vuoto');
                }
            },
            // Cercare il nome nel filtro di ricerca
            filterContactsByName: function() {
                this.contacts.forEach((element) =>{
                    if (element.name.toLowerCase().includes(this.nameFilterText)) {
                        element.visible = true;
                    }else {
                        element.visible = false;
                    }
                })
            },
            // Al click sulla freccetta, si aprono le opzioni del messaggio
            viewOptionsWindow: function(index) {
                if(index === this.activeMessage) {
                    this.activeMessage = null;
                } else {
                    this.activeMessage = index;
                }
            },
            // Cancella il messaggio
            deleteMessage: function(index) {
                this.contacts[this.activeContact].messages.splice(index, 1);

                // Per evitare che si riapra la finestra delle opzioni...
                this.activeMessage = null;
            }
        },
    }
);





    