function f(x, k) {
  const part1 = Math.pow(Math.abs(x), 2 / 3);
  const part2 = 0.9 * Math.pow((3.3 - x * x), 0.5);
  return part1 + part2 * Math.sin(Math.PI * x * k);
}
 function plot() {
      const k = parseFloat(document.getElementById("kValue").value);
      const xValues = [];
      const yValues = [];

      for (let x = -1.8; x <= 1.8; x += 0.01) {
        const underRoot = 3.3 - x * x;
        if (underRoot >= 0) {
          xValues.push(x);
          yValues.push(f(x, k));
        }
      }

      const trace = {
        x: xValues,
        y: yValues,
        mode: 'lines',
        name: `f(x) với k = ${k}`,
        line: { color: 'blue' }
      };

      const layout = {
        xaxis: { title: 'x' },
        yaxis: {
          title: 'f(x)',
          scaleanchor: 'x'  
        },
        margin: { t: 20 }
      };

      Plotly.newPlot("plot", [trace], layout);
    }

    function updateKLabelAndPlot() {
      const k = document.getElementById("kValue").value;
      document.getElementById("kLabel").textContent = k;
      plot();
    }

    window.onload = plot;