var Spec = {} || Spec;

// Add Fisher-Yates shuffle function to Array prototype
Array.prototype.shuffle = function() {
  var len = this.length;
  var i = len;
   while (i--) {
    var p = parseInt(Math.random()*len);
    var t = this[i];
    this[i] = this[p];
    this[p] = t;
  }
};

Spec.data = {
  company_name: ["Crazy Hippo", "Enabled", "Mood", "Wallpaper", "Wonky Mullet", "Green Duck", "Qudos Labs", "tee.com", "Plusplus", "Funky Elf" ],
  company_type: ["digital agency", "creative agency", "full-service agency", "awesome stealth startup", "VC-backed startup", "funded startup"],
  seniority: ["Junior", "Senior", "Heavyweight", "Middleweight", "Senior"],
  place: ["London", "Shoreditch", "Soho", "The Silicon Roundabout", "Tech Hub", "Hoxton"],
  ruby_or_rails: ["ruby", "rails", "ruby on rails"],
  driven_development: ["BDD", "TDD", "BDD and TDD"],
  years_ruby: [3,4,5,6,7],
  years_rails: [1,2,3],
  integration_testing: ["Integration testing with cucumber.  Steak or coulda is not acceptable.", "Integration testing with steak.  If you still use cucumber, you're an idiot."],
  job_title: ["ninja", "ninja", "rockstar", "rockstar", "god", "engineer", "developer", "programmer"],
  testing_framework: ["RSpec", "Test::Unit"],
  another_language: ["Java", "Python", "PHP"],
  functional_language: ["Haskell", "Clojure", "Erlang"],
  database: ["MySQL", "Postgres"],
  nosql: ["Mongo", "CouchDB", "Tokyo Cabinet"],
  sysadmin: ["Linux Sysadmin Skills", "Experience in Devops", "Configuration management using chef", "System configuration with puppet"]

}

Spec.random = function(thing) {
  var options = Spec.data[thing];
  options.shuffle();
  return options[0];
};

jQuery(document).ready(function($) {
  var source = $("#spec-template").html();
  var template = Handlebars.compile(source);
  var context = {};
  for (k in Spec.data) {
    context[k] = Spec.random(k);
  }
  var company_domain = context["company_name"].toLowerCase().replace(" ","");
  context["email_address"] = "careers@"+company_domain+".com";
  var html = template(context);
  $("#spec").html(html);
});
