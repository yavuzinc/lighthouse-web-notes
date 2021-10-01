let delay = 200;
const spinnerTool = ["|", "/", "-", "\\"];
const timeout = delay * spinnerTool.length;

const spinnerLoop = setInterval(() => {
  for (let i = 0; i < spinnerTool.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r ${spinnerTool[i]}   `);
    }, delay * i);
  }
}, timeout);

setTimeout(() => {
  clearInterval(spinnerLoop);
  process.stdout.write("\n");
}, 4000);
