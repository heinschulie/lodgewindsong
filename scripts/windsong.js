$(function () {
    $("#slides").slidesjs({
        width: 94,
        height: 52
    });
});

$(function () {
    $("#attractions").click(function () {
        $(".zephry").css("display", "block");
        $("#description").html(
            "<br><span class='spantitle'>Activities and nearby attractions:</span><br> <br> <br><span>Polokwane Game Reserve</span><br><br>Just a 10-minute drive from the city center is the entrance to the Polokwane Game Reserve. Covering 3 250 hectares, this scenic reserve is one of the largest municipal reserves in South Africa." + "<br>" + "<br>" +
            //"Contact details and bookings" +
            //"+27 (0)15 290 2331" +

            "<span>Polokwane Golf Course</span><br><br>This Golf Course, which was founded in 1863, is rated one of the best in South Africa.<br/>" +
            //"Contact details and bookings"+
            //"+27 (0)15 295 4118"+

            "<span>Meropa Casino and Entertainment</span><br><br>While it is best known for its gaming facilities, which include roulette and blackjack tables and over three hundred slot machines, this entertainment paradise also has a magical bird and snake sanctuary, “Wild Thingz.” Catering for the young folk too, the Mini-golf course and go-kart racing circuit are open during daylight hours.<br><br>" +
            //"Contact details"+
            //"+27 (0)15 290 5468"+ "<br/>"+

            "<span>The Ranch Hotel</span><br><br>The Ranch Hotel is a family leisure resort and wildlife conservancy that offers something to suit everyone. The Ranch Hotel is home to a pride of magnificent Lions. Take a walk on the wild side in the conservancy, meet the kings, watch their cubs at play, and walk with the Lions.<br><br>" +
            //"Contact details"+
            //"+27 (0)15 290 5000"+

            "<span>Polokwane Bird and Reptile Park</span><br><br>Over 280 bird species can be viewed both indigenous and exotic. Aquariums are a delight and home to snakes and lizards and dark pools showcase an array of crocodiles and water birds.<br><br>" +
            //"Contact details"+
            //"+27 (0)15 292 1719"+


            "<span>Moletjie Bird Sanctuary</span><br> <br>Home too many bird species. Highly acclaimed internationally, the Centre is applauded for its outstanding work in the protection of the rare Cape Vulture.<br><br>" +
            //"Contact details:"+
            //"+27 (72) 693 4660"+

            "<span>Mall of the North</span><br><br>This super regional shopping centre nestled in the heart of Polokwane has over 180 stores. Easy to access, with generous parking and convenient shopping hours, Mall of the North is home to some of South Africa's most popular department and grocery stores, including Checkers, Pick N Pay, Woolworths, Game and Edgars.<br><br><br><br><br><br><br><br><br><br>"
        )
    });
});

$(function () {
    $("#accommodation").click(function () {
        $(".zephry").css("display", "block");
        $("#description").html(
        "<br><span class='spantitle'>Rates: </span> <br> <br>R 450 per person per night <br> R 700 per unit sharing <br> Weekly and monthly rates available upon request. <br> Longer-term accommodation is also available for contractors working in the surrounding area.<br><br><span class='spantitle'>Accommodation and amenities:</span><br><br>" +

        "Five stand-alone wooden cabin units, each equipped with functional bathrooms and basic amenities provides privacy and guarantees a peaceful night’s rest.<br> <br>This self-catering destination is ideal for small company retreats or breakaway weekends.<br> <br>•	2 rooms with double beds<br>•	3 rooms with two single beds per unit.<br>•	Extra mattresses are available for children. <br> <br>A communal kitchen is fully equipped with cooking utensils, crockery and glassware, and includes stovetops, fridges and ample braai facilities nearby.<br> <br>The common area (Lapa) provides comfortable seating and satellite television. Windsong Lodge also has a valid liquor licence.<br><br>A sheltered boma allows for safe bonfires, ideal for an evening under the starry skies of the bushveld.<br><br>Home-cooked meals are also available on request. <br> <br>Safe on-site parking is available and the electrified fence surrounding the property is coupled to an alarm system and 24-hour armed response security team.<br> <br> <br><br><br><br><br><br><br>"
            );
    });
});

$(function () {
    $("#contact").click(function () {
        $(".zephry").css("display", "none"); 
        $("#description").html(
        "<br /><span class='spantitle'> Contact us </span> <br> <br> <span> Contact person: Desiree Schoeman <br>Email:<br> reservations@lodgewindsong.co.za <br> Tel: 0823297710 or 078 683 9857 </span><br><br><br>"
            );
    });
});

$(function () {
    $("#title").click(function () {
        $(".zephry").css("display", "block");
        $("#description").html(
            "<br /><span class='spantitle'>Welcome to Windsong Lodge...</span><br /><br /><span>Nestled in the heart of the Limpopo bushveld, yet less than 15 km from Polokwane (South Africa’s most Northern provincial capital), Windsong Lodge corresponds with the meaning of the nearby city’s Northern Sotho name, by providing the weary traveller or leisure seeking holidaymaker with a place of safety. </span><br /><br />" +
            "The multitude of Aloe Vera plants, known for their healing qualities, which populate the property, is also metaphoric of the rest and relaxation this charming breakaway destination can provide from the rigours of everyday life.<br />The caring hospitality of management team, Thys and Desiree Schoeman will ensure a stay comparable to the comfort of your own home, while their knowledge as qualified nature guides (FGASA Level 1), make for insightful information on the beautiful surroundings. Their priority is to conserve nature with passion and love: A dedication shared with their responsibility towards their guests.<br />" +
            "<br />'So, welcome the wind and the wisdom she offers.<br />Follow her summons when she calls again.<br />In your heart and your spirit, let the breezes surround you<br /><br />Lift up your voice then and sing with the wind.' <br /> <br /> -John Denver, Windsong<br /><br /><br /><br /><br><br><br><br><br><br>"
            );
    });
});

$(function () {
    $("#zlink").click(function () {
        window.open("http://www.zephry.co.za"); 
    })
});

$(function () {
    $("#zlink").mouseover(function () {
        $("#zdescription").css("color", "white"); 
    })
});

$(function () {
    $("#zlink").mouseout(function () {
        $("#zdescription").css("color", "black");
    })
});