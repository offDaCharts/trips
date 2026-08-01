const gf = (query) => `https://www.google.com/travel/flights?q=${encodeURIComponent(query)}&curr=USD&hl=en`;

const quotes = [
  // Main transatlantic round-trip fare floors. Google displays the exact total with the shown outbound.
  { type: "main", route: "ATL–KEF–ATL", gateway: "KEF", date: "Sep 5", returnDate: "Sep 18", price: 1075, carrier: "Delta", flight: "DL2398 + DL246", timing: "7:18 PM → 9:30 AM +1", duration: "10h 12m outbound", stops: "1 stop · JFK", direct: false, skyteam: true, payMiles: true, note: "Round-trip fare floor; return choice can reprice", source: gf("Round trip flights from ATL to KEF leaving 2026-09-05 returning 2026-09-18") },
  { type: "main", route: "ATL–KEF–ATL", gateway: "KEF", date: "Sep 5", returnDate: "Sep 19", price: 1132, carrier: "Delta", flight: "DL2398 + DL246", timing: "7:18 PM → 9:30 AM +1", duration: "10h 12m outbound", stops: "1 stop · JFK", direct: false, skyteam: true, payMiles: true, note: "Round-trip fare floor; return choice can reprice", source: gf("Round trip flights from ATL to KEF leaving 2026-09-05 returning 2026-09-19") },
  { type: "main", route: "ATL–KEF–ATL", gateway: "KEF", date: "Sep 5", returnDate: "Sep 18", price: 836, carrier: "JetBlue + Icelandair", flight: "B6920 + FI618", timing: "2:24 PM → 8:55 AM +1", duration: "14h 31m outbound", stops: "1 stop · JFK 6h23", direct: false, skyteam: false, payMiles: false, note: "Cheapest same-next-day alternative found", source: gf("Round trip flights from ATL to KEF leaving 2026-09-05 returning 2026-09-18") },
  { type: "main", route: "ATL–KEF–ATL", gateway: "KEF", date: "Sep 5", returnDate: "Sep 18", price: 760, carrier: "JetBlue + Icelandair", flight: "B61096 + FI630", timing: "6:53 PM → 6:05 AM +2", duration: "31h 12m outbound", stops: "1 stop · BOS 22h51", direct: false, skyteam: false, payMiles: false, note: "Lowest raw fare; loses a full vacation day", source: gf("Round trip flights from ATL to KEF leaving 2026-09-05 returning 2026-09-18") },
  { type: "main", route: "ATL–KEF", gateway: "KEF", date: "Sep 5", price: 604, carrier: "Delta", flight: "DL2398 + DL246", timing: "7:18 PM → 9:30 AM +1", duration: "10h 12m", stops: "1 stop · JFK 1h55", direct: false, skyteam: true, payMiles: true, note: "Separate-ticket benchmark", source: gf("One-way flights from ATL to KEF on 2026-09-05") },

  // Iceland to mainland Europe: exact one-way quotes.
  { type: "bridge", route: "KEF–MUC", gateway: "MUC", date: "Sep 10", price: 296, carrier: "British Airways", flight: "BA801 + BA938", timing: "10:40 AM → 8:15 PM", duration: "7h 35m", stops: "1 stop · LHR 2h25", source: gf("One-way flights from KEF to MUC on 2026-09-10") },
  { type: "bridge", route: "KEF–MUC", gateway: "MUC", date: "Sep 10", price: 539, carrier: "Icelandair", flight: "FI534", timing: "12:35 AM → 6:25 AM", duration: "3h 50m", stops: "Nonstop", direct: true, source: gf("One-way flights from KEF to MUC on 2026-09-10") },
  { type: "bridge", route: "KEF–FRA", gateway: "FRA", date: "Sep 10", price: 258, carrier: "Air Baltic", flight: "BT170 + BT243", timing: "12:45 AM → 9:10 AM", duration: "6h 25m", stops: "1 stop · RIX 30m", source: gf("One-way flights from KEF to FRA on 2026-09-10") },
  { type: "bridge", route: "KEF–FRA", gateway: "FRA", date: "Sep 10", price: 468, carrier: "Lufthansa", flight: "LH847", timing: "12:20 AM → 5:50 AM", duration: "3h 30m", stops: "Nonstop", direct: true, source: gf("One-way flights from KEF to FRA on 2026-09-10") },
  { type: "bridge", route: "KEF–ZRH", gateway: "ZRH", date: "Sep 10", price: 287, carrier: "Air Baltic", flight: "BT170 + BT293", timing: "12:45 AM → 7:05 PM", duration: "16h 20m", stops: "1 stop · RIX 10h15", source: gf("One-way flights from KEF to ZRH on 2026-09-10") },
  { type: "bridge", route: "KEF–ZRH", gateway: "ZRH", date: "Sep 10", price: 546, carrier: "Edelweiss", flight: "WK325", timing: "9:05 AM → 3:00 PM", duration: "3h 55m", stops: "Nonstop", direct: true, source: gf("One-way flights from KEF to ZRH on 2026-09-10") },
  { type: "bridge", route: "KEF–VCE", gateway: "VCE", date: "Sep 10", price: 234, carrier: "Finnair", flight: "AY992 + AY1783", timing: "8:35 AM → 6:30 PM", duration: "7h 55m", stops: "1 stop · HEL 1h30", source: gf("One-way flights from KEF to VCE on 2026-09-10") },
  { type: "bridge", route: "KEF–MXP", gateway: "MXP", date: "Sep 10", price: 168, carrier: "Wizz Air", flight: "W46454", timing: "9:00 AM → 3:10 PM", duration: "4h 10m", stops: "Nonstop", direct: true, noBin: true, source: gf("One-way flights from KEF to MXP on 2026-09-10") },
  { type: "bridge", route: "KEF–VIE", gateway: "VIE", date: "Sep 10", price: 250, carrier: "Finnair", flight: "AY992 + AY1475", timing: "8:35 AM → 6:20 PM", duration: "7h 45m", stops: "1 stop · HEL 1h55", source: gf("One-way flights from KEF to VIE on 2026-09-10") },
  { type: "bridge", route: "KEF–BER", gateway: "BER", date: "Sep 10", price: 258, carrier: "Air Baltic", flight: "BT170 + BT213", timing: "12:45 AM → 7:55 PM", duration: "17h 10m", stops: "1 stop · RIX 11h55", source: gf("One-way flights from KEF to BER on 2026-09-10") },
  { type: "bridge", route: "KEF–BER", gateway: "BER", date: "Sep 10", price: 536, carrier: "Icelandair", flight: "FI528", timing: "7:35 AM → 1:10 PM", duration: "3h 35m", stops: "Nonstop", direct: true, source: gf("One-way flights from KEF to BER on 2026-09-10") },
  { type: "bridge", route: "KEF–PRG", gateway: "PRG", date: "Sep 10", price: 238, carrier: "Finnair", flight: "AY992 + AY1225", timing: "8:35 AM → 6:45 PM", duration: "8h 10m", stops: "1 stop · HEL 2h35", source: gf("One-way flights from KEF to PRG on 2026-09-10") },
  { type: "bridge", route: "KEF–AMS", gateway: "AMS", date: "Sep 10", price: 120, carrier: "Transavia", flight: "HV6886", timing: "7:15 PM → 12:20 AM +1", duration: "3h 05m", stops: "Nonstop", direct: true, noBin: true, source: gf("One-way flights from KEF to AMS on 2026-09-10") },
  { type: "bridge", route: "KEF–CPH", gateway: "CPH", date: "Sep 10", price: 163, carrier: "SAS", flight: "SK2596", timing: "5:10 PM → 10:10 PM", duration: "3h 00m", stops: "Nonstop", direct: true, noBin: true, source: gf("One-way flights from KEF to CPH on 2026-09-10") },
  { type: "bridge", route: "KEF–CDG", gateway: "CDG", date: "Sep 10", price: 230, carrier: "Finnair", flight: "AY992 + AY1577", timing: "8:35 AM → 6:15 PM", duration: "7h 40m", stops: "1 stop · HEL 1h10", source: gf("One-way flights from KEF to CDG on 2026-09-10") },
  { type: "bridge", route: "KEF–CDG", gateway: "CDG", date: "Sep 10", price: 315, carrier: "Icelandair", flight: "FI546", timing: "10:50 AM → 4:15 PM", duration: "3h 25m", stops: "Nonstop", direct: true, source: gf("One-way flights from KEF to CDG on 2026-09-10") },
  { type: "bridge", route: "KEF–GVA", gateway: "GVA", date: "Sep 10", price: 303, carrier: "British Airways", flight: "BA801 + BA754", timing: "10:40 AM → 8:35 PM", duration: "7h 55m", stops: "1 stop · LHR 2h55", source: gf("One-way flights from KEF to GVA on 2026-09-10") },

  { type: "bridge", route: "KEF–MUC", gateway: "MUC", date: "Sep 11", price: 217, carrier: "LOT", flight: "LO500 + LO351", timing: "12:45 AM → 9:10 AM", duration: "6h 25m", stops: "1 stop · WAW 45m", source: gf("One-way flights from KEF to MUC on 2026-09-11") },
  { type: "bridge", route: "KEF–MUC", gateway: "MUC", date: "Sep 11", price: 360, carrier: "Discover Airlines", flight: "4Y1331", timing: "1:10 AM → 7:00 AM", duration: "3h 50m", stops: "Nonstop", direct: true, source: gf("One-way flights from KEF to MUC on 2026-09-11") },
  { type: "bridge", route: "KEF–FRA", gateway: "FRA", date: "Sep 11", price: 221, carrier: "LOT", flight: "LO500 + LO381", timing: "12:45 AM → 9:40 AM", duration: "6h 55m", stops: "1 stop · WAW 55m", source: gf("One-way flights from KEF to FRA on 2026-09-11") },
  { type: "bridge", route: "KEF–FRA", gateway: "FRA", date: "Sep 11", price: 667, carrier: "Icelandair", flight: "FI520", timing: "7:20 AM → 1:00 PM", duration: "3h 40m", stops: "Nonstop", direct: true, source: gf("One-way flights from KEF to FRA on 2026-09-11") },
  { type: "bridge", route: "KEF–ZRH", gateway: "ZRH", date: "Sep 11", price: 208, carrier: "Transavia + KLM", flight: "HV6888 + KL1925", timing: "8:50 AM → 6:40 PM", duration: "7h 50m", stops: "1 stop · AMS 3h20", source: gf("One-way flights from KEF to ZRH on 2026-09-11") },
  { type: "bridge", route: "KEF–ZRH", gateway: "ZRH", date: "Sep 11", price: 432, carrier: "Icelandair", flight: "FI568", timing: "7:20 AM → 1:05 PM", duration: "3h 45m", stops: "Nonstop", direct: true, source: gf("One-way flights from KEF to ZRH on 2026-09-11") },
  { type: "bridge", route: "KEF–VCE", gateway: "VCE", date: "Sep 11", price: 228, carrier: "Transavia + KLM", flight: "HV6888 + KL1637", timing: "8:50 AM → 10:20 PM", duration: "11h 30m", stops: "1 stop · AMS 6h40", source: gf("One-way flights from KEF to VCE on 2026-09-11") },
  { type: "bridge", route: "KEF–VCE", gateway: "VCE", date: "Sep 11", price: 614, carrier: "Icelandair", flight: "FI948", timing: "8:20 AM → 2:45 PM", duration: "4h 25m", stops: "Nonstop", direct: true, source: gf("One-way flights from KEF to VCE on 2026-09-11") },
  { type: "bridge", route: "KEF–MXP", gateway: "MXP", date: "Sep 11", price: 221, carrier: "LOT", flight: "LO500 + LO317", timing: "12:45 AM → 9:45 AM", duration: "7h 00m", stops: "1 stop · WAW 50m", source: gf("One-way flights from KEF to MXP on 2026-09-11") },
  { type: "bridge", route: "KEF–MXP", gateway: "MXP", date: "Sep 11", price: 256, carrier: "easyJet", flight: "U23980", timing: "10:45 AM → 5:00 PM", duration: "4h 15m", stops: "Nonstop", direct: true, noBin: true, source: gf("One-way flights from KEF to MXP on 2026-09-11") },
  { type: "bridge", route: "KEF–VIE", gateway: "VIE", date: "Sep 11", price: 214, carrier: "Transavia + KLM", flight: "HV6888 + KL1907", timing: "8:50 AM → 10:20 PM", duration: "11h 30m", stops: "1 stop · AMS 6h40", source: gf("One-way flights from KEF to VIE on 2026-09-11") },
  { type: "bridge", route: "KEF–BER", gateway: "BER", date: "Sep 11", price: 221, carrier: "LOT", flight: "LO500 + LO387", timing: "12:45 AM → 10:35 AM", duration: "7h 50m", stops: "1 stop · WAW 2h35", source: gf("One-way flights from KEF to BER on 2026-09-11") },
  { type: "bridge", route: "KEF–BER", gateway: "BER", date: "Sep 11", price: 536, carrier: "Icelandair", flight: "FI528", timing: "7:35 AM → 1:10 PM", duration: "3h 35m", stops: "Nonstop", direct: true, source: gf("One-way flights from KEF to BER on 2026-09-11") },
  { type: "bridge", route: "KEF–PRG", gateway: "PRG", date: "Sep 11", price: 207, carrier: "Transavia + KLM", flight: "HV6888 + KL1359", timing: "8:50 AM → 7:45 PM", duration: "8h 55m", stops: "1 stop · AMS 4h20", source: gf("One-way flights from KEF to PRG on 2026-09-11") },
  { type: "bridge", route: "KEF–PRG", gateway: "PRG", date: "Sep 11", price: 438, carrier: "Icelandair", flight: "FI536", timing: "7:20 AM → 1:05 PM", duration: "3h 45m", stops: "Nonstop", direct: true, source: gf("One-way flights from KEF to PRG on 2026-09-11") },
  { type: "bridge", route: "KEF–AMS", gateway: "AMS", date: "Sep 11", price: 120, carrier: "Transavia", flight: "HV6888", timing: "8:50 AM → 1:55 PM", duration: "3h 05m", stops: "Nonstop", direct: true, noBin: true, source: gf("One-way flights from KEF to AMS on 2026-09-11") },
  { type: "bridge", route: "KEF–CPH", gateway: "CPH", date: "Sep 11", price: 152, carrier: "Transavia + KLM", flight: "HV6888 + KL1279", timing: "8:50 AM → 10:30 PM", duration: "11h 40m", stops: "1 stop · AMS 7h10", source: gf("One-way flights from KEF to CPH on 2026-09-11") },
  { type: "bridge", route: "KEF–CPH", gateway: "CPH", date: "Sep 11", price: 183, carrier: "Icelandair", flight: "FI202", timing: "1:10 AM → 6:20 AM", duration: "3h 10m", stops: "Nonstop", direct: true, source: gf("One-way flights from KEF to CPH on 2026-09-11") },
  { type: "bridge", route: "KEF–CDG", gateway: "CDG", date: "Sep 11", price: 148, carrier: "Transavia + Air France", flight: "HV6888 + AF1141", timing: "8:50 AM → 8:05 PM", duration: "9h 15m", stops: "1 stop · AMS 4h45", source: gf("One-way flights from KEF to CDG on 2026-09-11") },
  { type: "bridge", route: "KEF–CDG", gateway: "CDG", date: "Sep 11", price: 315, carrier: "Icelandair", flight: "FI548", timing: "12:50 AM → 6:15 AM", duration: "3h 25m", stops: "Nonstop", direct: true, source: gf("One-way flights from KEF to CDG on 2026-09-11") },
  { type: "bridge", route: "KEF–GVA", gateway: "GVA", date: "Sep 11", price: 227, carrier: "LOT", flight: "LO500 + LO415", timing: "12:45 AM → 6:55 PM", duration: "16h 10m", stops: "1 stop · WAW 9h45", source: gf("One-way flights from KEF to GVA on 2026-09-11") },

  // Backtrack structure: exact round-trip fare floors with the displayed outbound.
  { type: "backtrack", route: "KEF–MUC–KEF", gateway: "MUC", date: "Sep 10", returnDate: "Sep 17", price: 570, carrier: "Lufthansa + Discover", flight: "LH847 + 4Y1000", timing: "12:20 AM → 7:45 AM", duration: "5h 25m outbound", stops: "1 stop · FRA 1h", note: "Round-trip floor; outbound shown", source: gf("Round trip flights from KEF to MUC leaving 2026-09-10 returning 2026-09-17") },
  { type: "backtrack", route: "KEF–FRA–KEF", gateway: "FRA", date: "Sep 10", returnDate: "Sep 17", price: 541, carrier: "Air Baltic", flight: "BT170 + BT243", timing: "12:45 AM → 9:10 AM", duration: "6h 25m outbound", stops: "1 stop · RIX 30m", note: "Round-trip floor; outbound shown", source: gf("Round trip flights from KEF to FRA leaving 2026-09-10 returning 2026-09-17") },
  { type: "backtrack", route: "KEF–ZRH–KEF", gateway: "ZRH", date: "Sep 10", returnDate: "Sep 17", price: 586, carrier: "SAS", flight: "SK596 + SK609", timing: "10:30 AM → 7:40 PM", duration: "7h 10m outbound", stops: "1 stop · CPH 2h20", noBin: true, note: "Round-trip floor; outbound shown", source: gf("Round trip flights from KEF to ZRH leaving 2026-09-10 returning 2026-09-17") },
  { type: "backtrack", route: "KEF–VCE–KEF", gateway: "VCE", date: "Sep 10", returnDate: "Sep 17", price: 454, carrier: "Finnair", flight: "AY992 + AY1783", timing: "8:35 AM → 6:30 PM", duration: "7h 55m outbound", stops: "1 stop · HEL 1h30", note: "Round-trip floor; outbound shown", source: gf("Round trip flights from KEF to VCE leaving 2026-09-10 returning 2026-09-17") },
  { type: "backtrack", route: "KEF–MXP–KEF", gateway: "MXP", date: "Sep 10", returnDate: "Sep 17", price: 225, carrier: "Wizz Air", flight: "W46454", timing: "9:00 AM → 3:10 PM", duration: "4h 10m outbound", stops: "Nonstop outbound", direct: true, noBin: true, note: "Round-trip floor; return choice can reprice", source: gf("Round trip flights from KEF to MXP leaving 2026-09-10 returning 2026-09-17") },
  { type: "backtrack", route: "KEF–VIE–KEF", gateway: "VIE", date: "Sep 10", returnDate: "Sep 17", price: 510, carrier: "Finnair", flight: "AY992 + AY1475", timing: "8:35 AM → 6:20 PM", duration: "7h 45m outbound", stops: "1 stop · HEL 1h55", note: "Round-trip floor; outbound shown", source: gf("Round trip flights from KEF to VIE leaving 2026-09-10 returning 2026-09-17") },
  { type: "backtrack", route: "KEF–BER–KEF", gateway: "BER", date: "Sep 10", returnDate: "Sep 17", price: 567, carrier: "Finnair", flight: "AY992 + AY1435", timing: "8:35 AM → 5:20 PM", duration: "6h 45m outbound", stops: "1 stop · HEL 1h20", note: "Round-trip floor; outbound shown", source: gf("Round trip flights from KEF to BER leaving 2026-09-10 returning 2026-09-17") },
  { type: "backtrack", route: "KEF–PRG–KEF", gateway: "PRG", date: "Sep 10", returnDate: "Sep 17", price: 467, carrier: "Finnair", flight: "AY992 + AY1225", timing: "8:35 AM → 6:45 PM", duration: "8h 10m outbound", stops: "1 stop · HEL 2h35", note: "Round-trip floor; outbound shown", source: gf("Round trip flights from KEF to PRG leaving 2026-09-10 returning 2026-09-17") },
  { type: "backtrack", route: "KEF–AMS–KEF", gateway: "AMS", date: "Sep 10", returnDate: "Sep 17", price: 350, carrier: "Transavia", flight: "HV6886", timing: "7:15 PM → 12:20 AM +1", duration: "3h 05m outbound", stops: "Nonstop outbound", direct: true, noBin: true, note: "Round-trip floor; return choice can reprice", source: gf("Round trip flights from KEF to AMS leaving 2026-09-10 returning 2026-09-17") },
  { type: "backtrack", route: "KEF–CPH–KEF", gateway: "CPH", date: "Sep 10", returnDate: "Sep 17", price: 339, carrier: "SAS", flight: "SK2596", timing: "5:10 PM → 10:10 PM", duration: "3h 00m outbound", stops: "Nonstop outbound", direct: true, noBin: true, note: "Round-trip floor; return choice can reprice", source: gf("Round trip flights from KEF to CPH leaving 2026-09-10 returning 2026-09-17") },
  { type: "backtrack", route: "KEF–CDG–KEF", gateway: "CDG", date: "Sep 10", returnDate: "Sep 17", price: 448, carrier: "Finnair", flight: "AY992 + AY1577", timing: "8:35 AM → 6:15 PM", duration: "7h 40m outbound", stops: "1 stop · HEL 1h10", noBin: true, note: "Round-trip floor; outbound shown", source: gf("Round trip flights from KEF to CDG leaving 2026-09-10 returning 2026-09-17") },
  { type: "backtrack", route: "KEF–GVA–KEF", gateway: "GVA", date: "Sep 10", returnDate: "Sep 17", price: 584, carrier: "SAS", flight: "SK596 + SK617", timing: "10:30 AM → 7:20 PM", duration: "6h 50m outbound", stops: "1 stop · CPH 1h45", noBin: true, note: "Round-trip floor; outbound shown", source: gf("Round trip flights from KEF to GVA leaving 2026-09-10 returning 2026-09-17") },

  { type: "backtrack", route: "KEF–MUC–KEF", gateway: "MUC", date: "Sep 11", returnDate: "Sep 17", price: 449, carrier: "Discover Airlines", flight: "4Y1331", timing: "1:10 AM → 7:00 AM", duration: "3h 50m outbound", stops: "Nonstop outbound", direct: true, note: "Round-trip floor; return choice can reprice", source: gf("Round trip flights from KEF to MUC leaving 2026-09-11 returning 2026-09-17") },
  { type: "backtrack", route: "KEF–FRA–KEF", gateway: "FRA", date: "Sep 11", returnDate: "Sep 17", price: 452, carrier: "LOT", flight: "LO500 + LO381", timing: "12:45 AM → 9:40 AM", duration: "6h 55m outbound", stops: "1 stop · WAW 55m", note: "Round-trip floor; outbound shown", source: gf("Round trip flights from KEF to FRA leaving 2026-09-11 returning 2026-09-17") },
  { type: "backtrack", route: "KEF–ZRH–KEF", gateway: "ZRH", date: "Sep 11", returnDate: "Sep 17", price: 427, carrier: "Transavia + KLM", flight: "HV6888 + KL1925", timing: "8:50 AM → 6:40 PM", duration: "7h 50m outbound", stops: "1 stop · AMS 3h20", note: "Round-trip floor; outbound shown", source: gf("Round trip flights from KEF to ZRH leaving 2026-09-11 returning 2026-09-17") },
  { type: "backtrack", route: "KEF–VCE–KEF", gateway: "VCE", date: "Sep 11", returnDate: "Sep 17", price: 388, carrier: "Transavia + KLM", flight: "HV6888 + KL1637", timing: "8:50 AM → 10:20 PM", duration: "11h 30m outbound", stops: "1 stop · AMS 6h40", note: "Round-trip floor; outbound shown", source: gf("Round trip flights from KEF to VCE leaving 2026-09-11 returning 2026-09-17") },
  { type: "backtrack", route: "KEF–MXP–KEF", gateway: "MXP", date: "Sep 11", returnDate: "Sep 17", price: 279, carrier: "LOT", flight: "LO500 + LO317", timing: "12:45 AM → 9:45 AM", duration: "7h 00m outbound", stops: "1 stop · WAW 50m", noBin: true, note: "Round-trip floor; outbound shown", source: gf("Round trip flights from KEF to MXP leaving 2026-09-11 returning 2026-09-17") },
  { type: "backtrack", route: "KEF–VIE–KEF", gateway: "VIE", date: "Sep 11", returnDate: "Sep 17", price: 417, carrier: "Transavia + KLM", flight: "HV6888 + KL1907", timing: "8:50 AM → 10:20 PM", duration: "11h 30m outbound", stops: "1 stop · AMS 6h40", note: "Round-trip floor; outbound shown", source: gf("Round trip flights from KEF to VIE leaving 2026-09-11 returning 2026-09-17") },
  { type: "backtrack", route: "KEF–BER–KEF", gateway: "BER", date: "Sep 11", returnDate: "Sep 17", price: 446, carrier: "LOT", flight: "LO500 + LO387", timing: "12:45 AM → 10:35 AM", duration: "7h 50m outbound", stops: "1 stop · WAW 2h35", note: "Round-trip floor; outbound shown", source: gf("Round trip flights from KEF to BER leaving 2026-09-11 returning 2026-09-17") },
  { type: "backtrack", route: "KEF–PRG–KEF", gateway: "PRG", date: "Sep 11", returnDate: "Sep 17", price: 382, carrier: "LOT", flight: "LO500 + LO523", timing: "12:45 AM → 9:15 AM", duration: "6h 30m outbound", stops: "1 stop · WAW 1h15", note: "Round-trip floor; outbound shown", source: gf("Round trip flights from KEF to PRG leaving 2026-09-11 returning 2026-09-17") },
  { type: "backtrack", route: "KEF–AMS–KEF", gateway: "AMS", date: "Sep 11", returnDate: "Sep 17", price: 350, carrier: "Transavia", flight: "HV6888", timing: "8:50 AM → 1:55 PM", duration: "3h 05m outbound", stops: "Nonstop outbound", direct: true, noBin: true, note: "Round-trip floor; return choice can reprice", source: gf("Round trip flights from KEF to AMS leaving 2026-09-11 returning 2026-09-17") },
  { type: "backtrack", route: "KEF–CPH–KEF", gateway: "CPH", date: "Sep 11", returnDate: "Sep 17", price: 328, carrier: "Transavia + KLM", flight: "HV6888 + KL1279", timing: "8:50 AM → 10:30 PM", duration: "11h 40m outbound", stops: "1 stop · AMS 7h10", note: "Round-trip floor; outbound shown", source: gf("Round trip flights from KEF to CPH leaving 2026-09-11 returning 2026-09-17") },
  { type: "backtrack", route: "KEF–CDG–KEF", gateway: "CDG", date: "Sep 11", returnDate: "Sep 17", price: 363, carrier: "Transavia + Air France", flight: "HV6888 + AF1141", timing: "8:50 AM → 8:05 PM", duration: "9h 15m outbound", stops: "1 stop · AMS 4h45", note: "Round-trip floor; outbound shown", source: gf("Round trip flights from KEF to CDG leaving 2026-09-11 returning 2026-09-17") },
  { type: "backtrack", route: "KEF–GVA–KEF", gateway: "GVA", date: "Sep 11", returnDate: "Sep 17", price: 423, carrier: "Transavia + KLM", flight: "HV6888 + KL1937", timing: "8:50 AM → 6:35 PM", duration: "7h 45m outbound", stops: "1 stop · AMS 3h10", note: "Round-trip floor; outbound shown", source: gf("Round trip flights from KEF to GVA leaving 2026-09-11 returning 2026-09-17") },

  // Europe to Atlanta home legs: exact one-way pricing, used as a separate-ticket benchmark.
  { type: "return", route: "MUC–ATL", gateway: "MUC", date: "Sep 18", price: 1647, carrier: "Delta", flight: "DL131", timing: "10:25 AM → 2:45 PM", duration: "10h 20m", stops: "Nonstop", direct: true, skyteam: true, payMiles: true, source: gf("One-way flights from MUC to ATL on 2026-09-18") },
  { type: "return", route: "FRA–ATL", gateway: "FRA", date: "Sep 18", price: 1827, carrier: "Delta", flight: "DL15", timing: "10:40 AM → 2:57 PM", duration: "10h 17m", stops: "Nonstop", direct: true, skyteam: true, payMiles: true, source: gf("One-way flights from FRA to ATL on 2026-09-18") },
  { type: "return", route: "ZRH–ATL", gateway: "ZRH", date: "Sep 18", price: 1792, carrier: "Delta", flight: "DL91", timing: "10:10 AM → 2:54 PM", duration: "10h 44m", stops: "Nonstop", direct: true, skyteam: true, payMiles: true, source: gf("One-way flights from ZRH to ATL on 2026-09-18") },
  { type: "return", route: "VIE–ATL", gateway: "VIE", date: "Sep 18", price: 1292, carrier: "KLM", flight: "KL1904 + KL621", timing: "2:20 PM → 8:25 PM", duration: "12h 05m", stops: "1 stop · AMS 55m", skyteam: true, source: gf("One-way flights from VIE to ATL on 2026-09-18") },
  { type: "return", route: "VCE–ATL", gateway: "VCE", date: "Sep 18", price: 1732, carrier: "Delta", flight: "DL193", timing: "11:05 AM → 3:49 PM", duration: "10h 44m", stops: "Nonstop", direct: true, skyteam: true, payMiles: true, source: gf("One-way flights from VCE to ATL on 2026-09-18") },
  { type: "return", route: "MXP–ATL", gateway: "MXP", date: "Sep 18", price: 1731, carrier: "Delta", flight: "DL175", timing: "11:40 AM → 4:18 PM", duration: "10h 38m", stops: "Nonstop", direct: true, skyteam: true, payMiles: true, source: gf("One-way flights from MXP to ATL on 2026-09-18") },
  { type: "return", route: "CDG–ATL", gateway: "CDG", date: "Sep 18", price: 1561, carrier: "Delta", flight: "DL83", timing: "9:25 AM → 12:50 PM", duration: "9h 25m", stops: "Nonstop", direct: true, skyteam: true, payMiles: true, source: gf("One-way flights from CDG to ATL on 2026-09-18") },
  { type: "return", route: "AMS–ATL", gateway: "AMS", date: "Sep 18", price: 1952, carrier: "Delta", flight: "DL71", timing: "9:15 AM → 12:36 PM", duration: "9h 21m", stops: "Nonstop", direct: true, skyteam: true, payMiles: true, source: gf("One-way flights from AMS to ATL on 2026-09-18") },
  { type: "return", route: "CPH–ATL", gateway: "CPH", date: "Sep 18", price: 1275, carrier: "KLM + Delta", flight: "KL1266 + DL71", timing: "6:00 AM → 12:36 PM", duration: "12h 36m", stops: "1 stop · AMS 1h45", skyteam: true, source: gf("One-way flights from CPH to ATL on 2026-09-18") },
  { type: "return", route: "MUC–ATL", gateway: "MUC", date: "Sep 19", price: 1367, carrier: "Delta", flight: "DL131", timing: "10:25 AM → 2:45 PM", duration: "10h 20m", stops: "Nonstop", direct: true, skyteam: true, payMiles: true, source: gf("One-way flights from MUC to ATL on 2026-09-19") },
  { type: "return", route: "FRA–ATL", gateway: "FRA", date: "Sep 19", price: 1827, carrier: "Delta", flight: "DL15", timing: "10:40 AM → 2:57 PM", duration: "10h 17m", stops: "Nonstop", direct: true, skyteam: true, payMiles: true, source: gf("One-way flights from FRA to ATL on 2026-09-19") },
  { type: "return", route: "ZRH–ATL", gateway: "ZRH", date: "Sep 19", price: 1792, carrier: "Delta", flight: "DL91", timing: "10:10 AM → 2:54 PM", duration: "10h 44m", stops: "Nonstop", direct: true, skyteam: true, payMiles: true, source: gf("One-way flights from ZRH to ATL on 2026-09-19") },
  { type: "return", route: "VIE–ATL", gateway: "VIE", date: "Sep 19", price: 1292, carrier: "KLM", flight: "KL1904 + KL621", timing: "2:20 PM → 8:25 PM", duration: "12h 05m", stops: "1 stop · AMS 55m", skyteam: true, source: gf("One-way flights from VIE to ATL on 2026-09-19") },
  { type: "return", route: "VCE–ATL", gateway: "VCE", date: "Sep 19", price: 1732, carrier: "Delta", flight: "DL193", timing: "11:05 AM → 3:49 PM", duration: "10h 44m", stops: "Nonstop", direct: true, skyteam: true, payMiles: true, source: gf("One-way flights from VCE to ATL on 2026-09-19") },
  { type: "return", route: "MXP–ATL", gateway: "MXP", date: "Sep 19", price: 1731, carrier: "Delta", flight: "DL175", timing: "11:40 AM → 4:18 PM", duration: "10h 38m", stops: "Nonstop", direct: true, skyteam: true, payMiles: true, source: gf("One-way flights from MXP to ATL on 2026-09-19") },
  { type: "return", route: "CDG–ATL", gateway: "CDG", date: "Sep 19", price: 1593, carrier: "Delta", flight: "DL83", timing: "9:25 AM → 12:50 PM", duration: "9h 25m", stops: "Nonstop", direct: true, skyteam: true, payMiles: true, source: gf("One-way flights from CDG to ATL on 2026-09-19") },
  { type: "return", route: "AMS–ATL", gateway: "AMS", date: "Sep 19", price: 1972, carrier: "Delta", flight: "DL71", timing: "9:15 AM → 12:36 PM", duration: "9h 21m", stops: "Nonstop", direct: true, skyteam: true, payMiles: true, source: gf("One-way flights from AMS to ATL on 2026-09-19") },
  { type: "return", route: "CPH–ATL", gateway: "CPH", date: "Sep 19", price: 1275, carrier: "KLM + Delta", flight: "KL1266 + DL71", timing: "6:00 AM → 12:36 PM", duration: "12h 36m", stops: "1 stop · AMS 1h45", skyteam: true, source: gf("One-way flights from CPH to ATL on 2026-09-19") },
];

// Additional lowest nonstop snapshots for Sep 12–15, researched after the original Sep 10–11 audit.
const extendedNonstops = [
  { gateway: "AMS", date: "Sep 12", price: 521, carrier: "Icelandair", timing: "7:40 AM → 1:00 PM", duration: "3h 20m", source: gf("One-way flights from KEF to AMS on 2026-09-12") },
  { gateway: "BER", date: "Sep 12", price: 852, carrier: "Icelandair", timing: "7:35 AM → 1:10 PM", duration: "3h 35m", source: gf("One-way flights from KEF to BER on 2026-09-12") },
  { gateway: "CPH", date: "Sep 12", price: 183, carrier: "Icelandair", timing: "1:10 AM → 6:20 AM", duration: "3h 10m", source: gf("One-way flights from KEF to CPH on 2026-09-12") },
  { gateway: "FRA", date: "Sep 12", price: 487, carrier: "Lufthansa", timing: "12:25 AM → 5:55 AM", duration: "3h 30m", source: gf("One-way flights from KEF to FRA on 2026-09-12") },
  { gateway: "MUC", date: "Sep 12", price: 539, carrier: "Icelandair", timing: "12:35 AM → 6:25 AM", duration: "3h 50m", source: gf("One-way flights from KEF to MUC on 2026-09-12") },
  { gateway: "ZRH", date: "Sep 12", price: 569, carrier: "Icelandair", timing: "7:20 AM → 1:05 PM", duration: "3h 45m", source: gf("One-way flights from KEF to ZRH on 2026-09-12") },

  { gateway: "AMS", date: "Sep 13", price: 131, carrier: "Transavia", timing: "7:15 PM → 12:20 AM +1", duration: "3h 05m", noBin: true, source: gf("One-way flights from KEF to AMS on 2026-09-13") },
  { gateway: "BER", date: "Sep 13", price: 757, carrier: "Icelandair", timing: "7:35 AM → 1:10 PM", duration: "3h 35m", source: gf("One-way flights from KEF to BER on 2026-09-13") },
  { gateway: "CPH", date: "Sep 13", price: 163, carrier: "SAS", timing: "5:35 PM → 10:40 PM", duration: "3h 05m", noBin: true, source: gf("One-way flights from KEF to CPH on 2026-09-13") },
  { gateway: "FRA", date: "Sep 13", price: 458, carrier: "Lufthansa", timing: "12:20 AM → 5:50 AM", duration: "3h 30m", source: gf("One-way flights from KEF to FRA on 2026-09-13") },
  { gateway: "MUC", date: "Sep 13", price: 408, carrier: "Discover Airlines", timing: "1:10 AM → 7:00 AM", duration: "3h 50m", source: gf("One-way flights from KEF to MUC on 2026-09-13") },
  { gateway: "VCE", date: "Sep 13", price: 500, carrier: "Icelandair", timing: "8:20 AM → 2:45 PM", duration: "4h 25m", source: gf("One-way flights from KEF to VCE on 2026-09-13") },
  { gateway: "ZRH", date: "Sep 13", price: 240, carrier: "Icelandair", timing: "1:05 AM → 7:00 AM", duration: "3h 55m", source: gf("One-way flights from KEF to ZRH on 2026-09-13") },

  { gateway: "AMS", date: "Sep 14", price: 289, carrier: "Transavia", timing: "8:50 AM → 1:55 PM", duration: "3h 05m", noBin: true, source: gf("One-way flights from KEF to AMS on 2026-09-14") },
  { gateway: "BER", date: "Sep 14", price: 536, carrier: "Icelandair", timing: "7:35 AM → 1:10 PM", duration: "3h 35m", source: gf("One-way flights from KEF to BER on 2026-09-14") },
  { gateway: "CPH", date: "Sep 14", price: 212, carrier: "Icelandair", timing: "7:40 AM → 12:55 PM", duration: "3h 15m", source: gf("One-way flights from KEF to CPH on 2026-09-14") },
  { gateway: "FRA", date: "Sep 14", price: 478, carrier: "Lufthansa", timing: "12:20 AM → 5:50 AM", duration: "3h 30m", source: gf("One-way flights from KEF to FRA on 2026-09-14") },
  { gateway: "MUC", date: "Sep 14", price: 539, carrier: "Icelandair", timing: "7:20 AM → 1:05 PM", duration: "3h 45m", source: gf("One-way flights from KEF to MUC on 2026-09-14") },
  { gateway: "PRG", date: "Sep 14", price: 500, carrier: "Icelandair", timing: "7:20 AM → 1:05 PM", duration: "3h 45m", source: gf("One-way flights from KEF to PRG on 2026-09-14") },
  { gateway: "ZRH", date: "Sep 14", price: 351, carrier: "Icelandair", timing: "7:20 AM → 1:05 PM", duration: "3h 45m", source: gf("One-way flights from KEF to ZRH on 2026-09-14") },

  { gateway: "AMS", date: "Sep 15", price: 303, carrier: "Icelandair", timing: "7:40 AM → 1:00 PM", duration: "3h 20m", source: gf("One-way flights from KEF to AMS on 2026-09-15") },
  { gateway: "BER", date: "Sep 15", price: 757, carrier: "Icelandair", timing: "7:35 AM → 1:10 PM", duration: "3h 35m", source: gf("One-way flights from KEF to BER on 2026-09-15") },
  { gateway: "CPH", date: "Sep 15", price: 194, carrier: "SAS", timing: "5:05 PM → 10:10 PM", duration: "3h 05m", noBin: true, source: gf("One-way flights from KEF to CPH on 2026-09-15") },
  { gateway: "FRA", date: "Sep 15", price: 476, carrier: "Lufthansa", timing: "12:20 AM → 5:50 AM", duration: "3h 30m", source: gf("One-way flights from KEF to FRA on 2026-09-15") },
  { gateway: "MUC", date: "Sep 15", price: 539, carrier: "Icelandair", timing: "7:20 AM → 1:05 PM", duration: "3h 45m", source: gf("One-way flights from KEF to MUC on 2026-09-15") },
  { gateway: "VCE", date: "Sep 15", price: 247, carrier: "Icelandair", timing: "8:20 AM → 2:45 PM", duration: "4h 25m", source: gf("One-way flights from KEF to VCE on 2026-09-15") },
  { gateway: "ZRH", date: "Sep 15", price: 351, carrier: "Icelandair", timing: "7:20 AM → 1:05 PM", duration: "3h 45m", source: gf("One-way flights from KEF to ZRH on 2026-09-15") },
];

const labels = {
  main: "ATL ↔ Iceland",
  bridge: "Iceland → Europe",
  backtrack: "Iceland round trip",
  return: "Europe → Atlanta",
};

const state = { type: "all", gateway: "all", stop: "all", sort: "price" };
const rowsNode = document.querySelector("#fare-rows");
const summaryNode = document.querySelector("#result-summary");
const nonstopRowsNode = document.querySelector("#nonstop-rows");
const nonstopSummaryNode = document.querySelector("#nonstop-summary");
let nonstopDate = "all";

const gatewayNames = {
  AMS: "Amsterdam",
  BER: "Berlin",
  CDG: "Paris",
  CPH: "Copenhagen",
  FRA: "Frankfurt",
  MUC: "Munich",
  MXP: "Milan",
  PRG: "Prague",
  VCE: "Venice",
  ZRH: "Zürich",
};

function efficientMiles(price) {
  const miles = Math.floor(price / 50) * 5000;
  const cash = price - Math.floor(price / 50) * 50;
  return `${miles.toLocaleString()} mi${cash ? ` + $${cash}` : ""}`;
}

function dateKey(value) {
  const day = Number(value.replace("Sep ", ""));
  return Number.isNaN(day) ? 0 : day;
}

function rowMarkup(item) {
  const dateText = item.returnDate ? `${item.date} → ${item.returnDate}` : item.date;
  const fareNote = item.payMiles
    ? `Pay with Miles: ${efficientMiles(item.price)}`
    : item.noBin
      ? "Overhead bin not included"
      : item.note || "Displayed fare snapshot";
  return `
    <article class="fare-row" role="row">
      <div role="cell"><span class="row-tag">${labels[item.type]}</span><span class="route-name">${item.route}</span></div>
      <div class="date-cell" role="cell"><strong>${dateText}</strong><br />2026</div>
      <div class="flight-cell" role="cell"><strong>${item.carrier}</strong>${item.flight}<br />${item.stops}</div>
      <div class="time-cell" role="cell"><strong>${item.timing}</strong><br />${item.duration}</div>
      <div class="price-cell" role="cell"><strong>$${item.price.toLocaleString()}</strong><span>${fareNote}</span></div>
      <div class="source-cell" role="cell"><a href="${item.source}" target="_blank" rel="noreferrer">Open ↗</a><small>Checked Aug 1</small></div>
    </article>`;
}

function nonstopMarkup(item) {
  const bagNote = item.noBin ? '<span class="bag-note">Overhead bag extra</span>' : '<span class="bag-note included">Standard fare shown</span>';
  let pickLabel = "";
  if (item.gateway === "MUC" && item.date === "Sep 11") pickLabel = "Best route fit";
  if (item.gateway === "ZRH" && item.date === "Sep 13") pickLabel = "Best extra-Iceland value";
  if (item.gateway === "MUC" && item.date === "Sep 13") pickLabel = "Longer-stay route fit";
  if (item.gateway === "VCE" && item.date === "Sep 15") pickLabel = "Best latest-date value";
  const routePick = pickLabel ? `<span class="route-pick">${pickLabel}</span>` : "";
  return `
    <article class="nonstop-row" role="row">
      <div class="nonstop-destination" role="cell"><span>${gatewayNames[item.gateway] || item.gateway}</span><strong>KEF → ${item.gateway}</strong>${routePick}</div>
      <div class="nonstop-date" role="cell"><strong>${item.date}</strong><span>2026</span></div>
      <div class="nonstop-time" role="cell"><strong>${item.timing}</strong><span>Local time</span></div>
      <div class="nonstop-flight" role="cell"><strong>${item.carrier}</strong><span>${item.flight || "Nonstop fare snapshot"}</span></div>
      <div class="nonstop-duration" role="cell"><strong>${item.duration}</strong><span>Nonstop</span></div>
      <div class="nonstop-price" role="cell">
        <a href="${item.source}" target="_blank" rel="noreferrer" aria-label="Reopen ${item.route} on ${item.date} for $${item.price}">$${item.price.toLocaleString()} <span>↗</span></a>
        ${bagNote}
        <i style="--fare-width: ${Math.round((item.price / 852) * 100)}%" aria-hidden="true"></i>
      </div>
    </article>`;
}

function renderNonstops() {
  let nonstops = quotes
    .filter((item) => item.type === "bridge" && item.direct)
    .concat(extendedNonstops)
    .sort((a, b) => a.gateway.localeCompare(b.gateway) || dateKey(a.date) - dateKey(b.date));
  if (nonstopDate !== "all") nonstops = nonstops.filter((item) => item.date === nonstopDate);
  nonstopRowsNode.innerHTML = nonstops.map(nonstopMarkup).join("");
  nonstopSummaryNode.textContent = `${nonstops.length} nonstop ${nonstops.length === 1 ? "flight" : "flights"}`;
}

function render() {
  let result = quotes.filter((item) => {
    if (state.type !== "all" && item.type !== state.type) return false;
    if (state.gateway !== "all" && item.gateway !== state.gateway) return false;
    if (state.stop === "nonstop" && !item.direct) return false;
    if (state.stop === "delta" && !item.skyteam) return false;
    return true;
  });

  result.sort((a, b) => {
    if (state.sort === "route") return a.route.localeCompare(b.route) || dateKey(a.date) - dateKey(b.date);
    if (state.sort === "date") return dateKey(a.date) - dateKey(b.date) || a.price - b.price;
    return a.price - b.price;
  });

  summaryNode.textContent = `${result.length} of ${quotes.length} exact fare rows shown · USD per adult`;
  rowsNode.innerHTML = result.length ? result.map(rowMarkup).join("") : '<p class="empty-state">No quotes match those filters.</p>';
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    state.type = button.dataset.filter;
    document.querySelectorAll(".filter").forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    render();
  });
});

document.querySelector("#gateway-filter").addEventListener("change", (event) => { state.gateway = event.target.value; render(); });
document.querySelector("#stop-filter").addEventListener("change", (event) => { state.stop = event.target.value; render(); });
document.querySelector("#sort-filter").addEventListener("change", (event) => { state.sort = event.target.value; render(); });

document.querySelectorAll(".nonstop-filter").forEach((button) => {
  button.addEventListener("click", () => {
    nonstopDate = button.dataset.nonstopDate;
    document.querySelectorAll(".nonstop-filter").forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    renderNonstops();
  });
});

renderNonstops();
render();
