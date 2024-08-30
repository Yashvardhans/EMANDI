
// var commodityDropdown = document.getElementById('commodity');
// var dateInput = document.getElementById('date-input');

// Define a function to update the options of the market dropdown based on the selected district
function updateMarketOptions() {
  var districtDropdown = document.getElementById('district');
  var marketDropdown = document.getElementById('market');
  marketDropdown.options.length = 0;
  // Get the selected district value
  console.log('updateMarketOptions() called');
  
  var selectedDistrict = districtDropdown.options[districtDropdown.selectedIndex].value;
   
  console.log(selectedDistrict);
  // Define an object mapping districts to markets
  const districtMarketMap = {
    '59': ['अलीराजपुर', 'Alirajpur', 'Alirajpur(F&V)', '2732'],
    '58': ['Anuppur', 'Jaithari', 'Kotma'],
    // 'District 3': ['Market 3', 'Market 6', 'Market 9']
  };
  
  // Get the list of markets for the selected district from the districtMarketMap object
  var markets = districtMarketMap[selectedDistrict];
  
  
  // Clear the current options of the market dropdown
  
  
  // Add the new options to the market dropdown
  for (var i = 0; i < markets.length; i++) {
    var option = document.createElement('option'); 
    option.text = markets[i];
    option.value = markets[i+1];
    marketDropdown.add(option);
    console.log(option.value);
  }
}

// Attach event listeners to the dropdowns and date input
// districtDropdown.addEventListener('change', function() {
//   updateMarketOptions();
document.addEventListener("DOMContentLoaded", function() {
    updateMarketOptions();
  });
// });
