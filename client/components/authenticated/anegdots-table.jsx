AnegdotsTable = React.createClass({
    renderAnegdots(){
        return '';
    },
    render() {
    return (
        <div className="test1">
            <ul>
                {this.props.anegdots.map( ( anegdot ) => {
                    const lang = 'FR'; //todo: change place
                    return <Anegdot key={anegdot._id._str.toString()} anegdot={anegdot} author={anegdot.content[lang].author} text={anegdot.content[lang].text} />;
                    })}
            </ul>
        </div>

        );
}
});