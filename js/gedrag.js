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
