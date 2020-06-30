var _ = require("underscore");
var ls = 

[{
    "_id" : 500,
    "bank_name" : "THE WEST BENGAL STATE COOPERATIVE BANK",
    "ifsc" : "WBSC0TUCB01",
    "micr" : "700093255",
    "branch_name" : "MAHINAGAR",
    "address" : "PO-MALANCHA-MAHINAGAR  VILL-MAHINAGAR",
    "contact" : "24379149",
    "city" : "KOLKATA",
    "district" : "24 PGS NORTH",
    "state" : "WEST BENGAL",
   },
{
    "_id" : 572,
    "bank_name" : "THE WEST BENGAL STATE COOPERATIVE BANK",
    "ifsc" : "WBSC0MUCB01",
    "micr" : null,
    "branch_name" : "KOLKATA MAHILA COOP BANK",
    "address" : "8D,KRISHNA LAHA LANE,BOWBAZAR",
    "contact" : "0",
    "city" : "KOLKATA",
    "district" : "KOLKATA",
    "state" : "WEST BENGAL",
    },
{
    "_id" : 587,
    "bank_name" : "THE WEST BENGAL STATE COOPERATIVE BANK",
    "ifsc" : "WBSC0MCCB18",
    "micr" : "742806512",
    "branch_name" : "MURSHIDABAD DIST CENTRAL COOP BANK",
    "address" : "VILL AND PO SAKTIPUR",
    "contact" : "251116",
    "city" : "KOLKATA",
    "district" : "MURSHIDABAD",
    "state" : "WEST BENGAL",
    },
{
    "_id" : 1,
    "bank_name" : "THE SURAT DISTRICT COOPERATIVE BANK LIMITED",
    "ifsc" : "SDCB0000099",
    "micr" : "395244002",
    "branch_name" : "MAIN BRANCH",
    "address" : "KANPITH, NEAR CHAUTAPOOL, PINCODE : 395003",
    "contact" : "2597730",
    "city" : "SURAT",
    "district" : "SURAT",
    "state" : "GUJARAT",
    },
{
    "_id" : 2,
    "bank_name" : "THE SURAT DISTRICT COOPERATIVE BANK LIMITED",
    "ifsc" : "SDCB0000085",
    "micr" : "395244039",
    "branch_name" : "ANAND MAHAL ROAD",
    "address" : "GROUND FLOOR, SHOP NO 1,2,3, MANISHA APARTMENT, NEAR SNEH SANKUL WADI, ANAND MAHAL ROAD, PIN - 395005",
    "contact" : "0",
    "city" : "SURAT",
    "district" : "SURAT",
    "state" : "GUJARAT",
    },
{
    "_id" : 4,
    "bank_name" : "THE SURAT DISTRICT COOPERATIVE BANK LIMITED",
    "ifsc" : "SDCB0000083",
    "micr" : "395244038",
    "branch_name" : "BHESTAN",
    "address" : "RAM NAGAR SOCIETY, SURAT-NAVSARI MAIN ROAD, BHESTAN, TA - CHORIYASI, PINCODE-395023",
    "contact" : "0",
    "city" : "SURAT",
    "district" : "SURAT",
    "state" : "GUJARAT",
    },
{
    "_id" : 5,
    "bank_name" : "THE SURAT DISTRICT COOPERATIVE BANK LIMITED",
    "ifsc" : "SDCB0000082",
    "micr" : "395244037",
    "branch_name" : "UDHANA",
    "address" : "THE UDHANA UDHYOG NAGAR SANGH LTD, SHOP NO 1,2,3,4 SEVEN SQUARE GROUND FLOOR, UDHANA, CHORIYASI, SURAT",
    "contact" : "0",
    "city" : "SURAT",
    "district" : "SURAT",
    "state" : "GUJARAT",
    },
{
    "_id" : 1,
    "bank_name" : "THE SURAT DISTRICT COOPERATIVE BANK LIMITED",
    "ifsc" : "SDCB0000099",
    "micr" : "395244002",
    "branch_name" : "MAIN BRANCH",
    "address" : "KANPITH, NEAR CHAUTAPOOL, PINCODE : 395003",
    "contact" : "2597730",
    "city" : "SURAT",
    "district" : "SURAT",
    "state" : "GUJARAT",
    },
{
    "_id" : 2,
    "bank_name" : "THE SURAT DISTRICT COOPERATIVE BANK LIMITED",
    "ifsc" : "SDCB0000085",
    "micr" : "395244039",
    "branch_name" : "ANAND MAHAL ROAD",
    "address" : "GROUND FLOOR, SHOP NO 1,2,3, MANISHA APARTMENT, NEAR SNEH SANKUL WADI, ANAND MAHAL ROAD, PIN - 395005",
    "contact" : "0",
    "city" : "SURAT",
    "district" : "SURAT",
    "state" : "GUJARAT",
   },
{
    "_id" : 3,
    "bank_name" : "THE SURAT DISTRICT COOPERATIVE BANK LIMITED",
    "ifsc" : "SDCB0000084",
    "micr" : "NA",
    "branch_name" : "KAPURA",
    "address" : "HOUSE NO - 135, AT AND POST - KAPURA, TALUKA - VYARA, PIN - 394655",
    "contact" : "0",
    "city" : "VYARA",
    "district" : "TAPI",
    "state" : "GUJARAT",
    },
{
    "_id" : 4,
    "bank_name" : "THE SURAT DISTRICT COOPERATIVE BANK LIMITED",
    "ifsc" : "SDCB0000083",
    "micr" : "395244038",
    "branch_name" : "BHESTAN",
    "address" : "RAM NAGAR SOCIETY, SURAT-NAVSARI MAIN ROAD, BHESTAN, TA - CHORIYASI, PINCODE-395023",
    "contact" : "0",
    "city" : "SURAT",
    "district" : "SURAT",
    "state" : "GUJARAT",
    }];
var plk = _.pluck(ls,"_id");

//console.log(plk);

var odds = _.reject(plk, function(num) {
    return num % 2 == 0;
});

//console.log(odds);

var wh = _.where(ls,{"state" : "WEST BENGAL"});

//console.log(wh);

var whe = _.where(ls,{"state" : "WEST BENGAL","city" : 'KOLKATA',"district" : 'MALDA'});

//console.log(whe);

var lastindex = _.last(plk);
//console.log(lastindex);

var sum = _.reduce(plk,function(memo , num){
    return memo + num;
},lastindex);

//console.log(sum);

var ifs = _.where(ls,{"ifsc" : "BDBL0001015"});

//console.log(ifs);

var sortbank = _.sortBy(ls,"bank_name");

//console.log(sortbank);

var groupby = _.groupBy(ls,"state");

//console.log(groupby);

var firstdetail = _.first(ls);

//console.log(firstdetail);

var lastdetail = _.last(ls);
//console.log(lastdetail);
var addfive = _.reduce(lastdetail, 
    function(memo, num){
         return memo + num; 
         }, 5);

//console.log(addfive);

var maxmicr = _.max(ls,function(lst){
    return lst.micr;
});

//console.log(maxmicr);
var invertdetail = _.invert(maxmicr);
//console.log(invertdetail);

var mincontact = _.min(ls,function(lst){
    return lst.contact;
});

//console.log(mincontact);