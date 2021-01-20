export const messages = {
    app: {
        title: 'License Chooser',
        'page-title': 'Chooser'
    },
    header: {
        'nav-feedback': 'FEEDBACK'
    },
    'locale-selector.label': 'Selected language',
    chooser: {
        heading: 'LICENSE CHOOSER',
        instructions: 'Follow the steps to select the appropriate license for your work. ' +
            'This site does not store any information.'
    },
    stepper: {
        nav: {
            'previous-label': 'BACK',
            'next-label': 'NEXT',
            'done-label': 'DONE',
            'restart-label': 'Start again'
        },
        yes: 'Yes. ',
        no: 'No. ',
        'disabled-text': 'This step is disabled due to selecting waiver of copyright through use of CC0.',
        'disabled-text-ND': 'This step is disabled due to selecting ND, which does not allow for adaptations.',
        FS: {
            heading: 'License Expertise',
            question: 'Do you know which license you need?',
            selected: 'I know the license I need.',
            'not-selected': 'I need help selecting a license.'
        },
        BY: {
            heading: 'Attribution',
            question: 'Do you want attribution for your work?',
            selected: 'Anyone using my work must include proper attribution.',
            'not-selected': 'Anyone can use my work, even without giving me attribution.'
        },
        NC: {
            heading: 'Commercial Use',
            question: 'Do you want to allow others to use your work commercially?',
            selected: 'Others can use my work, even for commercial purposes.',
            'not-selected': 'Others can not use my work for commercial purposes.'
        },
        ND: {
            heading: 'Derivative Works',
            question: 'Do you want to allow others to remix, adapt, or build upon your work?',
            selected: 'Others can remix, adapt, or build upon my work.',
            'not-selected': 'Others may only use my work in unadapted form.'
        },
        SA: {
            heading: 'Sharing Requirements',
            question: 'Do you want to allow others to share adaptations of your work under any terms?',
            selected: 'Others can share adaptations of my work under any terms.',
            'not-selected': 'Others must use the same CC license if they adapt my work.'
        },
        CW: {
            heading: 'Copyright Waiver',
            question: 'Waive Your Copyright',
            selected: 'I waived copyright',
            'link-label': 'the terms and intended legal effect of CC0,',
            'copyright-waive-agreement':
                'I hereby waive all copyright and related or neighboring rights ' +
                'together with all associated claims and causes of action with respect ' +
                'to this work to the extent possible under the law.',
            'copyright-waive-confirmation':
                'I have read and understand {link} and hereby voluntarily elect to apply it to this work.'
        },
        DD: {
            heading: 'Creative Commons License',
            question: 'Which license do you need?',
            placeholder: 'Creative Commons License'
        },
        AD: {
            heading: 'Attribution Details',
            instructions: 'Filling out this form is optional, but helps others attribute ' +
                'your work to you, and fills in machine-readable code.',
            form: {
                'creator-name': {
                    label: 'Creator of Work',
                    placeholder: 'Jane Doe'
                },
                'creator-profile': {
                    label: 'Link to Creator Profile',
                    placeholder: 'https://janedoe.com'
                },
                'work-title': {
                    label: 'Title of Work',
                    placeholder: 'This work'
                },
                'work-url': {
                    label: 'Link to Work',
                    placeholder: 'https://janedoe.com/best-photo-ever.jpg'
                }
            }
        }
    },
    'license-details-card': {
        heading: 'RECOMMENDED LICENSE',
        'heading-cc0': 'RECOMMENDED',
        'full-description': {
            cc0: 'By marking your work with a CC0 public domain dedication, you are giving up ' +
                'your copyright and allowing reusers to distribute, remix, adapt, and ' +
                'build upon the material in any medium or format, even for commercial purposes.',
            'cc-by': 'This license requires that reusers give credit to the creator. ' +
                'It allows reusers to distribute, remix, adapt, and build upon the material ' +
                'in any medium or format, even for commercial purposes.',
            'cc-by-sa': 'This license requires that reusers give credit to the creator. ' +
                'It allows reusers to distribute, remix, adapt, and build upon the material ' +
                'in any medium or format, even for commercial purposes. If others remix, adapt, ' +
                'or build upon the material, they must license the modified material under identical terms. ',
            'cc-by-nd': 'This license requires that reusers give credit to the creator. ' +
                'It allows reusers to copy and distribute the material in any medium or format ' +
                'in unadapted form only, even for commercial purposes. ',
            'cc-by-nc': 'This license requires that reusers give credit to the creator. ' +
                'It allows reusers to distribute, remix, adapt, and build upon the material ' +
                'in any medium or format, for noncommercial purposes only.',
            'cc-by-nc-sa': 'This license requires that reusers give credit to the creator. ' +
                'It allows reusers to distribute, remix, adapt, and build upon the material ' +
                'in any medium or format, for noncommercial purposes only. If others modify ' +
                'or adapt the material, they must license the modified material under identical terms.',
            'cc-by-nc-nd': 'This license requires that reusers give credit to the creator. ' +
                'It allows reusers to copy and distribute the material in any medium or format, ' +
                'for noncommercial purposes only. If others remix, adapt, or build upon the material, ' +
                'they may not distribute the modified material.'
        },
        'item-description': {
            zero: 'This work has been marked as dedicated to the public domain.',
            by: 'Credit must be given to you, the creator.',
            nc: 'Only noncommercial use of your work is permitted.',
            nd: 'No derivatives or adaptations of your work are permitted.',
            sa: 'Adaptations must be shared under the same terms.'
        },
        caption: {
            nc: 'Noncommercial means not primarily intended for or directed towards ' +
                'commercial advantage or monetary compensation.'
        }
    },
    'license-use': {
        heading: 'Mark your work',
        'common-instructions': 'Choose the kind of work to get appropriate license code or public domain marking.',
        'web-instructions': 'If you are licensing or marking one work, ' +
            'paste the code next to it. If you are licensing or marking the whole page or blog, ' +
            'you can paste the code at the bottom of the page.',
        'web-tab-heading': 'Website',
        'print-media-tab-heading': 'Print Work or Media',
        'print-media-instructions': 'Copy the text below and paste it on the title ' +
            'and/or copyright page of your print work or presentation, or in the credits of your media.',
        'rich-text-label': 'Rich Text',
        'html-label': 'HTML',
        'plain-text-label': 'Plain Text',
        'xmp-label': 'Download meta data XMP',
        'copy-label': 'Copy',
        'copied-label': 'Copied!',
        richtext: {
            'full-text': '{workTitle}{by}{creator}{licenseMark} {license}{print-instructions}',
            workTitle: 'This work',
            by: ' by ',
            'licensed-text': ' is licensed under',
            'marked-text': ' is marked with',
            'print-instructions': '. To view a copy of this license, visit {linkToLicenseDeed}'
        },
        print: {
            text: ' To view a copy of this license, visit {linkToLicenseDeed}'
        }
    },
    help: {
        heading: 'CONFUSED? NEED HELP?',
        'what-are-cc-licenses': {
            heading: 'What Are Creative Commons Licenses?',
            text: 'Creative Commons legal tools give everyone from individual creators ' +
                'to large companies a simple, standardized way to grant copyright permissions ' +
                'to their creative work. They are designed to forge a balance inside ' +
                'the traditional "all rights reserved" setting that copyright law creates.',
            footer: 'For more information, please see [About the Licenses](https://creativecommons.org/licenses/).'
        },
        'how-licenses-work': {
            heading: 'How do the Licenses Work?',
            text: 'There are six different Creative Commons licenses, as well as one public domain ' +
                'dedication tool. Creators choose the option that is right for them, and then apply ' +
                'that license to their copyrighted work. Anyone who wants to reuse the work of the ' +
                'creator in a manner that requires permission under copyright must comply with ' +
                'the terms of the license.',
            footer: 'For more information, please see [About the Licenses](https://creativecommons.org/licenses/)'
        },
        'what-icons-mean': {
            heading: 'What do the Icons Mean?',
            text: 'The icons represent key features of the different CC license options:',
            BY: {
                text: 'Credit must be given to you, the creator.',
                'long-name': 'Attribution Required',
                'icon-alt-text': 'Attribution Required Icon',
                'short-name': '(BY)'
            },
            ND: {
                text: 'No derivatives or adaptations of your work are permitted.',
                'long-name': 'Modifying Not Allowed',
                'icon-alt-text': 'Modifying Not Allowed Icon',
                'short-name': '(ND/ NoDerivatives)'
            },
            NC: {
                text: 'Only noncommercial use of your work is permitted.',
                'long-name': 'Commercial Use Not Allowed',
                'icon-alt-text': 'Commercial Use Not Allowed Icon',
                'short-name': '(NC/ NonCommercial)'
            },
            SA: {
                text: 'Adaptations must be shared under the same terms.',
                'long-name': 'Distributed on Same Terms',
                'icon-alt-text': 'Distributed on Same Terms Icon',
                'short-name': '(SA/ ShareAlike)'
            },
            footer: ''
        },
        'how-licenses-communicated': {
            heading: 'How are Licenses Communicated?',
            text: 'Creative Commons licenses can be represented by their names, their associated icons,' +
                'or both. For example, a CC BY-NC license, which requires attribution, and prohibits ' +
                'commercial use could be represented by its:',
            'full-name': 'Full Name',
            'short-name': 'Short Name',
            'license-icons': 'Icons',
            'CC-BY-NC': 'Attribution-NonCommercial 4.0 International',
            footer: ''
        },
        'considerations-before-licensing': {
            heading: 'Considerations Before Licensing',
            text: 'There are a number of things you should consider before you apply a ' +
                'Creative Commons license to your work, or before using Creative Commons-licenced material.' +
                '\n\n' +
                '[Considerations for Licensors](https://wiki.creativecommons.org/wiki/Considerations_for_licensors_and_licensees#Considerations_for_licensors) ' +
                '- If you are licensing your own work ' +
                '\n\n' +
                '[Considerations for Licensees](https://wiki.creativecommons.org/wiki/Considerations_for_licensors_and_licensees#Considerations_for_licensees)' +
                "- someone else's licensed work",
            footer: "For more information, please see [the CC wiki's page on Considerations for Licensors and Licensees](https://wiki.creativecommons.org/wiki/Before_Licensing)."
        },
        'how-formally-license': {
            heading: 'How do I Formally License my Work?',
            text: 'Licensing your work is as simple as marking it under the specific license you choose. ' +
                'This marking can be as simple as a bit of text stating the license in a copyright notice, ' +
                'or as complex as embedding the license information on your website using the HTML code ' +
                'associated with the particular license. We strongly recommend at least including a link ' +
                'to the applicable license.',
            footer: ''
        },
        'six-cc-licenses': {
            heading: 'The Six Creative Commons Licenses',
            text: 'There are six main licenses that Creative Commons offers.' +
                '\n\n' +
                'In the diagram to the right, you can see the six main licenses and the public ' +
                'domain CC0 license, and how restrictive they are, with licenses at the top being ' +
                'the least restrictive, and licenses at the bottom being the most restrictive.' +
                '\n\n' +
                'If you are unsure about which one is right for you and your work, please select ' +
                '**I need help selecting a license** on the first question of this page.',
            footer: 'For more information, please read more about ' +
                '[CC Licenses and Examples](https://creativecommons.org/share-your-work/licensing-types-examples/).'
        },
        'what-free-culture-license': {
            heading: 'What is a Free Culture License?',
            text: 'CC uses the definition of free cultural works at ' +
                '[Freedom Defined](https://freedomdefined.org/Definition) to categorize certain ' +
                'CC licenses as Free Culture Licenses. Freedom Defined is an open organization of ' +
                'free culture advocates and researchers; the definition was developed by its community ' +
                'as a parallel to efforts such as the Free Software Definition, to have a standard for ' +
                'defining Free Culture. Using that definition, material licensed under CC BY or BY-SA ' +
                'is a free cultural work, as is anything in the worldwide public domain marked with CC0 ' +
                'or the Public Domain Mark.',
            footer: 'Read more about ' +
                '[Understanding Free Cultural Works](https://creativecommons.org/share-your-work/public-domain/freeworks)'
        },
        'look-earlier-license-ver': {
            heading: 'Looking for Earlier License Versions, including Ports?',
            text: 'The most recent license version is 4.0, which can be used internationally. ' +
                'Earlier versions of licenses, including 3.0 international and ports localized ' +
                'to particular jurisdictions, can still be used on the legacy version of the ' +
                '[License Chooser](https://creativecommons.org/choose/)' +
                '\n\n' +
                'Click on the link at the top of the page **"Looking for earlier license versions,' +
                'including ports?"** and follow the prompts to use earlier license versions.',
            footer: ''
        }
    },
    alt: {
        'free-works-icon': 'Free Works Icon',
        'non-free-works-icon': 'Icon for a non-Free Works License',
        'cc-logo': 'Creative Commons'
    },
    footer: {
        donation: {
            header: 'OUR WORK RELIES ON YOU!',
            call: 'Help us keep Internet free and open.'
        },
        licensing: {
            text: "Except where otherwise <a href='https://creativecommons.org/policies#license'>noted</a>," +
                "content on this site is licensed under a <a href='https://creativecommons.org/licenses/by/4.0/'>" +
                'Creative Commons Attribution 4.0 International license</a>. Icons by ' +
                "<a href='https://creativecommons.org/website-icons'>Noun Project</a>."
        },
        contribute: "Contribute on <a href='https://github.com/creativecommons/chooser'>Github</a>."
    },
    'free-culture-work': {
        yes: 'Free Culture License',
        no: 'Not a Free Culture License'
    }
}
