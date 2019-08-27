function shortToFull(shortLicenseName) {
    var base = "Attribution"
    var short = shortLicenseName.toLowerCase()
    if (short.includes("nc")) { base += "-NonCommercial"}
    if (short.includes("sa")) { base += "-ShareAlike"}
    else if (short.includes("nd")) { base += "-NoDerivatives"}
    return base += " 4.0"
}

function fullToShort(fullLicenseName) {
    var base = 'CC BY'
    var full = fullLicenseName
    if (full.includes("noncommercial")) { base += "-NC" }
    if (full.includes("sharealike")) { base += "-SA" }
    else if (full.includes("noderivatives")) { base += "-ND" }
    return base += " 4.0"
}

function shortNameToIconsArray(shortLicenseName) {
    return shortLicenseName
        /*
        .toLowerCase()
        .slice(3, shortLicenseName.length - 4)
        .split('-')*/
}

export default { shortToFull, fullToShort, shortNameToIconsArray }