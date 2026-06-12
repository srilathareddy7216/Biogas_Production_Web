/* ---------- TRANSLATIONS ---------- */
const translations = {
  en: {
    nav_home:"Home", nav_calc:"Calculator", nav_wastes:"Waste Library", nav_history:"History", nav_about:"Process",
    home_eyebrow:"Waste to Energy",
    home_title:'Turn organic <span>waste</span> into clean <span>biogas</span> energy',
    home_desc:"Estimate biogas yield from any organic waste using its weight, density, temperature and pH. Get instant results on gas output, safety status, and practical recommendations — built for students, researchers and plant operators.",
    home_btn_start:"Start Calculation →", home_btn_browse:"Browse Waste Types",
    home_tank_label:"DIGESTER TANK",
    home_stat1:"Waste types in database", home_stat2:"Optimal digestion range", home_stat3:"Ideal pH for methanogens", home_stat4:"Typical biogas yield",
    calc_title:"Biogas Yield Calculator",
    calc_desc:"Select your waste type and enter the parameters below. The calculator estimates gas output and checks if digestion conditions are safe.",
    calc_lbl_wastetype:"Waste Type", calc_hint_wastetype:"Choose the type of organic waste being fed into the digester.",
    calc_lbl_weight:"Weight of Waste (kg)", calc_lbl_density:"Density (kg/m³)", calc_lbl_temp:"Temperature (°C)",
    calc_lbl_ph:"pH Value", calc_hint_ph:"Ideal range for biogas production: 6.5 – 8.0",
    calc_btn:"Calculate Biogas Output", calc_results_title:"Results", calc_gauge_unit:"m³ BIOGAS",
    calc_row_methane:"Methane Content (approx)", calc_row_energy:"Energy Equivalent", calc_row_status:"Digestion Status",
    calc_lbl_note:"Note / Recommendation", calc_note_default:"Enter values and click Calculate to see results.",
    waste_cow:"Cow Dung", waste_poultry:"Poultry Litter", waste_food:"Food Waste / Kitchen Waste",
    waste_vegetable:"Vegetable & Fruit Waste", waste_pig:"Pig Manure", waste_sewage:"Sewage Sludge",
    waste_agri:"Agricultural Crop Residue", waste_paper:"Paper / Cardboard Waste", waste_market:"Municipal / Market Waste",
    wastes_title:"Waste Type Library",
    wastes_desc:"Reference data for common organic wastes used in biogas production — typical density, ideal temperature and pH ranges, and expected gas yield.",
    waste_card_density:"Density", waste_card_temp:"Ideal Temp", waste_card_ph:"Ideal pH", waste_card_yield:"Typical Yield", waste_card_methane:"Methane %",
    history_title:"Calculation History", history_desc:"Your previous biogas calculations from this session, saved automatically.",
    history_clear:"Clear History", history_empty:"No calculations yet. Go to the Calculator page and run your first biogas estimate.",
    about_title:"How Biogas Production Works",
    about_desc:"Anaerobic digestion converts organic waste into biogas (mainly methane and CO₂) through four key stages.",
    stage1_num:"STAGE 01", stage1_title:"Hydrolysis", stage1_desc:"Complex organic polymers (carbohydrates, proteins, fats) are broken down into simple sugars, amino acids and fatty acids by enzymes.",
    stage2_num:"STAGE 02", stage2_title:"Acidogenesis", stage2_desc:"Acid-forming bacteria convert these simple molecules into volatile fatty acids, alcohols, hydrogen and carbon dioxide.",
    stage3_num:"STAGE 03", stage3_title:"Acetogenesis", stage3_desc:"Volatile fatty acids are further converted into acetic acid, hydrogen and carbon dioxide, preparing material for methane formation.",
    stage4_num:"STAGE 04", stage4_title:"Methanogenesis", stage4_desc:"Methanogenic bacteria convert acetic acid, hydrogen and CO₂ into methane (CH₄) — the main combustible component of biogas.",
    safety_title:"Safety Guidelines", safety_desc:"General precautions when working with biogas systems.",
    safety1_title:"Ventilation", safety1_desc:"Biogas contains methane and traces of hydrogen sulfide (H₂S), which is toxic and flammable. Ensure proper ventilation around digesters and storage.",
    safety2_title:"Temperature Control", safety2_desc:"Operating outside 20–60°C slows or halts microbial activity, reducing gas yield and potentially producing unstable, low-quality gas.",
    safety3_title:"pH Monitoring", safety3_desc:"pH below 6 or above 8.5 inhibits methanogens, can cause souring of the digester, and may produce excess CO₂ instead of usable methane.",
    footer_text:"BioGas Lab — Educational Waste-to-Energy Calculator · Built for academic presentation",
    chat_title:"🤖 BioGas Help Desk", chat_welcome:"Hi! I'm your BioGas assistant. Ask me about waste types, ideal pH/temperature, gas safety, or how the calculator works.",
    chip_ph:"Ideal pH?", chip_safe:"Is biogas safe?", chip_temp:"Best temperature?", chip_bestwaste:"Best waste type?",
    chat_placeholder:"Type your question...", chat_send:"Send",
    reply_ph:"The ideal pH for biogas (anaerobic digestion) is between 6.5 and 8.0. Below 5.5 or above 9, methane-producing bacteria are inhibited and the digester can 'sour'.",
    reply_temp:"Most digesters run best at mesophilic temperatures of 30–40°C, or thermophilic 50–55°C for faster digestion. Below 15°C, gas production almost stops.",
    reply_safe:"Biogas itself (mainly methane + CO₂) is not toxic in small amounts, but it's flammable and can displace oxygen in enclosed spaces. Traces of H₂S can be toxic. Always ensure good ventilation and avoid open flames near storage.",
    reply_bestwaste:"Food/kitchen waste and pig manure tend to give the highest biogas yield per kg due to high organic content, but cow dung is the most stable and commonly used feedstock.",
    reply_density:"Density affects how compact the waste is in the digester. Most manures range 900–1050 kg/m³, while dry residues like paper or crop waste are much lighter (80–200 kg/m³).",
    reply_methane:"Biogas typically contains 50–70% methane (CH₄), with the rest mostly CO₂ and trace gases like H₂S and moisture.",
    reply_howcalc:"Go to the Calculator page, pick your waste type, enter weight, density, temperature and pH — it instantly estimates gas output, methane %, energy equivalent, and tells you if conditions are safe.",
    reply_history:"Every calculation you run is saved on the History page for this session, so you can compare results.",
    reply_default:"I can help with waste types, ideal pH/temperature ranges, gas safety, and how to use the calculator. Try asking about 'pH', 'temperature', 'safety', or 'best waste type'.",
    status_optimal:"Optimal — High Yield", status_moderate:"Moderate — Reduced Yield", status_poor:"Poor — Digestion Likely Inhibited",
    badge_safe:"✅ Safe & Efficient Conditions", badge_caution:"⚠️ Caution — Suboptimal Conditions", badge_warn:"❌ Harmful Conditions — Digestion at Risk",
    rec_optimal:"Conditions are within the ideal range for {waste}. Expect strong, stable gas production. Maintain current temperature and pH for best results.",
    rec_moderate:"Gas production will continue but at reduced efficiency. Consider adjusting {adjustments} for better yield.",
    rec_poor:"Current pH and/or temperature are far outside safe limits. Microbial activity may stop, leading to souring of the digester and unsafe gas buildup. Adjust pH toward 6.5–8.0 and temperature toward 30–40°C before continuing.",
    adj_ph:"pH towards 6.5–8.0", adj_temp:"temperature towards 30–40°C", adj_and:" and ",
    alert_fill:"Please fill in all fields with valid numbers."
  },
  hi: {
    nav_home:"होम", nav_calc:"कैलकुलेटर", nav_wastes:"कचरा लाइब्रेरी", nav_history:"इतिहास", nav_about:"प्रक्रिया",
    home_eyebrow:"कचरे से ऊर्जा",
    home_title:'जैविक <span>कचरे</span> को स्वच्छ <span>बायोगैस</span> ऊर्जा में बदलें',
    home_desc:"वजन, घनत्व, तापमान और pH के आधार पर किसी भी जैविक कचरे से बायोगैस उत्पादन का अनुमान लगाएं। गैस उत्पादन, सुरक्षा स्थिति और व्यावहारिक सुझावों के तुरंत परिणाम पाएं — छात्रों, शोधकर्ताओं और संयंत्र संचालकों के लिए बनाया गया।",
    home_btn_start:"गणना शुरू करें →", home_btn_browse:"कचरे के प्रकार देखें",
    home_tank_label:"डाइजेस्टर टैंक",
    home_stat1:"डेटाबेस में कचरे के प्रकार", home_stat2:"इष्टतम पाचन सीमा", home_stat3:"मेथेनोजेन्स के लिए आदर्श pH", home_stat4:"सामान्य बायोगैस उत्पादन",
    calc_title:"बायोगैस उत्पादन कैलकुलेटर",
    calc_desc:"नीचे अपना कचरा प्रकार चुनें और मान दर्ज करें। कैलकुलेटर गैस उत्पादन का अनुमान लगाता है और जांचता है कि पाचन की स्थिति सुरक्षित है या नहीं।",
    calc_lbl_wastetype:"कचरे का प्रकार", calc_hint_wastetype:"डाइजेस्टर में डाले जाने वाले जैविक कचरे का प्रकार चुनें।",
    calc_lbl_weight:"कचरे का वजन (किग्रा)", calc_lbl_density:"घनत्व (किग्रा/मी³)", calc_lbl_temp:"तापमान (°C)",
    calc_lbl_ph:"pH मान", calc_hint_ph:"बायोगैस उत्पादन के लिए आदर्श रेंज: 6.5 – 8.0",
    calc_btn:"बायोगैस उत्पादन की गणना करें", calc_results_title:"परिणाम", calc_gauge_unit:"m³ बायोगैस",
    calc_row_methane:"मीथेन सामग्री (अनुमानित)", calc_row_energy:"ऊर्जा समतुल्य", calc_row_status:"पाचन स्थिति",
    calc_lbl_note:"टिप्पणी / सुझाव", calc_note_default:"परिणाम देखने के लिए मान दर्ज करें और कैलकुलेट पर क्लिक करें।",
    waste_cow:"गाय का गोबर", waste_poultry:"पोल्ट्री लिटर", waste_food:"खाद्य / रसोई कचरा",
    waste_vegetable:"सब्जी और फल कचरा", waste_pig:"सूअर का गोबर", waste_sewage:"सीवेज स्लज",
    waste_agri:"कृषि फसल अवशेष", waste_paper:"कागज / गत्ता कचरा", waste_market:"नगरपालिका / बाजार कचरा",
    wastes_title:"कचरा प्रकार लाइब्रेरी",
    wastes_desc:"बायोगैस उत्पादन में उपयोग होने वाले सामान्य जैविक कचरे का संदर्भ डेटा — घनत्व, आदर्श तापमान, pH सीमा और अनुमानित गैस उत्पादन।",
    waste_card_density:"घनत्व", waste_card_temp:"आदर्श तापमान", waste_card_ph:"आदर्श pH", waste_card_yield:"सामान्य उत्पादन", waste_card_methane:"मीथेन %",
    history_title:"गणना इतिहास", history_desc:"इस सत्र की आपकी पिछली बायोगैस गणनाएं, स्वचालित रूप से सहेजी गई।",
    history_clear:"इतिहास साफ़ करें", history_empty:"अभी तक कोई गणना नहीं। कैलकुलेटर पेज पर जाएं और अपना पहला बायोगैस अनुमान चलाएं।",
    about_title:"बायोगैस उत्पादन कैसे काम करता है",
    about_desc:"एनारोबिक पाचन चार मुख्य चरणों के माध्यम से जैविक कचरे को बायोगैस (मुख्यतः मीथेन और CO₂) में बदलता है।",
    stage1_num:"चरण 01", stage1_title:"हाइड्रोलिसिस", stage1_desc:"जटिल जैविक पॉलिमर (कार्बोहाइड्रेट, प्रोटीन, वसा) एंजाइमों द्वारा सरल शर्करा, अमीनो एसिड और फैटी एसिड में टूट जाते हैं।",
    stage2_num:"चरण 02", stage2_title:"एसिडोजेनेसिस", stage2_desc:"एसिड बनाने वाले बैक्टीरिया इन सरल अणुओं को वोलेटाइल फैटी एसिड, अल्कोहल, हाइड्रोजन और कार्बन डाइऑक्साइड में बदलते हैं।",
    stage3_num:"चरण 03", stage3_title:"एसिटोजेनेसिस", stage3_desc:"वोलेटाइल फैटी एसिड को आगे एसिटिक एसिड, हाइड्रोजन और कार्बन डाइऑक्साइड में बदला जाता है, जो मीथेन निर्माण के लिए सामग्री तैयार करता है।",
    stage4_num:"चरण 04", stage4_title:"मेथेनोजेनेसिस", stage4_desc:"मेथेनोजेनिक बैक्टीरिया एसिटिक एसिड, हाइड्रोजन और CO₂ को मीथेन (CH₄) में बदलते हैं — जो बायोगैस का मुख्य ज्वलनशील घटक है।",
    safety_title:"सुरक्षा निर्देश", safety_desc:"बायोगैस प्रणालियों के साथ काम करते समय सामान्य सावधानियां।",
    safety1_title:"वेंटिलेशन", safety1_desc:"बायोगैस में मीथेन और हाइड्रोजन सल्फाइड (H₂S) की मात्रा होती है, जो विषैली और ज्वलनशील है। डाइजेस्टर और भंडारण के आसपास उचित वेंटिलेशन सुनिश्चित करें।",
    safety2_title:"तापमान नियंत्रण", safety2_desc:"20–60°C से बाहर संचालन सूक्ष्मजीव गतिविधि को धीमा या रोक देता है, जिससे गैस उत्पादन कम होता है और अस्थिर, निम्न-गुणवत्ता वाली गैस बन सकती है।",
    safety3_title:"pH मॉनिटरिंग", safety3_desc:"pH 6 से कम या 8.5 से अधिक होने पर मेथेनोजेन्स बाधित होते हैं, डाइजेस्टर खराब हो सकता है, और उपयोगी मीथेन के बजाय अतिरिक्त CO₂ बन सकती है।",
    footer_text:"बायोगैस लैब — शैक्षणिक कचरा-से-ऊर्जा कैलकुलेटर · अकादमिक प्रस्तुति के लिए बनाया गया",
    chat_title:"🤖 बायोगैस हेल्प डेस्क", chat_welcome:"नमस्ते! मैं आपका बायोगैस सहायक हूं। मुझसे कचरे के प्रकार, आदर्श pH/तापमान, गैस सुरक्षा, या कैलकुलेटर के बारे में पूछें।",
    chip_ph:"आदर्श pH?", chip_safe:"बायोगैस सुरक्षित है?", chip_temp:"सबसे अच्छा तापमान?", chip_bestwaste:"सबसे अच्छा कचरा प्रकार?",
    chat_placeholder:"अपना प्रश्न लिखें...", chat_send:"भेजें",
    reply_ph:"बायोगैस (एनारोबिक पाचन) के लिए आदर्श pH 6.5 से 8.0 के बीच है। 5.5 से कम या 9 से अधिक होने पर मीथेन उत्पन्न करने वाले बैक्टीरिया बाधित हो जाते हैं और डाइजेस्टर 'खराब' हो सकता है।",
    reply_temp:"अधिकांश डाइजेस्टर 30–40°C (मेसोफिलिक) पर सबसे अच्छा काम करते हैं, या तेज़ पाचन के लिए 50–55°C (थर्मोफिलिक)। 15°C से कम तापमान पर गैस उत्पादन लगभग बंद हो जाता है।",
    reply_safe:"बायोगैस (मुख्यतः मीथेन + CO₂) कम मात्रा में जहरीली नहीं है, लेकिन यह ज्वलनशील है और बंद जगहों में ऑक्सीजन को हटा सकती है। H₂S की मात्रा जहरीली हो सकती है। हमेशा अच्छा वेंटिलेशन सुनिश्चित करें और भंडारण के पास खुली आग से बचें।",
    reply_bestwaste:"उच्च जैविक सामग्री के कारण खाद्य/रसोई कचरा और सूअर का गोबर प्रति किग्रा सबसे अधिक बायोगैस उत्पादन देते हैं, लेकिन गाय का गोबर सबसे स्थिर और सामान्य रूप से उपयोग किया जाने वाला फीडस्टॉक है।",
    reply_density:"घनत्व बताता है कि डाइजेस्टर में कचरा कितना सघन है। अधिकांश खाद 900–1050 किग्रा/मी³ के बीच होती है, जबकि कागज या फसल अवशेष जैसी सूखी सामग्री बहुत हल्की (80–200 किग्रा/मी³) होती है।",
    reply_methane:"बायोगैस में सामान्यतः 50–70% मीथेन (CH₄) होता है, बाकी मुख्यतः CO₂ और H₂S एवं नमी जैसी अल्प मात्रा वाली गैसें होती हैं।",
    reply_howcalc:"कैलकुलेटर पेज पर जाएं, अपना कचरा प्रकार चुनें, वजन, घनत्व, तापमान और pH दर्ज करें — यह तुरंत गैस उत्पादन, मीथेन %, ऊर्जा समतुल्य का अनुमान लगाता है और बताता है कि स्थितियां सुरक्षित हैं या नहीं।",
    reply_history:"आपके द्वारा की गई हर गणना इस सत्र के लिए इतिहास पेज पर सहेजी जाती है, जिससे आप परिणामों की तुलना कर सकते हैं।",
    reply_default:"मैं कचरे के प्रकार, आदर्श pH/तापमान सीमा, गैस सुरक्षा, और कैलकुलेटर का उपयोग कैसे करें में मदद कर सकता हूं। 'pH', 'तापमान', 'सुरक्षा', या 'सबसे अच्छा कचरा प्रकार' के बारे में पूछें।",
    status_optimal:"उत्तम — उच्च उत्पादन", status_moderate:"मध्यम — कम उत्पादन", status_poor:"खराब — पाचन बाधित होने की संभावना",
    badge_safe:"✅ सुरक्षित और कुशल स्थितियां", badge_caution:"⚠️ सावधानी — अनुकूल नहीं स्थितियां", badge_warn:"❌ हानिकारक स्थितियां — पाचन जोखिम में",
    rec_optimal:"स्थितियां {waste} के लिए आदर्श सीमा में हैं। मजबूत, स्थिर गैस उत्पादन की उम्मीद करें। सर्वोत्तम परिणामों के लिए वर्तमान तापमान और pH बनाए रखें।",
    rec_moderate:"गैस उत्पादन जारी रहेगा लेकिन कम क्षमता के साथ। बेहतर उत्पादन के लिए {adjustments} समायोजित करने पर विचार करें।",
    rec_poor:"वर्तमान pH और/या तापमान सुरक्षित सीमा से बहुत बाहर हैं। सूक्ष्मजीव गतिविधि बंद हो सकती है, जिससे डाइजेस्टर खराब हो सकता है और असुरक्षित गैस जमा हो सकती है। जारी रखने से पहले pH को 6.5–8.0 और तापमान को 30–40°C की ओर समायोजित करें।",
    adj_ph:"pH को 6.5–8.0 की ओर", adj_temp:"तापमान को 30–40°C की ओर", adj_and:" और ",
    alert_fill:"कृपया सभी फ़ील्ड में मान्य संख्याएं भरें।"
  },
  te: {
    nav_home:"హోమ్", nav_calc:"కాలిక్యులేటర్", nav_wastes:"వేస్ట్ లైబ్రరీ", nav_history:"చరిత్ర", nav_about:"ప్రాసెస్",
    home_eyebrow:"వ్యర్థాల నుండి శక్తి",
    home_title:'సేంద్రీయ <span>వ్యర్థాలను</span> శుభ్రమైన <span>బయోగ్యాస్</span> శక్తిగా మార్చండి',
    home_desc:"బరువు, సాంద్రత, ఉష్ణోగ్రత మరియు pH ఆధారంగా ఏదైనా సేంద్రీయ వ్యర్థం నుండి బయోగ్యాస్ ఉత్పత్తిని అంచనా వేయండి. గ్యాస్ ఉత్పత్తి, భద్రతా స్థితి మరియు ప్రాక్టికల్ సూచనలపై తక్షణ ఫలితాలను పొందండి — విద్యార్థులు, పరిశోధకులు మరియు ప్లాంట్ ఆపరేటర్ల కోసం రూపొందించబడింది.",
    home_btn_start:"గణన ప్రారంభించండి →", home_btn_browse:"వ్యర్థాల రకాలను చూడండి",
    home_tank_label:"డైజెస్టర్ టాంక్",
    home_stat1:"డేటాబేస్‌లో వ్యర్థాల రకాలు", home_stat2:"సరైన జీర్ణక్రియ పరిధి", home_stat3:"మెథనోజెన్‌ల కోసం అనువైన pH", home_stat4:"సాధారణ బయోగ్యాస్ ఉత్పత్తి",
    calc_title:"బయోగ్యాస్ ఉత్పత్తి కాలిక్యులేటర్",
    calc_desc:"మీ వ్యర్థం రకాన్ని ఎంచుకుని కింద విలువలను నమోదు చేయండి. కాలిక్యులేటర్ గ్యాస్ ఉత్పత్తిని అంచనా వేస్తుంది మరియు జీర్ణక్రియ పరిస్థితులు సురక్షితమా అని తనిఖీ చేస్తుంది.",
    calc_lbl_wastetype:"వ్యర్థం రకం", calc_hint_wastetype:"డైజెస్టర్‌లో వేసే సేంద్రీయ వ్యర్థం రకాన్ని ఎంచుకోండి.",
    calc_lbl_weight:"వ్యర్థం బరువు (కిలోలు)", calc_lbl_density:"సాంద్రత (kg/m³)", calc_lbl_temp:"ఉష్ణోగ్రత (°C)",
    calc_lbl_ph:"pH విలువ", calc_hint_ph:"బయోగ్యాస్ ఉత్పత్తికి అనువైన పరిధి: 6.5 – 8.0",
    calc_btn:"బయోగ్యాస్ ఉత్పత్తిని గణించండి", calc_results_title:"ఫలితాలు", calc_gauge_unit:"m³ బయోగ్యాస్",
    calc_row_methane:"మీథేన్ శాతం (సుమారు)", calc_row_energy:"శక్తి సమానత్వం", calc_row_status:"జీర్ణక్రియ స్థితి",
    calc_lbl_note:"గమనిక / సూచన", calc_note_default:"ఫలితాలను చూడటానికి విలువలను నమోదు చేసి కాలిక్యులేట్‌పై క్లిక్ చేయండి.",
    waste_cow:"ఆవు పేడ", waste_poultry:"పౌల్ట్రీ లిట్టర్", waste_food:"ఆహార / వంటగది వ్యర్థం",
    waste_vegetable:"కూరగాయలు & పండ్ల వ్యర్థం", waste_pig:"పంది ఎరువు", waste_sewage:"మురుగు బురద",
    waste_agri:"వ్యవసాయ పంట అవశేషాలు", waste_paper:"పేపర్ / కార్డ్‌బోర్డ్ వ్యర్థం", waste_market:"మునిసిపల్ / మార్కెట్ వ్యర్థం",
    wastes_title:"వ్యర్థాల రకాల లైబ్రరీ",
    wastes_desc:"బయోగ్యాస్ ఉత్పత్తిలో ఉపయోగించే సాధారణ సేంద్రీయ వ్యర్థాల సూచన డేటా — సాంద్రత, అనువైన ఉష్ణోగ్రత మరియు pH పరిధులు, మరియు అంచనా గ్యాస్ ఉత్పత్తి.",
    waste_card_density:"సాంద్రత", waste_card_temp:"అనువైన ఉష్ణోగ్రత", waste_card_ph:"అనువైన pH", waste_card_yield:"సాధారణ ఉత్పత్తి", waste_card_methane:"మీథేన్ %",
    history_title:"గణన చరిత్ర", history_desc:"ఈ సెషన్ నుండి మీ మునుపటి బయోగ్యాస్ గణనలు, ఆటోమేటిక్‌గా సేవ్ చేయబడ్డాయి.",
    history_clear:"చరిత్రను క్లియర్ చేయండి", history_empty:"ఇంకా గణనలు లేవు. కాలిక్యులేటర్ పేజీకి వెళ్లి మీ మొదటి బయోగ్యాస్ అంచనాను నడపండి.",
    about_title:"బయోగ్యాస్ ఉత్పత్తి ఎలా పనిచేస్తుంది",
    about_desc:"వాయురహిత జీర్ణక్రియ నాలుగు ముఖ్య దశల ద్వారా సేంద్రీయ వ్యర్థాన్ని బయోగ్యాస్ (ముఖ్యంగా మీథేన్ మరియు CO₂)గా మారుస్తుంది.",
    stage1_num:"దశ 01", stage1_title:"హైడ్రోలిసిస్", stage1_desc:"సంక్లిష్ట సేంద్రీయ పాలిమర్‌లు (కార్బోహైడ్రేట్లు, ప్రోటీన్లు, కొవ్వులు) ఎంజైమ్‌ల ద్వారా సాధారణ చక్కెరలు, అమైనో ఆమ్లాలు మరియు ఫ్యాటీ ఆమ్లాలుగా విడిపోతాయి.",
    stage2_num:"దశ 02", stage2_title:"ఆసిడోజెనిసిస్", stage2_desc:"ఆమ్లాన్ని ఉత్పత్తి చేసే బ్యాక్టీరియా ఈ సాధారణ అణువులను వాష్యశీల ఫ్యాటీ ఆమ్లాలు, ఆల్కహాల్‌లు, హైడ్రోజన్ మరియు కార్బన్ డయాక్సైడ్‌గా మారుస్తుంది.",
    stage3_num:"దశ 03", stage3_title:"ఎసిటోజెనిసిస్", stage3_desc:"వాష్యశీల ఫ్యాటీ ఆమ్లాలు మరింతగా ఎసిటిక్ ఆమ్లం, హైడ్రోజన్ మరియు కార్బన్ డయాక్సైడ్‌గా మార్చబడి, మీథేన్ ఏర్పడటానికి పదార్థాన్ని సిద్ధం చేస్తాయి.",
    stage4_num:"దశ 04", stage4_title:"మెథనోజెనిసిస్", stage4_desc:"మెథనోజెనిక్ బ్యాక్టీరియా ఎసిటిక్ ఆమ్లం, హైడ్రోజన్ మరియు CO₂లను మీథేన్ (CH₄)గా మారుస్తుంది — ఇది బయోగ్యాస్‌లో ముఖ్యమైన మండే భాగం.",
    safety_title:"భద్రతా మార్గదర్శకాలు", safety_desc:"బయోగ్యాస్ సిస్టమ్‌లతో పనిచేసేటప్పుడు తీసుకోవలసిన సాధారణ జాగ్రత్తలు.",
    safety1_title:"వెంటిలేషన్", safety1_desc:"బయోగ్యాస్‌లో మీథేన్ మరియు హైడ్రోజన్ సల్ఫైడ్ (H₂S) ఆనవాళ్లు ఉంటాయి, ఇది విషపూరితమైనది మరియు మండేది. డైజెస్టర్లు మరియు నిల్వ చుట్టూ సరైన వెంటిలేషన్ ఉండేలా చూసుకోండి.",
    safety2_title:"ఉష్ణోగ్రత నియంత్రణ", safety2_desc:"20–60°C పరిధికి బయట పనిచేయడం సూక్ష్మజీవుల కార్యకలాపాలను తగ్గిస్తుంది లేదా ఆపివేస్తుంది, దీని వలన గ్యాస్ ఉత్పత్తి తగ్గి అస్థిరమైన, తక్కువ-నాణ్యత గ్యాస్ ఏర్పడవచ్చు.",
    safety3_title:"pH పర్యవేక్షణ", safety3_desc:"pH 6 కంటే తక్కువ లేదా 8.5 కంటే ఎక్కువ ఉంటే మెథనోజెన్‌లు అడ్డుకోబడతాయి, డైజెస్టర్ చెడిపోవచ్చు మరియు ఉపయోగపడే మీథేన్ కు బదులుగా అధిక CO₂ ఏర్పడవచ్చు.",
    footer_text:"బయోగ్యాస్ ల్యాబ్ — విద్యా వ్యర్థాల-నుండి-శక్తి కాలిక్యులేటర్ · అకడమిక్ ప్రెజెంటేషన్ కోసం రూపొందించబడింది",
    chat_title:"🤖 బయోగ్యాస్ హెల్ప్ డెస్క్", chat_welcome:"నమస్తే! నేను మీ బయోగ్యాస్ సహాయకుడిని. వ్యర్థాల రకాలు, అనువైన pH/ఉష్ణోగ్రత, గ్యాస్ భద్రత లేదా కాలిక్యులేటర్ గురించి నన్ను అడగండి.",
    chip_ph:"అనువైన pH?", chip_safe:"బయోగ్యాస్ సురక్షితమా?", chip_temp:"ఉత్తమ ఉష్ణోగ్రత?", chip_bestwaste:"ఉత్తమ వ్యర్థం రకం?",
    chat_placeholder:"మీ ప్రశ్నను టైప్ చేయండి...", chat_send:"పంపండి",
    reply_ph:"బయోగ్యాస్ (వాయురహిత జీర్ణక్రియ) కోసం అనువైన pH 6.5 నుండి 8.0 మధ్య ఉంటుంది. 5.5 కంటే తక్కువ లేదా 9 కంటే ఎక్కువ ఉంటే, మీథేన్-ఉత్పత్తి చేసే బ్యాక్టీరియా అడ్డుకోబడి డైజెస్టర్ 'చెడిపోవచ్చు'.",
    reply_temp:"చాలా డైజెస్టర్లు 30–40°C (మెసోఫిలిక్) వద్ద ఉత్తమంగా పనిచేస్తాయి, లేదా వేగవంతమైన జీర్ణక్రియ కోసం 50–55°C (థర్మోఫిలిక్). 15°C కంటే తక్కువ ఉష్ణోగ్రత వద్ద గ్యాస్ ఉత్పత్తి దాదాపు నిలిచిపోతుంది.",
    reply_safe:"బయోగ్యాస్ (ముఖ్యంగా మీథేన్ + CO₂) తక్కువ పరిమాణంలో విషపూరితం కాదు, కానీ ఇది మండేది మరియు మూసివేసిన ప్రదేశాలలో ఆక్సిజన్‌ను తొలగించవచ్చు. H₂S ఆనవాళ్లు విషపూరితం కావచ్చు. ఎల్లప్పుడూ సరైన వెంటిలేషన్ ఉండేలా చూసుకోండి మరియు నిల్వ దగ్గర బహిరంగ మంటలను నివారించండి.",
    reply_bestwaste:"అధిక సేంద్రీయ కంటెంట్ కారణంగా ఆహార/వంటగది వ్యర్థం మరియు పంది ఎరువు కిలోకు అత్యధిక బయోగ్యాస్ ఉత్పత్తిని ఇస్తాయి, కానీ ఆవు పేడ అత్యంత స్థిరమైన మరియు సాధారణంగా ఉపయోగించే ఫీడ్‌స్టాక్.",
    reply_density:"సాంద్రత డైజెస్టర్‌లో వ్యర్థం ఎంత దట్టంగా ఉందో తెలియజేస్తుంది. చాలా ఎరువులు 900–1050 kg/m³ పరిధిలో ఉంటాయి, పేపర్ లేదా పంట అవశేషాల వంటి పొడి అవశేషాలు చాలా తేలికగా (80–200 kg/m³) ఉంటాయి.",
    reply_methane:"బయోగ్యాస్‌లో సాధారణంగా 50–70% మీథేన్ (CH₄) ఉంటుంది, మిగిలినది ఎక్కువగా CO₂ మరియు H₂S, తేమ వంటి ఆనవాళ్ల వాయువులు.",
    reply_howcalc:"కాలిక్యులేటర్ పేజీకి వెళ్లి, మీ వ్యర్థం రకాన్ని ఎంచుకుని, బరువు, సాంద్రత, ఉష్ణోగ్రత మరియు pH నమోదు చేయండి — ఇది తక్షణమే గ్యాస్ ఉత్పత్తి, మీథేన్ %, శక్తి సమానత్వాన్ని అంచనా వేస్తుంది మరియు పరిస్థితులు సురక్షితమా అని తెలియజేస్తుంది.",
    reply_history:"మీరు చేసిన ప్రతి గణన ఈ సెషన్ కోసం హిస్టరీ పేజీలో సేవ్ చేయబడుతుంది, తద్వారా మీరు ఫలితాలను పోల్చవచ్చు.",
    reply_default:"నేను వ్యర్థాల రకాలు, అనువైన pH/ఉష్ణోగ్రత పరిధులు, గ్యాస్ భద్రత మరియు కాలిక్యులేటర్‌ను ఎలా ఉపయోగించాలో సహాయం చేయగలను. 'pH', 'ఉష్ణోగ్రత', 'భద్రత' లేదా 'ఉత్తమ వ్యర్థం రకం' గురించి అడగండి.",
    status_optimal:"అత్యుత్తమం — అధిక ఉత్పత్తి", status_moderate:"మధ్యస్థం — తగ్గిన ఉత్పత్తి", status_poor:"తక్కువ — జీర్ణక్రియ అడ్డుకోబడే అవకాశం",
    badge_safe:"✅ సురక్షిత & సమర్థవంతమైన పరిస్థితులు", badge_caution:"⚠️ జాగ్రత్త — అననుకూల పరిస్థితులు", badge_warn:"❌ హానికరమైన పరిస్థితులు — జీర్ణక్రియ ప్రమాదంలో",
    rec_optimal:"పరిస్థితులు {waste} కోసం అనువైన పరిధిలో ఉన్నాయి. బలమైన, స్థిరమైన గ్యాస్ ఉత్పత్తిని ఆశించండి. ఉత్తమ ఫలితాల కోసం ప్రస్తుత ఉష్ణోగ్రత మరియు pHను నిర్వహించండి.",
    rec_moderate:"గ్యాస్ ఉత్పత్తి కొనసాగుతుంది కానీ తగ్గిన సామర్థ్యంతో. మెరుగైన ఉత్పత్తి కోసం {adjustments} సర్దుబాటు చేయడాన్ని పరిగణించండి.",
    rec_poor:"ప్రస్తుత pH మరియు/లేదా ఉష్ణోగ్రత సురక్షిత పరిమితులకు చాలా దూరంగా ఉన్నాయి. సూక్ష్మజీవుల కార్యకలాపాలు ఆగిపోవచ్చు, దీని వలన డైజెస్టర్ చెడిపోవడం మరియు అసురక్షిత గ్యాస్ చేరడం జరగవచ్చు. కొనసాగించే ముందు pHను 6.5–8.0 వైపు మరియు ఉష్ణోగ్రతను 30–40°C వైపు సర్దుబాటు చేయండి.",
    adj_ph:"pHను 6.5–8.0 వైపు", adj_temp:"ఉష్ణోగ్రతను 30–40°C వైపు", adj_and:" మరియు ",
    alert_fill:"దయచేసి అన్ని ఫీల్డ్‌లలో సరైన సంఖ్యలను నమోదు చేయండి."
  }
};

let currentLang = 'en';

function setLanguage(lang){
  currentLang = lang;
  document.getElementById('langSelect').value = lang;
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    const key = el.getAttribute('data-i18n-html');
    if(t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.getAttribute('data-i18n-placeholder');
    if(t[key] !== undefined) el.placeholder = t[key];
  });

  // Refresh dynamic sections
  renderWasteLibrary();
  renderHistory();
}

/* ---------- NAVIGATION ---------- */
function goPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelector(`.nav-btn[data-page="${id}"]`).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  if(id==='wastes') renderWasteLibrary();
  if(id==='history') renderHistory();
}
document.querySelectorAll('.nav-btn').forEach(b=>b.addEventListener('click',()=>goPage(b.dataset.page)));

/* ---------- BACKGROUND BUBBLES ---------- */
const bg = document.getElementById('bubbleBg');
for(let i=0;i<22;i++){
  const b=document.createElement('div');
  b.className='bubble';
  const size=Math.random()*60+20;
  b.style.width=size+'px'; b.style.height=size+'px';
  b.style.left=Math.random()*100+'%';
  b.style.animationDuration=(Math.random()*12+10)+'s';
  b.style.animationDelay=(Math.random()*10)+'s';
  bg.appendChild(b);
}
/* tank bubbles */
const tankB = document.getElementById('bubbleContainer');
for(let i=0;i<8;i++){
  const b=document.createElement('div');
  b.className='b';
  const size=Math.random()*14+6;
  b.style.width=size+'px'; b.style.height=size+'px';
  b.style.left=(20+Math.random()*60)+'%';
  b.style.animationDuration=(Math.random()*4+3)+'s';
  b.style.animationDelay=(Math.random()*4)+'s';
  tankB.appendChild(b);
}

/* ---------- WASTE DATABASE ---------- */
const wasteDB = {
  cow:     {name:"Cow Dung", icon:"🐄", density:[950,1050], temp:[30,40], ph:[6.5,7.8], yield:0.25, methane:60},
  poultry: {name:"Poultry Litter", icon:"🐔", density:[600,750], temp:[30,40], ph:[6.5,7.5], yield:0.35, methane:60},
  food:    {name:"Food / Kitchen Waste", icon:"🍲", density:[600,900], temp:[35,40], ph:[5.5,7.0], yield:0.45, methane:65},
  vegetable:{name:"Vegetable & Fruit Waste", icon:"🥬", density:[400,650], temp:[30,38], ph:[5.0,6.5], yield:0.40, methane:55},
  pig:     {name:"Pig Manure", icon:"🐖", density:[950,1000], temp:[30,40], ph:[6.8,7.8], yield:0.34, methane:65},
  sewage:  {name:"Sewage Sludge", icon:"💧", density:[1000,1100], temp:[30,38], ph:[6.5,7.5], yield:0.20, methane:65},
  agri:    {name:"Agricultural Crop Residue", icon:"🌾", density:[80,200], temp:[30,55], ph:[6.0,7.5], yield:0.30, methane:50},
  paper:   {name:"Paper / Cardboard Waste", icon:"📦", density:[80,150], temp:[30,45], ph:[6.0,7.5], yield:0.15, methane:50},
  market:  {name:"Municipal / Market Waste", icon:"🗑️", density:[400,700], temp:[30,40], ph:[5.5,7.5], yield:0.30, methane:55}
};

function renderWasteLibrary(){
  const grid=document.getElementById('wasteGrid');
  const t = translations[currentLang];
  grid.innerHTML='';
  Object.entries(wasteDB).forEach(([key,w])=>{
    const card=document.createElement('div');
    card.className='waste-card';
    card.onclick=()=>{ goPage('calculator'); document.getElementById('wasteType').value=key; };
    card.innerHTML=`
      <div class="icon">${w.icon}</div>
      <h3>${t['waste_'+key]}</h3>
      <div class="meta">
        <div>${t.waste_card_density}: <b>${w.density[0]}–${w.density[1]} kg/m³</b></div>
        <div>${t.waste_card_temp}: <b>${w.temp[0]}–${w.temp[1]} °C</b></div>
        <div>${t.waste_card_ph}: <b>${w.ph[0]}–${w.ph[1]}</b></div>
        <div>${t.waste_card_yield}: <b>${w.yield} m³/kg</b></div>
        <div>${t.waste_card_methane}: <b>~${w.methane}%</b></div>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ---------- CALCULATOR ---------- */
let history = [];

function calculateBiogas(){
  const t = translations[currentLang];
  const typeKey = document.getElementById('wasteType').value;
  const weight = parseFloat(document.getElementById('weight').value);
  const density = parseFloat(document.getElementById('density').value);
  const temp = parseFloat(document.getElementById('temp').value);
  const ph = parseFloat(document.getElementById('ph').value);

  if(isNaN(weight) || weight<=0 || isNaN(density) || isNaN(temp) || isNaN(ph)){
    alert(t.alert_fill);
    return;
  }

  const w = wasteDB[typeKey];
  let baseYield = w.yield; // m3 of biogas per kg

  // Temperature efficiency factor
  let tempFactor;
  if(temp < 15) tempFactor = 0.2;
  else if(temp < 20) tempFactor = 0.5;
  else if(temp <= 40) tempFactor = 1.0;       // mesophilic optimum
  else if(temp <= 55) tempFactor = 0.9;       // thermophilic, still good
  else if(temp <= 65) tempFactor = 0.5;
  else tempFactor = 0.15;

  // pH efficiency factor
  let phFactor;
  if(ph < 5.5) phFactor = 0.2;
  else if(ph < 6.5) phFactor = 0.6;
  else if(ph <= 8.0) phFactor = 1.0;          // ideal
  else if(ph <= 9.0) phFactor = 0.5;
  else phFactor = 0.15;

  // Density sanity factor (very rough — far from typical density reduces efficiency)
  const [dLow,dHigh] = w.density;
  let densityFactor = 1.0;
  if(density < dLow*0.5 || density > dHigh*1.5) densityFactor = 0.85;

  const efficiency = tempFactor * phFactor * densityFactor;
  const gasOutput = weight * baseYield * efficiency;
  const methanePercent = Math.round(w.methane * (0.7 + 0.3*efficiency));
  const energyMJ = gasOutput * 22; // ~22 MJ per m3 biogas (avg)
  const energyKwh = (energyMJ/3.6).toFixed(1);

  // Determine status & safety
  let statusKey, badgeClass, badgeKey, recommendation;
  if(efficiency >= 0.8){
    statusKey = "status_optimal";
    badgeClass = "safe"; badgeKey = "badge_safe";
    recommendation = t.rec_optimal.replace('{waste}', t['waste_'+typeKey]);
  } else if(efficiency >= 0.45){
    statusKey = "status_moderate";
    badgeClass = "caution"; badgeKey = "badge_caution";
    let adjustments = [];
    if(ph<6.5||ph>8) adjustments.push(t.adj_ph);
    if(temp<30||temp>45) adjustments.push(t.adj_temp);
    recommendation = t.rec_moderate.replace('{adjustments}', adjustments.join(t.adj_and));
  } else {
    statusKey = "status_poor";
    badgeClass = "warn"; badgeKey = "badge_warn";
    recommendation = t.rec_poor;
  }

  // Update UI
  document.getElementById('gasVal').textContent = gasOutput.toFixed(2);
  document.getElementById('methaneVal').textContent = methanePercent + '% CH₄';
  document.getElementById('energyVal').textContent = energyKwh + ' kWh';
  document.getElementById('statusVal').textContent = t[statusKey];
  document.getElementById('recommendation').textContent = recommendation;

  const badge = document.getElementById('safetyBadge');
  badge.innerHTML = `<div class="badge ${badgeClass}">${t[badgeKey]}</div>`;

  // Animate gauge: circumference = 2*pi*95 ≈ 597
  const circumference = 597;
  let pct = Math.min(gasOutput / (weight*baseYield), 1);
  if(weight*baseYield === 0) pct = 0;
  const offset = circumference - (pct * circumference);
  const fg = document.getElementById('gaugeFg');
  fg.style.strokeDasharray = circumference;
  fg.style.strokeDashoffset = circumference; // reset
  setTimeout(()=>{ fg.style.strokeDashoffset = offset; }, 50);

  // Save to history (store keys + raw values, translate at render time)
  history.unshift({
    time: new Date().toLocaleString(),
    wasteKey: typeKey,
    weight, density, temp, ph,
    gas: gasOutput.toFixed(2),
    statusKey, badgeClass
  });
  if(history.length>20) history.pop();
  renderHistory();
}

/* ---------- HISTORY ---------- */
function renderHistory(){
  const list=document.getElementById('historyList');
  const t = translations[currentLang];
  if(history.length===0){
    list.innerHTML = `<div class="history-empty">${t.history_empty}</div>`;
    return;
  }
  list.innerHTML='';
  history.forEach(h=>{
    const badgeColor = h.badgeClass==='safe'? 'var(--good)' : h.badgeClass==='warn'? 'var(--warn)' : '#ffd166';
    const item=document.createElement('div');
    item.className='history-item';
    item.innerHTML=`
      <div>
        <div class="h-main">${t['waste_'+h.wasteKey]} — ${h.weight} kg</div>
        <div class="h-sub">${t.waste_card_density}: ${h.density} kg/m³ · ${t.calc_lbl_temp}: ${h.temp}°C · ${t.calc_lbl_ph}: ${h.ph} · ${h.time}</div>
      </div>
      <div style="text-align:right">
        <div style="font-weight:800; color:var(--blue-bright); font-size:18px;">${h.gas} m³</div>
        <div style="font-size:12px; color:${badgeColor}; font-weight:700;">${t[h.statusKey]}</div>
      </div>
    `;
    list.appendChild(item);
  });
}
function clearHistory(){
  history=[];
  renderHistory();
}

/* ---------- CHATBOT ---------- */
function toggleChat(){
  document.getElementById('chatWindow').classList.toggle('open');
}
function askBot(key){
  const t = translations[currentLang];
  const chipText = document.querySelector(`.chip[data-chip="${key}"]`).textContent;
  sendChat(chipText, key);
}
function sendChat(presetText, presetKey){
  const input=document.getElementById('chatInput');
  const text = presetText !== undefined ? presetText : input.value.trim();
  if(!text) return;
  const body=document.getElementById('chatBody');

  body.innerHTML += `<div class="msg user">${text}</div>`;
  if(presetText === undefined) input.value='';

  const reply = botReply(text.toLowerCase(), presetKey);
  setTimeout(()=>{
    body.innerHTML += `<div class="msg bot">${reply}</div>`;
    body.scrollTop = body.scrollHeight;
  }, 350);
  body.scrollTop = body.scrollHeight;
}
function botReply(q, presetKey){
  const t = translations[currentLang];
  if(presetKey){
    const map = { ph:t.reply_ph, safe:t.reply_safe, temp:t.reply_temp, bestwaste:t.reply_bestwaste };
    return map[presetKey] || t.reply_default;
  }
  if(q.includes('ph')) return t.reply_ph;
  if(q.includes('temperature') || q.includes('temp')) return t.reply_temp;
  if(q.includes('safe')) return t.reply_safe;
  if(q.includes('best') && q.includes('waste')) return t.reply_bestwaste;
  if(q.includes('density')) return t.reply_density;
  if(q.includes('methane')) return t.reply_methane;
  if(q.includes('how') && q.includes('calculat')) return t.reply_howcalc;
  if(q.includes('history')) return t.reply_history;
  return t.reply_default;
}
