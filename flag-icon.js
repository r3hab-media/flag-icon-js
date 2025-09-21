(function () {
	// This self-executing function encapsulates the entire script to avoid conflicts with other scripts.

	// This function runs after the entire HTML document has been loaded.
	document.addEventListener("DOMContentLoaded", function () {
		/**
		 * Injects the necessary CSS for flag styling into the document's <head>.
		 * It checks if the styles have already been added to prevent duplication.
		 */
		function addFlagStyles() {
			if (document.getElementById("flag-icon-styles")) return;

			const style = document.createElement("style");
			style.id = "flag-icon-styles";
			style.textContent = `
                .flag-icon-img {
                    height: 1em; /* Makes the flag height relative to the font size */
                    width: auto;
                    display: inline-block;
                    vertical-align: middle;
                    margin: 0 0.25em;
                    border-radius: 2px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                }
            `;
			document.head.appendChild(style);
		}

		// A comprehensive map of ISO 3166-1 alpha-2 codes to country names.
		const countryNames = {
			af: "Afghanistan",
			al: "Albania",
			dz: "Algeria",
			ad: "Andorra",
			ao: "Angola",
			ag: "Antigua and Barbuda",
			ar: "Argentina",
			am: "Armenia",
			au: "Australia",
			at: "Austria",
			az: "Azerbaijan",
			bs: "Bahamas",
			bh: "Bahrain",
			bd: "Bangladesh",
			bb: "Barbados",
			by: "Belarus",
			be: "Belgium",
			bz: "Belize",
			bj: "Benin",
			bt: "Bhutan",
			bo: "Bolivia",
			ba: "Bosnia and Herzegovina",
			bw: "Botswana",
			br: "Brazil",
			bn: "Brunei",
			bg: "Bulgaria",
			bf: "Burkina Faso",
			bi: "Burundi",
			kh: "Cambodia",
			cm: "Cameroon",
			ca: "Canada",
			cv: "Cape Verde",
			cf: "Central African Republic",
			td: "Chad",
			cl: "Chile",
			cn: "China",
			co: "Colombia",
			km: "Comoros",
			cg: "Congo",
			cr: "Costa Rica",
			hr: "Croatia",
			cu: "Cuba",
			cy: "Cyprus",
			cz: "Czech Republic",
			ci: "Côte d'Ivoire",
			cd: "Democratic Republic of the Congo",
			dk: "Denmark",
			dj: "Djibouti",
			dm: "Dominica",
			do: "Dominican Republic",
			ec: "Ecuador",
			eg: "Egypt",
			sv: "El Salvador",
			gq: "Equatorial Guinea",
			er: "Eritrea",
			ee: "Estonia",
			sz: "Eswatini",
			et: "Ethiopia",
			fj: "Fiji",
			fi: "Finland",
			fr: "France",
			ga: "Gabon",
			gm: "Gambia",
			ge: "Georgia",
			de: "Germany",
			gh: "Ghana",
			gr: "Greece",
			gd: "Grenada",
			gt: "Guatemala",
			gn: "Guinea",
			gw: "Guinea-Bissau",
			gy: "Guyana",
			ht: "Haiti",
			hn: "Honduras",
			hu: "Hungary",
			is: "Iceland",
			in: "India",
			id: "Indonesia",
			ir: "Iran",
			iq: "Iraq",
			ie: "Ireland",
			il: "Israel",
			it: "Italy",
			jm: "Jamaica",
			jp: "Japan",
			jo: "Jordan",
			kz: "Kazakhstan",
			ke: "Kenya",
			ki: "Kiribati",
			kw: "Kuwait",
			kg: "Kyrgyzstan",
			la: "Laos",
			lv: "Latvia",
			lb: "Lebanon",
			ls: "Lesotho",
			lr: "Liberia",
			ly: "Libya",
			li: "Liechtenstein",
			lt: "Lithuania",
			lu: "Luxembourg",
			mg: "Madagascar",
			mw: "Malawi",
			my: "Malaysia",
			mv: "Maldives",
			ml: "Mali",
			mt: "Malta",
			mh: "Marshall Islands",
			mr: "Mauritania",
			mu: "Mauritius",
			mx: "Mexico",
			fm: "Micronesia",
			md: "Moldova",
			mc: "Monaco",
			mn: "Mongolia",
			me: "Montenegro",
			ma: "Morocco",
			mz: "Mozambique",
			mm: "Myanmar",
			na: "Namibia",
			nr: "Nauru",
			np: "Nepal",
			nl: "Netherlands",
			nz: "New Zealand",
			ni: "Nicaragua",
			ne: "Niger",
			ng: "Nigeria",
			mk: "North Macedonia",
			kp: "North Korea",
			no: "Norway",
			om: "Oman",
			pk: "Pakistan",
			pw: "Palau",
			ps: "Palestine",
			pa: "Panama",
			pg: "Papua New Guinea",
			py: "Paraguay",
			pe: "Peru",
			ph: "Philippines",
			pl: "Poland",
			pt: "Portugal",
			qa: "Qatar",
			ro: "Romania",
			ru: "Russia",
			rw: "Rwanda",
			kn: "Saint Kitts and Nevis",
			lc: "Saint Lucia",
			vc: "Saint Vincent and the Grenadines",
			ws: "Samoa",
			sm: "San Marino",
			st: "Sao Tome and Principe",
			sa: "Saudi Arabia",
			sn: "Senegal",
			rs: "Serbia",
			sc: "Seychelles",
			sl: "Sierra Leone",
			sg: "Singapore",
			sk: "Slovakia",
			si: "Slovenia",
			sb: "Solomon Islands",
			so: "Somalia",
			za: "South Africa",
			kr: "South Korea",
			ss: "South Sudan",
			es: "Spain",
			lk: "Sri Lanka",
			sd: "Sudan",
			sr: "Suriname",
			se: "Sweden",
			ch: "Switzerland",
			sy: "Syria",
			tj: "Tajikistan",
			tz: "Tanzania",
			th: "Thailand",
			tl: "Timor-Leste",
			tg: "Togo",
			to: "Tonga",
			tt: "Trinidad and Tobago",
			tn: "Tunisia",
			tr: "Turkey",
			tm: "Turkmenistan",
			tv: "Tuvalu",
			ug: "Uganda",
			ua: "Ukraine",
			ae: "United Arab Emirates",
			gb: "United Kingdom",
			us: "United States",
			uy: "Uruguay",
			uz: "Uzbekistan",
			vu: "Vanuatu",
			va: "Vatican City",
			ve: "Venezuela",
			vn: "Vietnam",
			ye: "Yemen",
			zm: "Zambia",
			zw: "Zimbabwe",
		};

		// Create a reverse map from country name (lowercase) to code for easier lookup.
		const namesToCodes = {};
		for (const code in countryNames) {
			const name = countryNames[code].toLowerCase();
			namesToCodes[name] = code;
		}

		// Add the necessary styles for the flags to the document head.
		addFlagStyles();

		// Find all custom <flag-icon> elements on the page.
		const flagElements = document.querySelectorAll("flag-icon");

		// Loop through each found <flag-icon> element to replace it with an image.
		flagElements.forEach((flagElement) => {
			const rawCode = flagElement.getAttribute("code");
			if (!rawCode) return; // Skip if the code attribute is missing

			const lookupKey = rawCode.toLowerCase();
			let finalCode = null;

			// First, check if the provided code is a 2-letter code.
			if (countryNames[lookupKey]) {
				finalCode = lookupKey;
			}
			// If not, check if it's a country name in our reverse map.
			else if (namesToCodes[lookupKey]) {
				finalCode = namesToCodes[lookupKey];
			}

			// If we couldn't find a matching code, log a warning and skip this element.
			if (!finalCode) {
				console.warn(`Could not find a flag for code: "${rawCode}"`);
				return;
			}

			const countryName = countryNames[finalCode]; // Get the canonical country name

			// Construct the URL for the flag image from the CDN.
			const flagUrl = `https://flagcdn.com/${finalCode}.svg`;

			// Create a new <img> element.
			const img = document.createElement("img");
			img.src = flagUrl;
			img.alt = `Flag of ${countryName}`;
			img.className = "flag-icon-img"; // Use the class for styling
			img.title = `Flag of ${countryName}`;

			// Replace the custom <flag-icon> element with the new <img> element.
			flagElement.replaceWith(img);
		});
	});
})();
