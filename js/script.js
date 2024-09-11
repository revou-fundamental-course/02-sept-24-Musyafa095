// script.js
function calculateArea() {
  // Ambil nilai dari input
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);
  const c = parseFloat(document.getElementById('c').value);
  const base = parseFloat(document.getElementById('base').value);
  const height = parseFloat(document.getElementById('height').value);

  // Validasi input
  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0 ||
      isNaN(base) || base <= 0 || isNaN(height) || height <= 0) {
      alert("Masukkan nilai yang valid!");
      return;
  }

  // Hitung luas dengan rumus alas dan tinggi
  const areaBaseHeight = 0.5 * base * height;

  // Hitung luas dengan rumus Heron
  const s = (a + b + c) / 2;
  const areaHeron = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  // Tampilkan hasil
  document.getElementById('area').innerHTML = `
      Luas berdasarkan alas dan tinggi: ${areaBaseHeight.toFixed(2)}<br>
      Luas berdasarkan rumus Heron: ${areaHeron.toFixed(2)}
  `;
}