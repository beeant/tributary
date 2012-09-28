
//The editor view renders the CodeMirror editor and sets up the logic for interaction
//with the code model 
tributary.Editor = Backbone.View.extend({
  initialize: function() {

    this.config = this.model.get("config");
    //TODO: drag and drop
  },
  render: function() {
    var that = this;

    d3.select(this.el)
      .attr({
        class: "editor"
      });

    //we render the codemirror instance into the el
    this.cm = CodeMirror(this.el, {
        //value: "function myScript(){return 100;}\n",
        mode:  "javascript",
        theme: "lesser-dark",
        lineNumbers: true,
        onChange: function() {
          var code = that.cm.getValue();
          //TODO: local storage?
          that.model.set("code", code);

        }
    });

    this.cm.setValue(this.model.get("code"));
    this.inlet = Inlet(this.cm);


  }
});