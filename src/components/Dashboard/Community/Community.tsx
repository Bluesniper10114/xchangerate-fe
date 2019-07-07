import * as React from 'react';
import 'Styles/table.less';
import { connect } from 'react-redux';
import MainFooter from 'Partials/MainFooter';
import VerifyModal from '../VerifyModal';

const styles = require('../dashboard.css');
const innerstyles = require('./community.css');

class Community extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            isOpenVerifyModal: true
        };
    }

    componentDidMount() {
        
    }

    cancelVerifyModal() {
        var isOpenVerifyModal = !this.state.isOpenVerifyModal;
        this.setState({
            isOpenVerifyModal: isOpenVerifyModal
        });
    }


    render() {
        
        return (
            <div className={styles.contentWrapper}>
                <img className={styles.RightImage} src="/public/assets/images/dashboard/rightShape.png" />
                <img className={styles.LeftImage} src="/public/assets/images/dashboard/leftLines.png" />
                <div className={innerstyles.content}>
                    <div className={styles.titleSection}>
                        <div className={styles.firstTitle}>
                            <span className={styles.firstTitleItem}>Username : XchangeRate</span>
                            <span className={styles.firstTitleItem}>Date & time : 17/07/2018 - 4:56PM</span>
                            <span className={styles.firstTitleItem}>User Role : Voter</span>
                        </div>
                        <div className={styles.secondTitle}>
                            <span>XRR Token Balance :  100 000 XRR</span>
                        </div>
                        <div className={styles.title}>
                            <span>Dashboard</span>
                        </div>
                    </div>
                    <div className={styles.buttonsContent}>
                        <div className={styles.firstRow}>
                            <div className={styles.buttonItem}>
                                <div className={styles.imageWrapper}>
                                    {/* <img src="/public/assets/images/dashboard/market_maker.png" /> */}
                                </div>
                            </div>
                            <div className={styles.buttonItem}>
                                <div className={styles.imageWrapper}>
                                    <img className={styles.hexaImage} src="/public/assets/images/dashboard/vote.png" />
                                    <div className={styles.reportLine}>
                                        <img src="/public/assets/images/dashboard/line.png"/>
                                        <div className={styles.reportText}>
                                            <span className={styles.reportTitle}>
                                                AUTO BOT :
                                            </span>
                                            <span className={styles.reportDesc}>
                                                Using advanced buy/sell attitudes algorithms traders 
                                                can safely engage the markets for profitable trades.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.buttonItem}>
                                <div className={styles.imageWrapper}>
                                    <img className={styles.hexaImage} src="/public/assets/images/dashboard/setup.png" />
                                </div>
                            </div>
                            <div className={styles.buttonItem}>
                                <div className={styles.imageWrapper}>
                                    {/* <img src="/public/assets/images/dashboard/auto_bot.png" /> */}
                                </div>
                            </div>
                        </div>
                        {/* <div className={styles.secondRow}>
                            <div className={styles.buttonItem}>
                                <div className={styles.imageWrapper}>
                                    <img src="/public/assets/images/dashboard/setting.png" />
                                </div>
                            </div>
                            <div className={styles.buttonItem}>
                                <div className={styles.imageWrapper}>
                                    <img src="/public/assets/images/dashboard/coin_monitoring_board.png" />
                                </div>
                            </div>
                            <div className={styles.buttonItem}>
                                <div className={styles.imageWrapper}>
                                    <img src="/public/assets/images/dashboard/setup.png" />
                                </div>
                            </div>
                            <div className={styles.buttonItem}>
                                <img src="/public/assets/images/dashboard/vote.png" />
                            </div>
                        </div> */}
                    </div>
                </div>
                <MainFooter/>
                <VerifyModal isOpen={this.state.isOpenVerifyModal} onCancel={this.cancelVerifyModal.bind(this)} width="700"/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Community);
