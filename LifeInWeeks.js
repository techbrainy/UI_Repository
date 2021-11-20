function lifeinweeks(years){
var liferemaininginyears = 90-years;
var liferemainingindays = liferemaininginyears * 365;
var lifereamininginweeks = liferemaininginyears * 52;
var lifereamininginmonths = liferemaininginyears * 12;

console.log('You have '+ liferemainingindays+' days '+lifereamininginweeks+ ' weeks '+lifereamininginmonths+' months' );

}
lifeinweeks(56);
