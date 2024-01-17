// Logic fungsi  hitung luas persegi
function hitungLsPersegi() {
    var sisiLuas = document.getElementById("nilai-sisi-luas").value;
  
    document.getElementById("output-nilai-sisi").innerHTML =
      "<span>" + sisiLuas + "</span>";
    console.log(sisiLuas);
  
    document.getElementById("output-nilai-sisi2").innerHTML =
      "<span>" + sisiLuas + "</span>";
    console.log(sisiLuas);
  
    let a1 = parseInt(sisiLuas);
    let a2 = sisiLuas * sisiLuas;
  
    document.getElementById("result").innerHTML = "<span>" + a2 + "</span>";
    console.log(a2);
  
    var elemen = document.getElementById("hasilLuas");
    elemen.style.display = "block";
    var elemen1 = document.getElementById("btn-reset");
    elemen1.style.display = "block";
    return sisiLuas;
  }
//Logic reset hitung luas persegi
  function resetLsPersegi() {
    document.getElementById("nilai-sisi-luas").value = "";
  
    var elemen = document.getElementById("hasilLuas");
    elemen.style.display = "none";
  }