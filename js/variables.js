let imgExt = "jpg";
let camps = [];

let camp1txtEN = "We organized a four-day leadership camp outside of the capital city. The camp was focused on teaching participants about concepts such as: individual liberty, the rule of law, free trade, and comparing different political ideologies. Camp activities included lectures from politicians and experts, as well as group competitions, intellectual challenges, and a traditional Georgian BBQ around a bonfire.";
let camp2txtEN = "Following the resounding success of our first Liberty Weekend, we decided to further expand our partnership with VVD International (which is also committed to collaborating in 2023) and invite more participants, speakers, and experts to share their views and philosophies with the next generations of Georgian leaders. Our second Liberty weekend culminated in a tour of a state-of-the-art Coca-Cola bottling plant in Georgia.";
let camp3txtEN = "The theme of the third camp was the European Union. The main focus of the camp was to familiarize participants with the history of EU economic development, Georgia's status as an EU candidate, and the 12 recommendations given by the EU. Camp activities included a discussion with MEP Marketta Gregorova, a hands-on course on army equipment, and a tour of a modern Coca-Cola bottling plant in Georgia.";
let camp4txtEN = "Our fourth camp went even bigger. We invited liberal political parties of Georgia with whom we had a panel discussion. The main theme of the camp was Defence and Security. Participants had a chance to speak with a veteran of the U.S. army. An expert in Defence and Security gave a lecture on the U.S. defense system. We never forget about Ukraine, so Georgian volunteers, who fight in Ukraine currently, gave a lecture on the practical course of weapons and shared an experience from the front line. Liberty Weekend was wrapped up with a tour of the Coca-Cola factory."
let camp5txtEN = "Fall camp was diverse. We invited a refugee from our occupied territory - Abkhazia. He shared an experience of what living in Abkhazia currently looks like. The camp also hosted young politicians who talked about the Judiciary system, current problems and reforms that need to be done. Lectures also included speakers who shared Ayn Rand theories with us. Camp participants gained new skills and diverse knowledge which will help them in different professions."

// textGE: camp1txtGE
let camp1 = {year: "2022", dateShort: "19/05-22/05", dateEN: "May 19-22", dateGE: "19-22 მაისი",
            locationEN: "Surami", locationGE: "სურამი", textEN: camp1txtEN,
            video: "VJGaZrR7r2E", numOfPhotos: 4};
let camp2 = {year: "2022", dateShort: "16/06-19/06", dateEN: "June 16-19", dateGE: "19-22 ივნისი",
            locationEN: "Borjomi", locationGE: "ბორჯომი", textEN: camp2txtEN,
            video: "Abob_asZK1o", numOfPhotos: 2};
let camp3 = {year: "2022", dateShort: "30/07-02/08", dateEN: "July 30 - August 2", dateGE: "30 ივლისი - 2 აგვისტო",
            locationEN: "Kobuleti", locationGE: "ქობულეთი", textEN: camp3txtEN,
            video: "vc4awQ6AxaA", numOfPhotos: 3};
let camp4 = {year: "2022", dateShort: "16/09-19/09", dateEN: "September 16-19", dateGE: "16-19 სექტემბერი",
            locationEN: "Bakuriani", locationGE: "ბაკურიანი", textEN: camp4txtEN,
            video: "CbkN0W5a-80", numOfPhotos: 5};
let camp5 = {year: "2022", dateShort: "04/11-07/11", dateEN: "November 4-7", dateGE: "4-7 ნოემბერი",
            locationEN: "Tskaltubo", locationGE: "წყალტუბო", textEN: camp5txtEN,
            video: "DjBgjq3TMC0", numOfPhotos: 5};

camps.push(camp5);
camps.push(camp4);
camps.push(camp3);
camps.push(camp2);
camps.push(camp1);

let campIndex = 0;
let photoIndex = 0; // photo speaker or video
let photoIndexSection = 0; // photo selector below
let photoSection = 0; // photo selector below
let campSection = 0; // camp selector above