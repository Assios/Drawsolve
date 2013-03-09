function removeElement(list, element) {
    for (i = 0; i < list.length; i++) {
        if (list[i] == element) {
            list.splice(i, 1);
            i--;
        }
    }
    return list;
}

function sortByWordLength(list, wordLength) {
    for (i = 0; i < list.length; i++) {
        if (list[i] == wordLength) {
            for (k = 0; k < i; k++)
            list[k] = 'x';
        }
    }
    for (i = 0; i < list.length; i++) {
        if (list[i] == (parseInt(wordLength) + 1) + '') {
            for (k = i; k < list.length; k++)
            list[k] = 'x';
        }
    }
    removeElement(list, 'x');
    list.shift()
    return list;
}

function findWord(list, letters) {
    var wrongWord = [];
    for (i = 0; i < list.length; i++) {
        var words = list[i];
        for (k = 0; k < words.length; k++) {
            var letter = words[k];
            if (letters.indexOf(letter) == -1) {
                list[i] = "x";
            }
        }
    }

    removeElement(list, 'x');
    for (i = 0; i < list.length; i++) {
        var wordz = list[i];
        templetters = letters;
        for (k = 0; k < wordz.length; k++) {
            var letterz = wordz[k];
            if (templetters.indexOf(letterz) != -1) {
                templetters = templetters.replace(letterz, " ");
            } else {
                wrongWord.push(wordz);
            }
        }
    }
    var solved = [];
    for (i = 0; i < list.length; i++) {
        if (wrongWord.indexOf(list[i]) == -1) {
            solved.push(list[i]);
        }
    }
    return solved;
}