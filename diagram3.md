```mermaid
    sequenceDiagram
    participant browser
    participant server


    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser:Server add new note to the browser

    Note right of browser: The server, saves the new_note file on the server and add on browser
    

```