# Línia de temps interactiva

Pàgina web per explorar i comparar etapes cosmològiques, geològiques, de la vida i de la història humana, des del Big Bang fins avui, amb zoom continu.

## Ús

- **Roda del ratolí** o **botons + / −**: zoom endins i enfora.
- **Arrossegar**: desplaçar-se pel temps.
- **Pessic amb dos dits** (mòbil): zoom.
- **Clic o toc** sobre un període o esdeveniment: mostra'n el detall.
- **Botons de dalt**: salts ràpids a Univers, Terra, Fanerozoic, Humanitat i Història.

Totes les pistes comparteixen el mateix eix, de manera que es poden comparar etapes de diferents àmbits.

## Fitxers

- `index.html`: pàgina i lògica (dibuix amb canvas, sense dependències externes).
- `data.js`: pistes i esdeveniments. Per afegir-ne, copieu una línia existent: `s` és l'inici i `e` el final en anys enrere; sense `e` és un esdeveniment puntual. `Y(1492)` converteix un any del calendari a anys enrere.

## Publicació a GitHub Pages

1. Pugeu els tres fitxers a un repositori.
2. A *Settings → Pages*, trieu la branca principal i la carpeta arrel.
3. La pàgina quedarà disponible a `https://<usuari>.github.io/<repositori>/`.

## Notes

Les dates són aproximades i algunes (primera vida, control del foc) són discutides.

## Autoria

Albert Saragossa Alòs
