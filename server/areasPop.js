var areas = ["Accra Metropolis","Kumasi","Tamale","Sekondi-Takoradi","Ashiaman","Sunyani","Cape Coast","Obuasi","Teshie","Tema Metropolis","Madina","Koforidua","Wa","Techiman","Ho","Nungua","Lashibi","Dome","Tema New Town","Gbawe","Oduponkpehe","Ejura","Taifa","Bawku","Aflao","Agona" ,"Swedru","Bolgatanga","Tafo","Berekum","Nkawkaw","Akim Oda","Winneba","Hohoe","Yendi","Suhum","Kintapo","Adenta East","Nsawam","Mampong","Konongo","Asamankese","Wenchi","Savelugu","Agogo","Anloga","Prestea","Effiakuma","Tarkwa","Elmina","Dunkwa-on-Offin","Begoro","Kpandu","Kintampo","Navrongo","Axim","Apam","Salaga","Saltpond","Akwatia","Shama","Keta","Nyakrom","Bibiani","Somanya","Foso","Aburi","Mumford","Bechem","Duayaw Nkwanta","Kade","Anomabu","Akropong","Kete-Krachi","Kibi","Kpandae","Mpraeso","Akim Swedru","Aboso","Bekwai"];

Towns.remove({});

for (i = 0; i < areas.length; i++){

    Towns.insert({name: areas[i]});
} 
