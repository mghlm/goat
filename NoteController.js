(function(exports) {

  function NoteController(list) {
    this.list = list;
    this.changeText();
  };

  NoteController.prototype.changeText = function () {
    var ourListView = new ListView(this.list);
    var targetDiv = document.getElementById('app');
    targetDiv.innerHTML = ourListView.displayNotes();
  }

  var newNoteButton = document.getElementById('addnotebutton');
  newNoteButton.addEventListener("click", function(){
    list.createNote(document.getElementById('newnote').value);
    new NoteController(list);
    event.preventDefault();
  });

exports.NoteController = NoteController;

})(this);
