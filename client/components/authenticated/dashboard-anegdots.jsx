DashboardAnegdots = React.createClass({
    mixins: [ ReactMeteorData ],
        getMeteorData() {
        let subscription = Meteor.subscribe( 'anegdots' );

        return {
            isLoading: !subscription.ready(),
            anegdots: Anegdots.find().fetch()
        };
    },
    render() {
        if ( this.data.isLoading ) {
            return <Loading />;
        } else {
            return (
                <AnegdotsTable anegdots={this.data.anegdots} />
            );
        }
    }
});