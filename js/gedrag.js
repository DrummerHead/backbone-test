/*
jQuery(function($){




var VistaLoca = Backbone.View.extend({

  events: {
    'click a': 'magia'
  },

  initialize: function(options){
    this.textito = options.textito;
  },

  vida: function(jorge, rachel){
    this.textito += (jorge + rachel)
  },

  magia: function(){
    alert('terrible click')
  },

  render: function(){
    this.$el.append('<a href="#">'+ this.textito +'</a>');
    return this;
  }

})

var vistaLoca = new VistaLoca({textito: 'hoho re avanzado'});

vistaLoca.vida('claro','ahiva');

vistaLoca.render();


$('#alphaTrigger').append(vistaLoca.el);


});

*/

var Amego = Backbone.Model.extend({
  defaults: {
    "nomen": "Sheison"
  },

  changeNomen: function(newNomen){
    this.set({nomen: newNomen});
  }
});


var AmegoView = Backbone.View.extend({
  tagName: "h1",

  initialize: function(){
    this.model.on("change", this.setNomen, this);
  },

  setNomen: function(newNomen){
    this.$el.text(this.model.get("nomen"));
  },

  render: function(){
    this.setNomen();

    return this;
  }
});


var CositoApp = Backbone.Router.extend({
  routes:{
    ":magia": "magia"
  },

  initialize: function(){
    this.amego = new Amego;
    var amegoView = new AmegoView({model: this.amego});

    $('body').html(amegoView.render().el);
  },

  magia: function(magia){
    this.amego.changeNomen(magia);
  },

  start: function(){
    //Backbone.history.start({pushState: true});
    Backbone.history.start();
  }
});




jQuery(function($){
  cosito = new CositoApp;
  cosito.start();
})




