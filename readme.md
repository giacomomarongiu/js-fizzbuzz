# Instruction
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
:bulb:Si, lo abbiamo intravisto mentre facevamo la lezione sulle stringhe e i numeri (Cerco un operatore che fa al caso mio)
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
:insect: Ricordate di usare il console.log() sia in fase di preparazione e verifica dei dati che ovviamente durante il degugging per scovare potenziali errori!
# BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
# BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

## Steps
- Creo un ciclo for che mi permetta di re-iterare il mio codice per 100 volte
- Verifico che lo faccia attraverso il console.log
- Faccio si che per i multipli di 3 stampi "Fizz" attraverso l'operatore %
- Verifico che lo faccia attraverso il console.log
- Faccio si che per i multipli di 5 stampi "Buzz" attraverso l'operatore %
- Verifico che lo faccia attraverso il console.log
- Faccio si che per i multipli di 5 e 3 stampino "FizzBuzz" attraverso l'operatore %
- Verifico che lo faccia attraverso il console.log
## BONUS 1
- Inizializzo due variabili per gli elementi del DOM
- Aggiungo gli elementi al DOM
- Assegno la classe container
- Ogni volta che il ciclo si ripete aggiungo uno span dove stampo il valore

## BONUS 2
- Aggiungo stile tramite le classi e Bootstrap

### Tools
- Ciclo for con contatore, condizione, incremento
- Console log
- Operatore % (Reminder)
- If
- Operatore && (And)