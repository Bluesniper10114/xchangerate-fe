import * as React from 'react';
import 'Styles/table.less';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Select from 'react-select';
import * as moment from 'moment';
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
import { fetchFilteredHistory } from './actions';
import { TableCell, Table, TableRow } from 'Elements/Table';
import SortingIcons from 'Elements/SortingIcons';
import ReactIScroll from 'react-iscroll';
import * as iScroll from 'iscroll';
import Price from 'Elements/Price';
import DatePicker from 'Elements/DatePicker';

const iScrollOptions = require('Constants/options.json').iScroll;

const styles = require('./autobot-history-modal.css');


const fields = [{
    name: 'date',
    label: 'Date',
    sortable: false,
  }, {
    name: 'preset',
    label: 'Preset',
    sortable: false,
  }, {
    name: 'suggestions',
    label: 'Suggestions',
    sortable: false,
  }, {
    name: 'entry_price',
    label: 'Entry Price',
    sortable: false,
  }, {
    name: 'performance',
    label: 'Performance',
    sortable: false,
  }];

const presetoptions = [
    {value: "none", label: "None"},
    {value: "Lower Ply 1", label: "Lower Ply 1"},
    {value: "Mid Ply 1", label: "Mid Ply 1"},
    {value: "Pacer 2 Ply", label: "Pacer 2 Ply"},
    {value: "High Low Ply 2", label: "High Low Ply 2"},
    {value: "Combo Full Ply", label: "Combo Full Ply"}
];
  
class AutobotHistoryModal extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            isAccess: false,
            presetSelectedValue: "none",
            fromTs: 0,
            toTs: moment().valueOf() / 1000
        };
        this.timer = this.timer.bind(this);
    }

    componentDidMount() {
        var intervalId = setInterval(this.timer, 10000);
        // store intervalId in the state so it can be accessed later:
        this.setState({
            intervalId: intervalId
        });
    }

    componentWillMount() {
        const { historyData, fetchFilteredHistory } = this.props;
        if(!historyData || !historyData.filteredHistory) {
            fetchFilteredHistory('none');
        }
    }

    componentWillUnmount() {
        // use intervalId from the state to clear the interval
        clearInterval(this.state.intervalId);
    }

    timer() {
        const { fetchFilteredHistory } = this.props;
        // setState method is used to update the state
        fetchFilteredHistory(this.state.presetSelectedValue);
    }

    handleChange() {

    }

    handlePresetChange(e) {
        const { fetchFilteredHistory } = this.props;

        fetchFilteredHistory(e.value);

        this.setState({
            presetSelectedValue: e.value
        });

        this.getFilteredHistoryData = this.getFilteredHistoryData.bind(this);
    }

    changeSettingMode() {

    }

    onSubmit(values) {

    }

    onChangeFromDate(date: Date) {
        var ts = moment(date).valueOf() / 1000;
        this.setState({
            fromDate: date,
            fromTs: ts
        });
    }
    
    onChangeToDate(date: Date) {
        var ts = moment(date).valueOf() / 1000;
        this.setState({
            toDate: date,
            toTs: ts + 86400
        });

        var ts = moment(date).valueOf() / 1000;
        console.log(ts);
    }
    
    sort(field: string, decreasing: boolean = false) {
        return () => {
          
          // this.refresh(this.props.meta);
        };
    }

    getFilteredHistoryData(data) {
        var filteredData = [];
        data.map((m, index) => {
            if(m.ts > this.state.fromTs && m.ts <= this.state.toTs) {
                filteredData.push(m);
            }
        });

        return filteredData;
    }

    render() {

        const { isOpen, onCancel, width, handleSubmit, historyData } = this.props;

        var filteredHistoryData = (historyData && historyData.filteredHistory) ? this.getFilteredHistoryData(historyData.filteredHistory) : [];
        
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
        
        const $tradesList = filteredHistoryData.length > 0 ?
            filteredHistoryData.map((s, index) => {
                return (
                <TableRow key={'row' + index}>
                    <TableCell>
                        <div className={styles.td}>
                            {moment.unix(s.ts).format("DD/MM/YYYY")}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div className={styles.td}>
                            {s.query_id}
                            {/* <div className="blue">{s.exchange.toUpperCase()}</div> */}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div className={styles.td}>
                            {s.coin + ': ' + s.exchange}
                        </div>
                    </TableCell>
                    <TableCell>
                        <div className={styles.td}>
                            <div className={((s.ticker_bid - s.ticker_ask)/s.ticker_bid * 100) > 0 ? styles.green : styles.red}><Price diff={(s.ticker_bid - s.ticker_ask)/s.ticker_bid * 100}>{s.ticker_ask}</Price></div>
                        </div>
                    </TableCell>
                    <TableCell>
                        <div className={styles.td}>
                            <div className={((s.ticker_bid - s.ticker_ask)/s.ticker_bid * 100) > 0 ? styles.green : styles.red}><Price diff={(s.ticker_bid - s.ticker_ask)/s.ticker_bid * 100} nDigitsAfterDot={2}>{(s.ticker_bid - s.ticker_ask)/s.ticker_bid * 100} %</Price></div>
                            <div className={((s.ticker_bid - s.ticker_ask)/s.ticker_bid * 100) > 0 ? styles.green : styles.red}><Price diff={(s.ticker_bid - s.ticker_ask)/s.ticker_bid * 100}>{s.ticker_bid}</Price></div>
                        </div>
                    </TableCell>
                </TableRow>
                );
            }) : (
            <div className={'no-data ' + styles.noDataWrapper}>
                There is currently no data here
            </div>
            );

            const hasScrollbar = filteredHistoryData.length > 3;
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

        return (
            <Modal isOpen={isOpen} noFooter={true} noHeader={true} onCancel={onCancel} width={width}>
                <img className={styles.closeBtn} src="/public/assets/images/dashboard/close.png" onClick={onCancel}/>
                <div className={styles.title}>
                    <span>History</span>
                </div>
                <div className={styles.topContent}>
                    <div className={styles.spanWrapper}>
                        <span>Preset</span>
                    </div>
                    <div className={styles.selectWrapper}>
                        <Select
                            value={this.state.presetSelectedValue}
                            onChange={this.handlePresetChange.bind(this)}
                            options={presetoptions}
                            placeholder="Preset"
                        />
                    </div>
                    <div className={styles.selectWrapper1}>
                        <DatePicker selected={this.state.fromDate} placeholderText="From" onChange={this.onChangeFromDate.bind(this)} isCalendarShow={true}/>
                        {/* <Select
                            value={this.state.presetSelectedValue}
                            onChange={this.handleChange}
                            options={presetoptions}
                        /> */}
                    </div>
                    <div className={styles.selectWrapper1}>
                        <DatePicker selected={this.state.toDate} placeholderText="To" onChange={this.onChangeToDate.bind(this)} isCalendarShow={true}/>
                        {/* <Select
                            value={this.state.presetSelectedValue}
                            onChange={this.handleChange}
                            options={presetoptions}
                        /> */}
                    </div>
                </div>
                <div className={styles.tableSection}>
                    <Table id={styles.tradesTable}>
                        <TableRow>
                            {$fields}
                        </TableRow>
                        <div className={(filteredHistoryData.length ? styles.tbody : styles.noDataBody) + ' ' + (hasScrollbar ? '' : styles.noScrollbar)}>
                            {$scrollableTable}
                        </div>
                    </Table>
                </div>
            </Modal>
        );
    }
}

const form = reduxForm({
    form: 'autobot-history-form',
    enableReinitialize:true,
    keepDirtyOnReinitialize: true
})(AutobotHistoryModal);

const mapStateToProps = (state, ownProps) => ({
    historyData: state.autobotHistoryData.historyData
});

const mapDispatchToProps = {
    fetchFilteredHistory
};

export default connect(mapStateToProps, mapDispatchToProps)(form);
