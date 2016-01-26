/**
 * Created by ibox on 25/01/16.
 */
let anegdot = ( options ) => {
    _validate( options.form );
};

let _validate = ( form ) => {
    $( form ).validate( validation() ); //meteor add themeteorchef:jquery-validation
};

let validation = () => {
    return {
        rules: {

        },
        messages: {

        },
        submitHandler() { _handleSignup(); }
    };
};

let _handleSignup = () => {
    console.log('Anegdot clicked');
};

Modules.client.anegdot = anegdot;