function groupAnagrams(arr) {
    const groupedAnagrams = [];

    for (const word of arr) {
        let foundGroup = false;
        for (const group of groupedAnagrams) {
            if (areAnagrams(word, group[0])) {
                group.push(word);
                foundGroup = true;
                break;
            }
        }
        if (!foundGroup) {
            groupedAnagrams.push([word]);
        }
    }

    return groupedAnagrams;
}

function areAnagrams(word1, word2) {
    if (word1.length !== word2.length) return false;

    const charCount = {};

    for (const char of word1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of word2) {
        if (!charCount[char]) {
            return false;
        } else {
            charCount[char]--;
        }
    }

    return true;
}

// testing array of strings yang di kasih 
const arr = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
console.log(groupAnagrams(arr));
