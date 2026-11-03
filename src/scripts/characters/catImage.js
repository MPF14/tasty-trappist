const walking1 = [
    ".......AA....",
    "......ACA....",
    ".....ACA.....",
    ".....ACA.....",
    ".....ACA.....",
    "....ABBBA....",
    "..AABCCCBAA..",
    "..ACACCCACA..",
    "..ADBABABDA..",
    "..ADCBCBCDA..",
    "AABCCCCCCCBAA",
    ".ACCCCDCCCCA.",
    "AABCACDCACBAA",
    ".ACCADDDACCA.",
    "..ACDDEDDCA..",
    "...AABCBAA...",
    "...ACBABCA...",
    "...ADA.ADA...",
    "....AA.AA...."
];
const walking2 = [
    "....",
    "......AA.....",
    ".....ACA.....",
    ".....ACA.....",
    ".....ACA.....",
    ".....ACA.....",
    "....ABBBA....",
    "..AABCCCBAA..",
    "..ADABCBADA..",
    "..ADBAAABDA..",
    "..ACCBCBCCA..",
    "AABCCCCCCCBAA",
    ".ACCCCDCCCCA.",
    "AABCACDCACBAA",
    ".ACCADDDACCA.",
    "..ACDDEDDCA..",
    "...AAAAABA...",
    "....AA.ADA...",
    ".......AAA..."
];
const walking3 = [
    "....AA.......",
    "....ACA......",
    ".....BCA.....",
    ".....ACA.....",
    ".....ACA.....",
    "....ABBBA....",
    "..AABCCCBAA..",
    "..ACACCCACA..",
    "..ADBABABDA..",
    "..ADCBCBCDA..",
    "AABCCCCCCCBAA",
    ".ACCCCDCCCCA.",
    "AABCACDCACBAA",
    ".ACCADDDACCA.",
    "..ACDDEDDCA..",
    "...AABCBAA...",
    "...ACBABCA...",
    "...ADA.ADA...",
    "....AA.AA...."
];
const walking4 = [
    "....",
    ".....AA......",
    ".....ACA.....",
    ".....ACA.....",
    ".....ACA.....",
    ".....ACA.....",
    "....ABBBA....",
    "..AABCCCBAA..",
    "..ADABCBADA..",
    "..ADBAAABDA..",
    "..ACCBCBCCA..",
    "AABCCCCCCCBAA",
    ".ACCCCDCCCCA.",
    "AABCACDCACBAA",
    ".ACCADDDACCA.",
    "..ACDDEDDCA..",
    "...AAAAABA...",
    "...ADA.AA....",
    "...AAA......."
];
const sleeping1 = [
    "......",
    "....AAAAAAA....",
    "...ABCBCCBBA...",
    "..ACCCCCCCCCA..",
    ".ABCAACCCAACBA.",
    ".ACCADABADACCA.",
    "ABCCACAAADACCBA",
    "ACCCABCBBCABCCA",
    "ACCCACCBCCBBBCA",
    "ACAACCCCCCCCACA",
    "ACCAAADAACBAABA",
    ".AAACCDCCCCBAA.",
    ".ABBADEDDCBAA..",
    "..ACBAAAAAA....",
    "...ACCCCA......",
    "....AAAA......."
];
const sleeping2 = [
    "....AAAAAAA....",
    "...AABCBCBAA...",
    "..ABCCCCCCCBA..",
    ".ABCCCCCCCCCCA.",
    ".ACCAACCCAACBA.",
    "ABCCADABADACCBA",
    "ACCCACAAADACCBA",
    "ACCCABCBBCABCCA",
    "ACCCACCBCCBBBCA",
    "ACAACCCCCCCCACA",
    "ACCAAADAACBAABA",
    "ABAACCDCCCCBABA",
    ".ABBADEDDCCBAA..",
    "..ACBAAAAAAA...",
    "...ACCCCA......",
    "....AAAA......."
];

const sitting1 = [
    "..AA.....AA..",
    "..ACA...ACA..",
    "..ADBABABDA..",
    "..ADCBCBCDA..",
    "AABCCCCCCCBAA",
    ".ACCCCDCCCCA.",
    "AABAACDCAABAA",
    ".ACCCDDDCCCA.",
    "..ACDDEDDCA..",
    "...AABBBAAA..",
    "..AABCCCBAA..",
    ".ACACBDCCACA.",
    ".ACACACACACA.",
    ".ABADABACABA.",
    "..ABAAAACAA..",
    "...AA..ADA...",
    ".......AA...."
];

const sitting2 = [
    ".............",
    "..AA.....AA..",
    "..ACA...ACA..",
    "..ADBABABDA..",
    "..ADCBCBCDA..",
    "AABCCCCCCCBAA",
    ".ACCCCDCCCCA.",
    "AABAACDCAABAA",
    ".ACCCDADCCCA.",
    "..AAAAEBDCA..",
    "..ACCAEBAAA..",
    ".AABDAABCACA.",
    ".ABAABCACACA.",
    ".ABCABBACABA.",
    "..ADCAAACAA..",
    "...AA..ADA...",
    ".......AA...."
];

const sitting3 = [
    "..AA.....AA..",
    "..ACA...ACA..",
    "..ADBABABDA..",
    "..ADCBCBCDA..",
    "AABCCCCCCCBAA",
    ".ACCCCDCCCCA.",
    "AABAACDCAABAA",
    ".ACCCBADCCCA.",
    "..ABAECBDCA..",
    "..AAAEAAAAA..",
    "..ACCABBBABA.",
    ".AABDAABCACA.",
    ".ABAABCACACA.",
    ".ABCABBACABA.",
    "..ADCAAACAA..",
    "...AA..ADA...",
    ".......AA...."
];

const sitting4 = [
    ".............",
    "..AA.....AA..",
    "..ACA...ACA..",
    "..ADBABABDA..",
    "..ADCBCBCDA..",
    "AABCCCCCCCBAA",
    ".ACCCCDCCCCA.",
    "AABAACDCAABAA",
    ".ACCCBADCCCA.",
    "..ABAEEBDCA..",
    "..AAAAAAAAA..",
    ".AACCAABBACA.",
    ".AABDACACACA.",
    ".ABAABBACABA.",
    "..ADCAAACAA..",
    "...AA..ADA...",
    ".......AA...."
];
const pouncing1 = [
    "AA...................",
    "ACA..................",
    "ACA............AAA...",
    "ACA......AAAA.ADDA...",
    "ACA......ADDCABCA....",
    "ACBA.AAAA.ACBCBCBA...",
    "ABCBABCBBAABCCCCCCA..",
    ".ABCCBCBCABCCCACDABAA",
    "..ABCCCCCACCCCACDACA.",
    "..AABCCCCBBCCCDDEDCAA",
    "...ACCBCCCBBCCCCCBA..",
    "...ACCAABBCCBAAAAA...",
    "....ADDCAAACABA......",
    ".....AAAA.AAAAA......"
];

const pouncing2 = [
    "AA...................",
    "ACA..................",
    "ACA............AAA...",
    "ACA......AAAA.ADDA...",
    "ACA......ADDCABCA....",
    "ACBA..AA..ACBCBCBA...",
    "ABCBAABBAAABCCCCCCA..",
    ".ABCCBCBCABCCCACDABAA",
    "..ABCCCCCACCCCACDACA.",
    "..AABCBCCBBCCCDDEDCAA",
    "...ACCBACCBBCCCCCBA..",
    "....ACCBABCCBAAAAA...",
    ".....ADDBAACABA......",
    "......AAA.AAAAA......"
];


export const cat = {
    colors: {
        A: "#3b2b26",
        B: "#5d5146",
        C: "#807267",
        D: "#d8d1b6",
        E: "#c46d86"
    },

    animations: {
        walking: {
            frames: [walking1, walking2, walking3, walking4],
            fps: 2,
            loop: true
        },
        sleeping: {
            frames: [sleeping1, sleeping2],
            fps: 1,
            loop: true
        },
        standing: {
            frames: [walking1, walking3],
            fps: 1,
            loop: true
        },
        sitting: {
            frames: [sitting1, sitting2, sitting3, sitting4],
            fps: 4,
            loop: true
        },
        pouncing: {
            frames: [pouncing1, pouncing2],
            fps: 2,
            loop: true
        }
    }
};