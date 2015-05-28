# You'll want to replace these functions. They publish the whole
# collection which is problematic after your app grows

Meteor.publish 'posts', ->
	Posts.find()

Meteor.publish 'towns', ->
    Towns.find()

Meteor.publish 'hospitals', ->
    Hospitals.find()

Meteor.publish 'attachments', ->
	Attachments.find()
