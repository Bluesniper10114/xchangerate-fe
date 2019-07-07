import * as React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Button from 'Elements/Button';
import ProgressWithTip from 'Elements/ProgressWithTip';
import { history } from 'Components/Routes';
import { Status } from 'Models/Status';
// import { setupDetails, getTokenOwnersOffers, getTokenOwnersSetupDetails } from 'Components/SetupDetails/actions';
import TextField from 'Elements/TextField';
import { fetchVoteList, voting } from '../actions';

const styles = require('../setup-details.css');

class OneVote extends  React.Component<any, any> {

    constructor(props){
        super(props);
        this.state = {
        
        };
        this.onChange = this.onChange.bind(this);
    }

    
    componentDidMount() {
        
    }

    componentWillMount() {
        
    }
    
    initValues() {
        // this.props.initialize(values);
    }

    onChange(button: any) {
        this.setState({
            activeEntryIndex: button.value,
        });
    }

    voting() {
        const { voting } = this.props;

        var data = {
            exchange_id : 'bittrex'
        };

        voting(data);
    }

    render() {
       
        return (
            <div className={styles.itemWrapper + ' ' + styles.votingItem}>
                {/* <div className={styles.votingAvatar}>
                </div> */}
                <span className={styles.votingExchangeName}>Exchange Name</span>
                <div className={styles.progressBarWrapper}>
                    <span className={styles.progressSpan}>500</span>
                    <ProgressWithTip className="progressBar" percent="60" strokeWidth="2" trailWidth="2" strokeColor="#ffc107" isToolTip={true}/>
                </div>
                <Button className={styles.voteBtn + " small blue"} onClick={this.voting.bind(this)}>Vote</Button>
                <Button className={styles.shareBtn + " small green"}>Share</Button>
            </div>
        );
    }
}

const mapDispatchToProps = {
    voting
};

const mapStateToProps = (state, ownProps) => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(OneVote);
