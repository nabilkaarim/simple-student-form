function validateForm() {
    let form = document.forms["biodataForm"];
    let name = form["name"].value;
    let bday = form["bday"].value;
    let notelp = form["notelp"].value;
    let agama = form["agama"].value;
    let kota = form["kota"].value;
    let sekolah = form["sekolah"].value;
    let hobi = form["hobi"].value;
    let email = form["email"].value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (name == "") {
        alert("Nama Lengkap harus diisi");
        return false;
    }
    if (bday == "") {
        alert("Tanggal Lahir harus diisi");
        return false;
    }
    if (notelp == "" || notelp.length != 12 || isNaN(notelp)) {
        alert("Nomor Telepon harus diisi dengan 12 angka");
        return false;
    }
    if (agama == "") {
        alert("Agama harus dipilih");
        return false;
    }
    if (kota == "") {
        alert("Asal Kota harus diisi");
        return false;
    }
    if (!form["sekolah"].value) {
        alert("Asal Sekolah harus dipilih");
        return false;
    }
    if (hobi == "") {
        alert("Hobi harus diisi");
        return false;
    }
    if (email == "" || !emailPattern.test(email)) {
        alert("Email harus diisi dengan format yang benar");
        return false;
    }
    return true;
}