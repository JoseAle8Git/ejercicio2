const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    
    // HTML inyectado con la lógica de petición al backend de Spring Boot
    const html = `
        <!DOCTYPE html>
        <html>
        <head><title>Node to Spring</title></head>
        <body style="font-family:Arial; text-align:center; margin-top:20%">
            <h1 id="response">Cargando mensaje del backend...</h1>
            <script>
                // Petición directa al puerto de Spring Boot
                fetch('http://localhost:8080/api/hello')
                    .then(response => response.text())
                    .then(data => {
                        document.getElementById('response').innerText = data;
                    })
                    .catch(err => {
                        document.getElementById('response').innerText = 'Error: ' + err;
                        console.error('Fallo en la conexión:', err);
                    });
            </script>
        </body>
        </html>
    `;
    
    res.end(html);
});

server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});