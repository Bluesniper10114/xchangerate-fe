import * as React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ButtonGroup from 'Elements/ButtonGroup';
import Button from 'Elements/Button';
import TextField from 'Elements/TextField';
import SelectField from 'Elements/SelectField';
import SmallToggle from 'Elements/SmallToggle';
import { history } from 'Components/Routes';
import SmallToggleField from 'Elements/SmallToggle/SmallToggleField';
import { Status } from 'Models/Status';
import { setupDetails, getTradersOffers, getTradersSetupDetails } from 'Components/SetupDetails/actions';
import ToggleField from 'Elements/ToggleField';
const styles = require('../setup-details.css');
// const styles = require('../entry.css');

class TradersForm extends  React.Component<any, any> {

    constructor(props){
        super(props);
        this.state = {
            activeEntryIndex: 'FrugalityRatio',
            exchangeFormArray: [],
            offerFormArray: [],
            initValues: true
        };
        this.onChange = this.onChange.bind(this);
        this.renderExchangeFormSection = this.renderExchangeFormSection.bind(this);
        this.removeExchangeItem = this.removeExchangeItem.bind(this);
    }

    
    componentDidMount() {
        const { setup_details } = this.props;
        if(setup_details && setup_details.status.success) {
            this.initValues();
        }
    }

    componentWillMount() {
        const { setup_details, getTradersSetupDetails } = this.props;
        if(!setup_details || setup_details.status.error) {
            getTradersSetupDetails();
        }
    }
    
    initValues() {
        this.setState({
        initValues: false
        });
        const { setup_details } = this.props;
        var exchanges = setup_details.setupDetails.data.exchangeDetails;
        // var offers = setup_details.setupDetails.data.offerDetails;
        var others = setup_details.setupDetails.data.setupDetails;
        var values = {};
        var exchangesArray = [];
        // var offersArray = [];
        exchanges.map((m, index) => {
        if(index == 0) {
            values['exchange'] = m.exchange;
            values['api'] = m.api;
            values['secret'] = m.secret_key;
            values['toggle1'] = m.coin_balance_flag;
            values['toggle2'] = m.api_flag;
        } else {
            var uniqueId = this.uniqueId();
            exchangesArray.push(uniqueId);
            values['exchange' + uniqueId] = m.exchange;
            values['api' + uniqueId] = m.api;
            values['secret' + uniqueId] = m.secret_key;
            values['toggle1' + uniqueId] = m.coin_balance_flag;
            values['toggle2' + uniqueId] = m.api_flag;
        }
        });

        // offers.map((m, index) => {
        // if(index == 0) {
        //     values['base_coin'] = m.base_coin;
        //     values['charge'] = m.charge;
        //     values['chargeSelect'] = m.coin_name;
        //     values['quantity'] = m.quantity;
        //     values['quantitySelect'] = m.qty_coin_name;
        //     values['time'] = m.time;
        //     values['timeSelect'] = m.time_duration;
        // } else {
        //     var uniqueId = this.uniqueId();
        //     offersArray.push(uniqueId);
        //     values['base_coin' + uniqueId] = m.base_coin;
        //     values['charge' + uniqueId] = m.charge;
        //     values['chargeSelect' + uniqueId] = m.coin_name;
        //     values['quantity' + uniqueId] = m.quantity;
        //     values['quantitySelect' + uniqueId] = m.qty_coin_name;
        //     values['time' + uniqueId] = m.time;
        //     values['timeSelect' + uniqueId] = m.time_duration;
        // }
        // });

        var othersLength = others.length;
        values['wallet'] = others[othersLength-1].wallet_address;
        // values['url'] = others[othersLength-1].api_url;
        // values['contract'] = others[othersLength-1].contract_address;
        // values['ticker'] = others[othersLength-1].ticker_symbol;

        this.setState({
            exchangeFormArray: exchangesArray
        });

        // this.setState({
        // offerFormArray: offersArray
        // });

        // this.props.initialize(values);
    }

    onChange(button: any) {
        this.setState({
            activeEntryIndex: button.value,
        });
    }

    onSubmit(values: object) {
        // console.log(values);
        var exchanges = [];
        exchanges.push({
          exchange: values['exchange'],
          api: values['api'],
          secret_key: values['secret'],
          coin_balance_flag: values['toggle1'],
          api_flag: values['toggle2']
        });

        this.state.exchangeFormArray && (this.state.exchangeFormArray.map((m, index) => {
            exchanges.push({
                exchange: values['exchange' + m],
                api: values['api' + m],
                secret_key: values['secret' + m],
                coin_balance_flag: values['toggle1' + m],
                api_flag: values['toggle2' + m]
            });
            console.log(exchanges);
        }));
    
        // var offers = [];
        // offers.push({
        //   base_coin: values['base_coin'],
        //   charge: values['charge'],
        //   coin_name: values['chargeSelect'],
        //   quantity: values['quantity'],
        //   qty_coin_name: values['quantitySelect'],
        //   time: values['time'],
        //   time_duration: values['timeSelect']
        // });

        // this.state.offerFormArray && (this.state.offerFormArray.map((m, index) => {
        //     offers.push({
        //         base_coin: values['base_coin' + m],
        //         charge: values['charge' + m],
        //         coin_name: values['chargeSelect' + m],
        //         quantity: values['quantity' + m],
        //         qty_coin_name: values['quantitySelect' + m],
        //         time: values['time' + m],
        //         time_duration: values['timeSelect' + m]
        //     });
        //     console.log(offers);
        // }));
    
        var data = {
          exchanges: JSON.stringify(exchanges),
          wallet_address: values['wallet'],
        //   contract_address: 'sdfsdf',
        //   ticker_symbol: 'fdfsdf',
        //   make_offer_viewable: 1,
          role_id: 4,
        //   api_url: 'dfsdf',
        //   offers: JSON.stringify(offers)
        };
    
        this.props.setupDetails(data);
        this.props.getTradersOffers();
        // history.push('/token-owners');
    }

    uniqueId() {
        return Math.random().toString(36).substr(2, 16);
    };

    addExchangeItem() {
        var exchangeFormArray = this.state.exchangeFormArray;
        exchangeFormArray.push(this.uniqueId());
        this.setState(
            {
                exchangeFormArray: exchangeFormArray
            }
        )
    }

    removeExchangeItem(id) {
        var exchangeFormArray = this.state.exchangeFormArray;
        var index = exchangeFormArray.indexOf(id);
        if (index > -1) {
            exchangeFormArray.splice(index, 1);
        }

        this.setState(
            {
                exchangeFormArray: exchangeFormArray
            }
        )
    }

    renderExchangeFormSection(options) {

        return (
            <div>
                <div className={styles.itemContentWrapper}>
                    <TextField label="Account" name="account"/>
                    <div className={styles.selectFieldWrapper}>
                        <SelectField options={options} name="exchange" placeholder="Exchange"/>
                    </div>
                    <div className={styles.descWrapper1}>
                        <span className={styles.toggleDesc}>Do you want Token Owners & Exchanges to be able to check your Base coin Balance ?</span>
                        <div className={styles.descToggle}>
                            <span>Yes</span>
                            <div className={styles.toggle}>
                                <ToggleField name="toggle1" isFormField={true}/>
                            </div>
                            <span>No</span>
                        </div>
                    </div>
                    <div className={styles.inputsWrapper}>
                        <div className={styles.textFieldWrapper1}>
                            <TextField label="API" name="api" border={true}/>
                        </div>
                        <div className={styles.textFieldWrapper2}>
                            <TextField label="Secret" name="secret" border={true}/>
                        </div>
                    </div>
                    <div className={styles.exchangePlusBtn} onClick={this.addExchangeItem.bind(this)}><span>+</span></div>
                </div>
                {
                    this.state.exchangeFormArray && this.state.exchangeFormArray.map((m, index) => {
                        return (
                            <div className={styles.itemContentWrapper1}>
                                <TextField label="Account" name={"account" + m}/>
                                <div className={styles.selectFieldWrapper}>
                                    <SelectField options={options} name={'exchange' + m} placeholder="Exchange"/>
                                </div>
                                <div className={styles.descWrapper1}>
                                    <span className={styles.toggleDesc}>Do you want Token Owners & Exchanges to be able to check your Base coin Balance ?</span>
                                    <div className={styles.descToggle}>
                                        <span>Yes</span>
                                        <div className={styles.toggle}>
                                            <ToggleField name={'toggle1' + m} isFormField={true}/>
                                        </div>
                                        <span>No</span>
                                    </div>
                                </div>
                                <div className={styles.inputsWrapper}>
                                    <div className={styles.textFieldWrapper1}>
                                        <TextField label="API" name={'api' + m} border={true}/>
                                    </div>
                                    <div className={styles.textFieldWrapper2}>
                                        <TextField label="Secret" name={'secret' + m} border={true}/>
                                    </div>
                                </div>
                                <div className={styles.exchangeMinusBtn} onClick={() => this.removeExchangeItem(m)}><span>-</span></div>
                            </div>
                        )
                    })
                }
            </div>

        );
    }

    render() {
        const { handleSubmit, exchanges, base_coin, status } = this.props;
        const { activeEntryIndex } = this.state;
        const options = [
            {value: '1', label: 'Exchanges1'}
        ];
        const exchange_options = [];

        const base_coin_options = [];


        if(exchanges && exchanges.data){
          exchanges.data.map((m,index) => {
            exchange_options.push({
              value: m.name,
              label: m.name
            });
          });
        }

        if(base_coin && base_coin.data){
          base_coin.data.map((m,index) => {
            base_coin_options.push({
              value: m.coin,
              label: m.coin
            });
          });
        }


        return (
            <div>
                <div className={styles.titleSection}>
                    <img src="/public/assets/images/landing1/traders.png"/>
                    <span>Traders</span>
                </div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className={styles.itemWrapper}>
                        <div className={styles.itemTitle}>
                            <span>Exchanges</span>
                        </div>
                        <div className={styles.itemContent}>
                            {this.renderExchangeFormSection(exchange_options)}
                        </div>
                    </div>
                    <div className={styles.itemWrapper}>
                        <div className={styles.itemTitle}>
                            <span>Wallet Address</span>
                        </div>
                        <div className={styles.itemContent}>
                        <TextField label="Wallet Address" name="wallet"/>
                        <div className={styles.walletDesc}>
                            <span>The wallet address you are expected to specify here would be checked if the minimum required XRR token held is eligible to access the dashboard</span>
                        </div>
                        </div>
                    </div>
                    <Button className={styles.submitBtn + " small blue"} submit={true}>Submit</Button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    setupDetails,
    getTradersOffers,
    getTradersSetupDetails
};

const form = reduxForm({
  form: 'token-owners-setup',
  enableReinitialize:true,
  keepDirtyOnReinitialize: true
})(TradersForm);

const mapStateToProps = (state, ownProps) => ({
    status: state.setupDetails.status as Status,
    exchanges: state.setupDetails.exchanges,
    base_coin: state.setupDetails.base_coin,
    setup_details: state.setupDetails.tradersSetupDetails
});

export default connect(mapStateToProps, mapDispatchToProps)(form);
