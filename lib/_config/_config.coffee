# These values get propagated through the app
# E.g. The 'name' and 'subtitle' are used in seo.coffee

@Config =

	# Basic Details
	name: 'FindHospitals.co'
	title: ->
			TAPi18n.__ 'configTitle'
	subtitle: -> 'Find Hospitals and Clinics to you and that fits your budget.'
	logo: '/images/findhospitals-regular.png'
	footer: ->
		@name + ' - Copyright ' + new Date().getFullYear()

	# Emails
	emails:
		from: 'no-reply@' + Meteor.absoluteUrl()
		contact: 'hello' + Meteor.absoluteUrl()

	# Username - if true, users are forced to set a username
	username: false
	
	# Localisation
	defaultLanguage: 'en'
	dateFormat: 'D/M/YYYY'

	# Meta / Extenrnal content
	privacyUrl: 'http://findhospitals.meteor.com/terms'
	termsUrl: 'http://findhospitals.meteor.com/terms'

	# For email footers
	legal:
		address: 'Jessnerstrasse 18, 12047 Berlin'
		name: 'Meteor Factory'
		url: 'http://benjaminpeterjones.com'

	about: 'http://findhospitals.meteor.com/about'
	blog: 'http://findhospitals.meteor.com/blog-post'

	socialMedia:
		facebook:
			url: 'http://facebook.com/FindHospitals.co'
			icon: 'facebook'
		twitter:
			url: 'http://twitter.com/FindHospital.co'
			icon: 'twitter'
		github:
			url: 'http://github.com/Innarticles'
			icon: 'github'
		info:
			url: 'http://findhospitals.meteor.com'
			icon: 'link'

	#Routes
	homeRoute: '/'
	publicRoutes: ['home']
	dashboardRoute: '/hospitalinfo'
	ga: 'UA-63302437-1'