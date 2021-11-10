//const dropzone = new Dropzone("div.my-dropzone", { url: "/file/post" });

Dropzone.options.fileUpload = {
  url: 'procesar.php',
  addRemoveLinks: true,
  uploadMultiple: false,
  autoProcessQueue: false,
  maxFiles: 1,
  init: function () {
    var myDropzone = this;
    this.on("maxfilesexceeded", function (file) {
      console.log('Files exceeded');
      this.removeAllFiles();
      this.addFile(file);
    });

    var btnEnviar = document.querySelector("#enviar");
    btnEnviar.addEventListener("click", function (e) {
      /* 
      **** --- No usaremos la forma ajax propia de la libreria---
      */
      //e.preventDefault();
      //e.stopPropagation();
      //myDropzone.processQueue();
      console.log('btn activado')
    })
  },
  accept: function (file, done) {
    console.log(file.name);
    var divProgress = document.getElementsByClassName("dz-progress");
    file.previewElement.classList.add("dz-success");
    Array.prototype.map.call(divProgress, function (r) {
      r.style.display = 'none';
    });
    //extra
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onloadend = function () {
      var inputFile = document.querySelector("#file");
      let content = fileReader.result;
      inputFile.value = content;
    }
    done();    // !Very important
  }
}