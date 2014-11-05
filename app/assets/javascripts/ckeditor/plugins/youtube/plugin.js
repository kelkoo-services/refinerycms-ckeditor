// Shamelessly stolen from https://www.webmasterquery.com/answers/How-do-I-add-a-custom-button-to-the-CKEditor-toolbar.html

(function(){
  var a= {
    exec:function(editor){
      if(CKEDITOR.env.ie)
        {
          editor.getSelection().unlock(true);
          var selected_text = editor.getSelection().getNative().createRange().text;
        }
        else
          {
            var selected_text = editor.getSelection().getNative();
          }
          var response = prompt('Introduzca la dirección de youtube. Por ejemplo: http://www.youtube.com/watch?v=qObzgUfCl28', selected_text.toString());
          var youtube_url = null;
          if(response == null || response == '') {
            youtube_url = selected_text.toString();
          }
          else {
            youtube_url = response;
          }

          if(match = youtube_url.match(/https?:\/\/www\.youtube\.com\/watch\?v=([\w-]+)/)) {
            editor.insertHtml('[youtube]' + match[1] + '[/youtube]');
          } else {
            alert("Lo sentimos, la dirección que ha introducido no parece un vídeo de youtube válido");
          }
    }
  },

  b='youtube';
  CKEDITOR.plugins.add(b,{
    init:function(editor){
      editor.addCommand(b,a);
      editor.ui.addButton("Youtube",{
        label:'Add Youtube Video URL', 
        icon:this.path+"video.png",
        command:b
      });
    }
  });
})();
