$(function () {

    Highcharts.setOptions({
            lang: {
                months: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
                weekdays: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
                shortMonths: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
                thousandsSep: ' ',
                decimalPoint:',',
                rangeSelectorZoom: 'Zobrazit'
            }
        });

	var colors = ['#EA614A', '#20649B', '#008836', '#6B96CA', '#A38456', '#A87A93', '#D19C95']

	var roky = [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];

	var roky_prev = [2000, 2004, 2008, 2012, 2016];

	var deprese = [62532, 84897, 89523, 107273, 107506];

	var uzkost = [133079, 175816, 181242, 224435, 245887];

	var dodavky_anxiolytika = [45726889, 51806434, 46805744, 55988794, 51356570, 54473043, 55899798, 59361803, 68425676, 71255654, 69649596, 70065009, 69061474, 66152575, 69120411, 62988739, 67380838, 59716283, 58291037, 55931013, 53034671, 48792933, 46403391, 45041486, 43506551, 42638587, 42301245];

	var dodavky_hypnotika = [0, 5485, 52470, 646930, 1853700, 2372750, 4072900, 6179065, 9054600, 15890995, 20698235, 25270149, 31638197, 38133866, 44985645, 49374236, 57768589, 56536579, 56841714, 59357159, 60845548, 61896197, 65189485, 71287730, 74250960, 73909190, 77356075];

	var dodavky_ssri = [3870, 37783, 334703, 3321721, 5889021, 6433428, 7512086, 11090184, 14809618, 19179053, 26458626, 33592132, 42917169, 55375584, 75348129, 82123311, 99469365, 100923723, 106562413, 117425652, 124505944, 130744348, 137231226, 147418301, 154045578, 157422087, 163958458];

	var dodavky_tricyklika = [10212064, 11415954, 11459456, 14995964, 13502708, 13132301, 12514954, 13017227, 13057810, 12759457, 12367441, 11525605, 10735067, 9247466, 9048977, 8002083, 8156684, 7071687, 6468578, 6292293, 5988581, 5302734, 5230601, 5062447, 4935807, 4719650, 4672253];

	Highcharts.chart('dodavky', {
	    chart: {
	        type: 'line'
	    },
	    title: {
	        text: 'Spotřeba psychofarmak'
	    },
	    subtitle: {
	        text: 'v definovaných denních dávkách'
	    },
	    xAxis: {
	        categories: roky
	    },
	    yAxis: {
	        title: {
	            text: 'mil. DDD'
	        },
	        labels: {
	            formatter: function () {
	                return this.value / 1000000;
	            }
	        },
	        max: 180000000,
	        endOnTick: false
	    },
	    tooltip: {
	        pointFormat: '{point.series.name}: <b>{point.y}</b> definovaných denních dávek<br/>'
	    },
	    exporting: {
	        enabled: false
	    },
	    credits: {
	        href: 'https://opendata.sukl.cz/?q=katalog/dodavky-lecivych-pripravku',
	        text: 'Zdroj: SÚKL'
	    },
	    plotOptions: {
	        line: {
	            marker: {
	                symbol: 'circle'
	            }
	        }
	    },
	    series: [{
	        name: '„Moderní“ SSRI antidepresiva',
	        data: dodavky_ssri,
	        color: colors[0]
	    }, {
	        name: '„Stará“ tricyklická antidepresiva',
	        data: dodavky_tricyklika,
	        color: colors[1]
	    }, {
	        name: 'Anxiolytika (benzodiazepiny)',
	        data: dodavky_anxiolytika,
	        color: colors[2]
	    }, {
	        name: 'Hypnotika',
	        data: dodavky_hypnotika,
	        color: colors[4]
	    }]
	});

	Highcharts.chart('dodavkystacked', {
	    chart: {
	        type: 'area'
	    },
	    title: {
	        text: 'Spotřeba psychofarmak, kumulativně'
	    },
	    subtitle: {
	        text: 'v definovaných denních dávkách'
	    },
	    xAxis: {
	        categories: roky
	    },
	    yAxis: {
	        title: {
	            text: 'mil. DDD'
	        },
	        labels: {
	            formatter: function () {
	                return this.value / 1000000;
	            }
	        },
	        max: 300000000,
	        endOnTick: false,
	        reversedStacks: false
	    },
	    tooltip: {
	        pointFormat: '{point.series.name}: <b>{point.y}</b> definovaných denních dávek<br/>'
	    },
	    exporting: {
	        enabled: false
	    },
	    credits: {
	        href: 'https://opendata.sukl.cz/?q=katalog/dodavky-lecivych-pripravku',
	        text: 'Zdroj: SÚKL'
	    },
	    plotOptions: {
	        area: {
	            stacking: 'normal',
	            marker: {
	                symbol: 'circle'
	            }
	        }
	    },
	    series: [{
	        name: '„Moderní“ SSRI antidepresiva',
	        data: dodavky_ssri,
	        color: colors[0]
	    }, {
	        name: '„Stará“ tricyklická antidepresiva',
	        data: dodavky_tricyklika,
	        color: colors[1]
	    }, {
	        name: 'Anxiolytika (benzodiazepiny)',
	        data: dodavky_anxiolytika,
	        color: colors[2]
	    }, {
	        name: 'Hypnotika',
	        data: dodavky_hypnotika,
	        color: colors[4]
	    }]
	});

	Highcharts.chart('prevalence', {
	    chart: {
	        type: 'column'
	    },
	    title: {
	        text: 'Počet léčených s depresí × úzkostí'
	    },
	    subtitle: {
	        text: 'v ambulantních psychiatrických zařízeních'
	    },
	    xAxis: {
	        categories: roky_prev
	    },
	    yAxis: {
	        title: {
	            text: ''
	        },
	        labels: {
	            formatter: function () {
	                return this.value;
	            }
	        },
	        max: 250000,
	        endOnTick: false
	    },
	    tooltip: {
	        pointFormat: '{point.series.name}: <b>{point.y}</b> pacientů<br/>',
	        split: true
	    },
	    exporting: {
	        enabled: false
	    },
	    credits: {
	        href: 'https://www.uzis.cz/katalog/zdravotnicka-statistika/psychiatricka-pece',
	        text: 'Zdroj: ÚZIS'
	    },
	    series: [{
	        name: 'Afektivní poruchy (deprese)',
	        data: deprese,
	        color: colors[0]
	    }, {
	        name: 'Neurotické poruchy (úzkosti)',
	        data: uzkost,
	        color: colors[1]
	    }]
	});

})