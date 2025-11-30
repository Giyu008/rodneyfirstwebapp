const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write("Marc Rodney D. Sacnahon\n" );
  res.write("BSIT-BA 4101\n");
  res.write("Just Keep Moving Forward\n");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});