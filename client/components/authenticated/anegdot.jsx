

Anegdot = React.createClass({
    componentDidMount() {
        Modules.client.anegdot( { form: "#anegdot" } );
    },
    handleSubmit( event ) {
        event.preventDefault();
    },
    render() {
        return (
            <li>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div>
                            {this.props.anegdot._id._str.toString()} created by {this.props.author} for lang FR1
                        </div>
                        <div className="translate-button">
                            <form className="anegdot" onSubmit={this.handleSubmit}>
                                <input type="submit" value="Translate" className="btn btn-success"/>
                            </form>
                        </div>
                    </div>
                    <div className="panel-body">
                        {this.props.text}
                    </div>
                </div>
            </li>
        );
    }
});