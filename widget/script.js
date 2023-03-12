define(['./index.js' ], function(App) {


	const Widget = function () {
  
	  const self = this;
	  self.system = this.system();
	  self.langs = this.langs;
  
	  /** @private */
	  this.callbacks = {
		render() {
		  
		  return true;
		},
		init() {
		  
		  return true;
		},
		bind_actions() {
		  
		  return true;
		},
		settings() {
		  
		},
		advancedSettings() {
			console.log("sdffczdsfc")
			App.default.advancedSettings();
		},
		onSave() {
		  
		},
		destroy() {
		  
		},
		contacts: {
		  selected() {
			
		  }
		},
		leads: {
		  selected() {
			
		  }
		},
		tasks: {
		  selected() {
			
		  }
		}
	  };
  
	  return this;
  
	};
  
	return Widget;
  
  });