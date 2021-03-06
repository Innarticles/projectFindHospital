var areasArray = ["Accra Metropolis","Kumasi","Tamale","Sekondi-Takoradi","Ashiaman","Sunyani","Cape Coast","Obuasi","Teshie","Tema Metropolis","Madina","Koforidua","Wa","Techiman","Ho","Nungua","Lashibi","Dome","Tema New Town","Gbawe","Oduponkpehe","Ejura","Taifa","Bawku","Aflao","Agona" ,"Swedru","Bolgatanga","Tafo","Berekum","Nkawkaw","Akim Oda","Winneba","Hohoe","Yendi","Suhum","Kintapo","Adenta East","Nsawam","Mampong","Konongo","Asamankese","Wenchi","Savelugu","Agogo","Anloga","Prestea","Effiakuma","Tarkwa","Elmina","Dunkwa-on-Offin","Begoro","Kpandu","Kintampo","Navrongo","Axim","Apam","Salaga","Saltpond","Akwatia","Shama","Keta","Nyakrom","Bibiani","Somanya","Foso","Aburi","Mumford","Bechem","Duayaw Nkwanta","Kade","Anomabu","Akropong","Kete-Krachi","Kibi","Kpandae","Mpraeso","Akim Swedru","Aboso","Bekwai"];

returnAreaLabels = function () {
  return Towns.find().map(function (c) {
    return {label: c.name, value: c._id};
  });
}

var ServicesSchema, TypesSchema;

ServicesSchema = new SimpleSchema({
  serviceName: {
    type: String
  },
  serviceFee: {
    type: Number
  }
});

TypesSchema = new SimpleSchema({
  typesName: {
    type: String
  }
});

this.Hospitals = new Meteor.Collection('hospitals');

Schemas.Hospital = new SimpleSchema({
  picture: {
    type: String,
    optional: true,
    label: 'Profile picture',
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'ProfilePictures'
      }
    }
  },
  hospitalName: {
    type: String,
    optional: false
  },
  description: {
    type: String,
    optional: false,
    autoform: {
      rows: 4
    }
  },
  address: {
    type: String,
    optional: false
  },
  consultation_fee: {
    type: Number,
    optional: false
  },
  services: {
    type: [ServicesSchema],
    optional: true
  },
  area: {
    type: String,
    allowedValues: ["Accra Metropolis","Kumasi","Tamale","Sekondi-Takoradi","Ashiaman","Sunyani","Cape Coast","Obuasi","Teshie","Tema Metropolis","Madina","Koforidua","Wa","Techiman","Ho","Nungua","Lashibi","Dome","Tema New Town","Gbawe","Oduponkpehe","Ejura","Taifa","Bawku","Aflao","Agona" ,"Swedru","Bolgatanga","Tafo","Berekum","Nkawkaw","Akim Oda","Winneba","Hohoe","Yendi","Suhum","Kintapo","Adenta East","Nsawam","Mampong","Konongo","Asamankese","Wenchi","Savelugu","Agogo","Anloga","Prestea","Effiakuma","Tarkwa","Elmina","Dunkwa-on-Offin","Begoro","Kpandu","Kintampo","Navrongo","Axim","Apam","Salaga","Saltpond","Akwatia","Shama","Keta","Nyakrom","Bibiani","Somanya","Foso","Aburi","Mumford","Bechem","Duayaw Nkwanta","Kade","Anomabu","Akropong","Kete-Krachi","Kibi","Kpandae","Mpraeso","Akim Swedru","Aboso","Bekwai"],
    autoform: {
      options:  function () {
        return Towns.find().map(function (c) {
          return {label: c.name, value: c.name};
        })
      }
    }
  },
  types: {
    type: String,
    allowedValues: ['General Hospital', 'Dentistry', 'Orthopedic', 'Maternity', 'Psychiatry'],
    optional: false,
    autoform: {
      options: [
      {
        label: "General Hospital",
        value: "General Hospital"
      }, {
        label: "Maternity",
        value: "Maternity"
      }, {
        label: "Dentistry",
        value: "Dentistry"
      }, {
        label: "Orthopedic",
        value: "Orthopedic"
      }, {
        label: "Psychiatry",
        value: "Psychiatry"
      }
      ]
    }
  },
 location: {
    type: [Number],
    decimal: true,
    autoform: {
      type: 'map',
      afFieldInput:{
        geolocation: true,
        searchBox: true,
        autolocate: true
      }
    }
  },
  owner: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    autoValue: function() {
      if (this.isInsert) {
        return Meteor.userId();
      }
    },
    autoform: {
      omit: true
    }
  },
  country: {
    type: String,
    label: 'Country',
    allowedValues: ["Select Country", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"],
    optional: true
  }
});
Hospitals.attachSchema(Schemas.Hospital);
