
var loginActions = {
    with: function (email, pass) {
        return this
            .navigate()
            .waitForElementVisible('@form', 30000)
            .setValue('@emailInput', email)
            .setValue('@passInput', pass)
            .click('@loginButton')
    },
    expectAlertDanger: function (texto) {
        return this
            .waitForElementVisible('@alertDanger', 30000)
            .assert.containsText('@alertDanger', texto)
    },
    expectAlertInfo: function (texto) {
        return this
            .waitForElementVisible('@alertInfo', 30000)
            .assert.containsText('@alertInfo', texto)
    }
}

module.exports = {
    url: '/login',
    commands: [loginActions],
    elements: {
        form: '.card-login',
        emailInput: 'input[name=email]',
        passInput: 'input[name=password]',
        loginButton: '.login-button',
        alertDanger: '.alert-danger',
        alertInfo: '.alert-info'
    }
}