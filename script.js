//chapter 5
//Q # 1
var numberSum = 10 + 5; 
document.write( "The Sum of 5 and 10 is: " + numberSum );

//Q # 2
var minusNumber = 10 - 5; 
document.write( "The Subtracted Answer of 5 and 10 is: " + minusNumber);

var numberProduct = 10 * 5; 
document.write( "The Multiplied Answer of 5 and 10 is: " + numberproduct );

var numberDivision = 10 / 5; 
document.write( "The Divided Anwser of 5 and 10 is: " + numberdivision );

var modNumber = 10 % 5; 
document.write( "The Modulus Answer of 5 and 10 is: " + modnumber );

//Q # 3
var myNumber; 
document.write( "Value after variable declaration is: ??");

myNum = 2;
document.write( "Initial Value : " + myNumber );

mynum++;
document.write( "Value after increment : " + myNumber );

myNumber = myNumber + 7;
document.write( "Value after addition : " + myNumber );

myNumber--;
document.write( "Value after decrement : " + myNumber );

myNumber= myNumber % 3;
document.write( "Output : " + myNumber );

//Q # 4
var ticketPrice = 600 ;
var totalTickets = ticketprice * 5;
document.write( "Total Cost to buy 5 tickets to a movie is " + totalTickets );

//Q # 5
document.write( " <h2> Table Of 5: <h2>" );
var tablenumber = 5*1;
document.write( "5 x 1 = " + tablenumber );
tablenumber = 5*2;
document.write( " 5 x 2 = " + tablenumber  );
var tablenumber = 5*3;
document.write( "5 x 3 = " + tablenumber );
var tablenumber = 5*4;
document.write( "5 x 4 = " + tablenumber );
var tablenumber = 5*5;
document.write( "5 x 5 = " + tablenumber );
var tablenumber = 5*6;
document.write( "5 x 6 = " + tablenumber );
var tablenumber = 5*7;
document.write( "5 x 7 = " + tablenumber );
var tablenumber = 5*8;
document.write( "5 x 8 = " + tablenumber );
var tablenumber = 5*9;
document.write( "5 x 9 = " + tablenumber );
var tablenumber = 5*10;
document.write( "5 x 10 = " + tablenumber );

//Q # 6
document.write( " <h2> Temperature Converter: <h2>" );
var celsiusTemp = 30;
var convertedTempF = (celsiusTemp * 9/5)+32
document.write("30°C is " + convertedTempF +"°F" );

var fehrenheitTemp = 15;
var convertedTempC = (fehrenheitTemp - 32)*5/9
document.write("15°F is " + convertedTempC +"°C" );

//Q # 7
document.write( " <h2> Shopping Cart: <h2>" );
var price1 = 650;
document.write("Price of item 1 is "+price1 );

var quantity1 = 3;
document.write("Quantity Of Item 1 is " + quantity1);

var price2 = 100;
document.write("Price of item 2 is " + price2 );

var quantity2 = 7;
document.write("Quantity Of item 2 is  " + quantity2 );

var charges = 100 ;
document.write("Shipping charges : "+ charges );

var toatlCost = (price1 *3) + (price2 * 7) +charges;
document.write("<h3>Total cost of your order is " + toatlCost + "</h3>" );

//Q # 8
document.write( " <h2> Marksheet: <h2>" );
var toatlMarks = 700 ;
document.write("Total Marks : "+ toatlMarks );

var marksObt = 523;
document.write("Marks Obtain : "+ marksObt );

var percentage = (marksObt/toatlMarks) * 100;
document.write(Percentage :"+ percentage + "%");

//Q # 9
document.write( " <h2> Currency in PKR : <h2>" );
var pkrCurrency=(10 * 104.80 )+( 25*28)
document.write("Total Currency In PKR :"+ pkrCurrency );

//Q # 10
var numQ10 = 6;
var answer = numQ10 + 5 *10 /2;
document.write("Answer after added by 5 multiplied by 10 and divided by 2 is "+ answer);

//Q # 11
document.write( " <h2> Age Calculator: <h2>" );
var currentYear = 2024;
document.write("Current year : "+ currentYear );

var birthYear = 1992;
document.write("Birthyear : "+ birthYear);

var age = currentYear-birthYear;
var age2 = age++; 
document.write("Their age is either "+ age + "or "+ age2 );

//Q # 12
document.write( " <h2> The Geometritzer: <h2>" );
var radius = 20;
document.write("Radius of circle is : "+ radius );

var circumference = 2*3.142*20;
document.write("Circumference of circle is: "+ circumference );

var area = 3.142* 20 * 20; 
document.write("Area of the circle is "+area );

//Q # 13
document.write( " <h2> The life time Supply Calculator: <h2>" );

var favSnacks ="lays" ;
document.write("Favourite Snack : "+ favSnacks );

var currentAge = 18;
document.write("Current Age : "+ currentAge);

var maxAge = 55;
document.write("Estimated Maximum Age : "+ maxAge);

var perDay = 2;
document.write("Amount of Snacks per day : "+ perDay);

var lifeTime = (maxAge-currentAge) * 2;
document.write("You will need " + lifetime + " lays to last you until the ripe old age of 55" )
