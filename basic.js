// Fungsi untuk menentukan kategori nilai
function determineCategory(nilai) {
    if (nilai >= 90) {
      return 'A';
    } else if (nilai >= 80) {
      return 'B';
    } else if (nilai >= 70) {
      return 'C';
    } else {
      return 'D';
    }
  }
  
  // Fungsi untuk menghitung faktorial
  function hitungFaktorial(angka) {
    if (angka === 0 || angka === 1) {
      return 1;
    } else {
      let faktorial = 1;
      for (let i = angka; i >= 1; i--) {
        faktorial *= i;
      }
      return faktorial;
    }
  }
  
  // Fungsi untuk mencetak angka dengan while
  function cetakAngkaWhile(batas) {
    let i = 1;
    let result = '';
  
    while (i <= batas) {
      result += i + ' ';
      i++;
    }
  
    return result;
  }
  
  // Fungsi untuk mencetak angka dengan do while
  function cetakAngkaDoWhile(batas) {
    let i = 1;
    let result = '';
  
    do {
      result += i + ' ';
      i++;
    } while (i <= batas);
  
    return result;
  }
  
  // Fungsi utama untuk menghitung dan menampilkan hasil
  function calculate() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
  
    const kategoriNilai = determineCategory(inputValue);
    const faktorialNilai = hitungFaktorial(inputValue);
    const angkaWhile = cetakAngkaWhile(inputValue);
    const angkaDoWhile = cetakAngkaDoWhile(inputValue);
  
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = `
      <p>Kategori Nilai: ${kategoriNilai}</p>
      <p>Faktorial dari ${inputValue} adalah: ${faktorialNilai}</p>
      <p>Angka dengan while: ${angkaWhile}</p>
      <p>Angka dengan do while: ${angkaDoWhile}</p>
    `;
  }
  
  // Fungsi untuk menentukan kategori nilai dengan switch case
function determineCategorySwitchCase(nilai) {
    let kategori = '';
  
    switch (true) {
      case nilai >= 90:
        kategori = 'A';
        break;
      case nilai >= 80:
        kategori = 'B';
        break;
      case nilai >= 70:
        kategori = 'C';
        break;
      default:
        kategori = 'D';
    }
  
    return kategori;
  }
  
  // Fungsi utama untuk menghitung dan menampilkan hasil dengan switch case
  function calculateSwitchCase() {
    const inputValue = parseFloat(document.getElementById('inputValueSwitch').value);
  
    const kategoriNilaiSwitch = determineCategorySwitchCase(inputValue);
    const faktorialNilaiSwitch = hitungFaktorial(inputValue);
    const angkaWhileSwitch = cetakAngkaWhile(inputValue);
    const angkaDoWhileSwitch = cetakAngkaDoWhile(inputValue);
  
    const outputElementSwitch = document.getElementById('outputSwitch');
    outputElementSwitch.innerHTML = `
      <p>Kategori Nilai: ${kategoriNilaiSwitch}</p>
      <p>Faktorial dari ${inputValue} adalah: ${faktorialNilaiSwitch}</p>
      <p>Angka dengan while: ${angkaWhileSwitch}</p>
      <p>Angka dengan do while: ${angkaDoWhileSwitch}</p>
    `;
  }