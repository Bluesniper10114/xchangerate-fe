import * as React from 'react';
import 'Styles/table.less';
import { connect } from 'react-redux';
import MainFooter from 'Partials/MainFooter';

const innerstyles = require('./market-maker.css');
const styles = require('../dashboard.css');

class MarketMaker extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
    };
  }

    componentDidMount() {
        
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
                            <span className={styles.firstTitleItem}>User Role : Market Maker</span>
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
                                    <img className={styles.hexaImage} src="/public/assets/images/dashboard/market_maker.png" />
                                </div>
                            </div>
                            <div className={styles.buttonItem}>
                                <div className={styles.imageWrapper}>
                                    <img className={styles.hexaImage} src="/public/assets/images/dashboard/reporting.png" />
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
                                    <img className={styles.hexaImage} src="/public/assets/images/dashboard/engagement.png" />
                                </div>
                            </div>
                            <div className={styles.buttonItem}>
                                <div className={styles.imageWrapper}>
                                    <img className={styles.hexaImage} src="/public/assets/images/dashboard/auto_bot.png" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.secondRow}>
                            <div className={styles.buttonItem}>
                                <div className={styles.imageWrapper}>
                                    <img className={styles.hexaImage} src="/public/assets/images/dashboard/setting.png" />
                                </div>
                            </div>
                            <div className={styles.buttonItem}>
                                <div className={styles.imageWrapper}>
                                    <img className={styles.hexaImage} src="/public/assets/images/dashboard/coin_monitoring_board.png" />
                                </div>
                            </div>
                            <div className={styles.buttonItem}>
                                <div className={styles.imageWrapper}>
                                    <img className={styles.hexaImage} src="/public/assets/images/dashboard/setup.png" />
                                </div>
                            </div>
                            <div className={styles.buttonItem}>
                                <img className={styles.hexaImage} src="/public/assets/images/dashboard/vote.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <MainFooter />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketMaker);
