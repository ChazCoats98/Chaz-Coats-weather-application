

var location = document.getElementById("location");
var condition = document.getElementById("condition");
var temp = document.getElementById("temp");



if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
} else {
    console.log("error");
}

function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    console.log(latitude);
    console.log(longitude);
}

function error() {
    console.log("error");
}

success();

let newsStories1 = [
    titles, ["MORTGAGE RATES RAISED BY JERSEY; Increase to 8% Is Designed to Attract More Money— Albany May Follow Suit", "John Prinz Alters His Dancing Style To Dramatic Pose",
"CARSON INDICTED IN A MURDER CASE Civil Rights Figure Is Held for Arraignment Today", "U.S. CONFIRMS PRE 1970 RAIDS ON CAMBODIA"],
    dateAuthor, ["By Joseph F. Sullivan July 13, 1973","By Don McDonagh 7July 13, 1973", "By Morris Kaplan July 13, 1973", "By Seymour M. Hersh July 13, 1973"],
    content, ["TRENTON, July 16—State Banking Commissioner Richard F. Schaub today raised the in terest rate lenders may charge on mortgages to 8 per cent from 7½ per cent in a move designed to attract more money to the market.",
"John Prinz struggles to bridge the gap between his former style and his new, more dramatic, presentation. Though his portrayal of a young boy discovering his homosexual inclinations is compelling, it doesn't live up to its full potential. Prinz has yet to find the right emotional tone, yet this was a step in the right direction.", "Robert C. (Sonny) Carson, a black activist, and seven other men were indicted yesterday on charges of killing one man and kidnapping another in retaliation for their purported robberies of a black owned hotel in the Bedford Stuyvesant section of Brooklyn. Mr. Carson, the 38 year old former director of the Independent Brooklyn Congress of Racial Equality, and his co defendants were accused in a 15 count indictment of murder, kidnapping, possession of dangerous weapons, burglary, robbery, petit larceny and coercion. If convicted, they could be im prisoned for life.", ""]
];
let newsStories2 = [
    titles, ["METS WIN BY 7 to 5 AFTER REDS TAKE TWO HITTER, 21; BiHingham Beats Seaver in Opener—Jones Hits First Home Run Since April",
"Nixon announces plans to build new White House on the Moon amidst recent Watergate controversy", "Figure in Mackell Office Inquiry Convicted on a Narcotics Charge", "George Gleckel, Regional Sales Manager for Mohawk Rubber Company, dies at 62"],
    dateAuthor, ["By Michael Strauss July 14, 1973", "By Ricky Giuliatti July 14, 1973", "By Huey Lewis July 14, 1973", "By Suzan Cocrin July 14, 1973"],
    content, ["CINCINNATI, July 13—Possibly provoked over losing the opener of a twilight night double header to the Cincinnati Reds by a 2 to 1 margin, the New: York Mets staged a major uprising in the opening inning of tonight's second game. They shelled Jim McGlothlin: for five hits and four runs and salvaged a split by turning back the Reds, 7 to 5, before a crowd of 40,083 at Riverfront: Stadium. The double header began a 13 game trip for the Nets.",
"Today President Nixon announced plans to build a new white house on the Moon. Only a few days from the 4 year anniversary of the 1st Moon landing, and almost 2 years since the last moon landing, Nixon thinks its time to go back! And this time we're moving in. Nixon plans to construct an exact 1 to 1 replica of the White House on the Moon, stating this will push the USA far ahead of the Soviets. Could this be a ploy to avert attention away from the the recent controversy surrounding the Watergate tapes?", "A 38 year old insurance agent who had been used as an undercover agent last year in an investigation of the office of former Queens District Attorney Thomas J. Mackell has been found guilty of narcotics charges after a two month trial, according to Frank Rogers, a special narcotics prosecutor, who made the announcement yesterday. Mackell, facing a life sentence, will lose many of his rights, like, for instance, blowing the wistle on any untoward business practices of any certain Government agencies. What a coincidence.", "MAMARONECK, N. Y., July, 13—George Gleckel, who retired as New York regional! sales manager of Mohawk Rubber Company in 1972, died today in New Rochelle Hospital. He was 62 years old and lived here. Surviving are his widow, Della; a son, Gerard; a daughter loan; his sister, Mrs. Anne Gleckel, and a brother, Jack."]
];
let newsStories3 = [
    titles, ["Infant Smuggled Into U.S. In Handbag Allowed to Stay",
"Illegal waste dumping site discovered near New jersey turnpike", "Pay Phones Rise to 25 Cents", "Battery Park City to Begin Building, But Cautiously"],
    dateAuthor, ["By Lainie Davis July 15, 1973", "By Richard Linklater July 15, 1973", "By David Darcy July 15, 1973", "By Robert E. Tomasson July 15, 1973"],
    content, ["“No words can express my feelings,” Xiomara Aguilera said after learning that a baby she smuggled out of Spain will be allowed to stay in the United States. Desiree Benitez was 2 weeks old on June 21 when Miss Aguilera, a Cuban exile, hid her niece in a handbag and smuggled her aboard a flight to Miami from Madrid. Customs agents did not look in the bag. In Madrid the child's parents. Manuel and Daisy Benitez said they had despaired of getting visas for the United States and wanted to spare their child the cold, hunger and despair they had suffered during a two year wait.",
"Yesterday an illegal waste dumping site was discovered just off the New Jersey turnpike. When asked to comment, Government officials said 'oh well, we can just move it to another country later.'", "Calls from pay telephones at the new Dallas Fort Worth airport opening Oct. 1 will cost quarter instead of the usual dime. Whats next?? Gas for 50 cents a gallon?", "After seven years of promises and controversy, Battery Park City, the mile‐long “city within a city” on the lower West Side, will, its developers hope, begin taking shape in October. Construction is to start then on the first six apartment buildings in the 100 acre development, which is to be built on landfill in the Hudson River between Duane Street and the Battery."]
];
let newsStories4 = [
    titles, ["URUGUAY SENATOR LEADS RESISTANCE",
""],
    dateAuthor, ["By Marv1ne Howe July 16, 1973"],
    content, ["TRENTON, July 16—State Banking Commissioner Richard F. Schaub today raised the in terest rate lenders may charge on mortgages to 8 per cent from 7½ per cent in a move designed to attract more money to the market.",
""]
];
let newsStories5 = [
    titles, ["MORTGAGE RATES RAISED BY JERSEY; Increase to 8% Is Designed to Attract More Money— Albany May Follow Suit",
""],
    dateAuthor, ["7/13/1973"],
    content, ["TRENTON, July 16—State Banking Commissioner Richard F. Schaub today raised the in terest rate lenders may charge on mortgages to 8 per cent from 7½ per cent in a move designed to attract more money to the market.",
""]
];
let newsStories6 = [
    titles, ["MORTGAGE RATES RAISED BY JERSEY; Increase to 8% Is Designed to Attract More Money— Albany May Follow Suit",
""],
    dateAuthor, ["7/13/1973"],
    content, ["TRENTON, July 16—State Banking Commissioner Richard F. Schaub today raised the in terest rate lenders may charge on mortgages to 8 per cent from 7½ per cent in a move designed to attract more money to the market.",
""]
];
let newsStories7 = [
    titles, ["MORTGAGE RATES RAISED BY JERSEY; Increase to 8% Is Designed to Attract More Money— Albany May Follow Suit",
""],
    dateAuthor, ["7/13/1973"],
    content, ["TRENTON, July 16—State Banking Commissioner Richard F. Schaub today raised the in terest rate lenders may charge on mortgages to 8 per cent from 7½ per cent in a move designed to attract more money to the market.",
""]
];
let newsStories8 = [
    titles, ["MORTGAGE RATES RAISED BY JERSEY; Increase to 8% Is Designed to Attract More Money— Albany May Follow Suit",
""],
    dateAuthor, ["7/13/1973"],
    content, ["TRENTON, July 16—State Banking Commissioner Richard F. Schaub today raised the in terest rate lenders may charge on mortgages to 8 per cent from 7½ per cent in a move designed to attract more money to the market.",
""]
];
let newsStories9 = [
    titles, ["MORTGAGE RATES RAISED BY JERSEY; Increase to 8% Is Designed to Attract More Money— Albany May Follow Suit",
""],
    dateAuthor, ["7/13/1973"],
    content, ["TRENTON, July 16—State Banking Commissioner Richard F. Schaub today raised the in terest rate lenders may charge on mortgages to 8 per cent from 7½ per cent in a move designed to attract more money to the market.",
""]
];
let newsStories10 = [
    titles, ["MORTGAGE RATES RAISED BY JERSEY; Increase to 8% Is Designed to Attract More Money— Albany May Follow Suit",
""],
    dateAuthor, ["7/13/1973"],
    content, ["TRENTON, July 16—State Banking Commissioner Richard F. Schaub today raised the in terest rate lenders may charge on mortgages to 8 per cent from 7½ per cent in a move designed to attract more money to the market.",
""]
];
let newsStories11 = [
    titles, ["MORTGAGE RATES RAISED BY JERSEY; Increase to 8% Is Designed to Attract More Money— Albany May Follow Suit",
""],
    dateAuthor, ["7/13/1973"],
    content, ["TRENTON, July 16—State Banking Commissioner Richard F. Schaub today raised the in terest rate lenders may charge on mortgages to 8 per cent from 7½ per cent in a move designed to attract more money to the market.",
""]
];
let newsStories12 = [
    titles, ["MORTGAGE RATES RAISED BY JERSEY; Increase to 8% Is Designed to Attract More Money— Albany May Follow Suit",
""],
    dateAuthor, ["7/13/1973"],
    content, ["TRENTON, July 16—State Banking Commissioner Richard F. Schaub today raised the in terest rate lenders may charge on mortgages to 8 per cent from 7½ per cent in a move designed to attract more money to the market.",
""]
];
let newsStories13 = [
    titles, ["MORTGAGE RATES RAISED BY JERSEY; Increase to 8% Is Designed to Attract More Money— Albany May Follow Suit",
""],
    dateAuthor, ["7/13/1973"],
    content, ["TRENTON, July 16—State Banking Commissioner Richard F. Schaub today raised the in terest rate lenders may charge on mortgages to 8 per cent from 7½ per cent in a move designed to attract more money to the market.",
""]
];
let newsStories14 = [
    titles, ["MORTGAGE RATES RAISED BY JERSEY; Increase to 8% Is Designed to Attract More Money— Albany May Follow Suit",
""],
    dateAuthor, ["7/13/1973"],
    content, ["TRENTON, July 16—State Banking Commissioner Richard F. Schaub today raised the in terest rate lenders may charge on mortgages to 8 per cent from 7½ per cent in a move designed to attract more money to the market.",
""]
];