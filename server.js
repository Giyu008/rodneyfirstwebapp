const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write("Marc Rodney D. Sacnahon");
  res.write("BSIT-BA 4101");
  res.write("Just Keep Moving Forward");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});