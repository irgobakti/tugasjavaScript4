

  // Data Pegawai
  const pegawai = {
    nama: "Ridwan",
    jabatan: "Staff",
    status: "menikah"
  };

  // Menghitung Gaji Pokok
  let gajiPokok;
  if (pegawai.jabatan === "Manager") {
    gajiPokok = 15000000;
  } else {
    if (pegawai.jabatan === "Asisten Manager") {
      gajiPokok = 10000000;
    } else {
      if (pegawai.jabatan === "Staff") {
        gajiPokok = 5000000;
      } else {
        gajiPokok = 0;
      }
    }
  }

  // Menghitung Tunjangan Jabatan
  const tunjanganJabatan = 0.15 * gajiPokok;

  // Menghitung BPJS
  const bpjs = 0.10 * gajiPokok;

  // Menghitung Tunjangan Keluarga
  let tunjanganKeluarga;
  if (pegawai.status === "menikah") {
    tunjanganKeluarga = 0.20 * gajiPokok;
  } else {
    tunjanganKeluarga = 0;
  }

  // Menghitung Total Gaji
  const totalGaji = gajiPokok + tunjanganJabatan + bpjs + tunjanganKeluarga;

  // Menampilkan Data Pegawai dalam Tabel
  const dataPegawaiElement = document.getElementById("dataPegawai");
  dataPegawaiElement.innerHTML = `
    <tr>
      <td>${pegawai.nama}</td>
      <td>${pegawai.jabatan}</td>
      <td>${pegawai.status}</td>
      <td>${gajiPokok}</td>
      <td>${tunjanganJabatan}</td>
      <td>${bpjs}</td>
      <td>${tunjanganKeluarga}</td>
      <td>${totalGaji}</td>
    </tr>
  `;

  // Menampilkan Total Gaji
  document.getElementById("totalGaji").textContent = totalGaji.toLocaleString("id-ID");
