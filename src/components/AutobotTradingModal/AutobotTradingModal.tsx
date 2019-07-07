import * as React from 'react';
import 'Styles/table.less';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Select from 'react-select';
import { Status } from 'Models/Status';
import Responsive from 'Partials/Responsive';
import Modal from 'Elements/Modal';
import Price from 'Elements/Price';
import Button from 'Elements/Button';
import Toggle from 'react-toggle';
import 'Styles/react-toggle.less';
import 'Styles/toggle.less';
import TextField from 'Elements/TextField';
import ToggleField from 'Elements/ToggleField';
import SelectField from 'Elements/SelectField';
import { TableCell, Table, TableRow } from 'Elements/Table';
import SortingIcons from 'Elements/SortingIcons';
import ReactIScroll from 'react-iscroll';
import * as iScroll from 'iscroll';

const styles = require('./autobot-trading-modal.css');

const iScrollOptions = require('Constants/options.json').iScroll;

const fields = [{
    name: 'coin',
    label: 'Coin',
    sortable: false,
  }, {
    name: 'qty',
    label: 'Quantity',
    sortable: false,
  }, {
    name: 'price',
    label: 'Price',
    sortable: false,
  }, {
    name: 'current_price',
    label: 'Current Price',
    sortable: false,
  }, {
    name: 'margin',
    label: 'Margin',
    sortable: false,
  }, {
    name: 'status',
    label: 'Status',
    sortable: false,
  }, {
    name: 'action',
    label: 'Action',
    sortable: false,
  }];
  
class AutobotTradingModal extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            isAccess: false,
            presetSelectedValue: '',

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

    sort(field: string, decreasing: boolean = false) {
        return () => {
          
          // this.refresh(this.props.meta);
        };
    }

    render() {
        const { isOpen, onCancel, width } = this.props;

        const onIncreasing = ((field: string) => {
            return this.sort(field);
        }).bind(this);

        const onDecreasing = ((field: string) => {
            return this.sort(field, true);
        }).bind(this);
      
        const $fields = fields.map(field => {
            return (
                <TableCell header key={field.name} className={styles[field.name]}>
                    <div className="full-width">{field.label}
                        <div className="vertical-center">
                        {field.sortable && <SortingIcons
                            primary={false}
                            onIncreasing={onIncreasing(field.name)}
                            onDecreasing={onDecreasing(field.name)}
                        />}
                        </div>
                    </div>
                </TableCell>
            );
        });
        
        var trades = [1, 2, 3, 4, 5,6,7,8,9];
        
        const $tradesList = trades.length > 0 ?
            trades.map((s, index) => {
                return (
                <TableRow key={'row' + index}>
                    <TableCell className={styles.created_at + ' ' + styles.created_at_content}>
                        <div>
                            XRR
                        </div>
                    </TableCell>
                    <TableCell className={styles.pair}>
                        <div>
                            34900
                            {/* <div className="blue">{s.exchange.toUpperCase()}</div> */}
                        </div>
                    </TableCell>
                    <TableCell className={styles.price_bought}>
                        <div>
                            <div><Price diff={0.000057}>{0.000057}</Price></div>
                            <div><Price diff={0.003}>{0.003} $</Price></div>
                        </div>
                    </TableCell>
                    <TableCell className={styles.profit}>
                        <div>
                            <div><Price diff={0.000057}>{0.000057}</Price></div>
                            <div><Price diff={0.003}>{0.003} $</Price></div>
                        </div>
                    </TableCell>
                    <TableCell className={styles.profit}>
                        <div>
                            <div><Price diff={5}>{5} %</Price></div>
                            <div><Price diff={0.003}>{0.000003}</Price></div>
                        </div>
                    </TableCell>
                    <TableCell className={styles.profit}>
                        <div>
                            Buy Order
                        </div>
                    </TableCell>
                    <TableCell className={styles.profit}>
                        <div>
                            
                        </div>
                    </TableCell>
                </TableRow>
                );
            }) : (
            <div className={'no-data ' + styles.noDataWrapper}>
                There is currently no data here
            </div>
            );

            const hasScrollbar = trades.length > 3;
            const $scrollableTable = hasScrollbar ? (
            <ReactIScroll
                iScroll={iScroll}
                options={iScrollOptions}
            >
                <div>
                {$tradesList}
                </div>
            </ReactIScroll>
            ) : <div>{$tradesList}</div>;
        var options = [];

        return (
            <Modal isOpen={isOpen} noFooter={true} noHeader={true} onCancel={onCancel} width={width}>
                <img className={styles.closeBtn} src="/public/assets/images/dashboard/close.png"/>
                <div className={styles.title}>
                    <span>AUTOBOT TRADING</span>
                </div>
                <div className={styles.topContent}>
                    <div className={styles.topContentImageWrapper}>
                        <img className={styles.topContentImage} src="/public/assets/images/autobot_trading.png"/>
                        <div className={styles.topContentImageText}>
                            <div className={styles.topContentImageExchangeName}>
                                <span>EXCHANGE NAME</span>
                            </div>
                            <div className={styles.topContentImagePercent}>
                                <span>5%</span>
                            </div>
                            <div className={styles.topContentImageBtc}>
                                <span>0.00000000000015 Btc</span>
                            </div>
                        </div>
                        <div className={styles.leftImageContentWrapper}>
                            <div className={styles.leftImageContentItem}>
                                <div className={styles.leftImageContentItemLeftText}>
                                    <span>Exit:</span>
                                </div>
                                <div className={styles.leftImageContentItemRightText}>
                                    <span>5% Trailing</span>
                                </div>
                            </div>
                            <div className={styles.leftImageContentItem}>
                                <div className={styles.leftImageContentItemLeftText}>
                                    <span>Stopless:</span>
                                </div>
                                <div className={styles.leftImageContentItemRightText}>
                                    <span>5% Trailing Stop Loss</span>
                                </div>
                            </div>
                            <div className={styles.leftImageContentItem}>
                                <div className={styles.leftImageContentItemLeftText}>
                                    <span>Amount Per Trade:</span>
                                </div>
                                <div className={styles.leftImageContentItemRightText}>
                                    <span>0.1btc</span>
                                </div>
                            </div>
                            <div className={styles.leftImageContentItem}>
                                <div className={styles.leftImageContentItemLeftText}>
                                    <span>Basecoin:</span>
                                </div>
                                <div className={styles.leftImageContentItemRightText}>
                                    <span>Btc</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.tableSection}>
                    {/* <table>
                        <thead>
                            <tr>
                                <th>Coin</th>
                                <th>Margin</th>
                                <th>Price</th>
                                <th>Current Price</th>
                                <th>statusin</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Coin</td>
                                <td>Quantity</td>
                                <td>
                                    <div>
                                        <div>
                                            <Price diff={1}>{12.5345345} Ƀ</Price> - <Price nDigitsAfterDot={2}>{12.24234} USD</Price>
                                        </div>
                                        <div>
                                            <Price diff={1}>{12.3453453} Ƀ</Price> - <Price nDigitsAfterDot={2}>{-12.4252423} USD</Price>
                                        </div>
                                    </div>
                                </td>
                                <td>Current Price</td>
                                <td>Margin</td>
                                <td>Status</td>
                                <td>Action</td>
                            </tr>
                            <tr>
                                <td>Coin</td>
                                <td>Quantity</td>
                                <td>Price</td>
                                <td>Current Price</td>
                                <td>Margin</td>
                                <td>Status</td>
                                <td>Action</td>
                            </tr>
                            <tr>
                                <td>Coin</td>
                                <td>Quantity</td>
                                <td>Price</td>
                                <td>Current Price</td>
                                <td>Margin</td>
                                <td>Status</td>
                                <td>Action</td>
                            </tr>
                            <tr>
                                <td>Coin</td>
                                <td>Quantity</td>
                                <td>Price</td>
                                <td>Current Price</td>
                                <td>Margin</td>
                                <td>Status</td>
                                <td>Action</td>
                            </tr>
                        </tbody>
                    </table> */}
                    <Table id={styles.tradesTable}>
                        <TableRow>
                            {$fields}
                        </TableRow>
                        <div className={(trades.length ? styles.tbody : styles.noDataBody) + ' ' + (hasScrollbar ? '' : styles.noScrollbar)}>
                            {$scrollableTable}
                        </div>
                    </Table>
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(AutobotTradingModal);
