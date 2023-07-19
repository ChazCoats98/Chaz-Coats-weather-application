
$(document).ready(function() {

    var currentDate = dayjs().format("MMMM D, YYYY");
    var location = document.getElementById("location");
    var condition = document.getElementById("condition");
    var temp = document.getElementById("temp");
    var title = document.getElementById("title");
    var date = document.getElementById("date");
    var content = document.getElementById("content");
    
    $(".dropdown").hide();

    $(".searchBox").hover(function(){
        $(".dropdown").fadeToggle(200);
    })

    $(".searchBtn").click(function(){

    });

    $(".weatherInner").hover(function(){

    });

   function localWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    } else {
        $("#location").text("Location data not available. Search location to see weather results")
    }

    function success(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units=imperial&appid=37049b04aa62927b70b6cb2d0bde88ff")
            .then(response => {
                return response.json();
            })
            .then(data => {
                var temp = Math.round(data.main.temp);
                var location = data.name;
                var condition = data.weather[0].icon;
                var conditionURL = "http://openweathermap.org/img/w/" + condition + ".png";
                $("#temp").text(temp);
                $("#location").text(location);
                $("#icon").attr('src', conditionURL);
            })
            .catch(error => {

            });
            fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long + "&units=imperial&appid=37049b04aa62927b70b6cb2d0bde88ff")
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                var temp1 = data.list[1].main.temp;
                var temp2 = data.list[9].main.temp;
                var temp3 = data.list[17].main.temp;
                var temp4 = data.list[25].main.temp;
                var temp5 = data.list[33].main.temp;
                $("#temp1").text(temp1);
                $("#temp2").text(temp2);
                $("#temp3").text(temp3);
                $("#temp4").text(temp4);
                $("#temp5").text(temp5);
                var day1 = data.list[1].dt_txt;
                var day2 = data.list[9].dt_txt;
                var day3 = data.list[17].dt_txt;
                var day4 = data.list[25].dt_txt;
                var day5 = data.list[33].dt_txt;
                $("#day1").text(day1);
                $("#day2").text(day2);
                $("#day3").text(day3);
                $("#day4").text(day4);
                $("#day5").text(day5);
                var hum1 = data.list[1].main.humidity;
                var hum2 = data.list[9].main.humidity;
                var hum3 = data.list[17].main.humidity;
                var hum4 = data.list[25].main.humidity;
                var hum5 = data.list[33].main.humidity;
                $("#hum1").text(hum1);
                $("#hum2").text(hum2);
                $("#hum3").text(hum3);
                $("#hum4").text(hum4);
                $("#hum5").text(hum5);
                var icon1 = data.list[1].weather[0].icon;
                var icon2 = data.list[9].weather[0].icon;
                var icon3 = data.list[17].weather[0].icon;
                var icon4 = data.list[25].weather[0].icon;
                var icon5 = data.list[33].weather[0].icon;
                var icon1URL = "http://openweathermap.org/img/w/" + icon1 + ".png";
                var icon2URL = "http://openweathermap.org/img/w/" + icon2 + ".png";
                var icon3URL = "http://openweathermap.org/img/w/" + icon3 + ".png";
                var icon4URL = "http://openweathermap.org/img/w/" + icon4 + ".png";
                var icon5URL = "http://openweathermap.org/img/w/" + icon5 + ".png";
                $("#icon1").attr('src', icon1URL);
                $("#icon2").attr('src', icon2URL);
                $("#icon3").attr('src', icon3URL);
                $("#icon4").attr('src', icon4URL);
                $("#icon5").attr('src', icon5URL);
                
            })
            .catch(error => {

            });


    };
    };

    function weatherChoice(){
        
    }

    localWeather();

    
    let newsStories1 = [
        titles, ["MORTGAGE RATES RAISED BY JERSEY; Increase to 8% Is Designed to Attract More Money— Albany May Follow Suit", "John Prinz Alters His Dancing Style To Dramatic Pose",
    "CARSON INDICTED IN A MURDER CASE Civil Rights Figure Is Held for Arraignment Today", "U.S. CONFIRMS PRE 1970 RAIDS ON CAMBODIA"],
        dateAuthor, ["By Joseph F. Sullivan July 17, 1973","By Don McDonagh 7July 17, 1973", "By Morris Kaplan July 17, 1973", "By Seymour M. Hersh July 17, 1973"],
        content, ["TRENTON, July 16—State Banking Commissioner Richard F. Schaub today raised the in terest rate lenders may charge on mortgages to 8 per cent from 7½ per cent in a move designed to attract more money to the market.",
    "John Prinz struggles to bridge the gap between his former style and his new, more dramatic, presentation. Though his portrayal of a young boy discovering his homosexual inclinations is compelling, it doesn't live up to its full potential. Prinz has yet to find the right emotional tone, yet this was a step in the right direction.", "Robert C. (Sonny) Carson, a black activist, and seven other men were indicted yesterday on charges of killing one man and kidnapping another in retaliation for their purported robberies of a black owned hotel in the Bedford Stuyvesant section of Brooklyn. Mr. Carson, the 38 year old former director of the Independent Brooklyn Congress of Racial Equality, and his co defendants were accused in a 15 count indictment of murder, kidnapping, possession of dangerous weapons, burglary, robbery, petit larceny and coercion. If convicted, they could be im prisoned for life.", ""]
    ];
    let newsStories2 = [
        titles, ["METS WIN BY 7 to 5 AFTER REDS TAKE TWO HITTER, 21; BiHingham Beats Seaver in Opener—Jones Hits First Home Run Since April",
    "Nixon announces plans to build new White House on the Moon amidst recent Watergate controversy", "Figure in Mackell Office Inquiry Convicted on a Narcotics Charge", "George Gleckel, Regional Sales Manager for Mohawk Rubber Company, dies at 62"],
        dateAuthor, ["By Michael Strauss July 18, 1973", "By Ricky Giuliatti July 18, 1973", "By Huey Lewis July 18, 1973", "By Suzan Cocrin July 18, 1973"],
        content, ["CINCINNATI, July 13—Possibly provoked over losing the opener of a twilight night double header to the Cincinnati Reds by a 2 to 1 margin, the New: York Mets staged a major uprising in the opening inning of tonight's second game. They shelled Jim McGlothlin: for five hits and four runs and salvaged a split by turning back the Reds, 7 to 5, before a crowd of 40,083 at Riverfront: Stadium. The double header began a 13 game trip for the Nets.",
    "Today President Nixon announced plans to build a new white house on the Moon. Only a few days from the 4 year anniversary of the 1st Moon landing, and almost 2 years since the last moon landing, Nixon thinks its time to go back! And this time we're moving in. Nixon plans to construct an exact 1 to 1 replica of the White House on the Moon, stating this will push the USA far ahead of the Soviets. Could this be a ploy to avert attention away from the the recent controversy surrounding the Watergate tapes?", "A 38 year old insurance agent who had been used as an undercover agent last year in an investigation of the office of former Queens District Attorney Thomas J. Mackell has been found guilty of narcotics charges after a two month trial, according to Frank Rogers, a special narcotics prosecutor, who made the announcement yesterday. Mackell, facing a life sentence, will lose many of his rights, like, for instance, blowing the wistle on any untoward business practices of any certain Government agencies. What a coincidence.", "MAMARONECK, N. Y., July, 13—George Gleckel, who retired as New York regional! sales manager of Mohawk Rubber Company in 1972, died today in New Rochelle Hospital. He was 62 years old and lived here. Surviving are his widow, Della; a son, Gerard; a daughter loan; his sister, Mrs. Anne Gleckel, and a brother, Jack."]
    ];
    let newsStories3 = [
        titles, ["Infant Smuggled Into U.S. In Handbag Allowed to Stay",
    "Illegal waste dumping site discovered near New jersey turnpike", "Pay Phones Rise to 25 Cents", "Battery Park City to Begin Building, But Cautiously"],
        dateAuthor, ["By Lainie Davis July 19, 1973", "By Richard Linklater July 19, 1973", "By David Darcy July 19, 1973", "By Robert E. Tomasson July 19, 1973"],
        content, ["“No words can express my feelings,” Xiomara Aguilera said after learning that a baby she smuggled out of Spain will be allowed to stay in the United States. Desiree Benitez was 2 weeks old on June 21 when Miss Aguilera, a Cuban exile, hid her niece in a handbag and smuggled her aboard a flight to Miami from Madrid. Customs agents did not look in the bag. In Madrid the child's parents. Manuel and Daisy Benitez said they had despaired of getting visas for the United States and wanted to spare their child the cold, hunger and despair they had suffered during a two year wait.",
    "Yesterday an illegal waste dumping site was discovered just off the New Jersey turnpike. When asked to comment, Government officials said 'oh well, we can just move it to another country later.'", "Calls from pay telephones at the new Dallas Fort Worth airport opening Oct. 1 will cost quarter instead of the usual dime. Whats next?? Gas for 50 cents a gallon?", "After seven years of promises and controversy, Battery Park City, the mile long “city within a city” on the lower West Side, will, its developers hope, begin taking shape in October. Construction is to start then on the first six apartment buildings in the 100 acre development, which is to be built on landfill in the Hudson River between Duane Street and the Battery."]
    ];
    let newsStories4 = [
        titles, ["URUGUAY SENATOR LEADS RESISTANCE",
    "Lowenstein Asks Inquiry Into Political 'Accidents", "Next Watergate Witness", "Commission Says 50 Along the Delaware Pollute the River"],
        dateAuthor, ["By Marvine Howe July 20, 1973", "By Steven V. Roberts July 20, 1973", "By Everett R. Holles July 20, 1973", "Henry Castle July 20, 1973"],
        content, ["The Uruguayan opposition has opened A new phase of resistance to the installation of a military dictatorship in that country with a strong demo. exiled Uruguayan Senator. “The military commanders aim to set up a Brazilian type regime in Uruguay and are using the civilian President, Bordaberry, as a facade,” Senator Enrique R. Erro declared in an interview here today. Senator Erro was the catalyst of the present constitutional crisis in Uruguay.",
    "Former Representative Allard K. Lowenstein, who ranked high on the White House list of top priority “enemies,” has called for an investigation into a long list of puzzling incidents that have plagued his political and personal life in recent years. More importantly, he said in an interview, there should be a deeper examination of a wide range of events, from elections to assassinations, that may not have happened in the way that is now generally accepted. There is a risk of fostering a feeling of “hysteria” that attributes everything to dark and unknown forces, Mr. Lowenstein warned. But there is a greater risk of “sinning by silence” in the face of the revelations surrounding Watergate and the “White House horror stories,” he said.", 
    "The public is scheduled to have its first opportunity this week to see and hear the man who has been the most mysterious figure among the strangely assorted cast of characters in the Watergate affair. Prior to his appearance before the Senate Select Committee on Presidential Campaign Activities, Herbert Warren Kalmbach, the “Mr. Moneybags” of alleged Watergate cover ups and Nixon campaign machinations, has maintained an urbane aloofness while being drawn deeper and deeper into the Watergate web. Unlike most of those implicated with him, the 51 year old California lawyer, who personally collected more than $20 million for President Nixon's 1968 and 1972 campaigns, appeared to be little concerned about his public image.", "The Delaware River Basin Commission charged today that 50 municipalities and private companies in three states had failed to develop adequate facilities for treatment of wastes dumped into the Delaware River. In other shocking news the sky is blue, water is wet, and you should never wear white after Labor Day."]
    ];
    let newsStories5 = [
        titles, ["Egypt Stand in U.N. Stirs Threat of U.S. Veto",
    "Charles Leads Golf by Shot. Accidentally launches golf ball into Scandanavian Prime Ministers lunch", "Americans to train at Soviet Space Society", "Argentina to Vote For a New Leader During September"],
        dateAuthor, ["By Robert Alden July 21, 1973", "By Putman Parches July 21, 1973", "By Rodion Raskolnikov July 21, 1973", "By Harry Patch July 21, 1973"],
        content, ["The Security Council resumed its debate on the Middle East today, with Egypt claiming that the support that Israel received from the United States “blocked the way to peace.” “Egyptians will not go crawling on our bellies to Israel no matter how many Phantoms, no matter how many vetoes,” said Mohammed H. el Zayatt, the Egyptian Foreign Minister.",
    "Bob Charles of New Zealand shot a three under par 69 in the second round of the $59,000 Scandinavian enterprise open golf tournament for a two round 138 total today. The left handed Charles took a one stroke lead over Spain's Ange Gallardo, who shot a 68 for 139. On his final shot Charles managed to drive the ball 3 miles away, landing in the Scandanavian Prime Ministers daily fish stew lunch. Though quite perturbed and annoyed by this, the Prime Minister had to concede that it was quite an impressive shot.", 
    "A Soviet space official said to day that American specialists would train in the Russian flight control center near Moscow for the joint 1975 flight by the two countries. Konstantin D. Bushuyev, leading the group of technicians and eight astronauts who worked at the Johnson Space Center for two weeks also indicated that Western newsmen, for the first time, might witness and report on the Soyuz launching for the Apollo Soyuz mission. He said procedures were being worked out to keep the public “well informed on our activities,” but skirted the question of direct coverage of the July, 1975, flight.", 
    "Presidential elections, in which former dictator Juan D. Perón is expected to run and to win, will be held Sept. 23, the provisional Cabinet announced today. President Héctor J. Cámpora, picked by the former dictator to run as the Peronist candi date in elections earlier this year, resigned last week to make room for Mr. Perón. The election will be decided by a popular vote, with the winning candidate required to get over 50 per cent of the total vote. Though lets be honest, hes winning either way."]
    ];
    let newsStories6 = [
        titles, ["Wisconsin cheese producer Carr Valley Cheese announces new product, living, breathing cheese",
    "Brazil to build 'model prisons'", "Drug clinic warned to decrease rolls", "Woman May Coach a Men's Diving Team"],
        dateAuthor, ["By Donnie Curdman july 22, 1973", "By Frankie Longwell July 22, 1973", "By Daniel Lewis July 22, 1973", "By Jill Gerston July 22, 1973"],
        content, ["CEO Chester Reeves, of Carr Valley Cheese Co, took the stand today to announce their newest product. 'The Carr brand Cheese Head is not just your average block of cheese.' Reeves states, 'We've pioneered a new way of cheese manufacturing that allows us to produce a living, breathing cheese block with thoughts and feelings.' When asked if this might push the bounds of science a little too far, Reeves commented, 'It is not the place of man to question a god.' Quite an alarming press conference to say the least",
    "Brazil is to spend $16.6 million to reform the country's prison system, which has been severely criticized, even by government officials. Fifteen “model prisons” will be built in the next three years. The present prisons were described by the Minister of Justice, Alfredo Buzaid, as “veritable deposits where convicts, temporary detainees, people with contagious diseases, prisners not formally charged, and minors live promiscuously in inadequate and overcrowded cells, and what is infinitely worse, in complete idleness.”", 
    "Controller Abraham D. Beame said yesterday that he would stop payments to a Brooklyn addiction treatment clinic unless the Addiction Services Agency took steps to reduce an “over concentration of addicts” in the Fort Greene area. In response, Jay Swift, the agency's deputy commissioner, said 'I'll inform the addicts that their pain and suffering is bothering you, though I have a feeling they'll be in too much pain for your message to register'", 
    "The No. 1 choice for coach of Vanderbilt University's male varsity diving team is Lani Loken, a former national champion. If the 25 year old Miss Loken accepts the offer, she will become the first woman to coach a male varsity team of any kind in the Southeastern Conference. Though hiring the most qualified person for the position is a new concept, it seems to make sense oddly."]
    ];
    let newsStories7 = [
        titles, ["Hong Kong Bus Fall Kills 15",
    "Canadian Prime Minister Pierre Trudeau announces plans to build replica of Eiffel Tower, with a twist", "6 Cited in a Scheme To Forge and Cash U.S. Savings Bonds", "2 Youths Rob Passengers on Bus That Stopped as Motor Failed"],
        dateAuthor, ["By Juno McCloud July 23, 1973", "By Jaques Farcur july 23, 1973", "By Jackie Long July 23, 1973", "By Michelle Davis july 23, 1973"],
        content, ["A bus plunged off a hillside road into a ravine on an island near Hong Kong today. Govern ment officials said that at least 15 bodies had been recovered. Twelve people were listed in critical condition. The accident occurred on Lan Tao Island, a vacation spot seven miles west of Hong Kong.",
    "Canadian Prime Minister Pierre Trudeau took the stage today to announce plns to build a replica of the Eiffel Tower near Quebec. 'This isnt just a replica' says Trudeau, 'We're running out of storage space for our maple syurp. This Eiffel Tower will both serve as a storage space and a dispensary for excess maple syrup.' What a creative way to both solve a problem and pay respects to the mother land.", 
    "Six persons, including three with links to organized crime, have been accused by a Federal grand jury of conspiring to forge and cash United States savings bonds valued at $25,000. Among those arrested was Joseph Celso, of Jackson Town ship. In March, 1967, agents of the Federal Bureau of Investigation found two bodies on his property, a former poultry farm, where he still lives. The late J. Edgar Hoover, the F.B.I. director, had termed the farm “a Cosa Nostra burial farm.” Despite the moral complications you have to admit hit tenacity is impressive.",
    "Two knife wielding youths boarded a disabled bus in Har lem last night and robbed and intimidated several of its 50 passengers until they were routed by four plainclothes police officers. The robbery began at about 9:20 P.M., minutes after the bus's motor failed at 117th Street and Seventh Avenue while en route from midtown to the Riverdale section of the Bronx."]
    ];

    if (currentDate == "July 14, 2023") {
        title.innerText = newsStories1.titles[0];
        console.log("success");
    };

    
});
