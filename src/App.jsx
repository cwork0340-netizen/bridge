import { useState, useEffect } from "react";

function SceneVolcano({ size=64 }) {
  return <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <ellipse cx="40" cy="62" rx="30" ry="8" fill="#F5C4B3" opacity="0.4"/>
    <polygon points="40,16 16,64 64,64" fill="#F0997B" stroke="#D85A30" strokeWidth="2.5" strokeLinejoin="round"/>
    <polygon points="40,16 30,36 50,36" fill="#FAECE7"/>
    <ellipse cx="40" cy="15" rx="8" ry="6" fill="#E24B4A" stroke="#D85A30" strokeWidth="1.5"/>
    <path d="M36 8 Q38 2 40 7 Q42 1 45 6" stroke="#E24B4A" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
  </svg>;
}
function SceneRain({ size=64 }) {
  return <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <ellipse cx="40" cy="26" rx="22" ry="14" fill="#B5D4F4" stroke="#378ADD" strokeWidth="2"/>
    <ellipse cx="24" cy="30" rx="10" ry="10" fill="#B5D4F4" stroke="#378ADD" strokeWidth="2"/>
    <ellipse cx="56" cy="32" rx="9" ry="9" fill="#B5D4F4" stroke="#378ADD" strokeWidth="2"/>
    <ellipse cx="40" cy="36" rx="24" ry="10" fill="#B5D4F4"/>
    <path d="M26 50 Q25 57 27 62" stroke="#378ADD" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M36 52 Q35 59 37 65" stroke="#378ADD" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M46 50 Q45 57 47 62" stroke="#378ADD" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M56 52 Q55 59 57 65" stroke="#378ADD" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>;
}
function SceneHide({ size=64 }) {
  return <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <rect x="14" y="28" width="52" height="38" rx="10" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="2"/>
    <rect x="14" y="26" width="52" height="18" rx="7" fill="#CECBF6" stroke="#7F77DD" strokeWidth="2"/>
    <ellipse cx="30" cy="50" rx="5.5" ry="6" fill="#fff" stroke="#7F77DD" strokeWidth="1.5"/>
    <ellipse cx="50" cy="50" rx="5.5" ry="6" fill="#fff" stroke="#7F77DD" strokeWidth="1.5"/>
    <ellipse cx="31" cy="51" rx="2.8" ry="3" fill="#534AB7"/>
    <ellipse cx="51" cy="51" rx="2.8" ry="3" fill="#534AB7"/>
    <path d="M34 60 Q40 58 46 60" stroke="#7F77DD" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
  </svg>;
}
function SceneFlat({ size=64 }) {
  return <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <ellipse cx="40" cy="50" rx="28" ry="22" fill="#D3D1C7" stroke="#888780" strokeWidth="2"/>
    <ellipse cx="40" cy="44" rx="24" ry="19" fill="#F1EFE8"/>
    <path d="M27 40 Q31 43 35 40" stroke="#888780" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
    <path d="M45 40 Q49 43 53 40" stroke="#888780" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
    <path d="M32 54 Q40 52 48 54" stroke="#888780" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
  </svg>;
}
function SceneWorry({ size=64 }) {
  return <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <ellipse cx="40" cy="50" rx="28" ry="22" fill="#FAC775" stroke="#EF9F27" strokeWidth="2"/>
    <ellipse cx="40" cy="44" rx="24" ry="19" fill="#FAEEDA"/>
    <ellipse cx="30" cy="40" rx="5" ry="5.5" fill="#fff" stroke="#EF9F27" strokeWidth="1.5"/>
    <ellipse cx="50" cy="40" rx="5" ry="5.5" fill="#fff" stroke="#EF9F27" strokeWidth="1.5"/>
    <ellipse cx="31" cy="41" rx="2.5" ry="2.8" fill="#BA7517"/>
    <ellipse cx="51" cy="41" rx="2.5" ry="2.8" fill="#BA7517"/>
    <path d="M30 34 Q32 30 34 34" stroke="#EF9F27" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    <path d="M46 34 Q48 30 50 34" stroke="#EF9F27" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    <path d="M32 55 Q36 52 44 55 Q47 52 48 55" stroke="#EF9F27" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>;
}
function SceneUnknown({ size=64 }) {
  return <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <ellipse cx="40" cy="50" rx="28" ry="22" fill="#F4C0D1" stroke="#D4537E" strokeWidth="2"/>
    <ellipse cx="40" cy="44" rx="24" ry="19" fill="#FBEAF0"/>
    <ellipse cx="30" cy="40" rx="5" ry="5.5" fill="#fff" stroke="#D4537E" strokeWidth="1.5"/>
    <ellipse cx="50" cy="40" rx="5" ry="5.5" fill="#fff" stroke="#D4537E" strokeWidth="1.5"/>
    <ellipse cx="31" cy="41" rx="2.5" ry="2.8" fill="#993556"/>
    <ellipse cx="51" cy="41" rx="2.5" ry="2.8" fill="#993556"/>
    <path d="M34 54 Q38 57 42 54 Q44 56 47 54" stroke="#D4537E" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <text x="36" y="28" fontSize="18" fill="#D4537E" fontWeight="500" fontFamily="sans-serif">?</text>
  </svg>;
}

const FEELINGS = [
  { id:"angry",   label:"生氣",   sub:"很煩、快爆炸了", Scene:SceneVolcano, bg:"#FAECE7", border:"#F0997B", color:"#D85A30", dot:"#E24B4A" },
  { id:"sad",     label:"難過",   sub:"想哭、心裡很悶", Scene:SceneRain,    bg:"#E6F1FB", border:"#85B7EB", color:"#185FA5", dot:"#378ADD" },
  { id:"scared",  label:"害怕",   sub:"想躲起來、不安", Scene:SceneHide,    bg:"#EEEDFE", border:"#AFA9EC", color:"#534AB7", dot:"#7F77DD" },
  { id:"tired",   label:"好累",   sub:"什麼都不想做",   Scene:SceneFlat,    bg:"#F1EFE8", border:"#B4B2A9", color:"#5F5E5A", dot:"#888780" },
  { id:"worried", label:"擔心",   sub:"一直在想一件事", Scene:SceneWorry,   bg:"#FAEEDA", border:"#FAC775", color:"#BA7517", dot:"#EF9F27" },
  { id:"lost",    label:"說不清", sub:"有點怪怪的",     Scene:SceneUnknown, bg:"#FBEAF0", border:"#ED93B1", color:"#993556", dot:"#D4537E" },
];
const FEELING_MAP = Object.fromEntries(FEELINGS.map(f => [f.id, f]));

const NEEDS = [
  { id:"hug",      label:"一個擁抱",         icon:"🤗" },
  { id:"quiet",    label:"安靜一下",         icon:"🤫" },
  { id:"listen",   label:"有人聽我說",       icon:"👂" },
  { id:"together", label:"一起做件事",       icon:"🤝" },
  { id:"unknown",  label:"我不知道我需要什麼", icon:"🤷" },
];
const NEED_MAP = Object.fromEntries(NEEDS.map(n => [n.id, n]));

const ADVICE = {
  "angry-hug":      { action:"先蹲下來，給孩子一個緊緊的擁抱，不用說話。等他身體放鬆了再聊。",                             questions:["「是什麼事讓你這麼生氣？」","「有沒有人做了什麼讓你覺得不公平？」"] },
  "angry-quiet":    { action:"帶孩子離開當下環境，找個安靜的地方坐下，一起做三次深呼吸。",                               questions:["「你現在好一點了嗎？」","「準備好的時候，可以告訴我發生什麼事嗎？」"] },
  "angry-listen":   { action:"放下手邊的事，眼神看著孩子，說：「我現在只聽你說。」",                                     questions:["「從頭告訴我，發生了什麼？」","「那個時候你心裡是什麼感覺？」"] },
  "angry-together": { action:"邀請孩子一起做一件小事（撕紙、捏黏土、丟球），讓身體先動起來釋放情緒。",                   questions:["「做完了，現在感覺怎麼樣？」","「想說說剛才是怎麼了嗎？」"] },
  "angry-unknown":  { action:"不要追問，靜靜坐在孩子旁邊，說：「我在這裡，不急。」",                                     questions:["「有沒有什麼事讓你覺得不舒服？」","「點頭告訴我，是在學校發生的嗎？」"] },
  "sad-hug":        { action:"輕輕走過去，蹲到孩子的高度，給一個溫柔的擁抱。讓他哭，不要說「不要哭了」。",               questions:["「是誰讓你難過了？」","「他說了什麼或做了什麼？」"] },
  "sad-quiet":      { action:"讓孩子找一個舒服的地方待著，你就靜靜陪在旁邊，不說話也沒關係。",                           questions:["「你想一個人靜一下，還是要我陪著你？」","「等你準備好，我想聽你說。」"] },
  "sad-listen":     { action:"把孩子帶到安靜的角落，面對面坐下，說：「我想聽你說說心裡的事。」",                         questions:["「發生了什麼讓你這麼難過？」","「你希望結果是怎樣的？」"] },
  "sad-together":   { action:"邀請孩子一起做一件輕鬆的事：喝杯熱可可、畫畫、或散個步。",                               questions:["「今天最難過的是哪一刻？」","「有沒有什麼我可以幫你的？」"] },
  "sad-unknown":    { action:"先給一個擁抱，說：「我看到你很難過，不用說話也沒關係，我陪著你。」",                       questions:["「你是不是有什麼事放在心裡很久了？」","「慢慢說，我不急。」"] },
  "scared-hug":     { action:"蹲下來抱住孩子，說：「我在這裡，你很安全。」讓孩子感受到你的體溫。",                       questions:["「是什麼讓你覺得害怕？」","「這個害怕是什麼時候開始的？」"] },
  "scared-quiet":   { action:"帶孩子去一個他覺得安全的地方，陪他待著，不要急著說話。",                                   questions:["「這裡你感覺比較安全嗎？」","「你願意告訴我是什麼讓你害怕嗎？」"] },
  "scared-listen":  { action:"坐在孩子旁邊，說：「你害怕是可以的，我想聽你說說是什麼事。」",                             questions:["「是有人做了什麼讓你害怕嗎？」","「這件事發生了多久了？」"] },
  "scared-together":{ action:"邀請孩子一起畫下讓他覺得安全的地方，或做一件讓他安心的事。",                               questions:["「什麼事或什麼人讓你覺得比較不害怕？」","「我們可以一起想想怎麼讓你更安心。」"] },
  "scared-unknown": { action:"緊緊握住孩子的手，說：「不管發生什麼，我都在。」不要追問，先給安全感。",                   questions:["「你現在還好嗎？」","「有沒有一件事你一直不敢說出來？」"] },
  "tired-hug":      { action:"輕輕抱住孩子，說：「你已經很努力了。」不要馬上問原因，讓他先感受被接納。",                 questions:["「今天發生了什麼讓你這麼累？」","「是身體累還是心裡累？」"] },
  "tired-quiet":    { action:"讓孩子躺下來，家長坐在旁邊陪著。等5～10分鐘後再輕聲問一句話。",                           questions:["「現在好一點了嗎？」","「有沒有什麼事一直壓在你心上？」"] },
  "tired-listen":   { action:"把孩子帶到舒服的地方，說：「你不用自己扛，說出來會輕鬆一點。」",                           questions:["「最近有沒有一件事讓你覺得很重？」","「你希望有人幫你做什麼？」"] },
  "tired-together": { action:"邀請孩子一起做超輕鬆的事：吃點心、聽音樂、或什麼都不做只是躺著。",                         questions:["「你最近有沒有覺得開心的時候？」","「什麼事情做了會讓你比較有力氣？」"] },
  "tired-unknown":  { action:"什麼都不說，就靜靜陪著孩子。有時候陪伴本身就是最好的支持。",                               questions:["「你想要我陪著你嗎？」","「等你有力氣了，我們再聊。」"] },
  "worried-hug":    { action:"先給一個擁抱，說：「這件事不用你一個人扛，我跟你一起。」",                                 questions:["「你現在最擔心的是什麼？」","「這個擔心有多久了？」"] },
  "worried-quiet":  { action:"找一張紙，請孩子把擔心的事寫下來或畫出來，再一起把紙折起來放著。",                         questions:["「你最擔心會發生什麼事？」","「我們可以一起想想有什麼辦法。」"] },
  "worried-listen": { action:"坐下來，說：「你說，我聽，不管是什麼我都不會笑你。」",                                     questions:["「這件事是什麼時候開始讓你擔心的？」","「有沒有人知道你在擔心這件事？」"] },
  "worried-together":{ action:"和孩子一起列出「最壞的情況」和「我們可以怎麼辦」，把擔心變成可以行動的事。",              questions:["「如果真的發生了，我們可以怎麼辦？」","「有沒有什麼事做了會讓你比較放心？」"] },
  "worried-unknown":{ action:"輕輕問：「你是不是有件事一直放在心裡？」然後等待，不要催。",                               questions:["「你有沒有在擔心某個人或某件事？」","「說出來一點點就好，從哪裡開始都可以。」"] },
  "lost-hug":       { action:"先給一個擁抱，什麼都不說。有時候孩子說不清楚，但身體知道需要什麼。",                       questions:["「你有沒有哪裡不舒服？」","「今天有沒有發生什麼事？」"] },
  "lost-quiet":     { action:"讓孩子安靜待著，你就陪在旁邊。不要問「你怎麼了」，讓情緒自然流動。",                       questions:["「你想一個人靜一下還是要我陪？」","「等你想說了，我都在。」"] },
  "lost-listen":    { action:"說：「你不用說清楚，想到什麼說什麼就好，我來幫你整理。」",                                 questions:["「你現在心裡有什麼感覺？」","「有沒有一件事讓你覺得怪怪的？」"] },
  "lost-together":  { action:"邀請孩子一起做一件簡單的事，不用說話，讓身體先動起來。",                                   questions:["「做完了感覺有沒有不一樣？」","「你有沒有想到是什麼讓你覺得怪怪的？」"] },
  "lost-unknown":   { action:"靜靜坐在孩子旁邊，說：「沒關係，不用說清楚。我就在這裡。」",                               questions:["「你現在還好嗎？」","「有沒有什麼事你一直不知道怎麼說？」"] },
};

const GREETINGS = ["今天你還好嗎？","有什麼想說的嗎？","今天過得怎麼樣？","你願意告訴我嗎？"];
const CHILD_COLORS = ["#1D9E75","#D85A30","#7F77DD","#BA7517"];
const CHILD_BG     = ["#E1F5EE","#FAECE7","#EEEDFE","#FAEEDA"];
const TOPICS = [
  "如果你可以擁有任何一種超能力，你會選什麼？",
  "你覺得我們家最溫暖的時刻是什麼時候？",
  "如果我們家有一隻神奇寵物，你希望牠是什麼？",
  "你覺得長大最期待的事情是什麼？",
  "如果可以去任何地方旅行，你最想去哪裡？",
  "你覺得什麼是真正的「好朋友」？",
  "今天有沒有一件小事讓你覺得開心或感謝？",
  "你有什麼夢想，長大後很想完成的？",
  "如果你是爸爸媽媽一天，你會做什麼？",
  "你覺得我有什麼地方讓你覺得很溫暖？",
  "你最近學到什麼有趣的事情？",
  "如果今晚可以做任何事，你想做什麼？",
];
const NAV = [["detective","🔍","情緒小偵探"],["tonight","✨","今晚聊什麼"],["records","📋","情緒日記"]];

function timeStr() { const n=new Date(); return `${String(n.getHours()).padStart(2,"0")}:${String(n.getMinutes()).padStart(2,"0")}`; }
function todayStr() { return new Date().toISOString().slice(0,10); }
function formatDate(s) { const d=new Date(s); return `${d.getMonth()+1}/${d.getDate()}`; }
function weekLabel(s) { return ["日","一","二","三","四","五","六"][new Date(s).getDay()]; }

export default function App() {
  const [screen, setScreen]       = useState("welcome");
  const [children, setChildren]   = useState([]);
  const [activeChild, setActiveChild] = useState(0);
  const [newName, setNewName]     = useState("");
  const [tab, setTab]             = useState("detective");
  const [step, setStep]           = useState(1);
  const [feeling, setFeeling]     = useState(null);
  const [need, setNeed]           = useState(null);
  const [noteText, setNoteText]   = useState("");
  const [noteSaved, setNoteSaved] = useState(false);
  const [records, setRecords]     = useState({});
  const [detailId, setDetailId]   = useState(null);
  const [topic, setTopic]         = useState(null);
  const [showTip, setShowTip]     = useState(false);
  const [topicNote, setTopicNote] = useState("");
  const [topicSaved, setTopicSaved] = useState(false);
  const [greeting] = useState(GREETINGS[Math.floor(Math.random()*GREETINGS.length)]);
  const [toast, setToast] = useState("");
  const [saving, setSaving] = useState(false);
  const [aiCard, setAiCard] = useState("");
  const [aiCardLoading, setAiCardLoading] = useState(false);
  const [weekReport, setWeekReport] = useState("");
  const [weekReportLoading, setWeekReportLoading] = useState(false);

  const generateAiCard = async (f, n) => {
    setAiCard(""); setAiCardLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "x-api-key":"",
          "anthropic-version":"2023-06-01",
          "anthropic-dangerous-direct-browser-access":"true"
        },
        body: JSON.stringify({
          model:"claude-sonnet-4-20250514",
          max_tokens:200,
          messages:[{ role:"user", content:`你是一位兒童心理諮詢師，請幫忙把孩子的情緒用溫暖、簡單的語言翻譯給家長看。孩子名字：${child.name}，感覺：${f.label}（${f.sub}），需要：${n.label}。請用2-3句話，以「${child.name}現在...」開頭，解釋這個情緒組合背後可能的意義，語氣溫暖、不說教。只輸出這2-3句話。` }]
        })
      });
      const data = await res.json();
      const txt = data.content?.find(b => b.type==="text")?.text || "";
      setAiCard(txt || "（無法取得回應）");
    } catch(e) { setAiCard("（AI 翻譯暫時無法使用）"); }
    setAiCardLoading(false);
  };

  const generateWeekReport = async () => {
    if (weekReportLoading) return;
    setWeekReport(""); setWeekReportLoading(true);
    const emoRecs = childRecs.filter(r => r.type==="emotion").slice(0, 14);
    if (emoRecs.length === 0) { setWeekReport("還沒有足夠的記錄，請先記錄幾天再來試試 🌱"); setWeekReportLoading(false); return; }
    const summary = emoRecs.map(r => {
      const f=FEELING_MAP[r.feelingId]; const n=NEED_MAP[r.needId];
      return `${r.date} ${r.time}：感覺「${f?.label}」，需要「${n?.label||"不確定"}」${r.note?`，備註：${r.note}`:""}`;
    }).join("\n");
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "x-api-key":"",
          "anthropic-version":"2023-06-01",
          "anthropic-dangerous-direct-browser-access":"true"
        },
        body: JSON.stringify({
          model:"claude-sonnet-4-20250514",
          max_tokens:300,
          messages:[{ role:"user", content:`你是兒童心理諮詢師，根據以下孩子「${child.name}」的情緒記錄，用繁體中文為家長生成溫暖的週報摘要。記錄：\n${summary}\n\n請寫出：1.最常出現的情緒模式 2.值得留意的觀察 3.一句給家長的鼓勵。總共不超過150字，用自然段落，不要條列式。` }]
        })
      });
      const data = await res.json();
      const txt = data.content?.find(b => b.type==="text")?.text || "";
      setWeekReport(txt || "（無法取得回應）");
    } catch(e) { setWeekReport("（AI 週報暫時無法使用）"); }
    setWeekReportLoading(false);
  };

  const showToast = (msg) => { setToast(msg); setTimeout(()=>setToast(""), 2500); };

  useEffect(() => {
    (async () => {
      try {
        const c = await window.storage.get("xinqiao-children");
        const r = await window.storage.get("xinqiao-records");
        if (c) { const ch=JSON.parse(c.value); setChildren(ch); if(ch.length>0) setScreen("main"); }
        if (r) setRecords(JSON.parse(r.value));
      } catch(_) {}
    })();
  }, []);

  const saveChildren = async (ch) => { setChildren(ch); try { await window.storage.set("xinqiao-children", JSON.stringify(ch)); } catch(_){} };
  const saveRecords  = async (r)  => { setRecords(r);   try { await window.storage.set("xinqiao-records",  JSON.stringify(r));  } catch(_){} };

  const addChild = () => {
    if (!newName.trim() || children.length >= 4) return;
    const ch = [...children, { name:newName.trim(), colorIdx:children.length }];
    saveChildren(ch); setNewName(""); setScreen("main");
  };

  const resetDetective = () => { setStep(1); setFeeling(null); setNeed(null); setNoteText(""); setNoteSaved(false); setAiCard(""); };
  const switchTab = (key) => { setTab(key); resetDetective(); setTopic(null); setDetailId(null); setShowTip(false); setTopicNote(""); setTopicSaved(false); };

  const child      = children[activeChild] || null;
  const childColor = child ? CHILD_COLORS[child.colorIdx] : "#1D9E75";
  const childRecs  = child ? (records[child.name] || []) : [];

  const addRecord = async (entry) => {
    const key = child.name;
    const updated = { ...records, [key]: [entry, ...(records[key]||[])] };
    await saveRecords(updated);
  };

  const handleSaveEmotion = async () => {
    if (saving || noteSaved) return;
    setSaving(true);
    await addRecord({ id:Date.now(), type:"emotion", date:todayStr(), time:timeStr(), feelingId:feeling.id, needId:need.id, note:noteText });
    setNoteSaved(true); showToast("🌱 記錄已儲存！"); setSaving(false);
  };

  const handleSaveTopic = async () => {
    if (saving || topicSaved) return;
    setSaving(true);
    await addRecord({ id:Date.now(), type:"topic", date:todayStr(), time:timeStr(), topic, note:topicNote });
    setTopicSaved(true); showToast("💬 對話已記錄！"); setSaving(false);
  };

  // ── WELCOME ──────────────────────────────────────────────
  if (screen === "welcome") return (
    <div style={{ fontFamily:"var(--font-sans)", maxWidth:430, margin:"0 auto", minHeight:520, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"40px 28px", textAlign:"center" }}>
      <svg width="64" height="64" viewBox="0 0 52 52" fill="none" style={{ marginBottom:14 }}>
        <ellipse cx="26" cy="30" rx="18" ry="16" fill="#C0DD97" stroke="#639922" strokeWidth="2"/>
        <ellipse cx="18" cy="20" rx="10" ry="10" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="2"/>
        <ellipse cx="34" cy="18" rx="8" ry="8" fill="#FBEAF0" stroke="#D4537E" strokeWidth="2"/>
      </svg>
      <div style={{ fontSize:30, fontWeight:500, color:"var(--color-text-primary)", marginBottom:4 }}>心橋</div>
      <div style={{ fontSize:13, color:"var(--color-text-secondary)", marginBottom:32, lineHeight:1.7 }}>連結你與孩子之間，那座永不斷的橋</div>
      <div style={{ fontSize:22, fontWeight:500, color:"#3B6D11", marginBottom:8 }}>{greeting}</div>
      <div style={{ fontSize:14, color:"var(--color-text-secondary)", marginBottom:36, lineHeight:1.7 }}>先來建立孩子的檔案，就可以開始囉 🌱</div>
      <button onClick={()=>setScreen("setup")} style={{ background:"#3B6D11", border:"none", borderRadius:20, padding:"15px 52px", fontSize:16, fontWeight:500, color:"#fff", cursor:"pointer" }}>開始</button>
    </div>
  );

  // ── SETUP ────────────────────────────────────────────────
  if (screen === "setup") return (
    <div style={{ fontFamily:"var(--font-sans)", maxWidth:430, margin:"0 auto", padding:"36px 24px" }}>
      <div style={{ fontSize:20, fontWeight:500, color:"var(--color-text-primary)", marginBottom:4 }}>建立孩子檔案</div>
      <div style={{ fontSize:14, color:"var(--color-text-secondary)", marginBottom:24, lineHeight:1.7 }}>最多 4 個孩子，之後也可以新增。</div>
      {children.map((c,i) => (
        <div key={i} style={{ background:CHILD_BG[c.colorIdx], border:`1.5px solid ${CHILD_COLORS[c.colorIdx]}44`, borderRadius:14, padding:"12px 16px", marginBottom:10, display:"flex", alignItems:"center", gap:12 }}>
          <div style={{ width:34, height:34, borderRadius:"50%", background:CHILD_COLORS[c.colorIdx], display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontWeight:500, fontSize:15 }}>{c.name[0]}</div>
          <span style={{ fontSize:15, fontWeight:500, color:CHILD_COLORS[c.colorIdx] }}>{c.name}</span>
        </div>
      ))}
      {children.length < 4 && (
        <div style={{ marginTop:14 }}>
          <div style={{ fontSize:13, color:"var(--color-text-secondary)", marginBottom:7 }}>孩子的名字或暱稱</div>
          <div style={{ display:"flex", gap:10 }}>
            <input value={newName} onChange={e=>setNewName(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addChild()} placeholder="例如：小明、阿寶" style={{ flex:1, borderRadius:12, border:"1.5px solid var(--color-border-secondary)", padding:"11px 14px", fontSize:15, color:"var(--color-text-primary)", background:"var(--color-background-secondary)" }}/>
            <button onClick={addChild} style={{ background:"#3B6D11", border:"none", borderRadius:12, padding:"11px 18px", fontSize:15, fontWeight:500, color:"#fff", cursor:"pointer" }}>新增</button>
          </div>
        </div>
      )}
      {children.length > 0 && (
        <button onClick={()=>setScreen("main")} style={{ width:"100%", marginTop:22, background:"#EAF3DE", border:"1.5px solid #97C459", borderRadius:16, padding:"14px 0", fontSize:15, fontWeight:500, color:"#3B6D11", cursor:"pointer" }}>開始使用 →</button>
      )}
    </div>
  );

  // ── MAIN ─────────────────────────────────────────────────
  const renderDetective = () => {
    if (step === 1) return (
      <div>
        <div style={{ background:"#EAF3DE", borderRadius:14, padding:"10px 16px", marginBottom:16, border:"1.5px solid #97C459" }}>
          <div style={{ fontSize:12, color:"#3B6D11", fontWeight:500, marginBottom:1 }}>給 {child.name}</div>
          <div style={{ fontSize:15, fontWeight:500, color:"#27500A" }}>我現在感覺…</div>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:11 }}>
          {FEELINGS.map(f => (
            <button key={f.id} onClick={()=>{ setFeeling(f); setStep(2); }} style={{ background:f.bg, border:`2px solid ${f.border}`, borderRadius:18, padding:"14px 16px", cursor:"pointer", display:"flex", alignItems:"center", gap:14, textAlign:"left" }}>
              <f.Scene size={58}/><div style={{ flex:1 }}><div style={{ fontSize:16, fontWeight:500, color:f.color }}>{f.label}</div><div style={{ fontSize:12, color:f.color, opacity:0.75, marginTop:2 }}>{f.sub}</div></div>
              <span style={{ fontSize:18, opacity:0.3, color:f.color }}>›</span>
            </button>
          ))}
        </div>
      </div>
    );

    if (step === 2 && feeling) return (
      <div>
        <button onClick={()=>setStep(1)} style={{ background:"none", border:"none", cursor:"pointer", color:"var(--color-text-secondary)", fontSize:13, marginBottom:14, padding:0 }}>← 上一步</button>
        <div style={{ background:feeling.bg, border:`2px solid ${feeling.border}`, borderRadius:14, padding:"10px 16px", marginBottom:18, display:"flex", alignItems:"center", gap:10 }}>
          <feeling.Scene size={38}/><span style={{ fontSize:15, fontWeight:500, color:feeling.color }}>我感覺「{feeling.label}」</span>
        </div>
        <div style={{ background:"#EAF3DE", borderRadius:14, padding:"10px 16px", marginBottom:14, border:"1.5px solid #97C459" }}>
          <div style={{ fontSize:15, fontWeight:500, color:"#27500A" }}>我現在需要…</div>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:11 }}>
          {NEEDS.map(n => (
            <button key={n.id} onClick={()=>{ setNeed(n); setStep(3); generateAiCard(feeling, n); }} style={{ background:"var(--color-background-primary)", border:"1.5px solid var(--color-border-secondary)", borderRadius:16, padding:"14px 18px", cursor:"pointer", display:"flex", alignItems:"center", gap:14, textAlign:"left" }}>
              <span style={{ fontSize:26 }}>{n.icon}</span>
              <span style={{ fontSize:15, color:"var(--color-text-primary)", flex:1 }}>{n.label}</span>
              <span style={{ fontSize:18, opacity:0.25 }}>›</span>
            </button>
          ))}
        </div>
      </div>
    );

    if (step === 3 && feeling && need) {
      const adv = ADVICE[`${feeling.id}-${need.id}`] || ADVICE[`${feeling.id}-unknown`];
      return (
        <div>
          <button onClick={resetDetective} style={{ background:"none", border:"none", cursor:"pointer", color:"var(--color-text-secondary)", fontSize:13, marginBottom:14, padding:0 }}>← 重新選擇</button>
          {/* 情緒卡 */}
          <div style={{ background:"#FFFDF0", border:"2px solid #FAC775", borderRadius:20, padding:"20px 18px", marginBottom:14, boxShadow:"2px 3px 0px #FAC77566" }}>
            <div style={{ fontSize:12, color:"#854F0B", fontWeight:500, marginBottom:12 }}>💌 {child.name} 的心情便條</div>
            <div style={{ display:"flex", gap:10, marginBottom: aiCard || aiCardLoading ? 12 : 0 }}>
              <div style={{ flex:1, background:"#FFF8DC", borderRadius:12, padding:"10px 12px", display:"flex", alignItems:"center", gap:10 }}>
                <feeling.Scene size={36}/>
                <div><div style={{ fontSize:11, color:"#BA7517" }}>我感覺</div><div style={{ fontSize:16, fontWeight:500, color:feeling.color }}>{feeling.label}</div></div>
              </div>
              <div style={{ flex:1, background:"#FFF8DC", borderRadius:12, padding:"10px 12px", display:"flex", alignItems:"center", gap:10 }}>
                <span style={{ fontSize:24 }}>{need.icon}</span>
                <div><div style={{ fontSize:11, color:"#BA7517" }}>我需要</div><div style={{ fontSize:13, fontWeight:500, color:"#633806" }}>{need.label}</div></div>
              </div>
            </div>
            {aiCardLoading && (
              <div style={{ fontSize:13, color:"#BA7517", fontStyle:"italic", lineHeight:1.7 }}>✨ AI 正在翻譯 {child.name} 的心情…</div>
            )}
            {aiCard && !aiCardLoading && (
              <div style={{ fontSize:14, color:"#633806", lineHeight:1.8, borderTop:"1px dashed #FAC775", paddingTop:10, marginTop:2 }}>{aiCard}</div>
            )}
          </div>
          {/* 行動建議 */}
          <div style={{ background:"#FFF8E7", border:"2px solid #FAC775", borderRadius:18, padding:"14px 18px", marginBottom:12 }}>
            <div style={{ fontSize:11, color:"#854F0B", fontWeight:500, letterSpacing:0.5, marginBottom:7 }}>👋 先做這件事</div>
            <p style={{ fontSize:14, color:"#633806", lineHeight:1.8, margin:0 }}>{adv.action}</p>
          </div>
          {/* 對話建議 */}
          <div style={{ background:"var(--color-background-primary)", border:"0.5px solid var(--color-border-tertiary)", borderRadius:18, padding:"14px 18px", marginBottom:14 }}>
            <div style={{ fontSize:11, color:"#0F6E56", fontWeight:500, background:"#E1F5EE", borderRadius:10, padding:"3px 10px", display:"inline-block", marginBottom:11, letterSpacing:0.5 }}>準備好後，試試這些對話</div>
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {adv.questions.map((q,i) => (
                <div key={i} style={{ background:"var(--color-background-secondary)", borderRadius:10, padding:"10px 14px", borderLeft:"3px solid #1D9E75" }}>
                  <span style={{ fontSize:13, color:"var(--color-text-primary)", lineHeight:1.75 }}>{q}</span>
                </div>
              ))}
            </div>
          </div>
          {/* 備註 */}
          {!noteSaved ? (
            <div style={{ background:"var(--color-background-primary)", border:"0.5px solid var(--color-border-tertiary)", borderRadius:18, padding:"16px 18px" }}>
              <div style={{ fontSize:13, fontWeight:500, color:"var(--color-text-primary)", marginBottom:10 }}>📝 家長備註（選填）</div>
              <textarea value={noteText} onChange={e=>setNoteText(e.target.value)} placeholder="記錄一下今天發生了什麼，或對話後的觀察…" style={{ width:"100%", borderRadius:10, border:"1px solid var(--color-border-secondary)", padding:"10px 12px", fontSize:14, resize:"none", height:78, boxSizing:"border-box", color:"var(--color-text-primary)", background:"var(--color-background-secondary)" }}/>
              <button onClick={handleSaveEmotion} style={{ width:"100%", marginTop:11, background:"#EAF3DE", border:"1.5px solid #97C459", borderRadius:12, padding:"13px 0", fontSize:15, fontWeight:500, color:"#3B6D11", cursor:"pointer" }}>儲存這次記錄 🌱</button>
            </div>
          ) : (
            <div style={{ background:"#EAF3DE", border:"1.5px solid #97C459", borderRadius:18, padding:"18px", textAlign:"center" }}>
              <div style={{ fontSize:24, marginBottom:5 }}>🌱</div>
              <div style={{ fontSize:15, fontWeight:500, color:"#3B6D11", marginBottom:3 }}>記錄已儲存</div>
              <div style={{ fontSize:13, color:"#639922" }}>可以在「情緒日記」查看趨勢</div>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  const renderTonight = () => (
    <div>
      <p style={{ fontSize:16, fontWeight:500, color:"var(--color-text-primary)", marginBottom:4 }}>睡前小儀式</p>
      <p style={{ fontSize:14, color:"var(--color-text-secondary)", marginBottom:20, lineHeight:1.6 }}>每天一個話題，讓 {child.name} 知道你想了解他 💛</p>
      {!topic ? (
        <div style={{ textAlign:"center", paddingTop:16 }}>
          <svg width="110" height="110" viewBox="0 0 120 120" fill="none" style={{ marginBottom:24 }}>
            <ellipse cx="60" cy="72" rx="42" ry="32" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="2"/>
            <ellipse cx="60" cy="64" rx="36" ry="28" fill="#FBEAF0" stroke="#D4537E" strokeWidth="1.5"/>
            <ellipse cx="44" cy="61" rx="6" ry="6.5" fill="#fff" stroke="#D4537E" strokeWidth="1.5"/>
            <ellipse cx="76" cy="61" rx="6" ry="6.5" fill="#fff" stroke="#D4537E" strokeWidth="1.5"/>
            <ellipse cx="45" cy="62" rx="3" ry="3.2" fill="#993556"/>
            <ellipse cx="77" cy="62" rx="3" ry="3.2" fill="#993556"/>
            <path d="M48 74 Q60 80 72 74" stroke="#D4537E" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
            <circle cx="28" cy="28" r="10" fill="#FAC775" stroke="#EF9F27" strokeWidth="1.5"/>
            <circle cx="92" cy="22" r="7" fill="#9FE1CB" stroke="#1D9E75" strokeWidth="1.5"/>
          </svg>
          <button onClick={()=>{ setTopic(TOPICS[Math.floor(Math.random()*TOPICS.length)]); setShowTip(false); }} style={{ background:"#EEEDFE", border:"2px solid #AFA9EC", borderRadius:22, padding:"16px 44px", fontSize:17, fontWeight:500, color:"#534AB7", cursor:"pointer" }}>✨ 今晚聊什麼？</button>
        </div>
      ) : (
        <div>
          <div style={{ background:"var(--color-background-primary)", border:"2px solid #CECBF6", borderRadius:24, padding:"26px 20px", textAlign:"center", marginBottom:13 }}>
            <p style={{ fontSize:17, fontWeight:500, color:"var(--color-text-primary)", lineHeight:1.85, margin:0 }}>💬 {topic}</p>
          </div>
          {!showTip
            ? <button onClick={()=>setShowTip(true)} style={{ width:"100%", background:"#FAEEDA", border:"2px solid #FAC775", borderRadius:14, padding:"12px 0", fontSize:14, color:"#854F0B", cursor:"pointer", fontWeight:500, marginBottom:10 }}>🌿 給爸媽的聊天小提示</button>
            : <div style={{ background:"#FAEEDA", borderRadius:14, padding:"14px 16px", marginBottom:10, border:"2px solid #FAC775" }}>
                <div style={{ fontSize:12, fontWeight:500, color:"#854F0B", marginBottom:5 }}>聊天小提示</div>
                <p style={{ fontSize:14, color:"#633806", lineHeight:1.8, margin:0 }}>先分享你自己的答案，讓孩子感受到這是雙向的對話。不評價對錯，只是好奇地聆聽 🌿</p>
              </div>
          }
          <button onClick={()=>{ setTopic(TOPICS[Math.floor(Math.random()*TOPICS.length)]); setShowTip(false); setTopicNote(""); setTopicSaved(false); }} style={{ width:"100%", background:"var(--color-background-secondary)", border:"0.5px solid var(--color-border-tertiary)", borderRadius:14, padding:"12px 0", fontSize:14, color:"var(--color-text-secondary)", cursor:"pointer", marginBottom:13 }}>換一個話題</button>
          {!topicSaved ? (
            <div style={{ background:"var(--color-background-primary)", border:"0.5px solid var(--color-border-tertiary)", borderRadius:18, padding:"15px 18px" }}>
              <div style={{ fontSize:13, fontWeight:500, color:"var(--color-text-primary)", marginBottom:9 }}>📝 聊天紀錄（選填）</div>
              <textarea value={topicNote} onChange={e=>setTopicNote(e.target.value)} placeholder="今晚聊了什麼？孩子說了什麼讓你印象深刻的話？" style={{ width:"100%", borderRadius:10, border:"1px solid var(--color-border-secondary)", padding:"10px 12px", fontSize:14, resize:"none", height:78, boxSizing:"border-box", color:"var(--color-text-primary)", background:"var(--color-background-secondary)" }}/>
              <button onClick={handleSaveTopic} style={{ width:"100%", marginTop:11, background:"#EEEDFE", border:"1.5px solid #AFA9EC", borderRadius:12, padding:"13px 0", fontSize:15, fontWeight:500, color:"#534AB7", cursor:"pointer" }}>儲存今晚的對話 💬</button>
            </div>
          ) : (
            <div style={{ background:"#EEEDFE", border:"1.5px solid #AFA9EC", borderRadius:18, padding:"18px", textAlign:"center" }}>
              <div style={{ fontSize:24, marginBottom:5 }}>💬</div>
              <div style={{ fontSize:15, fontWeight:500, color:"#534AB7", marginBottom:3 }}>對話已記錄</div>
              <div style={{ fontSize:13, color:"#7F77DD" }}>可以在「情緒日記」查看</div>
            </div>
          )}
        </div>
      )}
    </div>
  );

  const renderRecords = () => {
    if (detailId !== null) {
      const rec = childRecs.find(r => r.id === detailId);
      if (!rec) return null;
      const f = rec.type==="emotion" ? FEELING_MAP[rec.feelingId] : null;
      const n = rec.type==="emotion" ? NEED_MAP[rec.needId] : null;
      const adv = rec.type==="emotion" ? (ADVICE[`${rec.feelingId}-${rec.needId}`] || ADVICE[`${rec.feelingId}-unknown`]) : null;
      return (
        <div>
          <button onClick={()=>setDetailId(null)} style={{ background:"none", border:"none", cursor:"pointer", color:"var(--color-text-secondary)", fontSize:13, marginBottom:14, padding:0 }}>← 返回日記</button>
          <div style={{ fontSize:12, color:"var(--color-text-secondary)", marginBottom:12 }}>{rec.date} {rec.time}</div>
          {rec.type==="emotion" && f && (
            <div>
              <div style={{ background:"#FFFDF0", border:"2px solid #FAC775", borderRadius:18, padding:"18px", marginBottom:13 }}>
                <div style={{ fontSize:12, color:"#854F0B", fontWeight:500, marginBottom:11 }}>💌 {child.name} 的心情便條</div>
                <div style={{ display:"flex", gap:10 }}>
                  <div style={{ flex:1, background:"#FFF8DC", borderRadius:10, padding:"10px 12px", display:"flex", alignItems:"center", gap:8 }}>
                    <f.Scene size={34}/><div><div style={{ fontSize:11, color:"#BA7517" }}>感覺</div><div style={{ fontSize:14, fontWeight:500, color:f.color }}>{f.label}</div></div>
                  </div>
                  {n && <div style={{ flex:1, background:"#FFF8DC", borderRadius:10, padding:"10px 12px", display:"flex", alignItems:"center", gap:8 }}>
                    <span style={{ fontSize:22 }}>{n.icon}</span><div><div style={{ fontSize:11, color:"#BA7517" }}>需要</div><div style={{ fontSize:12, fontWeight:500, color:"#633806" }}>{n.label}</div></div>
                  </div>}
                </div>
              </div>
              {rec.note && <div style={{ background:"var(--color-background-primary)", border:"0.5px solid var(--color-border-tertiary)", borderRadius:14, padding:"12px 16px", marginBottom:11 }}><div style={{ fontSize:11, color:"var(--color-text-secondary)", marginBottom:5 }}>家長備註</div><p style={{ fontSize:14, color:"var(--color-text-primary)", lineHeight:1.75, margin:0 }}>{rec.note}</p></div>}
              {adv && <div style={{ background:"#EEEDFE", border:"1.5px solid #CECBF6", borderRadius:14, padding:"14px 16px" }}>
                <div style={{ fontSize:11, color:"#534AB7", fontWeight:500, marginBottom:8 }}>當時的建議</div>
                {adv.questions.map((q,i) => <div key={i} style={{ fontSize:13, color:"#3C3489", lineHeight:1.75, paddingLeft:10, borderLeft:"2px solid #7F77DD", marginBottom:6 }}>{q}</div>)}
              </div>}
            </div>
          )}
          {rec.type==="topic" && (
            <div>
              <div style={{ background:"var(--color-background-primary)", border:"2px solid #CECBF6", borderRadius:18, padding:"20px", marginBottom:12, textAlign:"center" }}>
                <div style={{ fontSize:12, color:"#534AB7", marginBottom:8 }}>💬 睡前話題</div>
                <p style={{ fontSize:16, fontWeight:500, color:"var(--color-text-primary)", lineHeight:1.8, margin:0 }}>{rec.topic}</p>
              </div>
              {rec.note && <div style={{ background:"var(--color-background-primary)", border:"0.5px solid var(--color-border-tertiary)", borderRadius:14, padding:"12px 16px" }}><div style={{ fontSize:11, color:"var(--color-text-secondary)", marginBottom:5 }}>聊天紀錄</div><p style={{ fontSize:14, color:"var(--color-text-primary)", lineHeight:1.75, margin:0 }}>{rec.note}</p></div>}
            </div>
          )}
        </div>
      );
    }

    const last7 = Array.from({length:7},(_,i)=>{ const d=new Date(); d.setDate(d.getDate()-6+i); return d.toISOString().slice(0,10); });
    const byDate = {};
    childRecs.forEach(r=>{ if(!byDate[r.date]) byDate[r.date]=[]; byDate[r.date].push(r); });
    const emoRecs = childRecs.filter(r=>r.type==="emotion");
    const trend = {};
    emoRecs.slice(0,14).forEach(r=>{ trend[r.feelingId]=(trend[r.feelingId]||0)+1; });
    const topF = Object.entries(trend).sort((a,b)=>b[1]-a[1]).slice(0,3);

    return (
      <div>
        <p style={{ fontSize:16, fontWeight:500, color:"var(--color-text-primary)", marginBottom:4 }}>{child.name} 的情緒日記</p>
        <p style={{ fontSize:14, color:"var(--color-text-secondary)", marginBottom:17, lineHeight:1.6 }}>最近兩週的記錄 📋</p>

        {/* AI 週報 */}
        <div style={{ marginBottom:18 }}>
          <button onClick={generateWeekReport} disabled={weekReportLoading} style={{ width:"100%", background: weekReportLoading ? "var(--color-background-secondary)" : "#EEEDFE", border:"1.5px solid #AFA9EC", borderRadius:14, padding:"12px 0", fontSize:14, fontWeight:500, color: weekReportLoading ? "var(--color-text-secondary)" : "#534AB7", cursor: weekReportLoading ? "default" : "pointer" }}>
            {weekReportLoading ? "✨ AI 正在分析記錄…" : "✨ 生成 AI 週報"}
          </button>
          {weekReport && !weekReportLoading && (
            <div style={{ background:"#EEEDFE", border:"1.5px solid #CECBF6", borderRadius:14, padding:"16px 18px", marginTop:10 }}>
              <div style={{ fontSize:11, color:"#534AB7", fontWeight:500, marginBottom:8 }}>✨ AI 週報摘要</div>
              <p style={{ fontSize:14, color:"#3C3489", lineHeight:1.85, margin:0 }}>{weekReport}</p>
            </div>
          )}
        </div>
        <div style={{ display:"flex", gap:5, marginBottom:20 }}>
          {last7.map(d => {
            const recs=byDate[d]||[]; const eRec=recs.find(r=>r.type==="emotion"); const f=eRec?FEELING_MAP[eRec.feelingId]:null; const isToday=d===todayStr();
            return (
              <div key={d} onClick={()=>eRec&&setDetailId(eRec.id)} style={{ flex:1, borderRadius:12, padding:"8px 3px", textAlign:"center", background:f?f.bg:"var(--color-background-secondary)", border:isToday?`2px solid #639922`:`1.5px solid ${f?f.border:"var(--color-border-tertiary)"}`, cursor:eRec?"pointer":"default" }}>
                <div style={{ fontSize:10, color:"var(--color-text-secondary)", marginBottom:3 }}>週{weekLabel(d)}</div>
                <div style={{ fontSize:10, color:"var(--color-text-secondary)", marginBottom:4 }}>{formatDate(d)}</div>
                <div style={{ width:8, height:8, borderRadius:"50%", background:f?f.dot:"var(--color-border-tertiary)", margin:"0 auto" }}/>
                {recs.length>1&&<div style={{ fontSize:9, color:"var(--color-text-secondary)", marginTop:2 }}>+{recs.length-1}</div>}
              </div>
            );
          })}
        </div>
        {topF.length>0 && (
          <div style={{ background:"var(--color-background-primary)", border:"0.5px solid var(--color-border-tertiary)", borderRadius:18, padding:"14px 18px", marginBottom:15 }}>
            <div style={{ fontSize:13, fontWeight:500, color:"var(--color-text-primary)", marginBottom:12 }}>最近最常出現的情緒</div>
            {topF.map(([fid,cnt]) => {
              const f=FEELING_MAP[fid]; const pct=Math.round((cnt/emoRecs.slice(0,14).length)*100);
              return (
                <div key={fid} style={{ marginBottom:9 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
                    <span style={{ fontSize:13, color:f.color, fontWeight:500 }}>{f.label}</span>
                    <span style={{ fontSize:12, color:"var(--color-text-secondary)" }}>{cnt} 次</span>
                  </div>
                  <div style={{ background:"var(--color-background-secondary)", borderRadius:8, height:7 }}>
                    <div style={{ width:`${pct}%`, height:"100%", background:f.dot, borderRadius:8 }}/>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {childRecs.length===0
          ? <div style={{ textAlign:"center", padding:"32px 0", color:"var(--color-text-secondary)", fontSize:14 }}><div style={{ fontSize:32, marginBottom:10 }}>🌱</div>還沒有記錄，先去使用情緒小偵探吧！</div>
          : <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {childRecs.map(r => {
                if (r.type==="emotion") {
                  const f=FEELING_MAP[r.feelingId]; const n=NEED_MAP[r.needId];
                  return (
                    <button key={r.id} onClick={()=>setDetailId(r.id)} style={{ background:f.bg, border:`1.5px solid ${f.border}`, borderRadius:16, padding:"12px 16px", cursor:"pointer", textAlign:"left", display:"flex", alignItems:"center", gap:12 }}>
                      <f.Scene size={38}/><div style={{ flex:1 }}><div style={{ fontSize:11, color:"var(--color-text-secondary)", marginBottom:1 }}>{r.date} {r.time}</div><div style={{ fontSize:15, fontWeight:500, color:f.color }}>{f.label}</div>{n&&<div style={{ fontSize:12, color:f.color, opacity:0.75, marginTop:1 }}>{n.icon} {n.label}</div>}</div>
                      <span style={{ fontSize:18, opacity:0.3, color:f.color }}>›</span>
                    </button>
                  );
                }
                return (
                  <button key={r.id} onClick={()=>setDetailId(r.id)} style={{ background:"#EEEDFE", border:"1.5px solid #AFA9EC", borderRadius:16, padding:"12px 16px", cursor:"pointer", textAlign:"left", display:"flex", alignItems:"center", gap:12 }}>
                    <span style={{ fontSize:26 }}>💬</span>
                    <div style={{ flex:1 }}><div style={{ fontSize:11, color:"var(--color-text-secondary)", marginBottom:1 }}>{r.date} {r.time}</div><div style={{ fontSize:14, fontWeight:500, color:"#534AB7" }}>睡前話題</div><div style={{ fontSize:12, color:"#7F77DD", marginTop:1 }}>{r.topic.slice(0,22)}…</div></div>
                    <span style={{ fontSize:18, opacity:0.3, color:"#7F77DD" }}>›</span>
                  </button>
                );
              })}
            </div>
        }
      </div>
    );
  };

  return (
    <div style={{ fontFamily:"var(--font-sans)", maxWidth:430, margin:"0 auto", paddingBottom:72 }}>
      {/* Toast — inline 置頂 */}
      {toast && (
        <div style={{ background:"#3B6D11", color:"#fff", borderRadius:0, padding:"11px 20px", fontSize:14, fontWeight:500, textAlign:"center" }}>
          {toast}
        </div>
      )}
      {/* Header */}
      <div style={{ padding:"12px 16px 10px", borderBottom:"0.5px solid var(--color-border-tertiary)" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>
            <img src="https://lh3.googleusercontent.com/d/1mUlaruvPsTeJjX5zExpQ065gUPg7_Dk5" width="36" height="36" style={{ borderRadius:8, objectFit:"cover" }} onError={e => { e.target.style.display="none"; }}/>
            <div>
              <div style={{ fontSize:16, fontWeight:500, color:"var(--color-text-primary)", lineHeight:1.2 }}>心橋</div>
              <div style={{ fontSize:10, color:"var(--color-text-secondary)" }}>連結你與孩子之間，那座永不斷的橋</div>
            </div>
          </div>
          <div style={{ display:"flex", gap:6, alignItems:"center" }}>
            {children.map((c,i) => (
              <button key={i} onClick={()=>{ setActiveChild(i); resetDetective(); setDetailId(null); }} style={{ width:32, height:32, borderRadius:"50%", border:activeChild===i?`2px solid ${CHILD_COLORS[c.colorIdx]}`:"2px solid transparent", background:CHILD_BG[c.colorIdx], cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:500, color:CHILD_COLORS[c.colorIdx] }}>{c.name[0]}</button>
            ))}
            {children.length<4 && <button onClick={()=>setScreen("setup")} style={{ width:32, height:32, borderRadius:"50%", border:"1.5px dashed var(--color-border-secondary)", background:"transparent", cursor:"pointer", fontSize:18, color:"var(--color-text-secondary)", display:"flex", alignItems:"center", justifyContent:"center" }}>+</button>}
          </div>
        </div>
        {child && <div style={{ marginTop:6, fontSize:12, color:childColor, fontWeight:500 }}>👤 {child.name}</div>}
      </div>

      {/* Content */}
      <div style={{ padding:"18px 16px 16px" }}>
        {tab==="detective" && renderDetective()}
        {tab==="tonight"   && renderTonight()}
        {tab==="records"   && renderRecords()}
      </div>

      {/* Bottom Tab Bar */}
      <div style={{ position:"fixed", bottom:0, left:"50%", transform:"translateX(-50%)", width:"100%", maxWidth:430, background:"#3B6D11", display:"flex", paddingBottom:2 }}>
        {NAV.map(([key,icon,label]) => (
          <button key={key} onClick={()=>switchTab(key)} style={{ flex:1, padding:"6px 4px 6px", border:"none", background:"transparent", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", gap:2 }}>
            <span style={{ fontSize:20 }}>{icon}</span>
            <span style={{ fontSize:13, color:tab===key?"#C0DD97":"#7EB55A", fontWeight:600 }}>{label}</span>
            {tab===key && <div style={{ width:20, height:2, borderRadius:2, background:"#C0DD97" }}/>}
          </button>
        ))}
      </div>
    </div>
  );
}
