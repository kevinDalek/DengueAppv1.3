/**************Databasebase Part*************/
document.addEventListener("deviceready",onDeviceReady,false);
var db;
function onDeviceReady(){
  db=window.openDatabase("dengueDB","1.0","Dengue App","2*1024*1024");
  db.transaction(createDB,errorCB,successCB);
  db.transaction(insertDB,errorCB,successCB);
  db.transaction(createEmergencyDB,errorCB,successCB);
  db.transaction(insertEmergencyDB,errorCB,successCB);
  db.transaction(successQueryBD,errorCB,successCB);
  db.transaction(queryDBTable,errorCB,successCB);
  db.transaction(successNews1,errorCB,successCB);
  db.transaction(successNews2,errorCB,successCB);
  db.transaction(successNews3,errorCB,successCB);
  db.transaction(successNews4,errorCB,successCB);
  db.transaction(successNews5,errorCB,successCB);
  db.transaction(successNews6,errorCB,successCB);
  db.transaction(successNews7,errorCB,successCB);
 

}

//creating table
function createDB(tx){
  tx.executeSql('DROP TABLE IF EXISTS tbl_dengue');
  tx.executeSql('CREATE TABLE IF NOT EXISTS tbl_dengue(id_main INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT, s_desc TEXT,l_desc TEXT,date TEXT, country TEXT, img_path TEXT)');

}
function errorCB(err){
  console.log("SQL Error:"+err.code);
}
function successCB(){
  console.log("Database & Table successfully created");
}
function createEmergencyDB(tx){
  tx.executeSql('DROP TABLE IF EXISTS tbl_emergency');
  tx.executeSql('CREATE TABLE IF NOT EXISTS tbl_emergency(inst_name TEXT, contact_number TEXT)');
}
//insert in database
function insertEmergencyDB(tx){
  var mySqlStr = 'INSERT INTO tbl_emergency(inst_name,contact_number)'
                 +'VALUES'
                 +'("Bel Air Area Health Centre","+(230) 419 2812"),'
                 +'("Trou Deau Douce Community Health Centre","+(230) 419 2762"),'
                 +'("Ecroignard Community Health Centre","+(230) 419 3298"),'
                 +'("Bramsthan Area Health Centre","+(230) 413 3291"),'
                 +'("Mare La Chaux Community Health Centre","+(230) 415 1045"),'
                 +'("Belle Mare Community Health Centre","+(230) 415 1047"),'
                 +'("Quatre Cocos Community Health Centre","+(230) 415 1046"),'
                 +'("Central Flacq Area Health Centre","+(230) 413 0828"),'
                 +'("Flacq Hospital","+(230) 413-2532"),'
                 +'("Poste de Flacq Community Health Centre","+(230) 413 3297"),'
                 +'("Clemencia  Community Health Centre","+(230) 419 4890"),'
                 +'("Olivia Community Health Centre","+(230) 419 4489"),'
                 +'("Sebastopol Lesur Community Health Centre","+(230) 437 5189"),'
                 +'("Pellegrin - Ronald Palmer Community Health Centre","+(230) 437 5760"),'
                 +'("Montagne Blanche Area Health Centre","+(230) 437 5153"),'
                 +'("Camp de Masque Pave Community Health Centre","+(230) 417 5533"),'
                 +'("Medine Camp de Masque Community Health Centre","+(230) 416 5937"),'
                 +'("Providence Community Health Centre","+(230) 435 7085"),'
                 +'("Melrose Community Health Centre","+(230) 437 4645"),'
                 +'("LEsperance - M d Senneville Community Health Centre","+(230) 435 6166"),'
                 +'("Dagotiere Community Health Centre","+(230) 433 0374"),'
                 +'("LAvenir Community Health Centre","+(230) 000 0000"),'
                 +'("St Pierre Area Health Centre - Dr Quenum","+(230) 433 4270"),'
                 +'("Moka Community Health Centre","+(230) 433 7175"),'
                 +'("Beau Bassin Area Health Centre - Lady Twining","+(230) 454 1743"),'
                 +'("Beau Bassin - Odette Leal Community Health Centre","+(230) 464 7128"),'
                 +'("Rose Hill Area Health Centre","+(230) 454 1937"),'
                 +'("Ollier - S S Ramgoolam Community Health Centre","+(230) 425 7566"),'
                 +'("Beau Songes Community Health Centre","+(230) 452 0085"),'
                 +'("Quatre Bornes Area Health Centre","+(230) 454 3750"),'
                 +'("Bassin Community Health Centre","+(230) 427 3748"),'
                 +'("Victoria Hospital","+(230) 425-3031"),'
                 +'("Palma - Shri R Jugnauth Community Health Centre","+(230) 424 8250"),'
                 +'("Highlands Community Health Centre","+(230) 697 1369"),'
                 +'("Curepipe Area Health Centre","+(230) 696 3325"),'
                 +'("Phoenix Community Health Centre","+(230) 696 4286"),'
                 +'("Castel Area Health Centre","+(230) 696 2087"),'
                 +'("La Caverne Area Health Centre","+(230) 696 4205"),'
                 +'("Mahebourg Hospital","+(230) 631 9556"),'
                 +'("Plaine Magnien Community Health Centre","+(230) 637 3059"),'
                 +'("Trois Boutiques Community Health Centre","+(230) 637 3206"),'
                 +'("Mare DAlbert Community Health Centre","+(230)  627 0682"),'
                 +'("New Grove Community Health Centre","+(230)  627 7117"),'
                 +'("Mare Tabac Community Health Centre","+(230) 627 7646"),'
                 +'("Tyack Area Health Centre","+(230) 626 2556"),'
                 +'("Chemin Grenier Area Health Centre","+(230) 622 6544"),'
                 +'("Baie du Cap Community Health Centre","+(230) 622 5449"),'
                 +'("Chamarel Community Health Centre","+(230) 483 5397"),'
                 +'("La Gaulette Community Health Centre","+(230) 451 5283"),'
                 +'("Dr Y. Cantin Community hospital","+(230) 483 6683"),'
                 +'("Flic en Flac Community Health Centre","+(230) 453 8252"),'
                 +'("Albion Community Health Centre","+(230) 238 4400"),'
                 +'("Petite Riviere Community Health Centre","+(230) 233 6852"),'
                 +'("Pailles Community Health Centre","+(230) 286 7686"),'
                 +'("Plaine Lauzun Community Health Centre","+(230) 212 9738"),'
                 +'("Volcy Pougnet Community Health Centre","+(230) 212 2761"),'
                 +'("Vallee Des Pretres Community Health Centre","+(230) 241 4533"),'
                 +'("Tranquebar Community Health Centre","+(230) 212 9735"),'
                 +'("Le Hochet - Mrs K Patel Community Health Centre","+(230) 248 8159"),'
                 +'("Baie du Tombeau Community Health Centre","+(230) 247 1148"),'
                 +'("Calbasses - Human Service Trust Community Health Centre","+(230) 243 3561"),'
                 +'("Arsenal Community Health Centre","+(230) 249 3643"),'
                 +'("Pamplemousses Community Health Centre","+(230) 243 3547"),'
                 +'("Terre Rouge Community Health Centre","+(230) 248 8161"),'
                 +'("Congomah Community Health Centre","+(230) 243 3038"),'
                 +'("DEpinay Community Health Centre","+(230) 243 3601"),'
                 +'("Long Mountain Hospital","+(230) 245 2532"),'
                 +'("Ville Bague Community Health Centre","+(230) 418 4491"),'
                 +'("Sir Seewoosagur Ramgoolam National Hospital (SSRNH)","+(230) 246-4669"),'
                 +'("Triolet Area Health Centre","+(230) 261 6380"),'
                 +'("Pointe aux Piments Community Health Centre","+(230) 261 5689"),'
                 +'("Plaines des Papayes Community Health Centre","+(230) 266 9869"),'
                 +'("Fond du Sac - Shri Ram Community Health Centre","+(230) 266 6016"),'
                 +'("Vale Community Health Centre","+(230) 263 5121"),'
                 +'("Grand Bay  Community Health Centre","+(230) 263 8041"),'
                 +'("Petit Raffray Community Health Centre","+(230) 283 8006"),'
                 +'("Cap Malheureux - P Selwyn Community Health Centre","+(230) 262 6336"),'
                 +'("Poudre Dor Hospital","+(230) 282 1181"),'
                 +'("Poudre DOr Community Health Centre","+(230) 283 9253"),'
                 +'("LEsperance Trebuchet - K Ram Community Health Centre","+(230) 264 1704"),'
                 +'("Piton Community Health Centre","+(230) 264 1732"),'
                 +'("Cottage Community Health Centre","+(230) 266 1261"),'
                 +'("Goodlands Area Health Centre","+(230) 283 9009"),'
                 +'("Vacoas-ENT hospital","+(230) 686 2061"),'
                 +'("Floreal Community Health Centre","+(230) 686 3539");';
                  tx.executeSql(mySqlStr);



}

function insertDB(tx){
   var sqlStr = 'INSERT INTO tbl_dengue(title, s_desc, l_desc, date, country, img_path)'
               +'VALUES'
               +'("Dengue - new cases 2019",'
               +'"Five cases of dengue have been reported in recent days in Mauritius. The patients were hospitalized and quarantined...",'
               +'"Five cases of dengue have been reported in recent days in Mauritius. The patients were hospitalized and quarantined. According to the Ministry of Health, measures have been taken for screening in several regions. In addition, fumigation and awareness campaigns are underway, according to the Ministrys Director of Health Services.<br>They were placed in isolation. Four Indian workers suffer from dengue fever. A fifth case was also detected. This is a Mauritian. The patients were admitted to Dr. AG Jeetoo Hospital for several days.<br> Indian nationals working on the Metro Express sites were housed in dormitories in Richelieu and other surrounding areas. The Ministry of Health is monitoring their health status closely.<br> Meanwhile, for two days, the health service conducts a fogging exercise in the dormitories. Medical tests are also expected with all workers on the Metro Express yards.",'
               +'"03/03/2019",'
               +'"Mauritius",'
               +'"img/n1.jpg"),'
               +'("Mauritius: Dengue fever has gained ground throughout the weekend, 94 cases identified since late March",'
               +'"94 cases of dengue fever have been identified from Monday March 30 to Monday 30 April and essentially in the Port Louis region...",'
               +'"94 cases of dengue fever have been identified from Monday March 30 to Monday 30 April, and essentially in the Port Louis region (Cité La Cure, Pailles Vallée Pitot, Valley des Prêtres, City Martial, Saint. -Cross and Roche-Bois). The regions of Pamplemousses, Lallmatie, Souillac, Trou-aux-Biches and Mahebourg are equally affected. 30 new cases of the infectious disease has been counted this weekend. People infected with the dengue virus have been admitted to a specialized unit within different hospitals of the island for an adequate therapeutic management. 10 patients were also treated in hospital Monday. Health authorities continue to take all necessary measures to manage health risks, including the use of insecticides in zones at risk. Thousands of houses in the regions concerned were also sensitized to clean their yard in order to prevent the proliferation of the Ades albopictus mosquito, vector of disease as well as the destruction of larval habitats.",'
               +'"04/28/2015",'
               +'"Mauritius",'
               +'"img/n2.jpg"),'
               +'("Mauritius: 64 cases of dengue fever declared, the authorities in health monitoring mode",'
               +'"64 cases of dengue fever have been reported from 30 March to 24 April, and essentially in the Port Louis region (Cité La Cure...",'
               +'"64 cases of dengue fever have been reported from 30 March to 24 April, and essentially in the Port Louis region (Cité La Cure, Pailles Vallée Pitot, Valley des Prêtres, City Martial, Saint Croix and Roche-Bois). The first patient had been declared in the area of the Champ de Mars at the heart of the Mauritian capital. The regions of Pamplemousses, Llamatie, Souillac, Trou-aux-Biches and Mahebourg are equally affected. People infected with the dengue virus have been admitted to a specialized unit within various hospitals of the island for proper therapeutic management of the infectious disease. Nine patients were also treated in hospital on Friday afternoon. Health authorities continue to take all necessary measures to manage health risks, including with the use of insecticides in zones at risk. Thousands of houses in the regions concerned were also sensitized to clean their yard in order to prevent the proliferation of the Ades albopictus mosquito, vector of disease as well as the destruction of larval habitats.",'
               +'"04/27/2015",'
               +'"Mauritius",'
               +'"img/n3.jpg"),'
               +'("Mauritius: 54 cases of dengue fever reported, health officials raise awareness on the multiplication of larval habitats",'
               +'"54 cases of dengue have been identified since April 2 to the end of last week, and principally in the Port Louis region. Cases have also been identified on the side of Pailles Triolet, Camp Fouquereaux and...",'
               +'"54 cases of dengue have been identified since April 2 to the end of last week, and principally in the Port Louis region. Cases have also been identified on the side of Pailles Triolet, Camp Fouquereaux and Mahebourg. People affected by the dengue virus have been admitted to a specialized unit at the Jeetoo hospital of the Mauritian capital for taking appropriate therapeutic management of infectious disease. 18 patients are still treated in hospitals, as reported by the Ministry of Health. The health authorities have already taken all the necessary measures for managing health risks, including with the use of insecticides in the areas at risk. 4,600 families in the affected regions have also been sensitized to clean their yard to prevent the proliferation of the Ades albopictus mosquito vector of disease and the destruction of larval habitats.",'
               +'"04/21/2015",'
               +'"Mauritius",'
               +'"img/n4.jpg"),'
               +'("Mauritius: 36 cases of dengue fever within two weeks",'
               +'"36 cases of dengue fever have been identified in the past two weeks essentially in Port-Louis in the sector of Champ de Mars...",'
               +'"36 cases of dengue fever have been identified in the past two weeks essentially in Port-Louis in the sector of Champ de Mars. Another case was also identified this weekend on the side of Mahebourg, in southern Mauritius. People affected by the dengue virus have been admitted to a specialized unit of the Jeetoo hospital in the Mauritian capital for an adequate therapeutic care of the infectious disease. The health authorities have already taken all the necessary measures to manage health risks, particularly with the use of insecticides in areas at risk. As a reminder, last year nearly at the same time about forty cases of dengue were recorded with the great majority of cases listed in the Triolet region in the northeast of Mauritius.",'
               +'"04/13/2015",'
               +'"Mauritius",'
               +'"img/n5.jpg"),'
               +'("Mauritius: Several cases of dengue fever identified in Port Louis",'
               +'"Ten cases of dengue fever have been identified since the beginning of the week in the Port Louis region at Cité Martial...",'
               +'"Ten cases of dengue fever have been identified since the beginning of the week in the Port Louis region at Cité Martial and in the sector of Champ de Mars. At least five people have contracted dengue fever locally, which is different from other surveys during the previous years. The health authorities have already been taken including all the necessary measures to manage health risks, including with the use of insecticides in areas at risk of the Mauritian capital. As a reminder, last year at the same time forty cases of dengue fever were recorded with the large majority of cases listed in the Triolet region in the North East of Mauritius.",'
               +'"04/02/2015",'
               +'"Mauritius",'
               +'"img/n3.jpg"),'
               +'("Vaccine against dengue fever commercialised in 2015",'
               +'"The French pharmaceutical group Sanofi is the first laboratory to develop a vaccine against dengue...",'
               +'"The French pharmaceutical group Sanofi is the first laboratory to develop a vaccine against dengue. The research project has cost 1.3 billion euros. Vaccine should be put on sale on the horizon of 2015. Thus, the latest tests showed positive outcomes in terms of treatment. An efficiency rate of 60.8% was recorded among young people aged between 9-16 years and the percentage of protection against the severe form of the virus is around 95.5. The vaccine also decreases 80.3% the risk of hospitalisation. As a reminder, the dengue virus annually affects nearly 50 million people across the world.",'
               +'"11/05/2014",'
               +'"Mauritius",'
               +'"img/n2.jpg");';
               tx.executeSql(sqlStr);
}
/***Populate Table****/
   function PopulateTable(tx, results) {
   
            var tblText='<table id="t01"><tr><th>Health Institution:</th> <th>Telephone no.</th></tr>';
            var len = results.rows.length;
            for (var i = 0; i < len; i++) {
               
                tblText +='<tr><td>' + results.rows.item(i).inst_name +'</td><td>'
                        + results.rows.item(i).contact_number +'</td></tr>';
            }
            tblText +="</table>";
            $("#tblDiv").html(tblText);
        }
         function queryDBTable(tx) {
            tx.executeSql('SELECT * FROM tbl_emergency ORDER BY inst_name', [], PopulateTable, errorCB);
        }
/*********END OF POPULATE*************/
/******Search Institutions*******/
   function searchQueryDB(tx) {
            tx.executeSql("SELECT * FROM tbl_emergency where inst_name like ('%"+ $('#txtSearch').val() + "%')",
                    [], PopulateTable, errorCB);
        }
  function goSearch() {
            var db = window.openDatabase("dengueDB","1.0","Dengue App","2*1024*1024");
            db.transaction(searchQueryDB, errorCB);
        }
$('#txtSearch').on( "change", function(event) {
  goSearch();
});
/***END OF Search Institutions****/




    function renderListCB(tx,results){
            var htmlString = '';
            var len = results.rows.length;
            for (var i=0;i<len;i++){

              //htmlString+='<li>'+results.rows.item(i).title+'<br>'+results.rows.item(i).author+'</li>';

              htmlString+=' <li style="margin-left: -90px;">'
                           +'<a href="#detailNewsPage'+results.rows.item(i).id_main+'">'
                           +'<div class="newsheader">'+results.rows.item(i).title+'</div>'
                           +'<img class="newsImg" src="'+results.rows.item(i).img_path+'" align="left">'
                           +'<div style="white-space:normal;" class="newsD">| '+results.rows.item(i).date+' | '+results.rows.item(i).country+'</div>'
                           +'<p style="white-space:normal;" class="newP">'+results.rows.item(i).s_desc+'</p></a></li> ';
           
            }
            $('#ListNews').html(htmlString);
            $('#ListNews').listview('refresh');

          }

           function successQueryBD(tx){
           //alert("Data successfully Inserted");
           tx.executeSql('SELECT * FROM tbl_dengue',[],renderListCB,errorCB);
          }

/**************END Databasebase Part*************/

/**********************Display Data for news1***************************************/
function displayFull(tx,results){
            var htmlString1 = '';
               var len = results.rows.length;
            for (var i=0;i<len;i++){

           
             htmlString1 = '<div class="fullHeader">'+results.rows.item(i).title+'</div>'
                          +'<img class="imgFullNews" src="'+results.rows.item(i).img_path+'" alt="imgtemp1" align="left">'
                          +'<div class="fullContent">'+results.rows.item(i).l_desc+'</div>';
           
           }
         
           $('#displayHere').html(htmlString1);

          }
  function successNews1(tx){
           //alert("Data successfully Inserted");
           tx.executeSql('SELECT * FROM tbl_dengue WHERE id_main=1',[],displayFull,errorCB);
                             }
/*********************END OF Display Data for news1*********************************/
/**********************Display Data for news2***************************************/
function displayFull2(tx,results){
            var htmlString2 = '';
               var len = results.rows.length;
            for (var i=0;i<len;i++){

           
             htmlString2 = '<div class="fullHeader">'+results.rows.item(i).title+'</div>'
                          +'<img class="imgFullNews" src="'+results.rows.item(i).img_path+'" alt="imgtemp1" align="left">'
                          +'<div class="fullContent">'+results.rows.item(i).l_desc+'</div>';
           
           }
         
           $('#displayHere2').html(htmlString2);

          }
  function successNews2(tx){
           //alert("Data successfully Inserted");
           tx.executeSql('SELECT * FROM tbl_dengue WHERE id_main=2',[],displayFull2,errorCB);
                             }
/*********************END OF Display Data for news2*********************************/
/**********************Display Data for news3***************************************/
function displayFull3(tx,results){
            var htmlString3 = '';
               var len = results.rows.length;
            for (var i=0;i<len;i++){

           
             htmlString3 = '<div class="fullHeader">'+results.rows.item(i).title+'</div>'
                          +'<img class="imgFullNews" src="'+results.rows.item(i).img_path+'" alt="imgtemp1" align="left">'
                          +'<div class="fullContent">'+results.rows.item(i).l_desc+'</div>';
           
           }
         
           $('#displayHere3').html(htmlString3);

          }
  function successNews3(tx){
           //alert("Data successfully Inserted");
           tx.executeSql('SELECT * FROM tbl_dengue WHERE id_main=3',[],displayFull3,errorCB);
                             }
/*********************END OF Display Data for news3*********************************/
/**********************Display Data for news3***************************************/
function displayFull4(tx,results){
            var htmlString4 = '';
               var len = results.rows.length;
            for (var i=0;i<len;i++){

           
             htmlString4 = '<div class="fullHeader">'+results.rows.item(i).title+'</div>'
                          +'<img class="imgFullNews" src="'+results.rows.item(i).img_path+'" alt="imgtemp1" align="left">'
                          +'<div class="fullContent">'+results.rows.item(i).l_desc+'</div>';
           
           }
         
           $('#displayHere4').html(htmlString4);

          }
  function successNews4(tx){
           //alert("Data successfully Inserted");
           tx.executeSql('SELECT * FROM tbl_dengue WHERE id_main=4',[],displayFull4,errorCB);
                             }
/*********************END OF Display Data for news4*********************************/
/**********************Display Data for news5***************************************/
function displayFull5(tx,results){
            var htmlString5 = '';
               var len = results.rows.length;
            for (var i=0;i<len;i++){

           
             htmlString5 = '<div class="fullHeader">'+results.rows.item(i).title+'</div>'
                          +'<img class="imgFullNews" src="'+results.rows.item(i).img_path+'" alt="imgtemp1" align="left">'
                          +'<div class="fullContent">'+results.rows.item(i).l_desc+'</div>';
           
           }
         
           $('#displayHere5').html(htmlString5);

          }
  function successNews5(tx){
           //alert("Data successfully Inserted");
           tx.executeSql('SELECT * FROM tbl_dengue WHERE id_main=5',[],displayFull5,errorCB);
                             }
/*********************END OF Display Data for news5*********************************/
/**********************Display Data for news6***************************************/
function displayFull6(tx,results){
            var htmlString6 = '';
               var len = results.rows.length;
            for (var i=0;i<len;i++){

           
             htmlString6 = '<div class="fullHeader">'+results.rows.item(i).title+'</div>'
                          +'<img class="imgFullNews" src="'+results.rows.item(i).img_path+'" alt="imgtemp1" align="left">'
                          +'<div class="fullContent">'+results.rows.item(i).l_desc+'</div>';
           
           }
         
           $('#displayHere6').html(htmlString6);

          }
  function successNews6(tx){
           //alert("Data successfully Inserted");
           tx.executeSql('SELECT * FROM tbl_dengue WHERE id_main=6',[],displayFull6,errorCB);
                             }
/*********************END OF Display Data for news5*********************************/
/**********************Display Data for news7***************************************/
function displayFull7(tx,results){
            var htmlString7 = '';
               var len = results.rows.length;
            for (var i=0;i<len;i++){

           
             htmlString7 = '<div class="fullHeader">'+results.rows.item(i).title+'</div>'
                          +'<img class="imgFullNews" src="'+results.rows.item(i).img_path+'" alt="imgtemp1" align="left">'
                          +'<div class="fullContent">'+results.rows.item(i).l_desc+'</div>';
           
           }
         
           $('#displayHere7').html(htmlString7);

          }
  function successNews7(tx){
           //alert("Data successfully Inserted");
           tx.executeSql('SELECT * FROM tbl_dengue WHERE id_main=7',[],displayFull7,errorCB);
                             }
/*********************END OF Display Data for news7*********************************/

$( document ).on( "pagecreate", function() {
      $( "body > [data-role='panel']" ).panel();
      $( "body > [data-role='panel'] [data-role='listview']" ).listview();
                                           });

$( document ).one( "pageshow", function() {
      $( "body > [data-role='header']" ).toolbar();
      $( "body > [data-role='header'] [data-role='navbar']" ).navbar();
                                       });


$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: 'Question %current of %total',
  questions: [
    {
      'q': 'The main type of dengue mosquito is _____________?',
      'options': [
        'Tripteroides',
        'Mansonia',
        'Aedes aegypti',
        'Haemagogus',

      ],
      'correctIndex': 2,
      'correctResponse': 'Good job, that was obvious.',
      'incorrectResponse': 'Sorry your answer is wrong, the correct answer is: Aedes aegypti'
    },
    {
      'q': 'How is Dengue Fever spread?',
      'options': [
        'By Human to Human Contact',
        'By Mosquito Bites',
        'By Unhygienic Habits',
        'By Eating Unhealthy',

      ],
      'correctIndex': 1,
      'correctResponse': 'Good job, that was obvious.',
      'incorrectResponse': 'Sorry your answer is wrong, the correct answer is: Mosquito Bites'
    },
      {
      'q': 'How can you prevent the spread of Dengue Fever?',
      'options': [
        'Clearing Stagnant Water',
        'Wearing Face-Masks',
        'Do Not Have Any Physical Contact From Other People',
        'Covering Your Mouth When You Cough Or Sneeze'
      ],
      'correctIndex': 0,
      'correctResponse': 'Well Done!, This is the Correct answer',
      'incorrectResponse': 'Too bad, the correct answer is: Clearing Stagnant Water'
    },
      {
      'q': 'Which of the following is a symptom of Dengue Fever?',
      'options': [
        'Coughing Up Blood',
        'Hallucinations',
        'High Fever',
        'Increased Stress'
      ],
      'correctIndex': 2,
      'correctResponse': 'Well Done!, This is the Correct answer',
      'incorrectResponse': 'Too bad, the correct answer is: High Fever'
    },
      {
      'q': 'Which of the following is NOT a symptom of Dengue Fever?',
      'options': [
        'Loss of Appetite',
        'Sever Headache',
        'Severe Muscle and Joint Pains',
        'Loss of Hearing'
      ],
      'correctIndex': 3,
      'correctResponse': 'Well Done!, This is the Correct answer',
      'incorrectResponse': 'Too bad, the correct answer is: Loss of Hearing'
    },
      {
      'q': 'Which of the following is a cure for Dengue Fever?',
      'options': [
        'No Cure',
        'Aspirin',
        'Flu-Jabs',
        'Other Medicines such as Panadol'
      ],
      'correctIndex': 0,
      'correctResponse': 'Well Done!, This is the Correct answer',
      'incorrectResponse': 'Too bad, the correct answer is: No Cure'
    }
    ,
      {
      'q': 'How many days the entire aquatic cycle (from egg to adult) can occur?',
      'options': [
        '7-8',
        '14-20',
        '20-25',
        '30-35'
      ],
      'correctIndex': 0,
      'correctResponse': 'Well Done!, This is the Correct answer',
      'incorrectResponse': 'Sorry your answer is Wrong, the correct answer is: 7-8 days'
    }
     ,
      {
      'q': 'In around how many Countries is Dengue fever endemic?',
      'options': [
        '50',
        '70',
        '100',
        '150'
      ],
      'correctIndex': 2,
      'correctResponse': 'Well Done!, This is the Correct answer',
      'incorrectResponse': 'Sorry your answer is Wrong, the correct answer is: 100 Countries'
    }  ,
      {
      'q': 'To protect yourself, use _________________',
      'options': [
        'Insect repellent',
        'Mosquito nets',
        'Mosquito spray',
        'All of them'
      ],
      'correctIndex': 3,
      'correctResponse': 'Well Done!, This is the Correct answer',
      'incorrectResponse': 'Sorry your answer is Wrong, the correct answer is: All of them'
    }
  ]
});


/*******************END OF QUIZZ PART*****************************/
/*******************Slideshow Part*****************************/
var slideIndex = 0;


function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
 showSlides();
   
/*******************END OF Slideshow Part*****************************/

/*******************Slideshow1 Part*****************************/
var slideIndex1 = 0;


function showSlides1() {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {slideIndex1= 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";  
  dots[slideIndex1-1].className += " active";
  setTimeout(showSlides1, 5000); // Change image every 2 seconds
}
 showSlides1();
   
/*******************END OF Slideshow Part*****************************/
 
/*************AI************************/
 /****API PART**************/
  var accessToken = "092f1bbb4718446aa379920703e8b766",
      baseUrl = "https://api.api.ai/v1/",
      $speechInput,
      $recBtn,
      recognition,
      messageRecording = "Recording...",
      messageCouldntHear = "I couldn't hear you, could you say that again?",
      messageInternalError = "Oh no, there has been an internal server error",
      messageSorry = "I'm sorry, I don't have the answer to that yet.";
  /*******END OF API Part***********/
 $speechInput = $("#speech");
      $recBtn = $("#rec");
     /* $speechInput.keypress(function(event) {
        if (event.which == 13) {
          event.preventDefault();
          send();
        }
      });*/
      $('#speech').on( "change", function(event) {

            send();
         });
      $recBtn.on("click", function(event) {
        switchRecognition();
      });
    
    
    function startRecognition() {
      recognition = new webkitSpeechRecognition();
      recognition.continuous = false;
          recognition.interimResults = false;
      recognition.onstart = function(event) {
        respond(messageRecording);
        updateRec();
      };
      recognition.onresult = function(event) {
        recognition.onend = null;
        
        var text = "";
          for (var i = event.resultIndex; i < event.results.length; ++i) {
            text += event.results[i][0].transcript;
          }
          setInput(text);
        stopRecognition();
      };
      recognition.onend = function() {
        respond(messageCouldntHear);
        stopRecognition();
      };
      recognition.lang = "en-US";
      recognition.start();
    }
  
    function stopRecognition() {
      if (recognition) {
        recognition.stop();
        recognition = null;
      }
      updateRec();
    }
    function switchRecognition() {
      if (recognition) {
        stopRecognition();
      } else {
        startRecognition();
      }
    }
    function setInput(text) {
      $speechInput.val(text);
      send();
    }
    function updateRec() {
      $recBtn.text(recognition ? "Stop" : "Speak");
    }
    function send() {
      var text = $speechInput.val();
      $.ajax({
        type: "POST",
        url: baseUrl + "query",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: {
          "Authorization": "Bearer " + accessToken
        },
        data: JSON.stringify({query: text, lang: "en", sessionId: "yaydevdiner"}),
        success: function(data) {
          prepareResponse(data);
        },
        error: function() {
          respond(messageInternalError);
        }
      });
    }
    function prepareResponse(val) {
      var debugJSON = JSON.stringify(val, undefined, 2),
        spokenResponse = val.result.speech;
      respond(spokenResponse);
     
    }
   
    function respond(val) {
      if (val == "") {
        val = messageSorry;
      }
      if (val !== messageRecording) {
     
        TTS.speak(val);
      }
      $("#spokenResponse").addClass("is-active").find(".spoken-response__text").html(val);
    }


    /***Test***/
     function play() {
   /* TTS.speak('hello, world!', function () {
    console.log('success');
  }, function (reason) {
    console.log('error', reason);
  });*/
  TTS.speak('Hello World');
    }
