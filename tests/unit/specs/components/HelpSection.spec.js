import { mount, createLocalVue } from '@vue/test-utils'
import HelpSection from '@/components/HelpSection.vue'
import VueVocabulary from '@creativecommons/vue-vocabulary/vue-vocabulary.common'

describe('HelpSection.vue', () => {
    let wrapper

    beforeEach(() => {
        const localVue = createLocalVue()
        localVue.use(VueVocabulary)
        wrapper = mount(HelpSection, {
            localVue,
            mocks: {
                $t: key => key
            },
            data: () => ({
                sixLicensesImg: '',
                modals: {
                    1: {
                        status: false,
                        title: 'what-are-cc-licenses'
                    },
                    2: {
                        status: false,
                        title: 'how-licenses-work'
                    },
                    3: {
                        status: false,
                        title: 'what-icons-mean'
                    },
                    4: {
                        status: false,
                        title: 'considerations-before-licensing'
                    },
                    5: {
                        status: false,
                        title: 'how-formally-license'
                    },
                    6: {
                        status: false,
                        title: 'six-cc-licenses'
                    },
                    7: {
                        status: false,
                        title: 'how-licenses-communicated'
                    },
                    8: {
                        status: false,
                        title: 'what-free-culture-license'
                    },
                    9: {
                        status: false,
                        title: 'look-earlier-license-ver'
                    }
                }
            })
        })
    })

    it('Check if HelpSection.vue component renders without any errors', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    // Test for DOM elements which must be present
    it('Check if the help section is displayed in the DOM', () => {
        expect(wrapper.contains('.help-section')).toBe(true)
    })
    it('Check if the main ul tag with help links is present', () => {
        expect(wrapper.contains('.help-links')).toBe(true)
    })
    it('Check if all the 9 li tags are present in the DOM', () => {
        expect(wrapper.findAll('.help-link').length).toBe(9)
    })
    it('Check if "What Are Creative Commons Licenses?" modal is rendered to DOM', () => {
        const modalId = 1
        const modalButton = `ul > li:nth-child(${modalId}) > a`
        expect(wrapper.contains(modalButton)).toBe(true)
        wrapper.find(modalButton).trigger('click')
        expect(wrapper.vm.modals[modalId].status).toBe(true)
    })
    it('Check if "How do the Licenses Work?" modal is rendered to DOM', () => {
        const modalId = 2
        const modalButton = `ul > li:nth-child(${modalId}) > a`
        expect(wrapper.contains(modalButton)).toBe(true)
        wrapper.find(modalButton).trigger('click')
        expect(wrapper.vm.modals[modalId].status).toBe(true)
    })
    it('Check if "What do the Icons Mean?" modal is rendered to DOM', () => {
        const modalId = 3
        const modalButton = `ul > li:nth-child(${modalId}) > a`
        expect(wrapper.contains(modalButton)).toBe(true)
        wrapper.find(modalButton).trigger('click')
        expect(wrapper.vm.modals[modalId].status).toBe(true)
    })
    it('Check if "Considerations Before Licensing" modal is rendered to DOM', () => {
        const modalId = 4
        const modalButton = `ul > li:nth-child(${modalId}) > a`
        expect(wrapper.contains(modalButton)).toBe(true)
        wrapper.find(modalButton).trigger('click')
        expect(wrapper.vm.modals[modalId].status).toBe(true)
    })
    it('Check if "How do I Formally License my Work?" modal is rendered to DOM', () => {
        const modalId = 5
        const modalButton = `ul > li:nth-child(${modalId}) > a`
        expect(wrapper.contains(modalButton)).toBe(true)
        wrapper.find(modalButton).trigger('click')
        expect(wrapper.vm.modals[modalId].status).toBe(true)
    })
    it('Check if "The Six Creative Commons Licenses" modal is rendered to DOM', () => {
        const modalId = 6
        const modalButton = `ul > li:nth-child(${modalId}) > a`
        expect(wrapper.contains(modalButton)).toBe(true)
        wrapper.find(modalButton).trigger('click')
        expect(wrapper.vm.modals[modalId].status).toBe(true)
    })
    it('Check if "How are Licenses Communicated?" modal is rendered to DOM', () => {
        const modalId = 7
        const modalButton = `ul > li:nth-child(${modalId}) > a`
        expect(wrapper.contains(modalButton)).toBe(true)
        wrapper.find(modalButton).trigger('click')
        expect(wrapper.vm.modals[modalId].status).toBe(true)
    })
    it('Check if " What is a Free Culture License?" modal is rendered to DOM', () => {
        const modalId = 8
        const modalButton = `ul > li:nth-child(${modalId}) > a`
        expect(wrapper.contains(modalButton)).toBe(true)
        wrapper.find(modalButton).trigger('click')
        expect(wrapper.vm.modals[modalId].status).toBe(true)
    })
    it('Check if "Looking for Earlier License Versions, including Ports?" modal is rendered to DOM', () => {
        const modalId = 9
        const modalButton = `ul > li:nth-child(${modalId}) > a`
        expect(wrapper.contains(modalButton)).toBe(true)
        wrapper.find(modalButton).trigger('click')
        expect(wrapper.vm.modals[modalId].status).toBe(true)
    })
})
