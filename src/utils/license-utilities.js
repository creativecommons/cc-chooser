const CC0Attributes = { BY: false, NC: false, ND: false, SA: false }
const CCBYAttributes = { BY: true, NC: false, ND: false, SA: false }
const defaultAttributes = { BY: undefined, NC: undefined, ND: undefined, SA: undefined }

function shortToAttr(shortLicenseName) {
    const short = shortLicenseName
    if (short.includes('CC0')) {
        return { ...CC0Attributes }
    }
    const nc = short.includes('NC')
    const nd = short.includes('ND')
    const sa = short.includes('SA')
    return { ...CCBYAttributes, NC: nc, ND: nd, SA: sa }
}

function attrToShort(attr) {
    if (attr.BY === undefined) return undefined
    if (!attr.BY) { return 'CC0 1.0' }
    let base = 'CC BY'
    if (attr.NC) { base += '-NC' }
    if (!attr.ND && attr.SA) {
        base += '-SA'
    } else if (attr.ND) {
        base += '-ND'
    }
    base += ' 4.0'
    return base
}

function attrToFull(attr) {
    if (attr.BY === undefined) { return undefined }
    if (!attr.BY) { return 'CC0 1.0 Universal' }
    let base = 'Attribution'
    if (attr.NC) { base += '-NonCommercial' }
    if (!attr.ND && attr.SA) {
        base += '-ShareAlike'
    } else if (attr.ND) {
        base += '-NoDerivatives'
    }
    base += ' 4.0 International'
    return base
}

function licenseUrl(attr, mode) {
    // Returns url to license from short license name with version number (eg. 'CC BY 4.0')
    // mode: web/ print (?ref=chooser-v1 is added to the end of the link if mode is web)
    const linkRef = mode === 'web' ? '/?ref=chooser-v1' : ''
    if (attr.BY === false) {
        return `https://creativecommons.org/publicdomain/zero/1.0${linkRef}`
    }
    let short = attrToShort(attr).toLowerCase().slice(3)
    short = short.slice(0, short.length - 4)
    return `https://creativecommons.org/licenses/${short}/4.0${linkRef}`
}

function licenseSlug(shortLicenseName) {
    // Returns lower case slugified string of license name without the version number
    // 'CC BY 4.0' -> 'cc-by'
    return shortLicenseName
        .toLowerCase()
        .replace(' ', '-')
        .slice(0, shortLicenseName.length - 4)
}

function licenseIconsArr(licenseAttributes) {
    if (!licenseAttributes.BY) {
        return ['zero']
    }
    const iconsArray = []
    for (const key in licenseAttributes) {
        if (licenseAttributes[key]) {
            iconsArray.push(key.toLowerCase())
        }
    }
    return iconsArray
}

function updateVisibleEnabledStatus(stepStatusData) {
    let visible = []
    let enabled = []
    let stepsDisabledDue = ''
    if (stepStatusData.FS) {
        // User will select from the dropdown
        if (stepStatusData.BY === false) {
            // User selected a license from the dropdown a CC0 license
            // First step, dropdown and attribution details should be visible and enabled
            visible = ['FS', 'DD', 'CW', 'AD']
            enabled = ['FS', 'DD', 'CW', 'AD']
            stepsDisabledDue = 'CC0'
        } else {
            // User hasn't selected anything yet, or selected a BY license
            // First step, dropdown and attribution details should be visible and enabled
            visible = ['FS', 'DD', 'AD']
            enabled = ['FS', 'DD', 'AD']
        }
    } else {
        // User uses the stepper for license selection
        if (stepStatusData.BY === false) {
            // User selects a CC0 license
            visible = ['FS', 'BY', 'NC', 'ND', 'SA', 'CW', 'AD']
            enabled = ['FS', 'BY', 'CW', 'AD']
            stepsDisabledDue = 'CC0'
        } else if (stepStatusData.ND) {
            // User selects an ND license: SA step is disabled
            visible = ['FS', 'BY', 'NC', 'ND', 'SA', 'AD']
            enabled = ['FS', 'BY', 'NC', 'ND', 'AD']
            stepsDisabledDue = 'CC0'
        } else {
            // User selects a non-ND BY license from the stepper
            visible = ['FS', 'BY', 'NC', 'ND', 'SA', 'AD']
            enabled = ['FS', 'BY', 'NC', 'ND', 'SA', 'AD']
        }
    }
    return { visible, enabled, stepsDisabledDue }
}

function generateHTML(attributionDetails, shortLicenseName) {
    const dataForHtmlGeneration = {
        htmlString: '',
        creator: '',
        workTitle: '',
        licenseLink: ''
    }
    const { creatorName, creatorProfileUrl, workTitle, workUrl } = attributionDetails
    dataForHtmlGeneration.htmlString =
        '<p xmlns:dct="http://purl.org/dc/terms/"' +
        ' xmlns:cc="http://creativecommons.org/ns#"' +
        ' class="license-text">'
    const iconStyle = 'style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"'
    const assetPathBase = 'https://mirrors.creativecommons.org/presskit/icons'
    const assetPathRef = '?ref=chooser-v1'
    let licenseIcons = `<img ${iconStyle} src="${assetPathBase}/cc.svg${assetPathRef}" />`
    if (shortLicenseName.includes('CC0')) {
        shortLicenseName = 'CC CC0 1.0'
    }
    licenseIcons += shortLicenseName
        .slice(3, shortLicenseName.length - 4)
        .split('-')
        .map(attr => `<img ${iconStyle} src="${assetPathBase}/${attr.toLowerCase()}.svg${assetPathRef}" />`
        ).join('')
    const licenseHref = licenseUrl(shortToAttr(shortLicenseName))
    dataForHtmlGeneration.licenseLink =
        `<a rel="license" href="${licenseHref}">${shortLicenseName}${licenseIcons}</a>`

    if (creatorName) {
        if (creatorProfileUrl) {
            dataForHtmlGeneration.creator =
                `<a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="${creatorProfileUrl}">${creatorName}</a>`
        } else {
            dataForHtmlGeneration.creator = `<span property="cc:attributionName">${creatorName}</span>`
        }
    }
    if (workTitle) {
        if (workUrl) {
            dataForHtmlGeneration.workTitle = `<a rel="cc:attributionURL" property="dct:title" href="${workUrl}">${workTitle}</a>`
        } else {
            dataForHtmlGeneration.workTitle = `<span property="dct:title">${workTitle}</span>`
        }
    }
    return dataForHtmlGeneration
}

export {
    defaultAttributes, CC0Attributes, CCBYAttributes, shortToAttr, attrToShort,
    attrToFull, licenseUrl, licenseSlug, licenseIconsArr, generateHTML, updateVisibleEnabledStatus
}
