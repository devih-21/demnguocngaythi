const quoteArray = [
	"Lúc nào tôi cũng bay theo hướng bay của người khác, lần này tôi sẽ bay theo con đường mà tôi đã chọn.",
	"Đừng đếm cuộc sống bằng thời gian mà hãy đếm cuộc sống bằng nụ cười.",
	"Những cô gái hay cười chính là những cô gái xinh đẹp nhất. Và ai cũng vậy cả thôi, hãy luôn mỉm cười!",
	"Nghị lực và bền bỉ có thể giúp bạn chinh phục mọi thứ",
	"Cuộc đời sẽ tươi đẹp hơn rất nhiều nếu ta có những tình bạn đúng nghĩa, luôn hết mình vì người khác.",
	"Mọi công việc thành công đều nhờ sự kiên trì và say mê.",
	"Vấp ngã không phải là thất bại, chỉ là dừng lại cho đỡ mỏi chân thôi!",
	"Thành công là cuộc hành trình không phải do định mệnh.",
	"Ước mơ không có ngày hết hạn, hãy hít thở sâu và cố gắng thêm lần nữa.",
	"Cuộc sống rất ngắn. Đừng lẵng phí nó bởi những nỗi buồn. Hãy là chính mình, luôn vui vẻ, tự do, và trở thành bất cứ gì bạn muốn.",
	"Lúc mày ngồi nghịch điện thoại, ngồi chơi máy tính, crush của mày đang học bài chăm chỉ đấy nhá!",
	"Phía sau tôi không có lấy một người, sao tôi dám ngã xuống.",
	"Vấp ngã mà còn không chịu đứng lên, tính đợi người ta giẫm đạp lên hay sao?",
	"Đừng chọn sống an nhàn vào những năm tháng còn có thể chịu khổ được."
];

const imgarray = [
	"img/bgr/background1.png",
	"img/bgr/background2.png",
	"img/bgr/background3.png",
	"img/bgr/background4.jpg",
	"img/bgr/background5.jpg"
];


(function($) {




	let spot = Math.floor(Math.random() * imgarray.length);
	document.getElementById("background-normal").src = imgarray[spot];
	$.fn.countdown = function(options, callback) {

		//custom 'this' selector
		thisEl = $(this);

		//array of custom settings
		let settings = { 
			'date': null,
			'format': null
		};

		//append the settings array to options
		if(options) {
			$.extend(settings, options);
		}
		
		//main countdown function
		let countdown_proc = () => {
			
			eventDate = Date.parse(settings['date']) / 1000;
			currentDate = Math.floor($.now() / 1000);
			
			if(eventDate <= currentDate) {
				callback.call(this);
				clearInterval(interval);
			}
			
			seconds = eventDate - currentDate;
			
			days = Math.floor(seconds / (60 * 60 * 24)); //calculate the number of days
			seconds -= days * 60 * 60 * 24; //update the seconds variable with no. of days removed
			
			hours = Math.floor(seconds / (60 * 60));
			seconds -= hours * 60 * 60; //update the seconds variable with no. of hours removed
			
			minutes = Math.floor(seconds / 60);
			seconds -= minutes * 60; //update the seconds variable with no. of minutes removed
			
			//conditional Ss
			if (days == 1) { thisEl.find(".timeRefDays").text("day"); } else { thisEl.find(".timeRefDays").text("days"); }
			if (hours == 1) { thisEl.find(".timeRefHours").text("hour"); } else { thisEl.find(".timeRefHours").text("hours"); }
			if (minutes == 1) { thisEl.find(".timeRefMinutes").text("minute"); } else { thisEl.find(".timeRefMinutes").text("minutes"); }
			if (seconds == 1) { thisEl.find(".timeRefSeconds").text("second"); } else { thisEl.find(".timeRefSeconds").text("seconds"); }
			
			//logic for the two_digits ON setting
			if(settings['format'] == "on") {
				days = (String(days).length >= 2) ? days : "0" + days;
				hours = (String(hours).length >= 2) ? hours : "0" + hours;
				minutes = (String(minutes).length >= 2) ? minutes : "0" + minutes;
				seconds = (String(seconds).length >= 2) ? seconds : "0" + seconds;
			}
			
			//update the countdown's html values.
			if(!isNaN(eventDate)) {
				thisEl.find(".days").text(days);
				thisEl.find(".hours").text(hours);
				thisEl.find(".minutes").text(minutes);
				thisEl.find(".seconds").text(seconds);
			} else { 
				alert("Invalid date. Here's an example: 12 Tuesday 2012 17:30:00");
				clearInterval(interval); 
			}
		}

		let change_background = () => {

			let index = Math.floor(Math.random() * imgarray.length);
			let quoteId = Math.floor(Math.random() * quoteArray.length);

			document.getElementById("background-normal").src = imgarray[index];
			document.getElementById("quote-words").innerHTML = quoteArray[quoteId];

			console.log("change")
		}
		
		//run the function
		countdown_proc();
		
		//loop the function
		interval = setInterval(countdown_proc, 1000);

		changeBackground = setInterval(change_background, 1000 * 60 * 15)
		
	}
}) (jQuery);