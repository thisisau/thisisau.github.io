function concert_pitch(en_di, id, path_tr, path_conc) {
    if (en_di === true) {
        idHTML(id, `<a href="#" onclick='concert_pitch(false, "${id}", "${path_tr}", "${path_conc}")'>[hide]</a><br><a href="${path_conc}" target="_blank">[concert pitch]</a><br><a href="${path_tr}" target="_blank">[transposed]</a>`)
    }
    if (en_di === false) {
        idHTML(id, `<a href="#" onclick='concert_pitch(true, "${id}", "${path_tr}", "${path_conc}")'>[link]</a>`)
    }
}