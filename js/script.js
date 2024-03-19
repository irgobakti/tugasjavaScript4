// Fungsi untuk menambahkan pegawai
function tambahPegawai() {
    const nama = document.getElementById('nama').value;
    const jabatan = document.getElementById('jabatan').value;
    const status = document.getElementById('status').value;

    // Validasi input
    if (!nama || !jabatan || !status) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Silakan lengkapi semua kolom!'
        });
        return;
    }

    let gaji;
    if (jabatan === 'Manager') {
        gaji = 15000000;
    } else if (jabatan === 'Asisten Manager') {
        gaji = 10000000;
    } else {
        gaji = 5000000;
    }

    const tunjanganJabatan = gaji * 0.15;
    const bpjs = gaji * 0.1;
    const tunjanganKeluarga = (status === 'menikah') ? gaji * 0.2 : 0;
    const totalGaji = gaji + tunjanganJabatan - bpjs + tunjanganKeluarga;

    // Menampilkan data pegawai dalam bentuk tabel dengan SweetAlert
    Swal.fire({
        title: 'Data Pegawai',
        html: `<table>
                    <thead>
                        <tr>
                            <th>Nama Pegawai</th>
                            <th>Jabatan</th>
                            <th>Status</th>
                            <th>Gaji Pokok</th>
                            <th>Tunjangan Jabatan</th>
                            <th>BPJS</th>
                            <th>Tunjangan Keluarga</th>
                            <th>Total Gaji</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${nama}</td>
                            <td>${jabatan}</td>
                            <td>${status}</td>
                            <td>Rp ${formatRupiah(gaji)}</td>
                            <td>Rp ${formatRupiah(tunjanganJabatan)}</td>
                            <td>Rp ${formatRupiah(bpjs)}</td>
                            <td>Rp ${formatRupiah(tunjanganKeluarga)}</td>
                            <td>Rp ${formatRupiah(totalGaji)}</td>
                        </tr>
                    </tbody>
                </table>`,
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            container: 'swal2-container',
            popup: 'swal2-popup',
            content: 'swal2-content',
            closeButton: 'swal2-closeButton',
            closeButtonHover: 'swal2-closeButtonHover',
        },
        scrollbarPadding: false
    });

    // Kosongkan form setelah pegawai ditambahkan
    document.getElementById('nama').value = '';
    document.getElementById('jabatan').selectedIndex = 0;
    document.getElementById('status').selectedIndex = 0;
}

// Fungsi untuk memformat angka ke dalam format Rupiah
function formatRupiah(angka) {
    return angka.toLocaleString();
}

// Fungsi untuk memperindah tampilan select (switch)
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
});
