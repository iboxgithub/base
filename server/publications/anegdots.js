/**
 * Created by ibox on 26/01/16.
 */
Meteor.publish( 'anegdots', function() {
    return Anegdots.find({}, {limit:3});
});