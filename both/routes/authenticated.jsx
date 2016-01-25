const authenticatedRedirect = () => {
    if ( !Meteor.loggingIn() && !Meteor.userId() ) { //if not logged
        FlowRouter.go( 'login' );
    }
};

const authenticatedRoutes = FlowRouter.group({
    name: 'authenticated',
    triggersEnter: [ authenticatedRedirect ] //to run everytime to be sure we are logged
});

authenticatedRoutes.route( '/', {
    name: 'index',
    action() {
    ReactLayout.render( Default, { yield: <Index /> } );
}
});

authenticatedRoutes.route( '/dashboard', {
    name: 'dashboard',
    action() {
    ReactLayout.render( Default, { yield: <Dashboard /> } );
}
});