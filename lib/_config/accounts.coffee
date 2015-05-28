# See https://github.com/meteor-useraccounts/core/blob/master/Guide.md
mySubmitFunc = (error, state) ->
  if !error
    if state == 'signIn'
      
      # ...
    else
    if state == 'signUp'
      
      # ...
    else
  return




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
  homeRoutePath: '/' || null
  
  # Hooks
  onLogoutHook: ->
    console.log 'logout'

  onSubmitHook: mySubmitFunc
    
    


AccountsTemplates.configureRoute 'signUp', redirect: ->
  if Meteor.user().roles[0] == 'hospital'
    Router.go 'new-hospital'
  else
    Router.go '/'
  return




AccountsTemplates.configureRoute 'forgotPwd'

AccountsTemplates.configureRoute 'signIn', redirect: ->
  if Meteor.user().roles[0] == 'hospital'
    Router.go 'hospitalinfo'
  else
    Router.go '/'
  return

