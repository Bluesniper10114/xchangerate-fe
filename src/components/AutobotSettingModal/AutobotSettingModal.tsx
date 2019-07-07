import * as React from 'react';
import 'Styles/table.less';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Select from 'react-select';
import { Status } from 'Models/Status';
import Responsive from 'Partials/Responsive';
import Modal from 'Elements/Modal';
import Button from 'Elements/Button';
import Toggle from 'react-toggle';
import 'Styles/react-toggle.less';
import 'Styles/toggle.less';
import TextField from 'Elements/TextField';
import ToggleField from 'Elements/ToggleField';
import SelectField from 'Elements/SelectField';
import AutobotHistoryModal from 'Components/AutobotHistoryModal';
import AutobotTradingModal from 'Components/AutobotTradingModal';

const styles = require('./autobot-setting-modal.css');

class AutobotSettingModal extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            isAccess: false,
            presetSelectedValue: '',
            isOpenHistoryModal: false
        };
    }

    componentDidMount() {
        
    }

    handleChange() {

    }

    changeSettingMode() {

    }

    onSubmit(values) {

    }

    openHistoryModal() {
        this.setState({
            isOpenHistoryModal: true
        })
    }

    onCancelHistoryModal() {
        this.setState({
            isOpenHistoryModal: false
        })
    }

    onCancel() {
        
    }

    render() {
        const { isOpen, onCancel, width, handleSubmit } = this.props;

        var options = [];

        return (
            <Modal isOpen={isOpen} noFooter={true} noHeader={true} onCancel={onCancel} width={width}>
                <img className={styles.closeBtn} src="/public/assets/images/dashboard/close.png"/>
                <div className={styles.title}>
                    <span>Autobot Setting</span>
                </div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className={styles.firstSection}>
                        <div className={styles.sectionTitle}>
                            <span>Preset Configurations</span>
                        </div>
                        <div className={styles.firstSectionContent}>
                            <div className={styles.firstSectionSelectWrapper}>
                                <Select
                                    value={this.state.presetSelectedValue}
                                    onChange={this.handleChange}
                                    options={options}
                                />
                            </div>
                            <div className={styles.firstSectionButtonWrapper}>
                                <Button className={styles.presetHistoryBtn + ' medium green'} onClick={this.openHistoryModal.bind(this)}>History</Button>
                            </div>
                        </div>
                        <div className={styles.presetDesc}>
                            <span>
                                Preset configurations are our perception of price action 
                                using buy/sell.attitude algorithms. Anyone who uses these 
                                setting uses them at his/her own risk. The historical 
                                performance captures the algorithmic selection during 
                                trade entries and should not form the basis of guaranteeing 
                                future performances.
                            </span>
                        </div>
                    </div>
                    <div className={styles.secondSection}>
                        <div className={styles.sectionTitle}>
                            <span>Setting</span>
                        </div>
                        <div className={styles.secondSectionContent}>
                            <div className={styles.secondContentItemWrapper}>
                                <div className={styles.label}>
                                    <span>Mode</span>
                                </div>
                                <div className={styles.contentItem1}>
                                    <span className={styles.blueText}>TEST</span>
                                    <ToggleField
                                        disabled={false}
                                        checked={this.state.mode}
                                        icons={false}
                                        className='react-toggle-mr'
                                        onChange={this.changeSettingMode.bind(this)}/>
                                    <span className={styles.greenText}>ACTIVE</span>
                                </div>
                            </div>
                            <div className={styles.secondContentItemWrapper}>
                                <div className={styles.label}>
                                    <span>Exit</span>
                                </div>
                                <div className={styles.contentItem}>
                                    <div className={styles.selectWrapper}>
                                        <SelectField
                                            name="settingExitSelect"
                                            options={options}
                                            label=""
                                        />
                                    </div>
                                    <div className={styles.textWrapper}>
                                        <TextField label="" name="settingExitInput"/>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.secondContentItemWrapper}>
                                <div className={styles.label}>
                                    <span>Stop Loss</span>
                                </div>
                                <div className={styles.contentItem}>
                                    <div className={styles.selectWrapper}>
                                        <SelectField
                                            name="settingExitSelect"
                                            options={options}
                                            label=""
                                        />
                                    </div>
                                    <div className={styles.textWrapper}>
                                        <TextField label="" name="settingExitInput"/>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.secondContentItemWrapper}>
                                <div className={styles.label}>
                                    <span>Max Amount per Trade</span>
                                </div>
                                <div className={styles.contentItem}>
                                    <div className={styles.textWrapper}>
                                        <TextField label="" name="settingExitInput"/>
                                    </div>
                                    <div className={styles.selectWrapper}>
                                        <SelectField
                                            name="settingExitSelect"
                                            options={options}
                                            label=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.thirdSection}>
                        <div className={styles.sectionTitle}>
                            <span>Account Selection</span>
                        </div>
                        <div className={styles.thirdSectionContent}>
                            <div className={styles.thirdContentItemWrapper}>
                                <div className={styles.label}>
                                    <span>Select Account</span>
                                </div>
                                <div className={styles.contentItem}>
                                    <SelectField
                                        name="settingExitSelect"
                                        options={options}
                                        label=""
                                    />
                                </div>
                            </div>
                            <div className={styles.thirdContentItemWrapper}>
                                <div className={styles.label}>
                                    <span>Base Coin Balances</span>
                                </div>
                                <div className={styles.contentItem2}>
                                    <div className={styles.contentItemSpan}>
                                        <span>BTC   0.5</span>
                                    </div>
                                    <div className={styles.contentItemSpan}>
                                        <span>ETH   2.5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.forthSection}>
                        <div className={styles.sectionTitle}>
                            <span>Time & Billing</span>
                        </div>
                        <div className={styles.forthSectionContent}>
                            <div className={styles.selectWrapper}>
                                <SelectField
                                    name="settingExitSelect"
                                    options={options}
                                    label=""
                                />
                            </div>
                            <div className={styles.textWrapper}>
                                <TextField label="" name="settingExitInput"/>
                            </div>
                        </div>
                    </div>
                    <Button className={styles.activateBtn + ' large blue'}> Activate AutoBot</Button>
                </form>
                {/* <AutobotTradingModal isOpen={true} onCancel={this.onCancel} width="900"/> */}
                <AutobotHistoryModal isOpen={this.state.isOpenHistoryModal} onCancel={this.onCancelHistoryModal.bind(this)} width="700"/>
            </Modal>
        );
    }
}

const form = reduxForm({
    form: 'autobot-setting-form',
    enableReinitialize:true,
    keepDirtyOnReinitialize: true
})(AutobotSettingModal);

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(form);
