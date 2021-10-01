const conn = net.createConnection({
  host: "tcp://6.tcp.ngrok.io:12922", // change to IP address of computer or ngrok host if tunneling
  port: 12922, // or change to the ngrok port if tunneling
});

conn.setEncoding("utf8"); // interpret data as text
