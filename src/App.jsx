import { useState, useEffect } from "react";

function SceneVolcano({ size=52 }) {
  return <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <ellipse cx="40" cy="62" rx="30" ry="8" fill="#F5C4B3" opacity="0.4"/>
    <polygon points="40,16 16,64 64,64" fill="#F0997B" stroke="#D85A30" strokeWidth="2.5" strokeLinejoin="round"/>
    <polygon points="40,16 30,36 50,36" fill="#FAECE7"/>
    <ellipse cx="40" cy="15" rx="8" ry="6" fill="#E24B4A" stroke="#D85A30" strokeWidth="1.5"/>
    <path d="M36 8 Q38 2 40 7 Q42 1 45 6" stroke="#E24B4A" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
  </svg>;
}
function SceneRain({ size=52 }) {
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
function SceneHide({ size=52 }) {
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
function SceneFlat({ size=52 }) {
  return <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <ellipse cx="40" cy="50" rx="28" ry="22" fill="#D3D1C7" stroke="#888780" strokeWidth="2"/>
    <ellipse cx="40" cy="44" rx="24" ry="19" fill="#F1EFE8"/>
    <path d="M27 40 Q31 43 35 40" stroke="#888780" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
    <path d="M45 40 Q49 43 53 40" stroke="#888780" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
    <path d="M32 54 Q40 52 48 54" stroke="#888780" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
  </svg>;
}
function SceneWorry({ size=52 }) {
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
function SceneUnknown({ size=52 }) {
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
function SceneHappy({ size=52 }) {
  return <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <ellipse cx="40" cy="48" rx="28" ry="24" fill="#C0DD97" stroke="#639922" strokeWidth="2"/>
    <ellipse cx="40" cy="42" rx="24" ry="20" fill="#EAF3DE"/>
    <ellipse cx="30" cy="38" rx="4.5" ry="5" fill="#fff" stroke="#639922" strokeWidth="1.5"/>
    <ellipse cx="50" cy="38" rx="4.5" ry="5" fill="#fff" stroke="#639922" strokeWidth="1.5"/>
    <ellipse cx="31" cy="39" rx="2.2" ry="2.5" fill="#3B6D11"/>
    <ellipse cx="51" cy="39" rx="2.2" ry="2.5" fill="#3B6D11"/>
    <path d="M30 50 Q40 60 50 50" stroke="#639922" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <ellipse cx="25" cy="44" rx="5" ry="3" fill="#97C459" opacity="0.5"/>
    <ellipse cx="55" cy="44" rx="5" ry="3" fill="#97C459" opacity="0.5"/>
    <path d="M28 32 Q30 28 32 32" stroke="#639922" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M48 32 Q50 28 52 32" stroke="#639922" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>;
}
function SceneTouched({ size=52 }) {
  return <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <ellipse cx="40" cy="48" rx="28" ry="24" fill="#F4C0D1" stroke="#D4537E" strokeWidth="2"/>
    <ellipse cx="40" cy="42" rx="24" ry="20" fill="#FBEAF0"/>
    <ellipse cx="30" cy="38" rx="4.5" ry="5" fill="#fff" stroke="#D4537E" strokeWidth="1.5"/>
    <ellipse cx="50" cy="38" rx="4.5" ry="5" fill="#fff" stroke="#D4537E" strokeWidth="1.5"/>
    <ellipse cx="31" cy="39" rx="2.2" ry="2.5" fill="#993556"/>
    <ellipse cx="51" cy="39" rx="2.2" ry="2.5" fill="#993556"/>
    <path d="M31 38 Q31 35 33 36" stroke="#D4537E" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
    <path d="M51 38 Q51 35 53 36" stroke="#D4537E" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
    <path d="M30 50 Q40 60 50 50" stroke="#D4537E" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <ellipse cx="25" cy="44" rx="5" ry="3" fill="#ED93B1" opacity="0.5"/>
    <ellipse cx="55" cy="44" rx="5" ry="3" fill="#ED93B1" opacity="0.5"/>
    <path d="M36 28 Q40 24 44 28 Q40 32 36 28Z" fill="#E24B4A" opacity="0.7"/>
  </svg>;
}
function SceneExcited({ size=52 }) {
  return <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <ellipse cx="40" cy="48" rx="28" ry="24" fill="#FAC775" stroke="#EF9F27" strokeWidth="2"/>
    <ellipse cx="40" cy="42" rx="24" ry="20" fill="#FAEEDA"/>
    <ellipse cx="30" cy="37" rx="5" ry="5.5" fill="#fff" stroke="#EF9F27" strokeWidth="1.5"/>
    <ellipse cx="50" cy="37" rx="5" ry="5.5" fill="#fff" stroke="#EF9F27" strokeWidth="1.5"/>
    <ellipse cx="31" cy="38" rx="2.5" ry="2.8" fill="#BA7517"/>
    <ellipse cx="51" cy="38" rx="2.5" ry="2.8" fill="#BA7517"/>
    <ellipse cx="40" cy="53" rx="8" ry="5" fill="#fff" stroke="#EF9F27" strokeWidth="1.5"/>
    <ellipse cx="25" cy="43" rx="5" ry="3" fill="#EF9F27" opacity="0.4"/>
    <ellipse cx="55" cy="43" rx="5" ry="3" fill="#EF9F27" opacity="0.4"/>
    <path d="M18 20 L22 14 L26 20" stroke="#EF9F27" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M54 18 L58 12 L62 18" stroke="#EF9F27" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M36 26 L38 20 L40 26" stroke="#EF9F27" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>;
}
function SceneCalm({ size=52 }) {
  return <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <ellipse cx="40" cy="48" rx="28" ry="24" fill="#9FE1CB" stroke="#1D9E75" strokeWidth="2"/>
    <ellipse cx="40" cy="42" rx="24" ry="20" fill="#E1F5EE"/>
    <path d="M27 38 Q31 41 35 38" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M45 38 Q49 41 53 38" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M30 51 Q40 57 50 51" stroke="#1D9E75" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
    <ellipse cx="25" cy="44" rx="5" ry="3" fill="#5DCAA5" opacity="0.5"/>
    <ellipse cx="55" cy="44" rx="5" ry="3" fill="#5DCAA5" opacity="0.5"/>
    <path d="M20 28 Q24 24 28 28 Q24 32 20 28Z" fill="#9FE1CB" stroke="#1D9E75" strokeWidth="1"/>
    <path d="M52 24 Q56 20 60 24 Q56 28 52 24Z" fill="#9FE1CB" stroke="#1D9E75" strokeWidth="1"/>
    <path d="M36 22 Q40 18 44 22 Q40 26 36 22Z" fill="#9FE1CB" stroke="#1D9E75" strokeWidth="1"/>
  </svg>;
}

const POSITIVE = [
  { id:"happy",   label:"開心",   sub:"今天很棒、想笑",     Scene:SceneHappy,   bg:"#EAF3DE", border:"#97C459", color:"#3B6D11", dot:"#639922", shadow:"#97C45940" },
  { id:"touched", label:"感動",   sub:"心裡暖暖的",         Scene:SceneTouched, bg:"#FBEAF0", border:"#ED93B1", color:"#993556", dot:"#D4537E", shadow:"#ED93B140" },
  { id:"excited", label:"興奮",   sub:"有好事、很期待",     Scene:SceneExcited, bg:"#FAEEDA", border:"#FAC775", color:"#BA7517", dot:"#EF9F27", shadow:"#FAC77540" },
  { id:"calm",    label:"平靜",   sub:"還好、心情平穩",     Scene:SceneCalm,    bg:"#E1F5EE", border:"#5DCAA5", color:"#0F6E56", dot:"#1D9E75", shadow:"#5DCAA540" },
];
const NEGATIVE = [
  { id:"angry",   label:"生氣",   sub:"很煩、快爆炸了",     Scene:SceneVolcano, bg:"#FAECE7", border:"#F0997B", color:"#D85A30", dot:"#E24B4A", shadow:"#F0997B40" },
  { id:"sad",     label:"難過",   sub:"想哭、心裡很悶",     Scene:SceneRain,    bg:"#E6F1FB", border:"#85B7EB", color:"#185FA5", dot:"#378ADD", shadow:"#85B7EB40" },
  { id:"scared",  label:"害怕",   sub:"想躲起來、不安",     Scene:SceneHide,    bg:"#EEEDFE", border:"#AFA9EC", color:"#534AB7", dot:"#7F77DD", shadow:"#AFA9EC40" },
  { id:"tired",   label:"好累",   sub:"什麼都不想做",       Scene:SceneFlat,    bg:"#F1EFE8", border:"#B4B2A9", color:"#5F5E5A", dot:"#888780", shadow:"#B4B2A940" },
  { id:"worried", label:"擔心",   sub:"一直在想一件事",     Scene:SceneWorry,   bg:"#FAEEDA", border:"#FAC775", color:"#BA7517", dot:"#EF9F27", shadow:"#FAC77540" },
  { id:"lost",    label:"說不清", sub:"有點怪怪的",         Scene:SceneUnknown, bg:"#FBEAF0", border:"#ED93B1", color:"#993556", dot:"#D4537E", shadow:"#ED93B140" },
];
const FEELINGS = [...POSITIVE, ...NEGATIVE];
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
  "happy-hug":       { action:"給孩子一個大大的擁抱，一起慶祝這個好心情！讓他知道你跟他一樣開心。",           questions:["「今天發生了什麼好事？」","「是什麼讓你這麼開心？」"] },
  "happy-quiet":     { action:"和孩子一起靜靜享受這個愉快的時刻，不一定要說話。",                           questions:["「你現在心裡是什麼感覺？」","「今天有什麼讓你印象最深刻？」"] },
  "happy-listen":    { action:"放下手邊的事，讓孩子盡情分享今天的好事，給予回應和笑容。",                   questions:["「從頭告訴我，今天發生了什麼？」","「哪個時刻讓你最開心？」"] },
  "happy-together":  { action:"邀請孩子一起做一件他喜歡的事，把這個好心情延續下去。",                       questions:["「你想一起做什麼？」","「今天這個開心想不想記錄下來？」"] },
  "happy-unknown":   { action:"跟孩子說：「我看到你今天很開心，我也跟著開心了！」",                         questions:["「今天有什麼特別的事嗎？」","「你知道你笑起來很好看嗎？」"] },
  "touched-hug":     { action:"輕輕給孩子一個溫柔的擁抱，說：「我也感受到你心裡的溫暖了。」",               questions:["「是什麼事讓你有這種感覺？」","「那個感覺像什麼？」"] },
  "touched-quiet":   { action:"靜靜陪著孩子，讓這份感動自然流動，不用急著說話。",                           questions:["「你現在心裡是什麼感覺？」","「這種感覺讓你想做什麼？」"] },
  "touched-listen":  { action:"說：「你願意告訴我是什麼讓你這麼感動嗎？我想聽。」",                         questions:["「是誰做了什麼讓你有這種感覺？」","「你想對他說什麼嗎？」"] },
  "touched-together":{ action:"邀請孩子把這份感動畫下來或寫下來，留作紀念。",                               questions:["「我們可以一起記錄這個時刻嗎？」","「你想怎麼表達這種感覺？」"] },
  "touched-unknown": { action:"說：「我看到你眼睛亮亮的，有什麼特別的事發生了嗎？」",                       questions:["「你現在心裡有什麼感覺？」","「是一件好事讓你這樣嗎？」"] },
  "excited-hug":     { action:"給孩子一個充滿活力的擁抱，說：「我感受到你的興奮了！」",                     questions:["「是什麼讓你這麼興奮？」","「你最期待哪個部分？」"] },
  "excited-quiet":   { action:"讓孩子安靜下來，一起做三次深呼吸，把興奮的能量沉澱一下。",                   questions:["「深呼吸之後，現在感覺怎麼樣？」","「你最想做的第一件事是什麼？」"] },
  "excited-listen":  { action:"讓孩子盡情說，不要打斷，讓他的興奮完全釋放出來。",                           questions:["「告訴我所有的事！」","「你已經想了多久了？」"] },
  "excited-together":{ action:"一起為那件讓他興奮的事做準備，把期待變成行動。",                             questions:["「我們可以一起準備什麼？」","「你希望那天發生什麼？」"] },
  "excited-unknown": { action:"說：「我看到你今天特別有活力，發生什麼好事了嗎？」",                         questions:["「是有什麼好事要發生嗎？」","「你的眼睛都亮起來了！」"] },
  "calm-hug":        { action:"給孩子一個輕柔的擁抱，享受這份平靜的連結。",                                 questions:["「今天過得怎麼樣？」","「有什麼想跟我聊的嗎？」"] },
  "calm-quiet":      { action:"珍惜這個安靜的時刻，和孩子一起靜靜待著，什麼都不做也很好。",                 questions:["「你現在感覺怎麼樣？」","「有沒有什麼在心裡轉的事？」"] },
  "calm-listen":     { action:"輕鬆地說：「今天感覺平靜，有什麼想聊的嗎？」讓對話自然展開。",               questions:["「今天有什麼印象深刻的事嗎？」","「你最近在想什麼？」"] },
  "calm-together":   { action:"邀請孩子一起做一件放鬆的事：散步、看書、或只是坐著。",                       questions:["「你想一起做什麼？」","「今天有沒有讓你覺得開心的小事？」"] },
  "calm-unknown":    { action:"說：「你今天看起來很平靜，這樣很好。」讓孩子感受到被接納。",                  questions:["「今天還好嗎？」","「有沒有什麼想說的？」"] },
  "angry-hug":       { action:"先蹲下來，給孩子一個緊緊的擁抱，不用說話。等他身體放鬆了再聊。",             questions:["「是什麼事讓你這麼生氣？」","「有沒有人做了什麼讓你覺得不公平？」"] },
  "angry-quiet":     { action:"帶孩子離開當下環境，找個安靜的地方坐下，一起做三次深呼吸。",                 questions:["「你現在好一點了嗎？」","「準備好的時候，可以告訴我發生什麼事嗎？」"] },
  "angry-listen":    { action:"放下手邊的事，眼神看著孩子，說：「我現在只聽你說。」",                       questions:["「從頭告訴我，發生了什麼？」","「那個時候你心裡是什麼感覺？」"] },
  "angry-together":  { action:"邀請孩子一起做一件小事（撕紙、捏黏土、丟球），讓身體先動起來釋放情緒。",     questions:["「做完了，現在感覺怎麼樣？」","「想說說剛才是怎麼了嗎？」"] },
  "angry-unknown":   { action:"不要追問，靜靜坐在孩子旁邊，說：「我在這裡，不急。」",                       questions:["「有沒有什麼事讓你覺得不舒服？」","「點頭告訴我，是在學校發生的嗎？」"] },
  "sad-hug":         { action:"輕輕走過去，蹲到孩子的高度，給一個溫柔的擁抱。讓他哭，不要說「不要哭了」。", questions:["「是誰讓你難過了？」","「他說了什麼或做了什麼？」"] },
  "sad-quiet":       { action:"讓孩子找一個舒服的地方待著，你就靜靜陪在旁邊，不說話也沒關係。",             questions:["「你想一個人靜一下，還是要我陪著你？」","「等你準備好，我想聽你說。」"] },
  "sad-listen":      { action:"把孩子帶到安靜的角落，面對面坐下，說：「我想聽你說說心裡的事。」",           questions:["「發生了什麼讓你這麼難過？」","「你希望結果是怎樣的？」"] },
  "sad-together":    { action:"邀請孩子一起做一件輕鬆的事：喝杯熱可可、畫畫、或散個步。",                   questions:["「今天最難過的是哪一刻？」","「有沒有什麼我可以幫你的？」"] },
  "sad-unknown":     { action:"先給一個擁抱，說：「我看到你很難過，不用說話也沒關係，我陪著你。」",         questions:["「你是不是有什麼事放在心裡很久了？」","「慢慢說，我不急。」"] },
  "scared-hug":      { action:"蹲下來抱住孩子，說：「我在這裡，你很安全。」讓孩子感受到你的體溫。",         questions:["「是什麼讓你覺得害怕？」","「這個害怕是什麼時候開始的？」"] },
  "scared-quiet":    { action:"帶孩子去一個他覺得安全的地方，陪他待著，不要急著說話。",                     questions:["「這裡你感覺比較安全嗎？」","「你願意告訴我是什麼讓你害怕嗎？」"] },
  "scared-listen":   { action:"坐在孩子旁邊，說：「你害怕是可以的，我想聽你說說是什麼事。」",               questions:["「是有人做了什麼讓你害怕嗎？」","「這件事發生了多久了？」"] },
  "scared-together": { action:"邀請孩子一起畫下讓他覺得安全的地方，或做一件讓他安心的事。",                 questions:["「什麼事或什麼人讓你覺得比較不害怕？」","「我們可以一起想想怎麼讓你更安心。」"] },
  "scared-unknown":  { action:"緊緊握住孩子的手，說：「不管發生什麼，我都在。」不要追問，先給安全感。",     questions:["「你現在還好嗎？」","「有沒有一件事你一直不敢說出來？」"] },
  "tired-hug":       { action:"輕輕抱住孩子，說：「你已經很努力了。」不要馬上問原因，讓他先感受被接納。",   questions:["「今天發生了什麼讓你這麼累？」","「是身體累還是心裡累？」"] },
  "tired-quiet":     { action:"讓孩子躺下來，家長坐在旁邊陪著。等5～10分鐘後再輕聲問一句話。",             questions:["「現在好一點了嗎？」","「有沒有什麼事一直壓在你心上？」"] },
  "tired-listen":    { action:"把孩子帶到舒服的地方，說：「你不用自己扛，說出來會輕鬆一點。」",             questions:["「最近有沒有一件事讓你覺得很重？」","「你希望有人幫你做什麼？」"] },
  "tired-together":  { action:"邀請孩子一起做超輕鬆的事：吃點心、聽音樂、或什麼都不做只是躺著。",           questions:["「你最近有沒有覺得開心的時候？」","「什麼事情做了會讓你比較有力氣？」"] },
  "tired-unknown":   { action:"什麼都不說，就靜靜陪著孩子。有時候陪伴本身就是最好的支持。",                 questions:["「你想要我陪著你嗎？」","「等你有力氣了，我們再聊。」"] },
  "worried-hug":     { action:"先給一個擁抱，說：「這件事不用你一個人扛，我跟你一起。」",                   questions:["「你現在最擔心的是什麼？」","「這個擔心有多久了？」"] },
  "worried-quiet":   { action:"找一張紙，請孩子把擔心的事寫下來或畫出來，再一起把紙折起來放著。",           questions:["「你最擔心會發生什麼事？」","「我們可以一起想想有什麼辦法。」"] },
  "worried-listen":  { action:"坐下來，說：「你說，我聽，不管是什麼我都不會笑你。」",                       questions:["「這件事是什麼時候開始讓你擔心的？」","「有沒有人知道你在擔心這件事？」"] },
  "worried-together":{ action:"和孩子一起列出「最壞的情況」和「我們可以怎麼辦」，把擔心變成可以行動的事。", questions:["「如果真的發生了，我們可以怎麼辦？」","「有沒有什麼事做了會讓你比較放心？」"] },
  "worried-unknown": { action:"輕輕問：「你是不是有件事一直放在心裡？」然後等待，不要催。",                 questions:["「你有沒有在擔心某個人或某件事？」","「說出來一點點就好，從哪裡開始都可以。」"] },
  "lost-hug":        { action:"先給一個擁抱，什麼都不說。有時候孩子說不清楚，但身體知道需要什麼。",         questions:["「你有沒有哪裡不舒服？」","「今天有沒有發生什麼事？」"] },
  "lost-quiet":      { action:"讓孩子安靜待著，你就陪在旁邊。不要問「你怎麼了」，讓情緒自然流動。",         questions:["「你想一個人靜一下還是要我陪？」","「等你想說了，我都在。」"] },
  "lost-listen":     { action:"說：「你不用說清楚，想到什麼說什麼就好，我來幫你整理。」",                   questions:["「你現在心裡有什麼感覺？」","「有沒有一件事讓你覺得怪怪的？」"] },
  "lost-together":   { action:"邀請孩子一起做一件簡單的事，不用說話，讓身體先動起來。",                     questions:["「做完了感覺有沒有不一樣？」","「你有沒有想到是什麼讓你覺得怪怪的？」"] },
  "lost-unknown":    { action:"靜靜坐在孩子旁邊，說：「沒關係，不用說清楚。我就在這裡。」",                 questions:["「你現在還好嗎？」","「有沒有什麼事你一直不知道怎麼說？」"] },
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

// ─── 共用樣式工具 ──────────────────────────────────────────────
const press = {
  onMouseDown: e => e.currentTarget.style.transform = "scale(0.96)",
  onMouseUp:   e => e.currentTarget.style.transform = "",
  onMouseLeave:e => e.currentTarget.style.transform = "",
};

export default function App() {
  const [screen, setScreen]           = useState("welcome");
  const [children, setChildren]       = useState([]);
  const [activeChild, setActiveChild] = useState(0);
  const [newName, setNewName]         = useState("");
  const [tab, setTab]                 = useState("detective");
  const [step, setStep]               = useState(1);
  const [feeling, setFeeling]         = useState(null);
  const [need, setNeed]               = useState(null);
  const [noteText, setNoteText]       = useState("");
  const [noteSaved, setNoteSaved]     = useState(false);
  const [saving, setSaving]           = useState(false);
  const [records, setRecords]         = useState({});
  const [detailId, setDetailId]       = useState(null);
  const [topic, setTopic]             = useState(null);
  const [showTip, setShowTip]         = useState(false);
  const [topicNote, setTopicNote]     = useState("");
  const [topicSaved, setTopicSaved]   = useState(false);
  const [toast, setToast]             = useState("");
  const [greeting] = useState(GREETINGS[Math.floor(Math.random()*GREETINGS.length)]);

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

  const resetDetective = () => { setStep(1); setFeeling(null); setNeed(null); setNoteText(""); setNoteSaved(false); setSaving(false); };
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
    setNoteSaved(true); showToast("記錄已儲存 🌱"); setSaving(false);
  };

  const handleSaveTopic = async () => {
    if (saving || topicSaved) return;
    setSaving(true);
    await addRecord({ id:Date.now(), type:"topic", date:todayStr(), time:timeStr(), topic, note:topicNote });
    setTopicSaved(true); showToast("對話已記錄 💬"); setSaving(false);
  };

  // ─── 歡迎畫面 ─────────────────────────────────────────────────
  if (screen === "welcome") return (
    <div style={{ fontFamily:"var(--font-sans)", maxWidth:430, margin:"0 auto", minHeight:520, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"40px 28px", textAlign:"center", background:"var(--color-background-primary)" }}>
      <svg width="60" height="60" viewBox="0 0 52 52" fill="none" style={{ marginBottom:16 }}>
        <ellipse cx="26" cy="30" rx="18" ry="16" fill="#C0DD97" stroke="#639922" strokeWidth="2"/>
        <ellipse cx="18" cy="20" rx="10" ry="10" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="2"/>
        <ellipse cx="34" cy="18" rx="8" ry="8" fill="#FBEAF0" stroke="#D4537E" strokeWidth="2"/>
      </svg>
      <div style={{ fontSize:28, fontWeight:600, color:"var(--color-text-primary)", marginBottom:6 }}>心橋</div>
      <div style={{ fontSize:13, color:"var(--color-text-secondary)", marginBottom:36, lineHeight:1.8 }}>連結你與孩子之間，那座永不斷的橋</div>
      <div style={{ fontSize:20, fontWeight:500, color:"#3B6D11", marginBottom:8 }}>{greeting}</div>
      <div style={{ fontSize:13, color:"var(--color-text-secondary)", marginBottom:40, lineHeight:1.8 }}>先來建立孩子的檔案，就可以開始囉 🌱</div>
      <button onClick={()=>setScreen("setup")} style={{ background:"#3B6D11", border:"none", borderRadius:24, padding:"14px 52px", fontSize:16, fontWeight:500, color:"#fff", cursor:"pointer", boxShadow:"0 4px 16px rgba(59,109,17,0.25)", transition:"transform 0.12s" }} {...press}>開始</button>
    </div>
  );

  // ─── 建立孩子檔案 ──────────────────────────────────────────────
  if (screen === "setup") return (
    <div style={{ fontFamily:"var(--font-sans)", maxWidth:430, margin:"0 auto", padding:"36px 24px", background:"var(--color-background-primary)" }}>
      <div style={{ fontSize:20, fontWeight:600, color:"var(--color-text-primary)", marginBottom:4 }}>建立孩子檔案</div>
      <div style={{ fontSize:13, color:"var(--color-text-secondary)", marginBottom:24, lineHeight:1.8 }}>最多 4 個孩子，之後也可以新增。</div>
      {children.map((c,i) => (
        <div key={i} style={{ background:CHILD_BG[c.colorIdx], border:`1.5px solid ${CHILD_COLORS[c.colorIdx]}30`, borderRadius:14, padding:"12px 16px", marginBottom:10, display:"flex", alignItems:"center", gap:12 }}>
          <div style={{ width:34, height:34, borderRadius:"50%", background:CHILD_COLORS[c.colorIdx], display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontWeight:600, fontSize:15 }}>{c.name[0]}</div>
          <span style={{ fontSize:15, fontWeight:500, color:CHILD_COLORS[c.colorIdx] }}>{c.name}</span>
        </div>
      ))}
      {children.length < 4 && (
        <div style={{ marginTop:16 }}>
          <div style={{ fontSize:13, color:"var(--color-text-secondary)", marginBottom:8 }}>孩子的名字或暱稱</div>
          <div style={{ display:"flex", gap:10 }}>
            <input value={newName} onChange={e=>setNewName(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addChild()} placeholder="例如：小明、阿寶" style={{ flex:1, borderRadius:12, border:"1.5px solid var(--color-border-secondary)", padding:"11px 14px", fontSize:15, color:"var(--color-text-primary)", background:"var(--color-background-secondary)", outline:"none" }}/>
            <button onClick={addChild} style={{ background:"#3B6D11", border:"none", borderRadius:12, padding:"11px 20px", fontSize:15, fontWeight:500, color:"#fff", cursor:"pointer" }}>新增</button>
          </div>
        </div>
      )}
      {children.length > 0 && (
        <button onClick={()=>setScreen("main")} style={{ width:"100%", marginTop:24, background:"#EAF3DE", border:"1.5px solid #97C45950", borderRadius:16, padding:"14px 0", fontSize:15, fontWeight:500, color:"#3B6D11", cursor:"pointer" }}>開始使用 →</button>
      )}
    </div>
  );

  // ─── 情緒小偵探 ───────────────────────────────────────────────
  const renderDetective = () => {
    // ── Step 1：選擇情緒（依圖片重新設計）
    if (step === 1) return (
      <div>
        {/* 標題 */}
        <div style={{ textAlign:"center", padding:"16px 0 26px" }}>
          <div style={{ fontSize:22, fontWeight:600, color:"var(--color-text-primary)", marginBottom:6 }}>你現在感覺怎麼樣？</div>
          <div style={{ fontSize:13, color:"var(--color-text-tertiary, #AAAAAA)" }}>選一個最接近的心情吧</div>
        </div>

        {/* 正向情緒 */}
        <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:13 }}>
          <span style={{ fontSize:15 }}>✨</span>
          <span style={{ fontSize:13, fontWeight:500, color:"var(--color-text-secondary)" }}>正向情緒</span>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:22 }}>
          {POSITIVE.map(f => (
            <button key={f.id} onClick={()=>{ setFeeling(f); setStep(2); }} style={{
              background: f.bg,
              border: `1.5px solid ${f.border}`,
              borderRadius: 18,
              padding: "22px 12px 16px",
              cursor: "pointer",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
              boxShadow: `0 3px 14px ${f.shadow}`,
              transition: "transform 0.12s",
            }} {...press}>
              <f.Scene size={56}/>
              <span style={{ fontSize:14, fontWeight:500, color:f.color }}>{f.label}</span>
            </button>
          ))}
        </div>

        {/* 需要支持 */}
        <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:13 }}>
          <span style={{ fontSize:15 }}>🤍</span>
          <span style={{ fontSize:13, fontWeight:500, color:"var(--color-text-secondary)" }}>需要支持</span>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:12 }}>
          {NEGATIVE.slice(0,4).map(f => (
            <button key={f.id} onClick={()=>{ setFeeling(f); setStep(2); }} style={{
              background: f.bg,
              border: `1.5px solid ${f.border}`,
              borderRadius: 18,
              padding: "22px 12px 16px",
              cursor: "pointer",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
              boxShadow: `0 3px 14px ${f.shadow}`,
              transition: "transform 0.12s",
            }} {...press}>
              <f.Scene size={56}/>
              <span style={{ fontSize:14, fontWeight:500, color:f.color }}>{f.label}</span>
            </button>
          ))}
        </div>

        {/* 不知怎麼了（全寬） */}
        <button onClick={()=>{ setFeeling(FEELINGS.find(f=>f.id==="lost")); setStep(2); }} style={{
          width:"100%",
          background:"#F5F4FF",
          border:"1.5px solid #D8D5F0",
          borderRadius:18,
          padding:"16px 24px",
          cursor:"pointer",
          display:"flex", alignItems:"center", justifyContent:"center", gap:14,
          marginBottom:14,
          boxShadow:"0 2px 10px rgba(127,119,221,0.12)",
          transition:"transform 0.12s",
        }} {...press}>
          <SceneUnknown size={44}/>
          <span style={{ fontSize:16, fontWeight:500, color:"#7F77DD" }}>不知怎麼了</span>
        </button>

        {/* 底部提示 */}
        <div style={{ background:"#F7F7F7", borderRadius:14, padding:"13px 0", textAlign:"center" }}>
          <span style={{ fontSize:13, color:"#C8C8C8" }}>點選上方的表情告訴我吧 👆</span>
        </div>
      </div>
    );

    // ── Step 2：選擇需求
    if (step === 2 && feeling) return (
      <div>
        <button onClick={()=>setStep(1)} style={{ background:"none", border:"none", cursor:"pointer", color:"var(--color-text-secondary)", fontSize:13, marginBottom:16, padding:0 }}>← 上一步</button>

        {/* 已選情緒卡 */}
        <div style={{ background:feeling.bg, border:`1.5px solid ${feeling.border}`, borderRadius:16, padding:"14px 18px", marginBottom:22, display:"flex", alignItems:"center", gap:12 }}>
          <feeling.Scene size={42}/>
          <div>
            <div style={{ fontSize:11, color:feeling.color, opacity:0.75, marginBottom:2 }}>我感覺</div>
            <div style={{ fontSize:16, fontWeight:500, color:feeling.color }}>「{feeling.label}」</div>
          </div>
        </div>

        <div style={{ fontSize:15, fontWeight:500, color:"var(--color-text-primary)", marginBottom:16 }}>我現在需要…</div>

        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {NEEDS.map(n => (
            <button key={n.id} onClick={()=>{ setNeed(n); setStep(3); }} style={{
              background:"var(--color-background-primary)",
              border:"1.5px solid var(--color-border-secondary)",
              borderRadius:14,
              padding:"14px 18px",
              cursor:"pointer",
              display:"flex", alignItems:"center", gap:14, textAlign:"left",
              boxShadow:"0 1px 6px rgba(0,0,0,0.06)",
              transition:"transform 0.1s",
            }} {...press}>
              <span style={{ fontSize:26 }}>{n.icon}</span>
              <span style={{ fontSize:15, color:"var(--color-text-primary)", flex:1 }}>{n.label}</span>
              <span style={{ fontSize:16, opacity:0.2 }}>›</span>
            </button>
          ))}
        </div>
      </div>
    );

    // ── Step 3：建議與記錄
    if (step === 3 && feeling && need) {
      const adv = ADVICE[`${feeling.id}-${need.id}`] || ADVICE[`${feeling.id}-unknown`];
      return (
        <div>
          <button onClick={resetDetective} style={{ background:"none", border:"none", cursor:"pointer", color:"var(--color-text-secondary)", fontSize:13, marginBottom:16, padding:0 }}>← 重新選擇</button>

          {/* 心情便條 */}
          <div style={{ background:"#FFFEF5", border:"1.5px solid #EDE8BB", borderRadius:16, padding:"18px 18px", marginBottom:14 }}>
            <div style={{ fontSize:12, color:"#8A7A30", fontWeight:500, marginBottom:12 }}>💌 {child.name} 的心情便條</div>
            <div style={{ display:"flex", gap:10 }}>
              <div style={{ flex:1, background:"#FFFCEE", borderRadius:12, padding:"12px", display:"flex", alignItems:"center", gap:10 }}>
                <feeling.Scene size={36}/>
                <div>
                  <div style={{ fontSize:11, color:"#BA7517", marginBottom:1 }}>我感覺</div>
                  <div style={{ fontSize:15, fontWeight:500, color:feeling.color }}>{feeling.label}</div>
                </div>
              </div>
              <div style={{ flex:1, background:"#FFFCEE", borderRadius:12, padding:"12px", display:"flex", alignItems:"center", gap:10 }}>
                <span style={{ fontSize:24 }}>{need.icon}</span>
                <div>
                  <div style={{ fontSize:11, color:"#BA7517", marginBottom:1 }}>我需要</div>
                  <div style={{ fontSize:13, fontWeight:500, color:"#633806" }}>{need.label}</div>
                </div>
              </div>
            </div>
          </div>

          {/* 行動建議 */}
          <div style={{ background:"#FDFAF0", border:"1.5px solid #EDE8BB", borderRadius:14, padding:"16px 18px", marginBottom:12 }}>
            <div style={{ fontSize:11, color:"#8A7A30", fontWeight:500, marginBottom:8 }}>👋 先做這件事</div>
            <p style={{ fontSize:14, color:"#5A4A1A", lineHeight:1.85, margin:0 }}>{adv.action}</p>
          </div>

          {/* 對話建議 */}
          <div style={{ background:"var(--color-background-primary)", border:"1px solid var(--color-border-tertiary)", borderRadius:14, padding:"14px 18px", marginBottom:14 }}>
            <div style={{ fontSize:11, color:"#0F6E56", fontWeight:500, background:"#E6F4EE", borderRadius:8, padding:"3px 10px", display:"inline-block", marginBottom:12 }}>準備好後，試試這些對話</div>
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {adv.questions.map((q,i) => (
                <div key={i} style={{ background:"var(--color-background-secondary)", borderRadius:10, padding:"10px 14px", borderLeft:"3px solid #1D9E75" }}>
                  <span style={{ fontSize:13, color:"var(--color-text-primary)", lineHeight:1.8 }}>{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 儲存備註 */}
          {!noteSaved ? (
            <div style={{ background:"var(--color-background-primary)", border:"1px solid var(--color-border-tertiary)", borderRadius:14, padding:"16px 18px" }}>
              <div style={{ fontSize:13, fontWeight:500, color:"var(--color-text-primary)", marginBottom:10 }}>📝 家長備註（選填）</div>
              <textarea value={noteText} onChange={e=>setNoteText(e.target.value)} placeholder="記錄一下今天發生了什麼，或對話後的觀察…" style={{ width:"100%", borderRadius:10, border:"1px solid var(--color-border-secondary)", padding:"10px 12px", fontSize:14, resize:"none", height:80, boxSizing:"border-box", color:"var(--color-text-primary)", background:"var(--color-background-secondary)", outline:"none" }}/>
              <button onClick={handleSaveEmotion} disabled={saving} style={{ width:"100%", marginTop:12, background:"#EAF3DE", border:"1.5px solid #97C45950", borderRadius:12, padding:"13px 0", fontSize:15, fontWeight:500, color:"#3B6D11", cursor:"pointer", transition:"transform 0.1s" }} {...press}>儲存這次記錄 🌱</button>
            </div>
          ) : (
            <div style={{ background:"#EAF3DE", border:"1px solid #97C45950", borderRadius:14, padding:"20px", textAlign:"center" }}>
              <div style={{ fontSize:22, marginBottom:6 }}>🌱</div>
              <div style={{ fontSize:15, fontWeight:500, color:"#3B6D11", marginBottom:2 }}>記錄已儲存</div>
              <div style={{ fontSize:12, color:"#639922" }}>可以在「情緒日記」查看趨勢</div>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  // ─── 今晚聊什麼 ───────────────────────────────────────────────
  const renderTonight = () => (
    <div>
      <p style={{ fontSize:16, fontWeight:600, color:"var(--color-text-primary)", marginBottom:4 }}>睡前小儀式</p>
      <p style={{ fontSize:13, color:"var(--color-text-secondary)", marginBottom:22, lineHeight:1.7 }}>每天一個話題，讓 {child.name} 知道你想了解他 💛</p>
      {!topic ? (
        <div style={{ textAlign:"center", paddingTop:20 }}>
          <svg width="100" height="100" viewBox="0 0 120 120" fill="none" style={{ marginBottom:24 }}>
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
          <button onClick={()=>{ setTopic(TOPICS[Math.floor(Math.random()*TOPICS.length)]); setShowTip(false); }} style={{ background:"#F0EFFE", border:"1.5px solid #C8C3EE", borderRadius:16, padding:"15px 44px", fontSize:16, fontWeight:500, color:"#534AB7", cursor:"pointer", boxShadow:"0 3px 14px rgba(127,119,221,0.15)", transition:"transform 0.12s" }} {...press}>✨ 今晚聊什麼？</button>
        </div>
      ) : (
        <div>
          <div style={{ background:"var(--color-background-primary)", border:"1.5px solid #D8D5F0", borderRadius:16, padding:"24px 20px", textAlign:"center", marginBottom:13, boxShadow:"0 3px 14px rgba(127,119,221,0.1)" }}>
            <p style={{ fontSize:16, fontWeight:500, color:"var(--color-text-primary)", lineHeight:1.9, margin:0 }}>💬 {topic}</p>
          </div>
          {!showTip
            ? <button onClick={()=>setShowTip(true)} style={{ width:"100%", background:"#FDFAF0", border:"1.5px solid #EDE8BB", borderRadius:12, padding:"12px 0", fontSize:13, color:"#8A7A30", cursor:"pointer", fontWeight:500, marginBottom:10 }}>🌿 給爸媽的聊天小提示</button>
            : <div style={{ background:"#FDFAF0", borderRadius:12, padding:"14px 16px", marginBottom:10, border:"1.5px solid #EDE8BB" }}>
                <div style={{ fontSize:12, fontWeight:500, color:"#8A7A30", marginBottom:6 }}>聊天小提示</div>
                <p style={{ fontSize:13, color:"#5A4A1A", lineHeight:1.85, margin:0 }}>先分享你自己的答案，讓孩子感受到這是雙向的對話。不評價對錯，只是好奇地聆聽 🌿</p>
              </div>
          }
          <button onClick={()=>{ setTopic(TOPICS[Math.floor(Math.random()*TOPICS.length)]); setShowTip(false); setTopicNote(""); setTopicSaved(false); }} style={{ width:"100%", background:"var(--color-background-secondary)", border:"1px solid var(--color-border-tertiary)", borderRadius:12, padding:"12px 0", fontSize:13, color:"var(--color-text-secondary)", cursor:"pointer", marginBottom:14 }}>換一個話題</button>
          {!topicSaved ? (
            <div style={{ background:"var(--color-background-primary)", border:"1px solid var(--color-border-tertiary)", borderRadius:14, padding:"15px 18px" }}>
              <div style={{ fontSize:13, fontWeight:500, color:"var(--color-text-primary)", marginBottom:10 }}>📝 聊天紀錄（選填）</div>
              <textarea value={topicNote} onChange={e=>setTopicNote(e.target.value)} placeholder="今晚聊了什麼？孩子說了什麼讓你印象深刻的話？" style={{ width:"100%", borderRadius:10, border:"1px solid var(--color-border-secondary)", padding:"10px 12px", fontSize:13, resize:"none", height:80, boxSizing:"border-box", color:"var(--color-text-primary)", background:"var(--color-background-secondary)", outline:"none" }}/>
              <button onClick={handleSaveTopic} disabled={saving} style={{ width:"100%", marginTop:12, background:"#F0EFFE", border:"1.5px solid #C8C3EE", borderRadius:12, padding:"13px 0", fontSize:15, fontWeight:500, color:"#534AB7", cursor:"pointer" }}>儲存今晚的對話 💬</button>
            </div>
          ) : (
            <div style={{ background:"#F0EFFE", border:"1px solid #C8C3EE", borderRadius:14, padding:"20px", textAlign:"center" }}>
              <div style={{ fontSize:22, marginBottom:6 }}>💬</div>
              <div style={{ fontSize:15, fontWeight:500, color:"#534AB7", marginBottom:2 }}>對話已記錄</div>
              <div style={{ fontSize:12, color:"#7F77DD" }}>可以在「情緒日記」查看</div>
            </div>
          )}
        </div>
      )}
    </div>
  );

  // ─── 情緒日記 ─────────────────────────────────────────────────
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
          <div style={{ fontSize:12, color:"var(--color-text-secondary)", marginBottom:14 }}>{rec.date} {rec.time}</div>
          {rec.type==="emotion" && f && (
            <div>
              <div style={{ background:"#FFFEF5", border:"1.5px solid #EDE8BB", borderRadius:16, padding:"18px", marginBottom:13 }}>
                <div style={{ fontSize:12, color:"#8A7A30", fontWeight:500, marginBottom:11 }}>💌 {child.name} 的心情便條</div>
                <div style={{ display:"flex", gap:10 }}>
                  <div style={{ flex:1, background:"#FFFCEE", borderRadius:12, padding:"12px", display:"flex", alignItems:"center", gap:8 }}>
                    <f.Scene size={34}/><div><div style={{ fontSize:11, color:"#BA7517" }}>感覺</div><div style={{ fontSize:14, fontWeight:500, color:f.color }}>{f.label}</div></div>
                  </div>
                  {n && <div style={{ flex:1, background:"#FFFCEE", borderRadius:12, padding:"12px", display:"flex", alignItems:"center", gap:8 }}>
                    <span style={{ fontSize:22 }}>{n.icon}</span><div><div style={{ fontSize:11, color:"#BA7517" }}>需要</div><div style={{ fontSize:12, fontWeight:500, color:"#633806" }}>{n.label}</div></div>
                  </div>}
                </div>
              </div>
              {rec.note && <div style={{ background:"var(--color-background-primary)", border:"1px solid var(--color-border-tertiary)", borderRadius:12, padding:"12px 16px", marginBottom:11 }}><div style={{ fontSize:11, color:"var(--color-text-secondary)", marginBottom:5 }}>家長備註</div><p style={{ fontSize:13, color:"var(--color-text-primary)", lineHeight:1.8, margin:0 }}>{rec.note}</p></div>}
              {adv && <div style={{ background:"#F0EFFE", border:"1px solid #C8C3EE", borderRadius:12, padding:"14px 16px" }}>
                <div style={{ fontSize:11, color:"#534AB7", fontWeight:500, marginBottom:9 }}>當時的建議</div>
                {adv.questions.map((q,i) => <div key={i} style={{ fontSize:13, color:"#3C3489", lineHeight:1.8, paddingLeft:10, borderLeft:"2px solid #7F77DD", marginBottom:6 }}>{q}</div>)}
              </div>}
            </div>
          )}
          {rec.type==="topic" && (
            <div>
              <div style={{ background:"var(--color-background-primary)", border:"1.5px solid #D8D5F0", borderRadius:16, padding:"22px", marginBottom:12, textAlign:"center" }}>
                <div style={{ fontSize:12, color:"#534AB7", marginBottom:8 }}>💬 睡前話題</div>
                <p style={{ fontSize:15, fontWeight:500, color:"var(--color-text-primary)", lineHeight:1.9, margin:0 }}>{rec.topic}</p>
              </div>
              {rec.note && <div style={{ background:"var(--color-background-primary)", border:"1px solid var(--color-border-tertiary)", borderRadius:12, padding:"12px 16px" }}><div style={{ fontSize:11, color:"var(--color-text-secondary)", marginBottom:5 }}>聊天紀錄</div><p style={{ fontSize:13, color:"var(--color-text-primary)", lineHeight:1.8, margin:0 }}>{rec.note}</p></div>}
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
        <p style={{ fontSize:16, fontWeight:600, color:"var(--color-text-primary)", marginBottom:4 }}>{child.name} 的情緒日記</p>
        <p style={{ fontSize:13, color:"var(--color-text-secondary)", marginBottom:18, lineHeight:1.7 }}>最近兩週的記錄 📋</p>

        {/* 週曆 */}
        <div style={{ display:"flex", gap:6, marginBottom:22 }}>
          {last7.map(d => {
            const recs=byDate[d]||[]; const eRec=recs.find(r=>r.type==="emotion"); const f=eRec?FEELING_MAP[eRec.feelingId]:null; const isToday=d===todayStr();
            return (
              <div key={d} onClick={()=>eRec&&setDetailId(eRec.id)} style={{ flex:1, borderRadius:10, padding:"8px 3px", textAlign:"center", background:f?f.bg:"var(--color-background-secondary)", border:isToday?`2px solid ${childColor}`:`1px solid ${f?f.border:"var(--color-border-tertiary)"}`, cursor:eRec?"pointer":"default", boxShadow:f?`0 2px 8px ${f.shadow}`:"none" }}>
                <div style={{ fontSize:10, color:"var(--color-text-secondary)", marginBottom:2 }}>週{weekLabel(d)}</div>
                <div style={{ fontSize:10, color:"var(--color-text-secondary)", marginBottom:4 }}>{formatDate(d)}</div>
                <div style={{ width:8, height:8, borderRadius:"50%", background:f?f.dot:"var(--color-border-tertiary)", margin:"0 auto" }}/>
                {recs.length>1&&<div style={{ fontSize:9, color:"var(--color-text-secondary)", marginTop:2 }}>+{recs.length-1}</div>}
              </div>
            );
          })}
        </div>

        {/* 情緒趨勢 */}
        {topF.length>0 && (
          <div style={{ background:"var(--color-background-primary)", border:"1px solid var(--color-border-tertiary)", borderRadius:14, padding:"14px 18px", marginBottom:16 }}>
            <div style={{ fontSize:13, fontWeight:500, color:"var(--color-text-primary)", marginBottom:13 }}>最近最常出現的情緒</div>
            {topF.map(([fid,cnt]) => {
              const f=FEELING_MAP[fid]; const pct=Math.round((cnt/emoRecs.slice(0,14).length)*100);
              return (
                <div key={fid} style={{ marginBottom:10 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
                    <span style={{ fontSize:13, color:f.color, fontWeight:500 }}>{f.label}</span>
                    <span style={{ fontSize:12, color:"var(--color-text-secondary)" }}>{cnt} 次</span>
                  </div>
                  <div style={{ background:"var(--color-background-secondary)", borderRadius:6, height:6 }}>
                    <div style={{ width:`${pct}%`, height:"100%", background:f.dot, borderRadius:6 }}/>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 記錄列表 */}
        {childRecs.length===0
          ? <div style={{ textAlign:"center", padding:"36px 0", color:"var(--color-text-secondary)", fontSize:14 }}><div style={{ fontSize:32, marginBottom:12 }}>🌱</div>還沒有記錄，先去使用情緒小偵探吧！</div>
          : <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {childRecs.map(r => {
                if (r.type==="emotion") {
                  const f=FEELING_MAP[r.feelingId]; const n=NEED_MAP[r.needId];
                  return (
                    <button key={r.id} onClick={()=>setDetailId(r.id)} style={{ background:f.bg, border:`1px solid ${f.border}`, borderRadius:14, padding:"12px 16px", cursor:"pointer", textAlign:"left", display:"flex", alignItems:"center", gap:12, boxShadow:`0 2px 8px ${f.shadow}`, transition:"transform 0.1s" }} {...press}>
                      <f.Scene size={38}/><div style={{ flex:1 }}><div style={{ fontSize:11, color:"var(--color-text-secondary)", marginBottom:1 }}>{r.date} {r.time}</div><div style={{ fontSize:14, fontWeight:500, color:f.color }}>{f.label}</div>{n&&<div style={{ fontSize:12, color:f.color, opacity:0.7, marginTop:1 }}>{n.icon} {n.label}</div>}</div>
                      <span style={{ fontSize:16, opacity:0.2, color:f.color }}>›</span>
                    </button>
                  );
                }
                return (
                  <button key={r.id} onClick={()=>setDetailId(r.id)} style={{ background:"#F0EFFE", border:"1px solid #C8C3EE", borderRadius:14, padding:"12px 16px", cursor:"pointer", textAlign:"left", display:"flex", alignItems:"center", gap:12, boxShadow:"0 2px 8px rgba(127,119,221,0.1)", transition:"transform 0.1s" }} {...press}>
                    <span style={{ fontSize:26 }}>💬</span>
                    <div style={{ flex:1 }}><div style={{ fontSize:11, color:"var(--color-text-secondary)", marginBottom:1 }}>{r.date} {r.time}</div><div style={{ fontSize:13, fontWeight:500, color:"#534AB7" }}>睡前話題</div><div style={{ fontSize:12, color:"#7F77DD", marginTop:1 }}>{r.topic.slice(0,22)}…</div></div>
                    <span style={{ fontSize:16, opacity:0.2, color:"#7F77DD" }}>›</span>
                  </button>
                );
              })}
            </div>
        }
      </div>
    );
  };

  // ─── 主畫面 ───────────────────────────────────────────────────
  return (
    <div style={{ fontFamily:"var(--font-sans)", maxWidth:430, margin:"0 auto", paddingBottom:72, background:"var(--color-background-primary)", minHeight:"100vh" }}>
      {/* Toast */}
      {toast && (
        <div style={{ position:"fixed", top:16, left:"50%", transform:"translateX(-50%)", background:"#3B3B3B", color:"#fff", padding:"10px 20px", fontSize:13, fontWeight:500, borderRadius:24, zIndex:999, boxShadow:"0 4px 16px rgba(0,0,0,0.15)", whiteSpace:"nowrap" }}>{toast}</div>
      )}

      {/* Header */}
      <div style={{ padding:"12px 16px 10px", borderBottom:"1px solid var(--color-border-tertiary)", background:"var(--color-background-primary)" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <img src="https://lh3.googleusercontent.com/d/1mUlaruvPsTeJjX5zExpQ065gUPg7_Dk5" width="32" height="32" style={{ borderRadius:10, objectFit:"cover" }} onError={e=>{e.target.style.display="none";}}/>
            <div>
              <div style={{ fontSize:16, fontWeight:600, color:"var(--color-text-primary)", lineHeight:1.2 }}>心橋</div>
              <div style={{ fontSize:10, color:"var(--color-text-secondary)", lineHeight:1.4 }}>連結你與孩子之間，那座永不斷的橋</div>
            </div>
          </div>
          <div style={{ display:"flex", gap:6, alignItems:"center" }}>
            {children.map((c,i) => (
              <button key={i} onClick={()=>{ setActiveChild(i); resetDetective(); setDetailId(null); }} style={{ width:32, height:32, borderRadius:"50%", border:activeChild===i?`2px solid ${CHILD_COLORS[c.colorIdx]}`:"2px solid transparent", background:CHILD_BG[c.colorIdx], cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:600, color:CHILD_COLORS[c.colorIdx] }}>{c.name[0]}</button>
            ))}
            {children.length<4 && <button onClick={()=>setScreen("setup")} style={{ width:32, height:32, borderRadius:"50%", border:"1.5px dashed var(--color-border-secondary)", background:"transparent", cursor:"pointer", fontSize:18, color:"var(--color-text-secondary)", display:"flex", alignItems:"center", justifyContent:"center" }}>+</button>}
          </div>
        </div>
        {child && <div style={{ marginTop:6, fontSize:12, color:childColor, fontWeight:500 }}>👤 {child.name}</div>}
      </div>

      {/* 內容 */}
      <div style={{ padding:"18px 16px" }}>
        {tab==="detective" && renderDetective()}
        {tab==="tonight"  && renderTonight()}
        {tab==="records"  && renderRecords()}
      </div>

      {/* 底部導覽 */}
      <div style={{ position:"fixed", bottom:0, left:"50%", transform:"translateX(-50%)", width:"100%", maxWidth:430, background:"var(--color-background-primary)", borderTop:"1px solid var(--color-border-tertiary)", display:"flex", padding:"8px 0 calc(8px + env(safe-area-inset-bottom,0px))" }}>
        {NAV.map(([key,icon,label]) => (
          <button key={key} onClick={()=>switchTab(key)} style={{ flex:1, background:"none", border:"none", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", gap:3, padding:"6px 0", color:tab===key?childColor:"var(--color-text-secondary)", transition:"color 0.15s" }}>
            <span style={{ fontSize:20 }}>{icon}</span>
            <span style={{ fontSize:11, fontWeight:tab===key?600:400 }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
