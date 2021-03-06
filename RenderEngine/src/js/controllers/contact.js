import BaseController from './_base'
import index from '../../views/contact/index'
import sandbox from '../../views/contact/sandbox'

class ContactController extends BaseController {
    constructor(controllerConfig) {
        let views = { index, sandbox }
        super(controllerConfig, views)

        //IE10 fix: super not working correctly in constructor with babel
        if (!this.views) BaseController.call(this, controllerConfig, views)

        this.models.index = {
            folders: [{
                name: 'My Folder',
                children: [
                    {
                        name: 'Pictures',
                        children: [
                            {
                                name: '2017',
                                children: [{ name: 'Photoshop' }]
                            },
                            { name: '2018' }
                        ]
                    },
                    { name: 'Movies' }
                ]
            }]
        }
    }

    index(routeParams) {
        this.render('index')
    }

    sandbox() {
        this.render('sandbox')
    }
}

export default ContactController