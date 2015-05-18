# See https://github.com/meteor-useraccounts/core/blob/master/Guide.md

AccountsTemplates.configure
  
  # Behaviour
  confirmPassword: false
  enablePasswordChange: true
  forbidClientAccountCreation: false
  overrideLoginErrors: true
  sendVerificationEmail: false
  lowercaseUsername: false
  
  # Appearance
  showAddRemoveServices: true
  showForgotPasswordLink: true
  showLabels: true
  showPlaceholders: true
  showResendVerificationEmailLink: false
  
  # Client-side Validation
  continuousValidation: false
  negativeFeedback: false
  negativeValidation: true
  positiveValidation: false
  positiveFeedback: true
  showValidating: true
  
  # Privacy Policy and Terms of Use
  privacyUrl: Config.privacyUrl || null
  termsUrl: Config.termsUrl || null
  
  # Redirects
  homeRoutePath: '/newHospital' || null
  
  # Hooks
  onLogoutHook: ->
    console.log 'logout'

  onSubmitHook: ->
    console.log 'submitting form'
    Router.go '/newHospital/'


AccountsTemplates.configureRoute 'signUp'
AccountsTemplates.configureRoute 'forgotPwd'

AccountsTemplates.configureRoute 'signIn', redirect: ->
  user = Meteor.user()
  if user
    Router.go '/newHospital/'
  return



# AccountsTemplates.configure({
#   confirmPassword: false,
#   enablePasswordChange: true,
#   forbidClientAccountCreation: false,
#   overrideLoginErrors: true,
#   sendVerificationEmail: false,
#   lowercaseUsername: false,
#   showAddRemoveServices: true,
#   showForgotPasswordLink: true,
#   showLabels: true,
#   showPlaceholders: true,
#   showResendVerificationEmailLink: false,
#   continuousValidation: false,
#   negativeFeedback: false,
#   negativeValidation: true,
#   positiveValidation: false,
#   positiveFeedback: true,
#   showValidating: true,
#   privacyUrl: Config.privacyUrl || null,
#   termsUrl: Config.termsUrl || null,
#   homeRoutePath: Config.dashboardRoute || null,

#   onLogoutHook: function() {
#     return console.log('logout');
#   },

#   onSubmitHook: function() {
#     return console.log('submitting form');
#   }
# });

# AccountsTemplates.configureRoute('signIn');

# AccountsTemplates.configureRoute('signUp');

# AccountsTemplates.configureRoute('forgotPwd');

# // ---
# // generated by coffee-script 1.9.2